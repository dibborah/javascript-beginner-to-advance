//reduce fc (Part-2)

const numbers = [1, 2, 3, 4, 5, 10];

// numbers.reduce((accumulator + currentValue)=>{
//     return accumulator + currentValue
// });

// const sum =  numbers.reduce((accumulator , currentValue)=>{
//     return accumulator + currentValue;
// },100);//Here the 100 is given as a initial value of the accumulator
//If 100 is given as a initial value of the accumulator then the value of the currentValue will be 1 
//if the initial value is not passed then the value of the accumulator in this above example will be 1 and the value of the currentValue will be the next value in the array which is 2.


// console.log(sum);

const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 15000},
]

const totalAmount = userCart.reduce((totalPrice,currentProduct)=>{
    return totalPrice + currentProduct.price;
},0)//In reduce fc in array the initail value of the 1st parameter has to be passed here
//The initial value can't be passed anywhere else

console.log(totalAmount);

// totalprice    currentValue    return
//  0              {12000}        12000
//  12000          {22000}        34000
//  34000          {15000}        49000