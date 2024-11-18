import pymongo
import pandas as pd
import os
import json
import glob
import numpy as np
from colorama import Fore, Back, Style
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import pymongo.errors
import seaborn as sb
import base64
from io import BytesIO
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import PolynomialFeatures


"""
Class for to deal with the Mongo Database
This class is responsible for:
    -committing and upload logs to the database
    -grabbing data from the database
    -graphing data from the database
"""


class Mongo:
    """
    Inializes the Mongo class
        - Connects to database
    """
    def __init__(self):
        self.label_size = 14
        self.title_size = 20
        self.graph_height = 6
        self.graph_width = 12

        print(f"{Fore.CYAN}Attempting to connect to the database...{Style.RESET_ALL}")

        try:
            uri = os.environ.get('MONGO_URI', 'mongodb://mongoAdmin:m0ng0passw0rd@mongo:27017')
            if uri is not None:
                print(f"{Fore.CYAN}Found Mongo URI in the environment: {uri}{Style.RESET_ALL}")
                self.client = pymongo.MongoClient(uri)
                self.db = self.client.get_database('MDE')
                self.simStats = self.db['simulationStatistics']
                print(f"{Fore.GREEN}Connected to the database{Style.RESET_ALL}")

                # Create a default MDE database
                # self.db = self.client.get_database('MDE')
                # self.simStats = self.db['simulationStatistics']

            else: 
                print(f"{Fore.RED}Could not find Mongo URI in the environment{Style.RESET_ALL}")
                raise Exception("Cound not find Mongo URI in the environment")
        except Exception as e:
            print(f"{Fore.RED}Error connecting to the database: {e}{Style.RESET_ALL}")
            raise Exception(f"Error connecting to the database: {e}")


    """
    Function to change the commit variable to true for all the JSON files in the data folder
    """
    def commit_logs(self):
        data_folder = 'app'

        # Get all JSON files in the data folder
        file_pattern = os.path.join(data_folder, '*.json')
        json_files = glob.glob(file_pattern)

        for filename in json_files:
            try:
                # Get the data from the JSON file
                with open(filename) as file:
                    data = json.load(file)

                # Change the commit variable to true
                data['commit'] = True

                # Write the updated data back to the JSON file
                with open(filename, 'w') as file:
                    json.dump(data, file)

                print(f"{Fore.RED}Commit variable changed to true for {filename}{Style.RESET_ALL}")

            except FileNotFoundError:
                print(f"{Fore.RED}The file {filename} does not exist{Style.RESET_ALL}")

            except json.JSONDecodeError:
                print(f"{Fore.RED}Error decoding JSON from the file {filename}{Style.RESET_ALL}")

            except OSError as e:
                print(f"{Fore.RED}OS error for {filename}: {e}{Style.RESET_ALL}")
    """
    Function to upload all committed logs to the Mongo Database
    """
    """
    Function to upload all committed logs to the Mongo Database
    @param log is a string that needs to be converted to json
    """
    def upload_logs(self, log)->bool:
        files_commited = 0
        
        if isinstance(log, dict):
        # Proceed with uploading to MongoDB
            insert_result = self.simStats.insert_one(log)
        else:
            raise TypeError(f"Expected a dictionary but got {type(log)} instead")

        # Acknoledge f the data is inserted successfully
        if insert_result.acknowledged:
            print(f"{Fore.GREEN}Data has been inserted successfully{Style.RESET_ALL}")
            files_commited += 1
        else:
            print(f"{Fore.RED}Data insertion failed{Style.RESET_ALL}")
            return False
            
        print(f"{Fore.GREEN}Total files uploaded: {files_commited}{Style.RESET_ALL}")
        if files_commited > 0:
            return True

 
    """ Simple Method that usese the most basic commands to see if I am even connected to the database"""
    def basic_find(self):
        data = self.simStats.find()
        for doc in data:
            print(doc)
    
    """Clears all logs in the database"""
    def clear_logs(self, log=None):
        if log is None:
            try:
                result = self.simStats.delete_many({})
                print(f"{Fore.GREEN}Deleted {result.deleted_count} logs from the database{Style.RESET_ALL}")
            except pymongo.errors.PyMongoError as e:
                print(f"{Fore.RED}Error deleting logs from the database: {e}{Style.RESET_ALL}")
        else:
            try:
                result = self.simStats.delete_one(log)
                print(f"{Fore.GREEN}Deleted 1 log from the database{Style.RESET_ALL}")
            except pymongo.errors.PyMongoError as e:
                print(f"{Fore.RED}Error deleting log from the database: {e}{Style.RESET_ALL}")

    """
    Grabs all the values of a dependent variable based on an independent variable and 
    packages them into an array
    ind Example: {'algorithm': 'A*'}
    dep Example: {'avgTimePerPackage': 1}
    """
    def grab_data(self, alg: str, ind: dict, dep: dict):
        dep_term = 'simulation results.' + list(dep.keys())[0]
        numbers = []
        
        key = list(ind.keys())[0]
        value = list(ind.values())[0]
        # Convert numpy int types to regular int to avoid MongoDB issues
        if isinstance(value, (np.int32, np.int64)):
            value = int(value)

        elif isinstance(value, (np.float32, np.float64)):
            value = float(value)

            
        # First, try to find data with `key` at the top level
        data = self.simStats.find({key: value, "Algorithm": alg}, {dep_term: 1})
        # Append data from either top-level or nested results
        for doc in data:
            numbers.append(doc['simulation results'][list(dep.keys())[0]])

        if len(numbers) == 0:
            # If no top-level results, try finding `key` as a nested field in 'simulation results'
            data = self.simStats.find({f"simulation results.{key}": value, "Algorithm": alg}, {dep_term: 1})
            for doc in data:
                # print(doc)
                numbers.append(doc['simulation results'][list(dep.keys())[0]])

        return numbers

    
    
    """
    Does the same thing as grab_data but averages the data
    """
    def grab_avg_data(self, alg:str, ind:dict, dep:dict):
        data = self.grab_data(alg, ind, dep)
        
        #if the data did not return anything that we will throw it away, need to check to avoid an error
        if len(data) == 0:
            return -1
        return sum(data)/len(data)


    """
    Grabs each the independent variable values and multiple dependent variable averages and makes a multi-dimensional array
    ind Example: 'algorithm'
    deps Example: ['avgTimePerPackage', 'packagesHourRobots']
    """
    def grab_all_data(self, ind:str, dep:list):
        if isinstance(dep, list):
            dep = dep[0]

        alg_list = []
        ind_counts = []
        dep_counts = [] 

        # Get the different algorithms
        data = self.simStats.find({"Algorithm": {"$exists": True}})
        algorithm_values = np.array(list(set([doc["Algorithm"] for doc in data])))
        
        data = self.simStats.find({ind: {"$exists": True}})
        variable_values = np.array(list(set([doc[ind] for doc in data])))  
        # If no top-level results, try finding `ind` as a nested field in 'simulation results'
        if variable_values.size == 0:
            data = self.simStats.find({f"simulation results.{ind}": {"$exists": True}})
            variable_values = np.array(list(set(doc["simulation results"][ind] for doc in data)))


        print(f"variable_values = {variable_values}")
        print(f"algorithm_values = {algorithm_values}")  

        for alg in algorithm_values:
            for var in variable_values:
                if round(self.grab_avg_data(alg, {ind: var}, {dep: 1}),2) != -1:
                    alg_list.append(alg)
                    ind_counts.append(var)
                    dep_counts.append(round(self.grab_avg_data(alg, {ind: var}, {dep: 1}),2))

        print(f"alg_list = {alg_list}")
        print (f"ind_counts = {ind_counts}")
        print(f"dep_counts = {dep_counts}")

        print(f"Should be printing the dataframe")
        df = pd.DataFrame({"Algorithm": alg_list, ind: ind_counts, dep: dep_counts})
        
        return df



    # Method to grab all the logs from the database
    def get_all_logs(self):
        try:
            data = self.simStats.find({})
            print(f"{Fore.GREEN}Retrieved logs from the database{Style.RESET_ALL}")
            for doc in data:
                print(type(doc))
            return data
        except pymongo.errors.PyMongoError as e:
            print(f"{Fore.RED}Error retrieving logs from the database: {e}{Style.RESET_ALL}")
            return []
        
    """
    Method to parse all documents and search for a string
    @param search_str: The string to search for in the documents
    """
   
    def search_logs(self, search_str):
        numFiles = 0
        files = []
        try:
            data = self.simStats.find({})
            for doc in data:
                if search_str in str(doc):
                    numFiles += 1
                    files.append(doc)

        except pymongo.errors.PyMongoError as e:
            print(f"{Fore.RED}Error retrieving logs from the database{Style.RESET_ALL}")
            return []
        if (numFiles == 0):
            print(f"{Fore.RED}No logs found containing the string '{search_str}'{Style.RESET_ALL}")
        print(f"{Fore.GREEN}Found {numFiles} logs containing the string '{search_str}'{Style.RESET_ALL}")
        return files
    
    def delete_log(self, log):
        try:
            result = self.simStats.delete_one(log)
            print(f"{Fore.GREEN}Deleted 1 log from the database{Style.RESET_ALL}")
        except pymongo.errors.PyMongoError as e:
            print(f"{Fore.RED}Error deleting log from the database: {e}{Style.RESET_ALL}")

#============================================================================================================================================================================================= 
# Graphing Methods
#=============================================================================================================================================================================================

    """
    Method that graphs the data of the independent and dependent variables selected.
    Currenly applies a thrid order polynomial line of best fit to the scatter plots
    """
    def graph_data(self, ind, dep):
        colors = ["#861F41", "#E5751F", "#75787B"]
        df = self.grab_all_data(ind, dep)
        print(df)

        # Create a plot
        plt.figure(figsize=(10, 6))

        # Scatter plot
        sb.scatterplot(data=df, x=ind, y=dep, hue="Algorithm", palette=colors)

        # Process and plot each algorithm's data
        for algorithm in df['Algorithm'].unique():
            alg_data = df[df['Algorithm'] == algorithm]
            x = alg_data[ind]
            y = alg_data[dep]

            # Fit a cubic polynomial
            coefficients = np.polyfit(x, y, 3)
            polynomial = np.poly1d(coefficients)

            # Compute residuals and filter out outliers
            y_pred = polynomial(x)
            residuals = np.abs(y - y_pred)
            threshold = 3 * np.std(residuals)  # Set a threshold (e.g., 5 times the standard deviation)
            inliers = residuals <= threshold

            x_filtered = x[inliers]
            y_filtered = y[inliers]

            # Refit the polynomial with inlier data
            coefficients_filtered = np.polyfit(x_filtered, y_filtered, 3)
            polynomial_filtered = np.poly1d(coefficients_filtered)

            # Generate fitted values
            x_sorted = np.sort(x_filtered)
            y_fitted = polynomial_filtered(x_sorted)

            # Plot the fitted line
            plt.plot(x_sorted, y_fitted, color=colors[df['Algorithm'].unique().tolist().index(algorithm)], label='_nolegend_')

        plt.title(f'{dep} vs {ind}')
        plt.xlabel(ind)
        plt.ylabel(dep)
        plt.legend(title="Algorithm")
        plt.grid(True)

        # Save the plot as a PNG file
        plt.savefig(os.path.join('app', 'graph.png'))

        # Convert the graph to a PNG image and then encode it to base64
        buffer = BytesIO()
        plt.savefig(buffer, format="png")
        buffer.seek(0)
        image_png = buffer.getvalue()
        buffer.close()

        # Show the plot
        plt.show()

        return base64.b64encode(image_png).decode('utf-8')



if __name__ == "__main__":
    mongo = Mongo()
