// and or operator

let firstName = "dib"
let age = 15;

// if (firstName[0] === "d") {
//     console.log("Your name starts with d");
// } 

// if(age >= 18){
//     console.log("Your age is greater or equal to 18");
// }


// && operator --> Both the condtions have to be true for the overall condition to return true
// if (firstName[0] === "d" && age > 18){
//     console.log("Your name starts with d and age is above 18");
// }

// or operator --> Only one of the conditions have to be true for the overall conditions to return true
// 2 pipe(||) symbols are used to use it in coding
if (firstName[0] === "d" || age > 18){
    console.log("Your name starts with d and age is above 18");
}