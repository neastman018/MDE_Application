"""
Uploads all the simulation logs from the data folder to the MongoDB database
"""
import pymongo
import pandas as pd
import os
import json
import glob
import numpy as np
import csv



class Mongo:
    def __init__(self):
        self.CONNECTION_STRING = "mongodb://localhost:27017/MDE"
        self.client = pymongo.MongoClient(self.CONNECTION_STRING)
        self.db = self.client.get_database('MDE')
        self.simStats = self.db['simulationStatistics']

    """
    Function to change the commit variable to true for all the JSON files in the data folder
    """
    def commit_logs(self):
        data_folder = 'backend/app/data'

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

                print(f'Commit variable changed to true for {filename}')

            except FileNotFoundError:
                print(f"The file {filename} does not exist")

            except json.JSONDecodeError:
                print(f"Error decoding JSON from the file {filename}")

            except OSError as e:
                print(f"OS error for {filename}: {e}")
    """
    Function to upload all committed logs to the Mongo Database
    """
    def upload_logs(self):
        files_commited = 0

        data_folder = 'backend/app/data'

        # Get all JSON files in the data folder
        file_pattern = os.path.join(data_folder, '*.json')
        json_files = glob.glob(file_pattern)

        for filename in json_files:

            try:
                # Get the data from the JSON file
                with open(filename) as file:
                    data = json.load(file)

                # Check if the commit variable is true
                if data.get('commit'):
                    try:
                        # Insert the data into the database
                        insert_result = self.simStats.insert_one(data)

                        # If the data is inserted successfully, remove the file
                        if insert_result.acknowledged:
                            print(f'Data from {filename} inserted successfully')
                            files_commited += 1
                            os.remove(filename)
                        else:
                            print(f"Data insertion failed for {filename}")

                    except pymongo.errors.PyMongoError as e:
                        print(f"Database error for {filename}: {e}")

                    except FileNotFoundError:
                        print(f"The file {filename} does not exist")

                    except json.JSONDecodeError:
                        print(f"Error decoding JSON from the file {filename}")

                    except OSError as e:
                        print(f"OS error for {filename}: {e}")
            
            except pymongo.errors.PyMongoError as e:
                print(f"Database error for {filename}: {e}")

            except FileNotFoundError:
                print(f"The file {filename} does not exist")

            except json.JSONDecodeError:
                print(f"Error decoding JSON from the file {filename}")

            except OSError as e:
                print(f"OS error for {filename}: {e}")
        print(f"Total files uploaded: {files_commited}")

    """
    Grabs all the values of a dependent variable based on an independent variable and 
    packages them into an array
    ind Example: {'algorithm': 'A*'}
    dep Example: {'avgTimePerPackage': 1}
    """
    def grab_data(self, ind:dict, dep:dict):
        # data = self.simStats.find({}, {'numberOfRobots': 0})
        dep_term = 'simulation results.' + list(dep.keys())[0] if len(dep) == 1 else None

        data = self.simStats.find(ind, {dep_term: 1})
       
        numbers = [i['simulation results'][list(dep.keys())[0]] for i in data]
        return numbers
    
    """
    Does the same thing as grab_data but averages the data
    """
    def grab_avg_data(self, ind:dict, dep:dict):
        data = self.grab_data(ind, dep)

        # takes the average of the data
        return sum(data)/len(data)

    """
    Grabs each the independent variable values and dependent variable averages and makes a multi-dimensional array
    ind Example: 'algorithm'
    dep Example: 'avgTimePerPackage'
    """
    def grab_single_dependent(self, ind: str, dep: str):

        search_results = {ind: [], dep: []}

        # find the number of different values there is for the independent variable
        data = self.simStats.find({ind: {"$exists": True}})

        variable_values = np.array(list(set([doc[ind] for doc in data])))    
        for var in variable_values:
            #print({ind: var}, {dep_term: 1})
            dep_value = self.grab_avg_data({ind: var}, {dep: 1})
            search_results[ind].append(var)
            search_results[dep].append(round(dep_value,1))
        return search_results

    """
    Grabs each the independent variable values and nuliptle dependent variable averages and makes a multi-dimensional array
    ind Example: 'algorithm'
    deps Example: ['avgTimePerPackage', 'packagesHourRobots']
    """
    def grab_multiple_dependents(self, ind:str, deps:list):
      
        search_results = {ind: [], "data": [], "indentifier": []}

        data = self.simStats.find({ind: {"$exists": True}})
        variable_values = np.array(list(set([doc[ind] for doc in data])))    
        for dep in deps:
            for var in variable_values:
                search_results[ind].append(var)
                search_results["data"].append(round(self.grab_avg_data({ind: var}, {dep: 1}),1))
                search_results["indentifier"].append(dep)
         
        print(search_results)
        return search_results

    """ Combines the two previous methods into one method based on user input """
    def grab_all_data(self, ind: str, deps):
        if isinstance(deps, str):
            return self.grab_single_dependent(ind, deps)
        elif isinstance(deps, list):
            return self.grab_multiple_dependents(ind, deps)
        else: 
            print("Invalid dependent variable type")
            return []

        
        return search_results
    # def grab_all_data(self, ind: str, deps):

    #     if isinstance(deps, str):
    #         search_results = [[ind, deps]]
    #         # find the number of different values there is for the independent variable
    #         data = self.simStats.find({ind: {"$exists": True}})

    #         variable_values = np.array(list(set([doc[ind] for doc in data])))    

    #         for var in variable_values:
    #             #print({ind: var}, {dep_term: 1})
    #             dep_value = self.grab_avg_data({ind: var}, {deps: 1})
    #             search_results.append([var, dep_value])
    #         return search_results
                

    #     elif isinstance(deps, list):
    #         dep_title = []
    #         for dep in deps:
    #             dep_title.append(dep)
    #         search_results = [[ind, dep_title]]
    #         data = self.simStats.find({ind: {"$exists": True}})
    #         variable_values = np.array(list(set([doc[ind] for doc in data])))

    #         for var in variable_values:
    #             dep_values = []
    #             for dep in deps:
    #                 dep_values.append(self.grab_avg_data({ind: var}, {dep: 1}))

    #             search_results.append([var, dep_values])
            
    #         return search_results
            
    #     else:
    #         print("Invalid dependent variable type")
    #         return []     

    
        # algorithm_values = list(set([doc['algorithm'] for doc in data]))
        # num_algorithm_values = len(algorithm_values)
        # print(f"Number of different algorithm values: {num_algorithm_values}")
    

    """Method to average the data of a certain variable from the database"""
    def graph(self, ind_variable, dep_variable):
        return False
        # tell if ind variable is discrete or continuous

        # pull ind variable and variable data into two arrays of equal length
             # if multiple dependent make multiple arrays
        
        # if ind is continous make line graph

        # if ind is descrete make bar graph

        # need to have dynamically changing axis labels, units, measurements, etc

    """
    Method to grab the data of a continuous variable from the database
    """
    def grab_cont_data(self, ind, dep):
        data = self.simStats.find({ind: {"$exists": True}})
        search_results = {ind: [], dep: []}
        for doc in data:
            search_results[ind].append(doc[ind])
            search_results[dep].append(doc['simulation results'][dep])
        
        return search_results

if __name__ == "__main__":
    mongo = Mongo()
    # print(mongo.grab_data({'algorithm': 'A*'}, {'avgTimePerPackage': 1}))
    # print('=========================================================================')
    # print(mongo.grab_avg_data({'algorithm': 'A*'}, {'avgTimePerPackage': 1}))
    # print('=========================================================================')
    #data = mongo.grab_single_dependent('algorithm','packagesHourRobots')
    # print('=========================================================================')
    #data = mongo.grab_all_data('algorithm',['avgTimePerPackage', 'packagesHourRobots'])
    # print('=========================================================================')
    data = mongo.grab_cont_data('numberOfRobots', 'packagesHourRobots')
    print(data)






# with open(filename) as file:
#     data = json.load(file)

# # Insert to Database
# insert_result = simStats.insert_one(data)

# # If the data is inserted successfully, remove the file
# if insert_result.acknowledged:
#     print('Data inserted successfully')
#     os.remove(filename)
# else: print("Data insertion failed")

#result = simStats.insert_many(data)

 # Read the data from the database
# docs = simStats.find()
# for doc in docs:
#     print(doc)