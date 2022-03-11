var myImg = document.querySelector('img');
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

myImg.onclick = function() {
    if (myImg.getAttribute('src') === 'images/tailuo.jpg') {
        myImg.setAttribute('src', 'images/ruoyousuosi.png');
    } else {
        myImg.setAttribute('src', "images/tailuo.jpg");
    }
}

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

myButton.onclick = function() {
    setUserName();
  }
  

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}