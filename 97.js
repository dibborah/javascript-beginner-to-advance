//lexical environment, scope chaining

//lexical environment => koi chiz kaha present hain jab humne code ko write kiya

const lastName = "Vashistha";

const printName = function(){
    const firstName = "harshit";
    function myFunction(){
        console.log(firstName);
        console.log(lastName);
    }
    myFunction();
}
printName();

