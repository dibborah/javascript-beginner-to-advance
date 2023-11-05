// filter method

const numbers = [1,3,2,6,4,8];

const isEven = (number,index) =>{
    // console.log(index);
    return number%2===0;
}
const even = numbers.filter(isEven);//callback fc
console.log(even);

const isOdd = (number,index) =>{
    // console.log(index);
    return number%2!==0;
}
const odd = numbers.filter(isOdd); //callback fc
console.log(odd);
//filter function always returns true or false 
//filter function also can take the index number as the 2nd parameter along with the element value which is the 1st parameter