// select element using query selector

// Note : when using querySelector or querySelectorAll one has to mentor the type of query
// For ex. : # for id and . for class

// const mainHeading = document.querySelector("#main-heading");// For ID use "#""
// const header = document.querySelector(".header");
// const navItem = document.querySelector(".nav-item");//Even if multiple elements with same class nav-item was present Js return only the 1st element with the class anv-item

//But if one wants all the elements with the same class then we have another DOM method to do so :
const navItem = document.querySelectorAll(".nav-item");// Return not just the first but all the elements with class name nav-items
// querySelectorAll returns a nodeList . nodeList is like an array but is not an array

// console.log(mainHeading);
// console.log(header);
console.log(navItem);

