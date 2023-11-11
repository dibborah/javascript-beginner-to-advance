// find method

// const myArray = ["hello", "cat", "dog", "lion"];

// function isLength(string){
//     return string.length === 3;
// }

// const ans = isLength("dog")
// console.log(ans);

// const ans = myArray.find(isLength);//output cat came b/c the first occurance with three as a length in the array is cat
// console.log(ans);

// const ans = myArray.find((string)=> string.length===3);//output cat came b/c the first occurance with three as a length in the array is cat
// console.log(ans);

const users = [
    {userId: 1, userName: "dibya"},
    {userId: 2, userName: "shashwath"},
    {userId: 3, userName: "yanshik"},
    {userId: 4, userName: "mohammad"},
    {userId: 5, userName: "aditya"},
];

const myUser = users.find((user)=> user.userId === 3);
console.log(myUser);
