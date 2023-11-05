//callback functions

function myFunc2(name){
    console.log("inside myFunc2");
    console.log(`your name is ${name}`);
}

function myFunc(callback){//Since here the aruguement passed is another functions so as pers standards the name callback is used by developers for convience
    // console.log(a);
    console.log("hello there i am about to call callback fc");
    callback("dibya");
}

// myFunc(myFunc2("dibya"));//Passing here an error is thrown that callback is not a function
myFunc(myFunc2);

//accepting fuction as an parameter or arguement in another fc and calling it inside that fc is called callback functions
//callback kya hain?
//Answer: jab ek function as a arguement lega ek function aur ushe call kar dega