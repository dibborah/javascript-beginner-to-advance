// callbacks, callbacks hell, pyramid of doom
// asynchronous programming

// console.log("hello universe");

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

// setTimeout(() => {
//     heading1.textContent = "Heading 1"; 
//     heading1.style.color= "red";    
//     setTimeout(() => {
//         heading2.textContent = "Heading 2";    
//         heading2.style.color= "gold";    
//     }, 1000);
// }, 1000);


// callback hell
// setTimeout(() => {
//     heading1.textContent = "One";
//     heading1.style.color = "violet"
//     setTimeout(() => {
//         heading2.textContent = "Two";
//         heading2.style.color = "purple"
//         setTimeout(() => {
//             heading3.textContent = "Three";
//             heading3.style.color = "red";
//             setTimeout(() => {
//                 heading4.textContent = "Four";
//                 heading4.style.color = "pink";
//                 setTimeout(() => {
//                     heading5.textContent = "Five";
//                     heading5.style.color = "green";
//                     setTimeout(() => {
//                         heading6.textContent = "Six";
//                         heading6.style.color = "blue"
//                         setTimeout(() => {
//                             heading7.textContent = "Seven";
//                             heading7.style.color = "brown"
//                         }, 1000)
//                     }, 3000)
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

// Text Delay Color

// one   1s     Violet
// two   2s     purple
// three 2s     red

// four  1s     pink
// five  2s     green
// six   3s     blue
// seven 1s     brown

function changeText(element, text, color, time, onSuccessCallback, onFailureCallback) {
    setTimeout(() => {
        if (element) {
            element.textContent = text;
            element.style.color = color;
            if (onSuccessCallback) {
                onSuccessCallback();
            }
        } else {
            if (onFailureCallback) {
                onFailureCallback();
            }
        }
    }, time)
}

// changeText(heading1, "One", "red", 1000, ()=>{
//     changeText(heading2, "Two", "blue", 1000)
// })

// pyramid of doom
changeText(heading1, "ONE", "green", 1000, () => {
    changeText(heading2, "TWO", "red", 1000, () => {
        changeText(heading3, "THREE", "yellow", 1000, () => {
            changeText(heading4, "FOUR", "violet", 1000, () => {
                changeText(heading5, "FIVE", "purple", 1000, () => {
                    changeText(heading6, "SIX", "orange", 1000, () => {
                        changeText(heading7, "SEVEN", "gold", 1000, () => {
                            
                        }, () => {console.log("Heading 6 doesn't exist")})
                    }, () => {console.log("Heading 6 doesn't exist")})
                }, () => {console.log("Heading 5 doesn't exist")})
            }, () => {console.log("Heading 4 doesn't exist")})
        }, () => {console.log("Heading 3 doesn't exist")})
    }, () => {console.log("Heading 2 doesn't exist")})
}, () => {console.log("Heading 1 doesn't exist")})
