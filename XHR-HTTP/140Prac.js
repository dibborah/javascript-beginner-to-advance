const xhr = new XMLHttpRequest();
// console.log(xhr);

const URL = "https://jsonplaceholder.typicode.com/posts"

// console.log(xhr.readyState);
xhr.open("GET", URL);

// xhr.onreadystatechange = function(){
//     if (xhr.readyState === 4) {
//         console.log(xhr.readyState);  
//         const response = xhr.response;
//         const data = JSON.parse(response)
//         console.log(data);    
//     }     
// }

xhr.onload = function () {
   const response = xhr.response;
   const data = JSON.parse(response)
   console.log(typeof data);
   console.log(typeof response);
}

xhr.send();
