// static methods and properties

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    static classInfo() {
        return `this is Person class`;
    }
    static get withGetClassInfo() {
        return `this is Person class using getter`;
    }
    static desc = "this is static property";

    get fullName() { // get keyword is the getter which converts this function into a property and we can use the fc as property and js will treat it as a property
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(fullName) {
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
    eat() {
        return `${this.firstName} is eating`
    }
    isSuperCute() {
        return this.age <= 1;
    }
    isCute() {
        return true;
    }
}

const person1 = new Person("dibya", "borah", 8)
// console.log(person1.eat());// this eat() method is related to the object person1 that I have create not with the class Person
// console.log(Person.eat());// => "Person.eat is not a fc" => this error is thrown // Since the eat() method is not related with Person class but with the object

// Note :
// But can create method which will be directly related with the class and to class them we won't be needing to call it via objects which we create using the class
// We can call the methods directly using the class not via the created objects(instances) of the class

//Class method can't be called on objects
// console.log(person1.classInfo);// returns undefined in the console

// Access STATIC METHODS

//classInfo is a class method and has to be called by class in order to be executed correctfully
// console.log(Person.classInfo());
// console.log(Person.withGetClassInfo);// using getter(get keyword)

// Access STATIC PROPERTIES
// console.log(Person.desc);// desc is a CLASS PROPERTY not a OBJECT PROPERTY
// console.log(person1.desc);// this will throw undefined as desc is not a object property

// Notes :
// When are this class method accessing are used :
// For ex: If we want to initialize our App.
// Or to run the app we make a small class
// And there we make a static method like init() to initialize the app
// This helps us to initialize the app easily