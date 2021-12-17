from pymongo import MongoClient

# createing a client with the database
client = MongoClient('mongodb+srv://user:pass@cluster0.wn7p6.mongodb.net/Database?retryWrites=true&w=majority')
# establishing connenction with database from the client
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
	  'favoriteFood': 'Ham Burger' ,
	},

	{
	  'name': 'Jane',
	  'age': 17,
	  'favoriteFood': 'Sushi' ,
	},

	{
	  'name': 'Jack',
	  'age': 21,
	  'favoriteFood': 'Tacos' ,
	},

	{
	  'name': 'Jill',
	  'age': 19,
	  'favoriteFood': 'Bagels' ,
	}
]

for person in people:
	db.Collection.insert_one(person)
