const userMethod = {
    about: function (){
        return `${this.firstName} is ${this.age} years`;
    },
    is18 : function(){
        return this.age >= 18;
    },
    sing: function(){
        return "lala lala la";
    }
}

function createUser(firstName, lastName, email, age, address){
    // const user = {};
    const user = Object.create(userMethod);// empty objcet and also giving the proto object properties// all the chains of methods in proto
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}

const user1 = createUser("dibya", "borah", "d@gmail.com",6, "Noida");
const user2 = createUser("elon", "musk", "e@gmail.com",51, "LA");
const user3 = createUser("steve", "jobs", "s@gmail.com",37, "SF");

console.log(user1.about());
console.log(user2.about());
console.log(user3.about());