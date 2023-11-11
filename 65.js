// splice method -> This method mutates 
//start , delete , insert

// const myArray = ['item1', 'item2','item3'];

// storing the deleteItem in a constant variable and  consoling it 
// const deleteItem = myArray.splice(1,1,);
// console.log("Deleted Item",deleteItem);//The splice method also returns the deleted items which can can console

//Deleting the 2nd item on index one starting from index one , and giving the delete count 1
// myArray.splice(1,1);// output -->Deleting item2 on index 1 
//1st arguement starting from index 1, 2nd arguement deleting index 1, 3rd parameter the insert parameter is not given
// console.log(myArray);

//Deleting two item and giving the delete count 2 starting from index 1
// myArray.splice(1,2);
// console.log(myArray);

// myArray.splice(1,0, "inserted item");// the string "inserted item" got added on starting index index 1 and no item got deleted as the second arguement the delete arguement was never passed
// console.log(myArray);

//insert and delete simultaneously

// console.log(myArray);//Before
// myArray.splice(1,2,"Add item1","Add item3","Add item2");
// console.log(myArray);//After delete and insert items at the same time

// Catching the returned inserted and deleted items simultaneously

// const deletedItems =  myArray.splice(1,2,"Add item1","Add item3","Add item2");
// console.log(deletedItems);//Consoling the returned deleted items , "item2" and "item3" in the console
