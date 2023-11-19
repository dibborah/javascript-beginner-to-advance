console.log("Script Start!!!");

// Promises
// future value(earlier name)
// Promise represents the future value which we donno now but we would know it later

const bucket = ["coffee", "chips", "vegetables","salts","rice"];

// Basic Promise overview w/ Analogy

// value jo avi nhi pata par future main pta chalegi
// fried Rice => Promise (Wada)=> status -> pending ,value: undefined
// When ingredients exists
// avi fried rice bana dya
// value: fried Rice, status : fullfilled

// Again Promise of making fried rice
// value : undefined, status : pending
// Ingredients doesn't exist
// Now b/c insufficient ingredients 
// value : "error message", status : reject

// Here in promise we have passed a callback function

// There is a connection (RISTA) between this promise object and the BROWSER
const friedRicePromise = new Promise((resolve, reject)=>{
    if(bucket.includes("vegetables") && bucket.includes("rice") && bucket.includes("salt")){
        resolve({value: "friedRice"});
    }else{
        reject(new Error ("Could not do it!!!"));//making error object
    }
});

// produce a promise

// consume the promise
// how to consume ?

// console.log(friedRicePromise);

// Note :
// here .then takes two callback functions
// first retuns the resolved valued if resolved 
// 2nd returns the rejected value if rejected

// This is caring when the promise is resolved and also when the promise is rejected
// So two callback functions are passed
// Care=> Resolve & Reject

// friedRicePromise.then(
//         (myFriedRice)=>{ // pehla fc tab chalega jab promise resolve hoega// input resolved value aegi
//         console.log("Success!!!", myFriedRice);
//     }, 
//         (error)=> { // dusra fc tab chalega jab promise reject hoegi// input reject input hoegi jo v ham passed karte h Promise pe
//         console.log(error);
//     }
//     )
    
 // Care=> Resolve not Reject
//  friedRicePromise.then(
//      (myFriedRice)=> { // pehla fc tab chalega jab promise resolve hoega// input resolved value aegi
//         console.log("Success!!!", myFriedRice);
//     })

// Care=> Reject not resolve
//  friedRicePromise.then(
//     //Jab promise resolve hoga
//     null,
//      (error)=> { // dusra fc tab chalega jab promise reject hoegi// input reject input hoegi jo v ham passed karte h Promise pe
//         console.log(error);
//     })

//Note : Hamare is Promise ko Browser consume karega
// ye jo promise ko consume karne ka kam hain ye browser karega ye kam
// This below lines of code of .then and .catch goes to the browser

//BROWSER: 
// This then or catch method is added in the MICROTASK QUEUE in the browser 
// Promise is added in the MICROTASK QUEUE

// Event LOOP (Jargon)
//Priority: MICROTASK QUEUE > CALLBACK QUEUE
friedRicePromise.then(
    (friedRice)=>{
        console.log(friedRice);
    }).catch((error)=>{
        console.log(error);
    })

// Promise is not a feature of JavaScript but is a feature of the browser

// Browser also handles setTimeout like .then and .catch promise in the MICROTASK QUEUE

//Priority: MICROTASK QUEUE > CALLBACK QUEUE
//This falls in the CALLBACK QUEUE of the browser
setTimeout(()=>{
    console.log("hello from set Timeout");
},0)

for(let i = 0; i<100; i++){
    console.log(Math.random(), i);
}
console.log("Script End!!!");

//Very Important Note: 
//Note : Hamare is Promise ko Browser consume karega



