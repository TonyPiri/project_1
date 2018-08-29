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
    if(mySrc === "images/1.jpg") {
        myImage.setAttribute("src", "images/2.jpg"); 
    }
    else {
        myImage.setAttribute("src", "images/1.jpg"); 
    }
}

//Change user

function setUserName() {
    var myName = prompt("Enter your name."); 
    localStorage.setItem("name", myName); 
    myHeading.innerHTML = "Добро пожаловать, <br>" + myName + "!";
}

if(!localStorage.getItem("name")) {
    setUserName(); 
}
else {
    var storedName = localStorage.getItem("name"); 
    myHeading.innerHTML = "Добро пожаловать, <br>" + storedName +"!"; 
}

myButton.onclick = function() {
    setUserName(); 
}