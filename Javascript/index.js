const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const Stopwatch = require('statman-stopwatch');

const app = express();
const corsOptions = {
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
}
app.use(cors(corsOptions))
// establish connection
mongoose.connect("mongodb+srv://user:pass@cluster0.wn7p6.mongodb.net/Database?retryWrites=true&w=majority");
const Person = mongoose.model('person', {
    name: String,
    age: Number,
    favoriteFood: String
});



app.get("/", async (req, res) => {
    const people = [new Person(
        {
        name: 'Alex', 
        age: 19, 
        favoriteFood: 'Pizza',
        }
    ), new Person(
        {
            'name': 'John',
            'age': 21,
            'favoriteFood': 'Ham Burger',
        }
    ), new Person(
        {
            'name': 'Jane',
            'age': 17,
            'favoriteFood': 'Sushi',
        }
    ), new Person(
        {
            'name': 'Jack',
            'age': 21,
            'favoriteFood': 'Tacos',
        }
    ), new Person(
        {
            'name': 'Jill',
            'age': 19,
            'favoriteFood': 'Bagels',
        }
    )]
    const sw = new Stopwatch();
// Create Data
    const empty = arr => arr.length = 0;
    const dbPeople = [];
    sw.start();
    dbPeople.push(await people[0].save());
    dbPeople.push(await people[1].save());
    dbPeople.push(await people[2].save());
    dbPeople.push(await people[3].save());
    dbPeople.push(await people[4].save());

// Update Data

    dbPeople.map((person) => {
        person.age ++;
    })
    await dbPeople[0].save()
    await dbPeople[1].save()
    await dbPeople[2].save()
    await dbPeople[3].save()
    await dbPeople[4].save()

// Read Data
dbPeople.map(person => {
    let query = Person.find({'name': person.name});
})
// Delete Data
    dbPeople.map((person) => {
        person.delete();
    })

    const ms = Math.round(sw.stop());

    return res.send({
        'data': dbPeople,
        'time': ms
    });

})
app.listen(5050, () => {console.log("The server is up and running on http://localhost:5050")});