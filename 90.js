// getter and setters 

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName() { // get keyword is the getter which converts this function into a property and we can use the fc as property and js will treat it as a property
        return `${this.firstName} ${this.lastName}`;
    }
    // setName(firstName, lastName) {
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    // }
    set fullName(fullName) {
        // fullName.split(" ")
        // [elon, musk]
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person1 = new Person("dibya", "borah", 6);

// console.log(person1);

//Calling the fullName method as js is treating it as a fc 
// console.log(person1.fullName());

// just consoling the firstName and the lastName
// console.log(person1.firstName);
// console.log(person1.lastName);

// accessing fullName property after the getter is used to convert this fc into a property
// console.log(person1.fullName);


//Overwritting the firstName and lastName
// 1. 1st way
// person1.setName("elon", "musk")
// console.log(person1.firstName);
// console.log(person1.lastName);

//Overwritting the firstName and lastName 
// 1. 2nd way
// person1.firstName = "elon";
// person1.lastName = "musk";
// console.log(person1.firstName);
// console.log(person1.lastName);

//Overwritting the firstName and lastName 
// 1. 3rd way (Most advance way) => Always use this . This is the one of the topic we are here for
// Using setter => set keyword

person1.fullName = "elon musk";
console.log(person1);
console.log(person1.fullName);

// When a function is declared inside an object than it is said to be a method
// That fc is said to be a method