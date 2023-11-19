// Promise.resolve
// Promise chaining

// const myPromise = Promise.resolve(5);
// myPromise.then((value)=>
//     {
//         console.log(value);
//     }
// )

// then() :
// then() => The then method always returns a Promise
// then () method hamesa ek promise return karta hain
// .then kisi string ka anya data type pe use nhi kiya ja sakta, par hamesa sirf promise pe h use hota hain

function myPromise(){
    return new Promise((resolve, reject)=>{
        resolve("foo");// This promise only resolves never rejects
    })
}

myPromise()
.then((value)=>{
    console.log(value);
    value += "hoja";// In below line of code string is not returned but a promise is returned which is seeming as a string
    // yaha kuch nhi return karne se undefined by default return ho jaega
    return value;// Here value is a promise so here a promise is return
    // return Promise.resolve(value);// The above line of is internally working this way
    // return Promise.resolve(undefined)// kuch nhi return karne se internally aisse undefined return ho jaega
}).then((value)=>{// .then is again used to access the resolved value of the promise
    console.log(value);
    value += " Zara"
    // yaha niche kuch nhi return karne se undefined by default return ho jaega
    return value;// promise is again returned
    // return Promise.resolve(value)// The above line of is internally working this way
    // return Promise.resolve(undefined)// kuch nhi return karne se internally aisse undefined return ho jaega
}).then((val)=>{// .then() method is again used to access the value of the promise
    console.log(val);
})

//String pe .then()nhi laga skte 
//not possible
// "dibya".then((value)=>{
//     console.log(value);
// })