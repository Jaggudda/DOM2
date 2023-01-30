// document.getElementsByClassName("list-group-item").style.backgroundColor="blue";
console.log("domain");


//var item3 = document.getElementById("items").getElementsByTagName("li")[2];
//item3.style.color = "green";

/* var ul = document.getElementById("items");
var li = document.createElement("li");
li.className = "list-group-item";
ul.appendChild(li);

var item2 = document.getElementById("items").getElementsByTagName("li")[1];
item2.style.backgroundColor = "green";


let item3 = document.getElementsByClassName("list-group-item")[2];
item3.style.display = "none";

let item4 = document.getElementsByClassName("list-group-item")[3];
item4.style.backgroundColor='red';  */

var newDiv = document.createElement('div');
newDiv.className='hello';
newDiv.id= 'hello 1';
var newDivText = document.createTextNode('Hello World!');
newDiv.appendChild(newDivText);
console.log(newDiv);

var container = document.querySelector("header .container");
var h1 = document.querySelector('header h1');
newDiv.style.fontSize = '30px';
container.insertBefore(newDiv,h1);

var newLine = document.createElement("li");
    var newText = document.createTextNode("Hello World");
    newLine.appendChild(newText);
    var item1 = document.querySelector("#items li:nth-child(1)");
    var itemsList = document.querySelector("#items");
    itemsList.insertBefore(newLine, item1);