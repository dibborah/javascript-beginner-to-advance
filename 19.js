// switch statement

// using if else 
// solving this week conditional problem 

// let day = 0;

// if (day === 0) {
//     console.log("Sunday");    
// }
// else if(day === 1){
//     console.log("mon");
// }
// else if(day === 2){
//     console.log("tue");
// }
// else if(day === 3){
//     console.log("wed");
// }
// else if(day === 4){
//     console.log("thu");
// }
// else if(day === 5){
//     console.log("fri");
// }
// else if(day === 6){
//     console.log("sat");
// }
// else{
//     console.log("Invalid input");
// }


// using switch case 

let day = 3;

//Here the break statements are not used
// When break statements are not used , whenever one condition of any case is satisfied switch will print all the console remaining below it.One can see it on the code below where I have removed the break statements.
//To avoid that, the break statements are used inside case conditions
//That whenever one case is satisfied the execution break the iteration

switch (day) {
    case 0:
        console.log("Sunday");

    case 1:
        console.log("Monday");

    case 2:
        console.log("Tuesday");

    case 3:
        console.log("Wednesday");

    case 4:
        console.log("Thursday");

    case 5:
        console.log("Friday");

    case 6:
        console.log("Saturday");

    default:
        console.log("Invalid Input");
}


// Here the break statements are used so once the case is satisfied the execution inside switch is broken and all the cases below the satisfied condition are not executed

// switch (day) {
//     case 0:
//         console.log("Sunday");
//         break;
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     default:
//         console.log("Invalid Input");
// }

