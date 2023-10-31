
// for in loop in array

const fruits = ["apple", "mango","grapes", "fruits4", "fruits5"];

const fruits2=[];

for (let index in fruits){
    console.log(index);
    fruits2.push(fruits[index].toUpperCase());
}
console.log(fruits2);

//# for in loop gets in the index . It gives us the index of the array

// for of vs in 
// of gives the element and in gets in and gives us the index in that array 