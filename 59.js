// reduce method(part-1)

const numbers = [1, 2, 3, 4, 5];

// numbers.reduce();//the which is here to be passed can be directly called if defined early or Anonymous fc can be used or arrow fc can be used

// aim: sum of all the numbers in the array 

const sum =  numbers.reduce((accumulator,currentValue)=>{
    return accumulator + currentValue;
});
console.log(sum);

// let x = 0;
// for (let i = 0; i < numbers.length; i++) {
//     x = x + numbers[i];
// }
// console.log(x);

// accumalate , currentValue , return
// 1              2             3
// 3              3             6
// 6              4             10
// 10             5             15
// 15             10            25

