function hello(){
    console.log("hello world");
}

// const hello = {
//     key: 'value',
// }
// const hello = ["value"];

//JS fc = function + object

// hello.name();//name is a  property which will give the name of the fucntion

//way to add your own property

// hello.myOwnProperty = 'very unique way';
// console.log(hello.myOwnProperty);

//name property => tells fc name

// fucntion provides more useful property
//like call apply and bind

//Funcition gives us empty object

// __proto__ or [[Prototype]] //new object create kribi tetia juntu object pass koro heitu prototype ot thake// access korat easy hoi

console.log(hello.prototype); // the empty object is called prototype// bydefault exisitng empty object in a function 

// use of prototype 

// why do prototype exist 
// if we need to add some properties related to this fc than we will use prototype 

// In the prototype there is only one property which is the constructor with value which is the function 


// only functions provide prototype property 

// if (hello.prototype) {
//     console.log("prototype is present");
// } else {
//     console.log("prototype is absent");
// } 

// __proto__ or [[prototype]] free nhi milta vai //humme use dalna parta hain

// par prototype hume free milta hain (ek empty object) sabhi function ke sath

// hello.prototype.abc = "abc";
// hello.prototype.xyz = "xyz";
// hello.prototype.sing = function(){
//     return "lalala"
// };
// console.log(hello.prototype.sing());