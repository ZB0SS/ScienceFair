package khan.zia.science.controllers;


import khan.zia.science.repositories.PersonRepository;
import khan.zia.science.services.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
public class PersonController {
    private final PersonRepository personRepository;
    private final PersonService personService;

    @Autowired
    public PersonController(PersonRepository personRepository, PersonService personService) {
        this.personRepository = personRepository;
        this.personService = personService;
    }

    @GetMapping("/")
    public HashMap<String, Object> home() {
        return personService.crudOperations();
    }
}
