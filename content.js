document.documentElement.style.height = '100%';
document.body.style.height = '100%';
document.documentElement.style.width = '100%';
document.body.style.width = '100%';

var div = document.createElement( 'div' );
var h = document.createElement('h1');

//append all elements
document.body.appendChild( div );
//set attributes for div
div.id = 'myDivId';
div.style.position = 'fixed';
div.style.top = '25%';
div.style.left = '70%';
div.style.width = '30%';   
div.style.height = '80%';
div.style.backgroundColor = 'red';

// position: fixed;
// top: 25%;
// left: 70%;
// width: 100%;
// height: 80%;
// background-color: red;

//set attributes for btnForm

//set attributes for btn
//"btn.removeAttribute( 'style' );

div.appendChild(h);
h.id = "#id1";

