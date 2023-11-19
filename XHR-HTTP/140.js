const URL = "https://jsonplaceholder.typicode.com/posts";
// The URL is our API . This is the endpoint
const xhr = new XMLHttpRequest();
// console.log(xhr);

//Mujhe xhr const ko use karke apni request ko configure karna padega
//Step 1:use: open()in the obj
// console.log(xhr.readyState);
xhr.open("GET", URL);
// console.log(xhr.readyState);

// xhr.onreadystatechange = function(){
//     // console.log(xhr.readyState);
//     if(xhr.readyState === 4){
//         console.log(xhr);
//         const response = xhr.response;// response here is a JSON ,means it a string not an actual Js object just looks like one
//         const data =  JSON.parse(response);// JSON is a Js library// Converting to an Js object
//         console.log(typeof data);// This data is a Js object consisting of 100 objects in an array // An array of objects
//     }
// }

xhr.onload = function(){
    const response = xhr.response;// response here is a JSON ,means it a string not an actual Js object just looks like one
    const data =  JSON.parse(response);// JSON is a Js library// Converting to an Js object
    console.log(data);
}

xhr.send()

// Notes: 

// onreadystatechange vs onload method
// The onreadystatechange method calls when the readystate changes
// The onload method is called when the readystate is 4
// String main response mila matlab json main response mila hain
// REST API = Representational state transfer

// JSON vs JS object
// Difference between JSON and Js Object
// 1st In Js object there is no mandatory need to add double quotes or single quotes in Objects keys 
// But unlike Js object Json Object have are mandory to be written inside double quotes or single quotes
// 2nd difference is in Json key value pairs methods() can't be added unlike the Js objects were Methods can be added

// 1xx informational response – the request was received, continuing process
// 2xx successful – the request was successfully received, understood, and accepted
// 3xx redirection – further action needs to be taken in order to complete the request
// 4xx client error – the request contains bad syntax or cannot be fulfilled
// 5xx server error – the server failed to fulfil an apparently valid request