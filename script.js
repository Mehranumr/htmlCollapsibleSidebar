// the hello world program
alert('Hello World');
console.log('Hello World');

var tag = document.createElement("p");
var text = document.createTextNode("I am exprimenting something");
tag.appendChild(text);
var element = document.getElementById("new");
element.appendChild(tag);
