//important array method

//foreach-> We will discuss forEach array method in this file
//map
//filter
//reduce

const numbers = [4, 2, 5, 8];

// numbers.forEach(function(number,index){
//     console.log(index, number*2);
// })

// function myFunc(number, index) {
//     // console.log('Index is ', index);
//     // console.log(`${number}*2 = ${number*2}`);
//     console.log(`Index is ${index} number is ${number}`);
// }

// multiplyBy2(numbers[0], 0)
// multiplyBy2(numbers[1], 1)
// multiplyBy2(numbers[2], 2)
// multiplyBy2(numbers[3], 3)

// for(let i =0; i<numbers.length;i++){
    //     // console.log(`Index is ${i}`);
    //     // console.log(`${numbers[i]}*2 = ${numbers[i]*2}`);
    //     myFunc(numbers[i], i);
    // }
    
    // numbers.forEach(myFunc)//forEach method iterates the full array of the array where the method is targeted and the 1st arguement passed in that arguement fc is the elements in that array and the 2nd arguement passed is the index
    // numbers.forEach(function(number,index){
    //         console.log(`Index is ${index} number is ${number}`);
    // })
    
    //Very important Point :
    //Arguement vs Parameter ->
    
//when we define a function and pass some values that are called parameters
//And when call a function the value we put there are called arguements

//Anonymous fc -> function written using only the function keyword w/o giving any names

const users = [
    {firstName:"dibya",age:23},
    {firstName:"mohit",age:22},
    {firstName:"aditya",age:20},
    {firstName:"karan",age:21},
]

//Old loop-> forEach loop is old so is seen everywhere
// users.forEach(function(user,index){
    //     console.log(user.firstName);
    // })
    
//New loop-> for of loop is new loop is not very much widely seen as forEach loop 
// for(let user of users){
//     console.log(user.firstName);
// }

users.forEach((user, index)=>{
    console.log(user.firstName, index);
})