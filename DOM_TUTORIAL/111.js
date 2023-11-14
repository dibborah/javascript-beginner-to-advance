// Document is the Root Node
// Document ===> Root Node
// HTML ===> Root element (of HTML itself)

// Note : The broswer Ignores 1st the New line character(\n) and the extra space character after the HTML starts and also the one before the HTML tag closes
// This two child are the only child the browser ignores in the DOM TREE
// So orginal HTML has 5 childs : [text, head, text, body, text] but Browser ignore the 1st and the last child in the DOM TREE
// So implies we get the child of HTML as : [head, text, body]

//Getting the root node => document in Readble format if logged(log) not dirred(dir)

const rootNode = document.getRootNode();
// console.log(rootNode);// gives the root node
// console.dir(rootNode);// gives the root node (document) in object format since it is originally an object
// const htmlElementNode = rootNode.childNodes;
// console.log(htmlElementNode);// human readable format
// console.dir(htmlElementNode);// Since htmlElementNode is a object so ... we can also see the object representation or the actual representation

//Child Relationship

// const htmlElementNode = rootNode.childNodes[0];
// console.log(htmlElementNode.childNodes);//NodeList(3) [head, text, body]
// const headElementNode = htmlElementNode.childNodes[0];
// const textNode1 = htmlElementNode.childNodes[1];
// const bodyElementNode = htmlElementNode.childNodes[2];
// console.log(headElementNode);
// console.log(textNode1);
// console.log(bodyElementNode);

//Parent Relationship

// console.log(headElementNode.parentNode);// Returns the HTML Node
// console.log(textNode1.parentNode);// Returns the HTML Nod
// console.log(bodyElementNode.parentNode);// Returns the HTML Nod


// Sibling Relationship

// console.log(headElementNode.nextSibling);// text node is returned , which is the immediate next sibling of head
// console.log(headElementNode.nextSibling.nextSibling);// return body node which is immediate next sibling of the text node
// const sib = headElementNode.nextSibling;// Another way to return body node which is the immediate next sibling of text node
// console.log(sib.nextSibling);// body node is returned

// console.log(headElementNode.nextSibling);

// In the display screen of the browser the browser ignore all the text Nodes and only displays the element Node

// ChildNodes of the head Node
// console.log(headElementNode.childNodes);

// task
// Heading select => parent background color and text color change

// Task using nodes and parent and child relations

// const htmlElementNode = rootNode.childNodes[0];
// console.log(htmlElementNode.childNodes);
// const bodyElementNode = htmlElementNode.childNodes[2];
// console.log(bodyElementNode.childNodes[1]);
// const divElementNode = bodyElementNode.childNodes[1];
// console.log(divElementNode.style.backgroundColor="blue");
// console.log(divElementNode.style.color="white");

// Task using DOM
// This is called DOM Traversing

// const h1 = document.querySelector("h1");
// console.log(h1.parentNode);
// const div = h1.parentNode;
// const body = h1.parentNode.parentNode;// This is the hierarchy
// We can transverse from childNode to childNode and also from parentNode To parentNode
// console.log(div);
// body.style.backgroundColor = "red";
// body.style.color = "white";

// Ways to access the body directly

// const body = document.body;
// console.log(body);
// body.style.backgroundColor = "red";
// body.style.color = "white";

// To access the head direactly
// const head = document.head;
// console.log(head);

// Using DOM
// const head = document.querySelector("head");// Since in the document object the head lies so we search the head property in the document
// console.log(head);
// const title = head.querySelector("title");// After receiving the head // Since in the head object the title property lies and we have seen in the DOM Tree so we accessed the title properrty from the head object this time and not from the document object
// console.log(title.childNodes);

// //One way to get the div element
// const div = document.querySelector("div");
// console.log(div);

//Another way to get the div element
const container = document.querySelector(".container");
console.log(container.childNodes);// text nodes(new line and white spaces) are returned along with the element nodes
// NodeList is returned when childNodes property is used
console.log(container.children);// Only element nodes are returned// text nodes are not returned unlike childNodes
// HTMLCollection is returned when children property is used

// Note: 
// Only getRootNode() is a method // See the parenthesis
// Others:
//childNodes , parentNode, children, nextSibling are properties not method
