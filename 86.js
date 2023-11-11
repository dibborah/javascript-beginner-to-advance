// 2015 / es6

//class keyword

class CreateUser {
    constructor(firstName, lastName, email, age, address) {
        //new way
        console.log("constructor called");
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }
    about(){
        return `${this.firstName} is ${this.age} years`;
    };
    is18(){
        return this.age >= 18;
    };
    sing(){
        return "lalala lal lal";
    };
    func(a){
        console.log(a);
    }
}

const user1 = new CreateUser("dibya", "borah", "d@gmail.com", 6, "Noida");
// const user2 = new CreateUser("elon", "musk", "e@gmail.com", 51, "LA");
// const user3 = new CreateUser("steve", "jobs", "s@gmail.com", 37, "SF");

// console.log(user1.sing());

//Consoling the prototype using __proto property

// console.log(user1.__proto__);
// console.log(user1["__proto__"]);

//Consoling the prototype using inbuilt method getPrototypeOf (like: typeOf)
// console.log(Object.getPrototypeOf(user1));

user1.func(22)// Just calling the method in the class constructor directly

//invoke means call//invoke karne ka matlab hain call karna
