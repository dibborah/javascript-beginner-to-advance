// objects --> reference data type like array

// arrays are good but not sufficient
// for real world data
// objects store key value pairs
// objects don't have index

// how to create objects

// const person = { name:"dib" , age:22 }; // This is also called object literal when objects are create using flower braces;
// const person = { name:"dib" , age:22 }; // This keys are also known as properties ;

// The key values of objects can also be written in string
// If we don't write the keys in strings then it's also fine b/c in Js the key are bydefault written in strings

// const person = {
//    "name": "dib",
//     "age":22,
//     "hobbies":[ "music","dance", "guitar" ]
// }

// Here the similar above object in written w/o stings since it's  bydefault is in strings
const person = {
    name: "dib",
    age:22,
    hobbies:[ "music","dance", "guitar" ]
}

// console.log(typeof person);
// console.log(person);

// how to access data from objects

//1st way-> Dot notation

// console.log(person.name);
// console.log(person.age);
// console.log(person.hobbies);

//2nd way -> Bracket Notation

// console.log(person.name); --> Dot Notation
// console.log(person["name"]); // --> Bracket Notation
// console.log(person["age"]); // --> Bracket Notation


// how to add key value pair to objects

//1st way -> Using Dot Notation

// person.gender = "male";
// console.log(person);

//2nd way --> Using Bracket Notation

// person["gender"] = "male";
// console.log(person);



