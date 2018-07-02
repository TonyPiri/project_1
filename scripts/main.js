/*
var myCar = new Object(); 

myCar.make = "Huyndai"; 
myCar.model = "Solaris"; 
myCar.year = "2018";
*/ 

var myHeading = document.querySelector("h1"); 
var myButton = document.querySelector("button");

myHeading.textContent = "Добро пожаловать!"; 

/*var myHTML = document.querySelector('html');
myHTML.onclick = function() {
    alert("Hello World"); 
}
*/

//Change image onClick
var myImage = document.querySelector("img"); 
myImage.onclick = function() {
    var mySrc = myImage.getAttribute("src"); 
    if(mySrc === "images/image.jpg") {
        myImage.setAttribute("src", "images/image_2.jpg"); 
    }
    else {
        myImage.setAttribute("src", "images/image.jpg"); 
    }
}

//Change user

function setUserName() {
    var myName = prompt("Enter your name."); 
    localStorage.setItem("name", myName); 
    myHeading.innerHTML = "Добро пожаловать, " + myName + "!";
}

if(!localStorage.getItem("name")) {
    setUserName(); 
}
else {
    var storedName = localStorage.getItem("name"); 
    myHeading.innerHTML = "Добро пожаловать, " + storedName +"!"; 
}

myButton.onclick = function() {
    setUserName(); 
}