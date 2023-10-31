//array destructuring

const myArray = ["value1", "value2", "value3", "value4"];

// let myVar1 = myArray[0];
// let myVar2 = myArray[1];

// const [ myVar1, ,myVar2] = myArray;
// let myNewArray =  myArray.slice(2)
const [ myVar1, myVar2,...myNewArray] = myArray;
// const [ ...myNewArray] = myArray;

// console.log("Value in myVar1", myVar1);
// console.log("Value in myVar2", myVar2);
// console.log("Value in myVar3", myVar3);
// console.log(myNewArray);