// optional Chaining

let user;

console.log(user?.firstname);// ? is the optional chaining which gives option to the code that after ? whatever the key is if it exist the code should proceed and should return the value and if it doesnot exist or if is undefined should return undefined , shouldnot throw error 
console.log(user?.address?.houseNumber);