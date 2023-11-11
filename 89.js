// super keyword

// super constructor

class Animal {
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

// Using inheritance

class Dog extends Animal{
    constructor(name,age, speed){
        super(name, age);//super constructor
        this.speed = speed;
    }
    run(){
        return `${this.name} is running at ${this.speed}kmph`
    }
    eat(){// The eat method exists both in this subclass Dog and also in the base class Animal// But when called  by making an object via Dog subclass Js interpreter will prioritize the eat() method in Dog and if and only if the eat method is not present in Dog subclass it will search that in Animal parent class
        return `modeified Eat: ${this.name} is eating`
    }
}
// object <=> Instances
// Object is sometimes also called instances

// Animal is called the Parent class or super class or Base class
// Dog class is called Derived class or sub-class

// Parent/Base/Super 
// Child/Derived/Sub

// const tommy = new Dog("tommy", 7, 45);
// console.log(tommy.run());
// console.log(tommy.eat());


// Just creating new object using animal class 

// const animal1 = new Animal("sheru", 4);
// console.log(animal1);
// console.log(animal1.eat());// the eat() method is called from animal class and not from the dog class as the dog class it not used