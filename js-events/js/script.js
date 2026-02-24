////////////// Events & Event Listeners /////////////////////

var btn = document.getElementById('btn');
var body = document.querySelector('body');

// console.log(body);

// console.log(div);

// using event property
// btn.onclick = function(){
//     alert("Button is clicked");
// }

// using addEventListener
// btn.addEventListener('click', function(){
//     alert('Hello');
// });

function bg(){

    // var randomNum = Math.floor(Math.random() * 255);
    // alert("rgb("+ randomNum + "," + 45 + "," + 155 + ")");
    // body.style.backgroundColor = "rgb("+ randomNum + "," + 45 + "," + 155 + ")";
    // body.style.backgroundColor = "green";
}

// btn.onclick = bg;


//////////////////// ADD , REMOVE & TOGGLE Classes ///////////////
var heading = document.getElementById('heading');

console.log(heading.classList);
console.log(heading.classList.add('big'))
// console.log(heading.classList.remove('small')) 
// console.log(heading.classList);


setTimeout(function(){
    heading.classList.remove('big');
},1000);


var toggle_btn = document.getElementById('toggle-btn');

var navbar = document.getElementById('navbar');

toggle_btn.addEventListener('click', function() {
    if(navbar.classList.contains('show')){
        navbar.classList.remove('show');
        navbar.classList.add('hide');
    }else{
        navbar.classList.remove('hide');
        navbar.classList.add('show');
    }

});

///////////////////// Getting elements styles //////////////////

var btnincrease = document.getElementById('btn-increase');
var btndecrease = document.getElementById('btn-decrease');

var heading = document.getElementById('heading');

console.log(btnincrease.style.marginLeft);
console.log(window.getComputedStyle(btnincrease).marginLeft);
console.log(window.getComputedStyle(btndecrease).fontSize);

var initialSize = window.getComputedStyle(heading).fontSize;
initialSize = parseInt(initialSize.substring(0, (initialSize.length - 2)))

heading.style.fontSize = parseInt(initialSize) + 100 + 'px';

btnincrease.onclick = function () {
    initialSize += 10;
    heading.style.fontSize = initialSize + 'px';
}

btndecrease.addEventListener('click', function (){
    initialSize -= 10;
    heading.style.fontSize = initialSize + 'px';
})