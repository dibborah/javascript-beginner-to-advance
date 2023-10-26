// array push pop

// array shift unshift

// -------------------------------*------------------------------------

// let fruits = ["apple", "mango", "banana"]
// console.log(fruits);

// fruits.push("chilly");
// console.log(fruits);
// fruits.push("papaya");
// console.log(fruits);

// push -->Its is a method of that changes the original array
//push add another element or item in the array at the last

//### Array is mutable 
// And so the push method can change the original array since it is reference data type
// Primitive data types like strings can't be changed since they are not mutable

//pop() --> pop removes an element from the last
//pop()--> pop method also changes the original array
//pop() not just removes an element from the last but also returns it and gives us the elements 
// Its says: Vai isko le lo aur karo jo v karna chahte ho iske sath bindass karo

// let fruits = ["apple", "mango", "banana"]
// console.log(fruits);
// fruits.pop();
// console.log(fruits);

// Just poping multiple times

// fruits.pop();
// console.log(fruits);
// fruits.pop();
// console.log(fruits);

//Storing the popped element which the pop() method is returning and consoling it 

// let popped = fruits.pop()
// console.log(fruits);
// console.log("Popped fruits is ",popped);

// unshift 
//unshift() --> Adds element to the 1st position (same as push , push does that from the last position , but the functionality is the same with push)

//Above we have learned about push() and pop() method used in array to add or remove element in the last position of that array

//But whatif? we want to add elements in an array in the first position
//Then we use unshift

// let fruits = ["apple", "mango", "banana"];
// console.log(fruits);
// fruits.unshift("grapes");
// console.log(fruits);
// fruits.unshift("cherry");
// console.log(fruits);


//shift method 
// shift ()--> Removes element from the start (same as pop  but from the start)

let fruits = ["apple", "mango", "banana"];
console.log(fruits);

// fruits.shift();
// console.log(fruits);

//Just performing shift and removing items from the start multiple times

// fruits.shift();
// console.log(fruits);

// fruits.shift();
// console.log(fruits);

// fruits.shift();
// console.log(fruits);

//Just catching the returned shift item in a variable and consoling it

// let removedFruit  = fruits.shift();
// console.log(fruits);
// console.log("Removed fruit is ", removedFruit);


// About speed

// The push() and pop() method are fast as compared to shift() and unshift(), but why?

//The reason is pretty obvious.
//When performing shift or unshift the entire array has to shift the element forward or backward and then add or remove the item in the front . That's some work  but since push and pop is done at last that shifting of the positions in the memory indexes are not required, so are fast indeed



