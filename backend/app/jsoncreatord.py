import json
import os
from datetime import datetime

date = datetime.now().strftime("%Y-%m-%d_%H_%M_%S")

# Data to be written to the JSON file
data = {
    "simulationConducted": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
    "algorithm": "name of algorithm",
    "floor_plan": "floor plan",
    "numberOfRobots": "number of robots",
    "numberOfNodes": "number of nodes",
    "regionalReRouteRadius": "proximity of robots to re-route on encountering an obstacle",
    "simulation results": {
        "packagesHourRobots": "packages per hour per robot",
        "avgTimePerPackage": "average time per package",
        "emStopsPerObstacle": "number of emergency stops per obstacle in simulation",
        "nodesPerPath": "number of nodes per path",
        "avgLengthPath": "average length of a path",
        "avgSpeedofTransit": "average time from pickup to dropoff",
        "numberofPathsReRouted": "number of paths that were re-routed per obstacle",
        "calculationTime": "whatever that means exactly"
    }
}

# Specify the directory and filename
directory = 'backend/app/data'
filename = date + '_data.json'

# Create the directory if it doesn't exist
os.makedirs(directory, exist_ok=True)

# Full path to the file
filepath = os.path.join(directory, filename)

# Write the data to a JSON file
with open(filepath, 'w') as json_file:
    json.dump(data, json_file, indent=4)

print(f"Data has been written to {filename}")
