// Your JS goes here
var body = document.getElementsByTagName('body')[0];
body.style.margin = "0";
body.style.padding = "0";


var redSquare = document.createElement('div');

redSquare.style.margin = "0";
redSquare.style.padding = "0";
redSquare.style.paddingBottom = "11.1%";
redSquare.style.width = "11.1%"
redSquare.style.float = "left";
redSquare.style.backgroundColor = "red";


var blackSquare = document.createElement('div');

blackSquare.style.margin = "0";
blackSquare.style.padding = "0";
blackSquare.style.paddingBottom = "11.1%";
blackSquare.style.width = "11.1%"
blackSquare.style.float = "left";
blackSquare.style.backgroundColor = "black";

body.appendChild(redSquare);
body.appendChild(blackSquare);

var red = body.appendChild(redSquare);
var black = body.appendChild(blackSquare);