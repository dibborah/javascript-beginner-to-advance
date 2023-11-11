function CreateUser(firstName, lastName, email, age, address){

    //oldest way
    const user = {};

    //old way
    // const user = Object.create(createUser.prototype);
    // user.firstName = firstName;
    // user.lastName = lastName;
    // user.email = email;
    // user.age = age;
    // user.address = address;
    // return user;

    //new way
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}

// console.log(createUser.prototype); 

CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years`;
}
CreateUser.prototype.is18 = function(){
    return this.age >= 18;
}
CreateUser.prototype.sing = function(){
    return "lalala lal lal";
}

// console.log(createUser.prototype.about());

//old way

// const user1 =  createUser("dibya", "borah", "d@gmail.com",6, "Noida");
// const user2 =  createUser("elon", "musk", "e@gmail.com",51, "LA");
// const user3 =  createUser("steve", "jobs", "s@gmail.com",37, "SF");

//new way

const user1 = new CreateUser("dibya", "borah", "d@gmail.com",6, "Noida");
const user2 = new CreateUser("elon", "musk", "e@gmail.com",51, "LA");
const user3 = new CreateUser("steve", "jobs", "s@gmail.com",37, "SF");

for (let key in user1){
    // console.log(key);
    if(user1.hasOwnProperty(key)){
        console.log(key);
    }
} 