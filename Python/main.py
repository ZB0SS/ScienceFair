from pymongo import MongoClient
import stopwatch as sw

# createing a client with the database
client = MongoClient('mongodb+srv://user:pass@cluster0.wn7p6.mongodb.net/Database?retryWrites=true&w=majority')
# establishing connection with database from the client
db = client.Database

# data to put in 
people = [
    {
        'name': 'Alex',
        'age': 19,
        'favoriteFood': 'Pizza',
    },

    {
        'name': 'John',
        'age': 21,
        'favoriteFood': 'Ham Burger',
    },

    {
        'name': 'Jane',
        'age': 17,
        'favoriteFood': 'Sushi',
    },

    {
        'name': 'Jack',
        'age': 21,
        'favoriteFood': 'Tacos',
    },
    {
        'name': 'Jill',
        'age': 19,
        'favoriteFood': 'Bagels',
    },

]

stopwatch = sw.Stopwatch()

stopwatch.start()
# Create Data
for person in people:
    db.Collection.insert_one(person)

# Update Data
myCol = db['Collection']
for document in myCol.find():
    id = document['_id']
    query = {"_id": id}
    document['age'] += 1
    newDocument = {"$set": document}
    myCol.update_one(query, newDocument)

# Read Data
for document in myCol.find():
    print(document)
# Delete Data
    query = {'_id': document['_id']}
    myCol.delete_one(query)

stopwatch.stop()

# Total Time
totalTime = stopwatch.totalTime
print(totalTime)