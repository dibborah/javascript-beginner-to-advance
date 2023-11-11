// const array1 = ['item1', "item2", "item3"];
// const array2 = ['item14', "item256", "item345"];

// const newArray = [...array1, array2];
// const newArray = [..."abc"]
// const newArray = [...1234567890]// number is not iterable using the spread operator so it throws this type of error in console
// console.log(newArray);

//cloning

// 1st way to clone an array 
// Using concat method but the variable were the concat is applied has to be an array
// #Note concat() method takes an array as an arguement
// const array2 = [].concat(array1);

//concat method extras
// const array2 = [].concat(array1,["i1", "i2", "i3"]);
//Demo code [].concat(["i1", "i2", "i3"]);//It's just a demo code


// 2nd way to clone an array 
// Using splice
// const array2 = array1.slice();
// console.log("array2",array2);

// 3rd way and the most modern way to clone
// Using spread operator

// const array2 = [...array1, "item500", "item600"];
// console.log(array2);


