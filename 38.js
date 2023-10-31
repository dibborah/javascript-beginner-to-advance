// how to iterate objects

const person = {
    name: "dib",
    age: 22,
    "person hobbies": ["music", "dance", "guitar"],
}

// To ways ot iterate objects
// 1. for in loop
// 2. Object.keys

// The  1st way to iterate (using for in loop)

for(let key in person){

    // console.log(key);// All the three names of the keys gets printed

    // console.log(person.key);//Can't be written this way
    // console.log(person.["key"]);// Also can't be written this way
    
    // console.log(person[key]);// Look very carefully this line // To access the key value the above two lines were wrong and this was right was because when you write the key in dot notation (the 1st line) and in strings (2nd line) Js compiler will search a key in the name of key in the object which doesn't exist so undefined result will be printed in the consoles. when once write the key inside square brackets w/o stings the compiler will treat key as a variable and so the values will be printed
    
}

for(let key in person){

    // console.log(`${key} : ${person[key]}`); //1st way of consoling using string iterpolation or template string the key : value pairs of the objects
    
    // Difference between this two ways of consoling :
    // The above way doesn't shows the "person hobbies" values in array format but just in commas seperation, but
    // The below way of consoling shows the "person hobbies" values in an array format

    // console.log(key , " : ", person[key]); // 2nd way to console the key : value pair of the object

}

// The  2nd way to iterate (using object.keys() method)

// console.log(Object.keys(person));// Returns the key names of that object passed in an array format
// console.log(typeof Object.keys(person));// Returns the type of the data 
const val = Array.isArray(Object.keys(person));
// console.log(val);

// for in loop  

for (let key of Object.keys(person)){
    console.log(person[key]);
}

//## Just out of the blue line //The data type of an ARRAY is object
const arr1 = ["mango", "papaya"];
// console.log(typeof arr1);
for (let key of arr1){
    console.log(key);
}
//## Just out of the blue point// The trim() method of used mostly on string cut off or trims the extra spaces in a string

