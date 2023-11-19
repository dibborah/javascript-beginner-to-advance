// fetch

const URL = "https://jsonplaceholder.typicode.com/posts"

// console.log(fetch(URL));
fetch(URL,{
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
.then(response=>{
    // console.log(response);
    if(response.ok){
        return response.json();// json() method is used to parse the JSON string
    }else{
        throw new Error("Something went wrong!!!")
    }
}).then(data => {
    console.log(data);
    return data;
}).then(newData=>{
    // console.log(newData);
}).catch(error=>{
    console.log("Inside catch");
    console.log(error);
})