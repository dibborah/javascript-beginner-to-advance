// super keyword

// super constructor

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

// Using inheritance

class Dog extends Animal{
    constructor(name,age, speed){
        super(name, age);//super constructor
        this.speed = speed;
    }
    run(){
        return `${this.name} is running at ${this.speed}kmph`
    }
}

// object <=> Instances
// Object is sometimes also called instances

// Animal is called the Parent class or super class or Base class
// Dog class is called Derived class or sub-class

// Parent/Base/Super 
// Child/Derived/Sub

const tommy = new Dog("tommy", 7, 45);
console.log(tommy.run());