""" This file will contain graphing methods for the data in the database """

from ctypes import c_int
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sb
import os
from mongo import Mongo

mongo = Mongo()

def bar_graph(ind, dep):
    dataset = pd.DataFrame(mongo.grab_all_data(ind, dep))
    print(dataset)
    
    if isinstance(dep, str):
        
        
        # Set Y-axis bounds
        max_y = dataset[dep].max()
        bound_y = np.ceil(max_y % 5) * 5 # rounds max_y up to the nearest multiple of 5

        # Create a bar chart using seaborn
        plt.figure(figsize=(10, 6))
        ax = sb.barplot(data=dataset, x=ind, y=dep, color="#861F41")

        plt.xlabel(ind)
        plt.ylim(0, bound_y)
        plt.yticks(np.arange(0, bound_y + 1, bound_y / 10))
        plt.ylabel(dep)
        plt.title(f"{dep} vs {ind}")
        plt.show()

    
    if isinstance(dep, list):
        # Set Y-axis bounds
        #max_y = dataset[dep].max()
        #bound_y = np.ceil(max_y % 5) * 5 # rounds max_y up to the nearest multiple of 5

        # Create a bar chart using seaborn
        plt.figure(figsize=(10, 6))
        sb.barplot(data=dataset, x=ind, y="data", hue="indentifier", color="#861F41")

        # plt.xlabel(ind)
        # plt.ylim(0, bound_y)
        # plt.yticks(np.arange(0, bound_y + 1, bound_y / 10))
        # plt.ylabel(dep)
        # plt.title(f"{dep} vs {ind}")
        plt.show()

def line_graph(ind, dep):
    dataset = pd.DataFrame(mongo.grab_cont_data(ind, dep))
    #print(dataset)

    plt.figure(figsize=(10,6))
    sb.scatterplot(data=dataset, x=ind, y=dep, color="#861F41")
    
    # Calculate the average of dep for each unique value of ind\
    numRobots = sorted(dataset[ind].unique())
    print(numRobots)
    avgValue = []
    for i in numRobots:
        avgValue.append(dataset[dataset[ind] == i][dep].mean())

    #print(avgValue)

    # Plot the average values as a line graph
    plt.plot(numRobots, avgValue, color="#861F41")
    # Add labels and title to the graph
    plt.xlabel(ind)
    plt.ylabel(f"Average {dep}")
    plt.title(f"Average {dep} vs {ind} Test Again")


    directory = "frontend/public"
    filename = "seaborn_plot.png"

    # Ensure the directory exists
    os.makedirs(directory, exist_ok=True)

    # Save the plot to the specified folder
    filepath = os.path.join(directory, filename)
    plt.savefig(filepath)

    # Optional: Show the plot
    plt.show()


if __name__ == "__main__":
    #bar_graph('numberOfRobots', 'packagesHourRobots')
    # bar_graph('algorithm', ['packagesHourRobots', 'avgTimePerPackage'])
    sb.set_theme(style="darkgrid")

    line_graph('numberOfRobots', 'packagesHourRobots')

 