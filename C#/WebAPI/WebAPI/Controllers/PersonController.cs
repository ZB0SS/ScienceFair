using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Services;
using MongoDB.Bson;
using System.Diagnostics;

namespace WebAPI.Controllers
{
    [Route("/")]
    [ApiController]
    public class PersonController : ControllerBase
    {
        [HttpGet("/")]
        public Dictionary<string, object> getPerson()
        {
            PersonService personService = new PersonService();
            Person[] people = { new Person("Alex", 19, "Pizza"), new Person("John", 21, "Ham Burger"), new Person("Jane", 17, "Sushi"), new Person("Jack", 21, "Tacos"), new Person("Jill", 19, "Bagels") };
            Stopwatch stopwatch = new Stopwatch();

            stopwatch.Start();
            List<BsonDocument> results = personService.performCrudOperations(people);
            stopwatch.Stop();
            List<string> resultStringForm = new List<string>();
            foreach (BsonDocument result in results)
            {
                string id = result["_id"].ToString();
                result["_id"] = id;
                resultStringForm.Add(result.ToString());
            }
            Dictionary<string, object> data = new Dictionary<string, object>();
            data.Add("data", resultStringForm);
            data.Add("time", stopwatch.ElapsedMilliseconds);
            return data;
           
        }
    }
}
