// understand callbacks

// function myFunc(callbacks){
//     console.log("Function is doing some task 1");
//     callbacks()
// }

// function myFunc2(){
//     console.log("Function is doing some task 2");
// }

// myFunc(myFunc2);

// myFunc(()=>{
//     console.log("function is doing task 2");
// })

function getTwoNumbersAndAdd(number1, number2, onSuccess, onFailure ){
    if (typeof number1 === "number" && typeof number2 === "number") {
        console.log(number1, number2);
        onSuccess(number1, number2);                  
    }else{
        onFailure();
    }
}

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

// getTwoNumbersAndAdd(2, 8, addTwoNumbers);

function onFail(){
    console.log("Wrong Data Type");
    console.log("Please enter numbers only");
}

getTwoNumbersAndAdd(2, 8, (n1 , n2)=>{
    console.log(n1 + n2);
}, onFail);

