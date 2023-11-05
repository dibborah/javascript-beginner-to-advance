//Hoisting ---> The below lines of behaviour is called hosting

// // what is Hoisting 

// In JavaScript, Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution. Basically, it gives us an advantage that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.

//Assan vasa mein=> Code ke execution hone se pehle moves all the declaration at the top of the scope, scope ke top pe move kar deti hain savi declarations ko. Javascript ke is BEHAVIOUR ko hoisting kehte hain

//Function declaration /Function statement vs Function Assignment

//Function Declaration / Function Statement

// hello();
// function hello(){
//     console.log("hello");
// }

// Differences 
//1. Need function keyword
//2. Can be accessed before and after defining
//3. Are executed b/4 any code
//4. Doesn't need a variable assignment like var, let , const ---> standAlone


// Function Expression

// hello();

// const hello=()=>{
//         console.log("hello");
//     }

// console.log(hello);
// var hello =()=>{// When use var ---> undefined is returned
//     console.log("hello universe");
// }    
// let hello =()=>{// When use let ---> throws error ->"cannot access b/4 initializing"
//     console.log("hello universe");
// }    
// const hello =()=>{// When use const ---> throws error ->"cannot access b/4 initializing"
//     console.log("hello universe");
// }    
    // Differences 

    //1.No Need function keyword
    //2. Can't be accessed before defining can be accessed only a/f defining 
    //3. Are not executed b/4 any code. Executed when the interpreter reaches the line
    //4. Need a variable assignment like var, let , const.Can be stored
