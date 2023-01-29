// document.getElementsByClassName("list-group-item").style.backgroundColor="blue";
console.log("domain");


var item3 = document.getElementById("items").getElementsByTagName("li")[2];
item3.style.color = "green";

var ul = document.getElementById("items");
var li = document.createElement("li");
li.className = "list-group-item";
li.innerHTML = "Item 5";
ul.appendChild(li);