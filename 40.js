//spread operator

const array1 = [1,2,3];
const array2 = [5,6,7];
// 
// const newArray = [...array1, ...array2,90,78];
// const newArray = [...array1, array2];

// const newArray = [..."abc"]
// const newArray = [...123]//TypeError: 123 is not iterable
// console.log(newArray);

//spread operator in objects 

const obj1 = {
    key1: 'value1',
    key2: 'value2',
}
const obj2 = {
    key1:"value8787",/// since repeating will overide the value
    key3: "value3",
    key4: "value4",
}

// const newObject = {...obj2, ...obj1, key69:"value69"};///
// const newObject = { ...['item1', 'item2']}
// const newObject = { ..."abc"}
const newObject = { ..."abcdefghijklmnopqrstuvwxyz"}

console.log(newObject);

// array vs obj 
// array is an object 
// difference that the key of array are always 0-n 
// but object key can be 0-n and also can be set to any names 
//next difference are in array looks like just the elements seperated by commas without any key and indexes unless opened
//but objects  when console are seen appearing always with key and value pairs