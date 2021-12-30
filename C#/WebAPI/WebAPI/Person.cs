namespace WebAPI;

public class Person {
    public string name { get; set;}
    public int age {get; set;}
    public string favoriteFood {get; set;}
    public Person(string name, int age, string favoriteFood) {
        this.name = name;
        this.age = age;
        this.favoriteFood = favoriteFood;
    }
}