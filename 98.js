// closures

//closure:30-40%
//analyse : 70-80%
//real example : 100 %

// Note: function can return function 

// function outerFunction() {
//     function innerFunction(){
//         console.log("hello");
//     }
//     return innerFunction;
// }
// const ans = outerFunction();
// console.log(ans);
// ans();


function printFullName(firstName, lastName) {
    function printName(){
        console.log(firstName, lastName);
    }
    return printName;//Here when printName will return it will return along with its lexical environment
}

const ans = printFullName("dibya", "borah");
ans();

// Note : Inner fc outer fc ke chizo ko access kar sakta hain

// closures => Jab v function ek dusre fc ke andar return hota hain to wo jab v return hota h to us fc ke local memory main pare jo v variables hain jo usko pata h usko jaurat hogi unko sath leke return hota hain, unko apne jolle main lekar return hota hain 
// innerfc ke ishi behaviour ko closure kehte h 

// In english (textbook language sophisticated):
// closure is a feature js where the innerfunction can access the outer scope of a function