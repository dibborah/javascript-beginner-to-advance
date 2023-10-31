// for of loop in array

const fruits = ["apple", "mango", "x", "y", "z"];
const fruits2 = [];
for(let fruit of fruits){
    fruits2.push(fruit.toUpperCase());
}
console.log(fruits2);

//# for of loop gives us the element in that array

// for of vs in 
// of gives the element and in gets in and gives us the index in that array 
