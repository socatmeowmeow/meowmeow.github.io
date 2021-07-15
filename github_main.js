

/*
Everything in between is a comment.
*/
// This is a comment
var myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'bmwtwo.jpg') {
      myImage.setAttribute ('src','bmw2.jpg');
    } else {
      myImage.setAttribute ('src','bmwtwo.jpg');
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
      myHeading.innerHTML = 'I love BMW, ' + myName;
    }
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'I love BMW, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }