// Classes Practice

//Task
//Make a animal class. It will have two property. 1. name 2.age
//method eat()

class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating`
    }
    isSuperCute(){
        return this.age <=1;
    }
    isCute(){
        return true;
    }
}

const animal1 = new Animal("Lion", 10)
// console.log(animal1);

// consoling the prototype
// console.log(Object.getPrototypeOf(animal1));

// console.log(animal1.eat());
// console.log(animal1.isSuperCute());

// dog class

// Here when we created the dog class out of the animal class we almost used the same code from the animal constuctor class
// Since we in this case needed the same previouly written code we just wrote the same code.Its just simple copy and paste
// Is we want to create another class say a cat class out of animal we have to again repeat the same previously written code
// This is violating the DRY principle
// may be there is some other simpler and easy and short way faster way
// Let's see it!!!

// old way

// class Dog{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     eat(){
//         return `${this.name} is eating`
//     }
//     isSuperCute(){
//         return this.age <=1;
//     }
//     isCute(){
//         return true;
//     }
// }

// const tommy = new Dog("tommy", 3)
// console.log(tommy.eat());

// new way

// We can use inheritance

class Dog extends Animal{

}

const tommy = new Dog("tommy", 7);
console.log(tommy.eat());
console.log(tommy.isCute());
console.log(tommy.isSuperCute());