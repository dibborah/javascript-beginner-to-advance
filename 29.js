// how to clone array

//how to concatenate two arrays

// ---------------------------------***-----------------------------------

//Cloning an array

// let array1 = ["item1", "item2"];


// let array2 = array1;     // ### This is not the rigth way to clone since array2 is getting the pointer of array1 and not the actual value in heap // The values are stored in heap not stack

// The Different ways to clone an array

// let array2= ["item1", "item2"];   //1.This is the 1st and most boring way (Can't even consider this as a way). Don't use this way

// let array2 = [].concat(array1);   //2.This is the 2nd way to clone. Try not to use this

// let array2 = array1.slice(0);     //3. This is the 3rd way to clone.Don't use even this

//Using spread operator

// let array2 = [...array1];         //4. This is the most modern and best way to do it . Use this .And try to use only this as more as you can


//Concating an array

// 1.The 1st way of concating an array is similar to the boring way of cloning so won't even discuss


// let array2 = [].concat(array1, ["item34", "item44"]); // 2.This is the 2nd way of concating an array

// let array2 = array1.slice(0).concat(["item34", "item44"]); // 3.This is the 3rd way of concating an array

//Using spread Operator

// let array2 = [...array1, "item34", "item44", "item54"];// 4. This is the 4th way of concating an array and also this modern one.Use this way to concate an array

// let oneMoreArray = ["x", "y", "donkey"];
// let array2 = [...array1, ...oneMoreArray] // using spread operators

// array1.push("cow");

// console.log(array1 === array2);
// console.log(array1, "This is array1");
// console.log(array2, "This is array2");