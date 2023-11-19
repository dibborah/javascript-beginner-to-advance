//callback hell to flat code

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading20");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

function changeText(element, text, color, time) {
    return new Promise((resolve, reject)=>{// This body is called executor's body
        setTimeout(() => {
            if (element) {
                element.textContent = text;
                element.style.color = color;
                resolve()
            } else {
                reject(new Error("Element not found"));
            }
        }, time)
    })    
}
//callback hell to flat code

// changeText(heading1, "One", "red", 1000)
// .then(()=>{
//     return changeText(heading2, "Two", "blue", 1000);
// }).then(()=>{
//     return changeText(heading3, "Three", "yellow", 1000);
// }).then(()=>{
//     return changeText(heading4, "Four", "green", 1000);
// }).then(()=>{
//     return changeText(heading5, "Five", "purple", 1000);
// }).then(()=>{
//     return changeText(heading6, "Six", "violet", 1000);
// }).then(()=>{
//     changeText(heading7, "Seven", "orange", 1000);
// })

const returnPromise = changeText(heading1, "One", "red",1000)
.then(()=>changeText(heading2, "Two", "blue", 1000))
.then(()=>changeText(heading3, "Three", "yellow", 1000))
.then(()=>changeText(heading4, "Four", "green", 1000))
.then(()=>changeText(heading5, "Five", "purple", 1000))
.then(()=>changeText(heading6, "Six", "brown", 1000))
.then(()=>changeText(heading7, "Seven", "violet", 1000))
.catch((error)=>{
    alert(error);
})
