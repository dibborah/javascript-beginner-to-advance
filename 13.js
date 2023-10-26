//truthy and falsy values

//falsy values
// false
// ""
// null
// undefined
// 0

// This above values are false values so if they are put in the if condition the if condition statement won't be executed instead the else condition will be executed

// Truthy values
//"abc"
//-1...AND other negative numbers +1 ... and other positive numbers

//All the values other than the above are truthy values
//Non empty values or any value existing or are inputed or are there is truthy, as simple as that

let firstName;
console.log(firstName);// returns undefined
//This variable is undefined so the if statement will be false so else will be executed

firstName = "dib"

if (firstName) {
    console.log("Not false", firstName);    
}else{
    console.log("firstName is falsy so else statement is executed");
}

