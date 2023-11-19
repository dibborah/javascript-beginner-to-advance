// default export import
export class Person{// default lagane se jaha import kar rahe hain waha curly braces lagane ki jarurat nhi hain
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName  = lastName;
        this.age = age;
    }
    info(){
        console.log(this.firstName, this.lastName, this.age);
    }
}
// this default export can't be done as above already once default export is done and we can't do default export more than once

// export default class Person2{// default lagane se jaha import kar rahe hain waha curly braces lagane ki jarurat nhi hain
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName  = lastName;
//         this.age = age;
//     }
//     info(){
//         console.log(this.firstName, this.lastName, this.age);
//     }
// }

// this can be done// just simple export 
// Named export import
export  class Person2{// default lagane se jaha import kar rahe hain waha curly braces lagane ki jarurat nhi hain
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName  = lastName;
        this.age = age;
    }
    info(){
        console.log(this.firstName, this.lastName, this.age);
    }
}

const hello = "hello universe"
export default hello;

// Note:
//1st point
// if only export keyword is used when one import curly braces have to be used
// but only when used export default means exports as default then when importing the export default doesnot have to use the curly braces

// 2nd point 
// Ek file ke liye ek hi export default rahega 
// Aap ek se jyada baar export default nhi kar skte meaning...
// One cannot duplicate export default