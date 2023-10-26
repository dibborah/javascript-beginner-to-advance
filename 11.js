//undefined
//null

// let firstName;
// console.log(firstName);--> Returns undefined

// var firstName;
// console.log(firstName);--> Returns undefined

// const firstName;
// console.log(firstName);--> Returns initializing error

// # One just declared and not define var and let but one can never do that with const 
// # Const once declare have to be defined it can never be left undefined or else it will throw error (initializing error)


// let firstName;
// console.log(typeof firstName);
// firstName= "dib";
// console.log(typeof firstName, firstName);


// let myVariable = null;
// console.log(myVariable , typeof myVariable); --> shows NUll. The typeof null is null but shows ojects
//This is a bug and error in JavaScript

// Question is if it is known as a bug of error error why community or developers are not fixing it also every year new versions of JS are released
// Answer --> If this bug is fixed then all the frameworks of JavaScripts and all the codes of JS has to be changed. That would really cause a lot of trouble as most people as many people are using Js or frameworks of Js
// That's the reason this bug is not fixed but this is a bug. Point to be noted
// myVariable = 'nik';
// console.log(myVariable, typeof myVariable);


//bigInt --> Used for storing long intergers or numbers

// let myNumber = 123;
// console.log(myNumber);
// console.log(Number.MAX_SAFE_INTEGER, "Limit");

// let myNumber = BigInt(900719925474099880807977);
// let myNumbers = 900719925474099880807977;
// console.log(myNumber, "W/ BigInt");
// console.log(myNumbers,"W/o BigInt");
// let myNumber = BigInt(123); 
// console.log(myNumber);

// 2 ways of using  BigInt
// let myNumber = BigInt(123);
// let sameMyNumber = 10n;
// console.log(myNumber);
// console.log(sameMyNumber);
// console.log(myNumber + sameMyNumber); //Doing operation with BigInt()

// let a = BigInt(100);
// let b = 5;
// console.log(a + b); --> This is operation throws error //One cannot mix BigInt with other data types and perform operations with them

