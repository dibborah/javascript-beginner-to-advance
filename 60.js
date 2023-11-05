// sort method

// ASCII TABLE
// char : ascii value

// sort --> this method mutates the original state//Meaning it can change value or properties of the original array
// Some Differences of sort in comparision with other methods in an array
// forEach, map, filter is immutable ==> meaning it doesnot changes the original array but returns an new array
// sort on the other hand is mutable ==> meaning it changes the original array

//sort

//task
//5, 9, 1200, 400, 3000 // The Q' Array
//5, 9, 400, 1200, 3000 // Expected Result

// const numbers = [5, 9, 1200, 400, 3000];

// numbers.sort();
// console.log(numbers);// [1200, 3000, 400, 5, 9];//But why?
//Why the about sort result came as I have commented above
//Why? Let us understand!!!

// const numbers = [ 5, 9, 1200, 400, 3000 ];
// javascript converts all the element to be sort in the array to strings 
// ["5", "9", "1200", "400", "3000"];
// Then it checks the ascii value of the 1st number of each element 
// [53, 57, 49, 52, 51];=> a/f sorting [49, 51, 52, 53,57] implies => ["1200", "3000", "400", "5", "9"];
//This is the reason Js sort array or mutates array in this manner

//TASK TO sort the array of names alphbetically

// const userNames = ["dibya", "shaswath","onion", "yanshik","cigarettes","rithik","allu","abc", "X", "abc"];
// userNames.sort();
// console.log(userNames);
//In sorting Capital Letter/ uppercase letters have got highest priority then lowercase letter since in the ascii values it is in that manner
//Ex. of the upper line point is That Z(capital Z){acii value of z is 90} has got higher priority than a(lowerCase a){ascii value of a is 97};=> 90 < 97 so bigger Z is smaller or ascending or in higher priority than small a which is descending or in lower priority
//If we want to sort strings of characters and not numbers then sort method is a blessing


//Solving the first task

// In Acending Order

// const numbers = [5, 9, 1200, 400, 3000];

// numbers.sort((a, b) => {
//     return a - b;
// });//aise v likh sakte hain

// numbers.sort((a,b)=>a-b);//aur aise v likh sakte hain

// console.log(numbers);

// 1200,410 - 1st case
// 790
// a-b => positive (greater than 0)=> b,a (b will come first than a in the output in this case);
// Output => 410, 1200

// 5,9
// a-b = > -4 => negative(less than 0) = > a,b (a will come first of b in the output in this case );
// Output => 5, 9


// In Descending Order

// const numbers = [5, 9, 1200, 400, 3000];

// numbers.sort((a,b)=>{
//     return b-a;
// })

// console.log(numbers);

// 5,9 => b-a => positive => b,a and vice versa


//Sorting number very important point

//In Ascending Order => a-b;
//In Descending Order => b-a;

//Real Life sorting example 
//Sorting prices in a e-commerce site may be flipkart

const products = [
    {productId:1, productName:"p1", price:360},
    {productId:2, productName:"p2", price:3000},
    {productId:3, productName:"p3", price:200},
    {productId:4, productName:"p4", price:8000},
    {productId:5, productName:"p5", price:500},
]

// Sorting Low To High

// This is mutating the original products array 
// I do not want that so lets clone it
// products.sort((a,b)=>a.price - b.price);
// console.log(products);

// const lowToHigh =  products.slice(0).sort((a,b)=> a.price - b.price);
// console.log(products);
// console.log(lowToHigh);

// Sorting High To Low
const highToLow =  products.slice(0).sort((a,b)=> b.price - a.price);
console.log(products);
console.log(highToLow);
