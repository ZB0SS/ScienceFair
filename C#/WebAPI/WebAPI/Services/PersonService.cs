using System;
using MongoDB.Bson;
using MongoDB.Driver;

namespace WebAPI.Services
{
    public class PersonService
    {
        public List<BsonDocument> performCrudOperations(Person[] people)
        {
            // establish connection with the database
            var client = new MongoClient("mongodb+srv://user:pass@cluster0.wn7p6.mongodb.net/Database?retryWrites=true&w=majority");
            var database = client.GetDatabase("Database");
            var collection = database.GetCollection<BsonDocument>("person");

            // CREATE data
            foreach (Person person in people)
            {
                var document = new BsonDocument
                {
                  {"name", person.name},
                  {"age", person.age },
                  {"favoriteFood", person.favoriteFood }
                };
                collection.InsertOne(document);
            }

            // UPDATE data
            foreach (Person person in people)
            {
                int newAge = person.age + 1;
                var filter = Builders<BsonDocument>.Filter.Eq("name", person.name);
                var update = Builders<BsonDocument>.Update.Set("age", newAge);
                collection.UpdateOne(filter, update);
            }

            // READ data
            var documents = collection.Find(new BsonDocument()).ToList();
            List<BsonDocument> results = new List<BsonDocument>();

            foreach (var document in documents)
            {
                results.Add(document);
            }


            // DELETE data
            foreach (var document in documents)
            {
                collection.DeleteOne(document);
            } 

            return results;
        }
    }
}