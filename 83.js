// // new keyword

//Explanation part-1

// function createUser(firstName, age){
//     this.firstName = firstName;
//     this.age = age;
// }

// //new keyword
// // 1. creating an empty object this = {};//this = empty object and this is making key values object in the empty object
// // 2. return this 
// // 3. proto assign . Assign the fc object or any obj in the proto property key
// // Object.create(createUser.prototype);

// createUser.prototype.about = function(){
//         console.log(this.firstName, this.age);
//     }
    
//     const user1 = new createUser("dibya", 65);
    
//     console.log(user1);
//     // user1.about();
    
//Explanation part-2
// new keyword 

//1. this = {}
//2. return this
//3. Object __proto__ set // Object.create(createUser.prototype(object_name);//Does the work of this line

// __proto__ === [[Prototype]] 
// // official ecmascript document
// [[Prototype]]  === __proto__ 

// constructor function --> The fc below is called a constructor fc b/c it is constructing an object for us
// There is a convention that the constructor fc should be declared using pascal casing or the name should start from upper case unlike most of the fc which start from lower case
// This is so that if we want to let other developers know that a partcular fc we created is a constructor fc used to create objects than this convention lets them know that
 