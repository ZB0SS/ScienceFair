package khan.zia.science.repositories;

import khan.zia.science.models.Person;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PersonRepository extends MongoRepository<Person, String> {}
