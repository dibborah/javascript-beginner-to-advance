//using const (variable type) for creating array

// const pi = 3.14;
// // pi = 3.14;// This is wrong // Cannot assign to constant variable
// console.log(pi);

// hari mirsh ---> don't pay attention//This is out of the blue

// const fruits --> stack as for export. 0x11 //The const varible fruits is stored in stack memory as a pointer taking the address of  the actual array 

// ["apple", "mango"] ---> This actual array is stored in heap memory

const fruits = ["apple", "mango"];
// fruits = ["brinjal", "papaya"] // This can't happen as we are trying to assign a new address(the new items are stored in that new address) to an already assigned varible where another address is already stored in stack memory
fruits.push("banana", "papaya"); // Once can push in const array variable since in push we are not changing the address and just pushing items to the last index of that array, stored in that particular address 
console.log(fruits);


//### Developers uses const variable type to assign reference data types like array to declare variables 90% of the times since once const is assignment on can push or pop items but cannot reassign the same varible .This functionality comes handy for developers


