const URL = "https://jsonplaceholder.typicode.com/posts";

// fetch(URL)
//     .then(response=>{
//         console.log(response);
//         // return response.json()
//     })
//     // .then(data=>console.log(data))

// Note :
// .then.then // Laga laga ke hum function ko consume karte hain

console.log("Script start");
// async function getPosts() {// async likh diya na// ab ye duty browser ki hain// browser ye kam background main karega
//     const response = await fetch(URL)// await will make this line of code wait till the fetch is not resolved with a value
//     if (!response.ok) {
//         throw new Error("Something went wrong!!!")
//     }
//     const data = await response.json();
//     //  console.log(data);
//     return data;
// }

const getPosts = async () => {// async likh diya na// ab ye duty browser ki hain// browser ye kam background main karega
    const response = await fetch(URL)// await will make this line of code wait till the fetch is not resolved with a value
    if (!response.ok) {
        throw new Error("Something went wrong!!!")
    }
    const data = await response.json();
    //  console.log(data);
    return data;
}

getPosts()
    .then(myData => console.log(myData))
    .catch(error => console.log(error));

console.log("Script End");