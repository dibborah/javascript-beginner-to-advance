// template string

let age = 22;
let firstName = "dib";

//my name is dib and my age is 22

// doing the old and hard way --> tedious way
// const aboutMe = "my name is " + firstName +  " and my age is " + age;

//using template string making the tedious and hard task easy--> string interpolation
const aboutMe = `my name is ${firstName} and my age is ${age}`
console.log(aboutMe);
