

/*
Everything in between is a comment.
*/
// This is a comment
var myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/bmwtwo.jpg') {
      myImage.setAttribute ('src','images/bmw2.jpg');
    } else {
      myImage.setAttribute ('src','images/bmwtwo.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'BMW is cool, ' + myName;
    }
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'BMW is cool, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }