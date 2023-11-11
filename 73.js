//call apply bind

// function hello(){
//     console.log('hello world');
// }
// hello.call();// Using .call method one can call any function

function about(hobby, favMusican){
    console.log(this.firstName,this.age, hobby, favMusican);
}

const user1 = {
    firstName: "harshit",
    age:8,
    
}
const user2 = {
    firstName: "mohit",
    age:9,
}

//If we want to use the about method or fc in user1 but the value should be taken from user2

//1.call 
//call method--> if call() method is used than the value of this should be passed

// user1.about.call(user2);//The value passed in call is the value that this would take

// user1.about.call(user1);

// if about is separatly defined 
// about.call(user1,"guitar", "arijit singh");

//2.apply

//apply is same as call just the arguements have to be passed in an array 
//,not separately

// about.apply(user1, ["guitar", "AS"]); 

//3.bind

//bind binds the func in an const and that const becomes a func which we can call
// const func = about.bind(user1, "guitar", "AS");
// func();




