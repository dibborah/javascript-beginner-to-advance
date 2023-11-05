// map method

// const numbers= [3,4,6,1,8];

// function square(number){
//     return number*number;
// }

// const square = function(number, index){//This is a function expression not a fuction declaration or assignment
//     console.log(number*number);//Avi kuch return nhi ho raha sirf console ho raha hain
//     return `${number*number} at index ${index}`;
// }

// const squareNumbers = numbers.map(square);// Agar kuch return nhi hota to undefined return hota hain
// console.log(squareNumbers);// So all the values here are undefined. In this array it has got 5 elements and all are undefined

// Since in map function map function returns a new array and we store that new array in another array type variable so it is crucial that map function returns a value;

// forEach vs map array method
//Differences
// in forEach we where simple doing console.log since forEach doesnot returns an array but since map return an array we should always must return the value and catch it in a variable.
//W/o returns value if we store the values in another array using the map method then the new array will be composed where all the elements will be undefined

//Similarities
//map function like foreach function can take index and the second parameter .
//The first parameter is always the element

const users = [
    {firstName:"dibya",age:23},
    {firstName:"mohit",age:22},
    {firstName:"aditya",age:20},
    {firstName:"karan",age:21},
]

 const userNames = users.map((user)=>{
    return user.firstName;
})
console.log(userNames);