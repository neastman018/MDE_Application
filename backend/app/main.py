import pymongo
import pandas as pd
import os
import json
import glob

# Connect to the database "MDE" in MongoDB
CONNECTION_STRING = "mongodb://localhost:27017/MDE"
client = pymongo.MongoClient(CONNECTION_STRING)
db = client.get_database('MDE')

simStats = db['simulationStatistics']



data_folder = 'backend/app/data'

# Get all JSON files in the data folder
file_pattern = os.path.join(data_folder, '*.json')
json_files = glob.glob(file_pattern)

for filename in json_files:

    try:
        # Get the data from the JSON file
        with open(filename) as file:
            data = json.load(file)

        # Insert the data into the database
        insert_result = simStats.insert_one(data)

        # If the data is inserted successfully, remove the file
        if insert_result.acknowledged:
            print(f'Data from {filename} inserted successfully')
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