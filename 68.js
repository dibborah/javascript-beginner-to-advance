//Map object-> it stores key value pairs same as object with some differences obviously (Map data structure)

//key value Pairs

//Note : When object (object literals) are created object keys can be strings(90% times) or symbols sometimes
//But Map() data structure can be of keys of any data types not limited to strings or symbols
//object are made of key and value pairs //they are called object literals


// const person = new Map();

// person.set("firstName", "harshit");
// person.set("age",7);
// person.set(1, "one");
// person.set([2,4,5], "onetwothree");
// person.set({1:"one"}, "keyValueOne");
// console.log(person);
// console.log(person.get("age"));
// console.log(person.get(1));
// console.log(person.keys());//This is the MapIterator// keys method prints all the keys

// for(let key of person.keys()){
//     console.log(key, typeof key);
// }


// new Map()
//Some methods used in Map() data structure// Gives us more freedom with less restrictions
// set()
// get()

// for(let [key,value] of person){
//     // console.log(typeof key);
//     // console.log(Array.isArray(key));//returns true // Implies it gives output as an array
//     console.log(key, value);
// }


//Same code as above -->just practicing

// for (let [key,value] of person){
//     console.log(key, value);
// }

// const person = new Map([["firstName","dibya"], ["age", 8]]);//Direct defing the Map data structure w/o using set to set the key and values in Map()
// console.log(person);

// const person1 = {//Is we want to add additional info of person1 but we don't want to store that info in person1 itself but in some other place than Map() method can be used
//     id: 1,
//     firstName: "dibya",
// }

// const extraInfo = new Map();
// extraInfo.set(person1,{age:89, gender:"male"})
// console.log(extraInfo);//output: object person1 is mapped with another object
// console.log(extraInfo.get(person1));

// ToBeContinue...(this file is not fully completed, please complete it );
