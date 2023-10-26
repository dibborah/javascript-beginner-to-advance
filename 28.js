// primitive vs reference data types

// ------------------------------------*----------------------------------

//Primitive Data Type

//Primitive data types are stored in stack since they doesn't take much space

// let num1=6;
// let num2=num1;

// console.log("The value of num1 is ",num1);
// console.log("The value of num2 is ",num2);
// num1++;
// console.log("After incrementing num1...");

// //After increment one value the other assigned values doesnot change just the incremented value changes in primitive data types as shown below

// console.log("The value of num1 is ",num1);

// //The num2 is not changed just the num1 is changed in primitive data types, even if num2 was assigned above to num1
// console.log("The value of num2 is ",num2);

//Reference Data Types
//Array

// let array1 = ["item1", "item2"];
// let array2 = array1;
// console.log("array1", array1);
// console.log("array2", array2);
// array1.push("item3");
// console.log("After pushing item3 in array1");
// console.log("array1", array1);
// console.log("array2", array2);

//Here in the above code the array2 also changes when array1 was changes and another item3 was added
// Why was that
//This is unlike the primitive data types 

//This happend because the values of the primitive data types are stored in stack  and both the actual value of num1 and num2 was stored in stack .And when num1 was incremented that got  nothing to do with num2 .
//But in case of reference data type like array in this case the values or the items 1,2,3 are stored in heap memory

//So the array1 and array2 variable are having the just their pointer address in the stack, not the actual values

//So since both the array1 and array2 had the same pointer(address) when the value changes both the array got changed