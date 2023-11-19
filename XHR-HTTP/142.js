const URL = "https://jsonplaceholder.typicode.com/posts"

const sendRequest = (method, url) => {
    return new Promise ((resolve, reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = ()=>{
            if(xhr.status >= 200 && xhr.status <300){
                resolve(xhr.response);
            }else{
                reject(new Error("Response Failed!!!"))
            }
        }
        xhr.onerror = () => {
            reject(new Error("Something went wrong!!!"))
        }
        xhr.send();
    })
}

sendRequest("GET", URL)
    .then(response=>{
    const data = JSON.parse(response);
    // console.log(data);
    return data;
}).then(data=>{
    const id = data[3].id;
    return id;
}).then(id=>{
    // console.log(id);
    const url = `${URL}/${id}`
    // console.log(url);
    return sendRequest("GET", url)
}).then( newResponse =>{
    // console.log(newResponse);
    const newData = JSON.parse(newResponse);
    console.log(newData);
}).catch(error=>{
    console.log(error);
})


// const myPromise = sendRequest("GET", URL);
// console.log(myPromise);