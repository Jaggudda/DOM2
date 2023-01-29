// document.getElementsByClassName("list-group-item").style.backgroundColor="blue";
console.log("domain");


//var item3 = document.getElementById("items").getElementsByTagName("li")[2];
//item3.style.color = "green";

var ul = document.getElementById("items");
var li = document.createElement("li");
li.className = "list-group-item";
ul.appendChild(li);

var item2 = document.getElementById("items").getElementsByTagName("li")[1];
item2.style.backgroundColor = "green";


let item3 = document.getElementsByClassName("list-group-item")[2];
item3.style.display = "none";