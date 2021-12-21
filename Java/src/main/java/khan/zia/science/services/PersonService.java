package khan.zia.science.services;

import khan.zia.science.models.Person;
import khan.zia.science.repositories.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;
import org.apache.commons.lang.time.StopWatch;
import java.util.ArrayList;
import java.util.HashMap;

@Service
public class PersonService {
    private final PersonRepository personRepository;
    private final MongoTemplate mongoTemplate;
    @Autowired
    public PersonService(PersonRepository personRepository, MongoTemplate mongoTemplate) {
        this.personRepository = personRepository;
        this.mongoTemplate = mongoTemplate;
    }

    public HashMap<String, Object> crudOperations() {
        ArrayList<Person> people = new ArrayList<Person>();
        people.add(new Person("Alex", 19, "Pizza"));
        people.add(new Person("John", 21, "Ham Burger"));
        people.add(new Person("Jane", 17, "Sushi"));
        people.add(new Person("Jack", 21, "Tacos"));
        people.add(new Person("Jill", 19 , "Bagels"));

        StopWatch stopWatch = new StopWatch();
        stopWatch.start();
        // Loops through people and creates enities in the database
        personRepository.saveAll(people);

        // Update the data
        for (Person person : people) {
            int newAge = person.getAge() + 1;
            Query query = Query.query(Criteria.where("name").is(person.getName()));
            mongoTemplate.updateFirst(query, Update.update("age", newAge), Person.class);
        }

        // Read the data
        ArrayList<Person> modifiedPeople = new ArrayList<>(personRepository.findAll());
        // Delete the data
        personRepository.deleteAll();
        stopWatch.stop();
        HashMap<String, Object> data = new HashMap<>();
        data.put("data", modifiedPeople);
        data.put("time", stopWatch.getTime());
        return data;
    }
}

/* {
data: []
time: 211
*/
