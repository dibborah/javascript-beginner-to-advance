// Difference between dot and bracket notation

// How to add this email key inside this const key variable in the object 'person'

const key = "email";

const person = {
    name: "dib",
    age: 22,
    // person hobbies: [ "music","dance", "guitar" ] // This key is not allowed as in Js spaces in keys are not accepted
    "person hobbies": ["music", "dance", "guitar"],
}

// We will add it this way

person[ key ] = "dibborah100@gmail.com" // Look here carefully // Here the key is not written inside Open close inverted comma(""/'') since we don't want to add key with this value ("dibborah100@gmail.com") inside person object but we want to add email key which is inside the const key variable so the commas were not used here

// If the key inside the object has spaces between its name and we want to access the value of that key then we use sqauer brackets and write the key in strings to access that value of that type of key

// console.log(person["person hobbies"]);
// console.log(person);

