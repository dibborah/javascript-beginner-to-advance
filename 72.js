// this keyword

// console.log(this);// prints a window object which is the global object in js//This object has many methods like alert , onclick, mouseover and many many more as keys provided by Js
// console.log(window);// output ---> same as above line of code // Same as this
//In this context the meaning of this and window keyword are the same

//# Note : this on the console returns the Js window object
//# Note : window on the console also returns the Js window object

// console.log(this === window);//output ---> true

// "use strict"// Restricts so that the fc won't be able to be called directly if "use strict" mode is used
// function myFunc(){// this myFunc fc is added in the window object of JavaScript
//     console.log(this);
// }

// window.myFunc();//One can also do this since when call or defined this fc got added in the window object
// this.myFunc();//This also can be done since this returns the window object which is the global object of javascript
// window.myFunc();

// myFunc();

