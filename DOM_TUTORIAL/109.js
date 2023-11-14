// get multiple elements using getElements by class Name
// get multiple elements using querySelector All
// array like object ---> indexing(can access the element using indexing), length property

// Note: getElementByClassName => HTMLCollection
//       querySelectorAll => NodeList

// 1. Here HTMLCollection

// const navItems = document.getElementsByTagName("a");
//Since we are about to change the navItem from an object to an array so above const variable type is changed to let
// let navItems = document.getElementsByTagName("a");// here const is changed to let

// console.log(navItems);// returns the a tag
// console.log(navItems[0]);
// console.log(navItems[1]);
// console.log(navItems[2]);
// const navItems = document.getElementsByClassName("nav-item");// HTMLCollection
// console.log(navItems);// HTMLCollection
// console.log(navItems.length);//  HTMLCollection Length

// Note: We can't use forEach loop to iterate through HTMLCollection

// Simple for loop
// for of loop
// forEach loop // Can't be used along with HTMLCollection or with the elements we get using the getElementByClassName method


//using normal for loop

// for(let i =0; i<navItems.length;i++){
//     // console.log(navItems[i]);
//    const navItem = navItems[i];
//    navItem.style.backgroundColor = "#fff";
//    navItem.style.color = "green";
//    navItem.style.fontWeight = "bold";
// }

// using for of loop

// for (let navItem of navItems) {
//     console.log(navItem);
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }

// using forEach Loop // Throws error

// forEach loop can't be use directly in HTMLCollection(navItems)
// Uncaught TypeError: navItems.forEach is not a function// This error is thrown 
// navItems.forEach(navItem => {
    //     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// });

// Note : Inorder to use forEach in HTMLCollection one has to change the HTMLCollection(Type object) to an array type
// console.log(Array.isArray(navItems));// Array.isArray()// return false since till now navItems is not converted from an Object to an Arrays
// navItems = Array.from(navItems)// navItems is changed to an Array inorder for us to use the forEach loop which can only be used in an array not in an object
// console.log(Array.isArray(navItems));// Array.isArray()// return true

// After converting : using forEach Loop //Doesn't Throws error

// navItems.forEach(navItem => {
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// });

// Note converting the HTMLCollection to an array we not just can use the forEach loop but also any methods which was earlier limited to array since nopw the navItem is an array converted by Array.from() method and initialised to an let varible type

// console.log(typeof navItems);// navItems is an object even if it looks like an array
// console.log(Array.isArray(navItems));// navItems is not an array


// 2.Now NodeList

// const navItems = document.querySelectorAll(".nav-item");// NodeList
// console.log(navItems[0]);// 1st element
// console.log(navItems[1]);// 2nd element
// console.log(navItems[2]);// 3rd element

let navItems = document.querySelectorAll("a");
// console.log(navItems);


// 1.using normal for loop

// for(let i =0; i<navItems.length;i++){
//     // console.log(navItems[i]);
//    const navItem = navItems[i];
//    navItem.style.backgroundColor = "#fff";
//    navItem.style.color = "green";
//    navItem.style.fontWeight = "bold";
// }

// 2.using for of loop

// for (let navItem of navItems) {
//     console.log(navItem);
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }

// 3. using forEach loop

// navItems.forEach(navItem => {
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// });

// Note: In NodeList like array one can use
//1. for loop
//2. for of loop
// 3. Also forEach loop .Unlike HTMLCollection by getElementByClassName()

//Note: Unlike HTMLCollections NodeList can use be use forEach loop to iterate elements

// If we want we can also convert Nodelist to an array for us to use all the other array method when necessay

// Converting the NodeList to an Array
// navItems = Array.from(navItems);
// console.log(Array.isArray(navItems));