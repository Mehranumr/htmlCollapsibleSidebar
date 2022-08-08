// the hello world program
alert('Hello World New');
console.log('Hello World New');

var tag = document.createElement("p");
var text = document.createTextNode("I am exprimenting something");
tag.appendChild(text);
var element = document.getElementById("new");
element.appendChild(tag);