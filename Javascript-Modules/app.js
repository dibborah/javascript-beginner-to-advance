import Name,{ firstName as fname} from "./utils/fname.js";// Here with the "as" keyword one can name or shorten the name of the exported constants and set and use their own made up names  
import { age } from "./utils/age.js"
import something,{Person,Person2} from "./utils/Person.js";// Since class Person is export default means the default keyword is also used so the curly braces shouldn't have to be used
// import p from "./utils/Person.js";// since this is the export default so one can give it any name// and used it // In export default you can name the imported component any name 

// console.log(fname, age);

const person = new Person(Name, "borah", age);
// console.log(person);
person.info();
console.log(something);// something default to kuch v naam do// kiuki ek hi default hota h file main jisko link kiya gaya hain to js compiler samaj jaega konsa export default hain apne aap chahe koi v naam hum de

//Note: 
// jin components ko curly braces main import kiya jata hain jo default export nhi hain unko named export bolte hain
// We export and import 1.classes 2. functions 3. constants 4. objects 5. Arrays and so on

//kuch v export aur import ho skta hain

// Note:
// if only export keyword is used when one import curly braces have to be used
// but only when used export default means exports as default then when importing the export default doesnot have to use the curly braces