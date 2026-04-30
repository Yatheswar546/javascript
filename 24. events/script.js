////////////// Events & Event Listeners /////////////////////

var btn = document.getElementById('btn');
var body = document.querySelector('body');

// console.log(body);

// console.log(div);

// using event property
btn.onclick = function(){
    alert("Button is clicked");
}

// using addEventListener
btn.addEventListener('click', function(){
    alert('Hello');
});

function bg(){
    var randomNum = Math.floor(Math.random() * 255);
    alert("rgb("+ randomNum + "," + 45 + "," + 155 + ")");
    body.style.backgroundColor = "rgb("+ randomNum + "," + 45 + "," + 155 + ")";
    body.style.backgroundColor = "green";
}

btn.onclick = bg;


//////////////////// ADD , REMOVE & TOGGLE Classes ///////////////
var heading1 = document.getElementById('heading1');

heading1.classList.add('big');

// console.log(heading1.classList);
// console.log(heading1.classList.add('big'))
// console.log(heading1.classList.remove('small')) 
// console.log(heading1.classList);


setTimeout(function(){
    heading1.classList.remove('big');
},1000);


var toggle_btn = document.getElementById('toggle-btn');

var navbar = document.getElementById('navbar');

// Logic 1
toggle_btn.addEventListener('click', function() {
    if(navbar.classList.contains('show')){
        navbar.classList.remove('show');
        navbar.classList.add('hide');
    }else{
        navbar.classList.remove('hide');
        navbar.classList.add('show');
    }
});

// Logic 2
// toggle_btn.addEventListener('click', function() {
//     navbar.classList.toggle("show"); 
// });


///////////////////// Getting elements styles //////////////////

var btnincrease = document.getElementById('btn-increase');
var btndecrease = document.getElementById('btn-decrease');

var heading2 = document.getElementById('heading2');

// console.log(btnincrease.style.marginLeft);
// console.log(window.getComputedStyle(btnincrease).marginLeft);
// console.log(window.getComputedStyle(btndecrease).fontSize);

var initialSize = window.getComputedStyle(heading2).fontSize;
initialSize = parseInt(initialSize.substring(0, (initialSize.length - 2)))

// heading.style.fontSize = parseInt(initialSize) + 100 + 'px';

btnincrease.onclick = function () {
    initialSize += 10;
    heading2.style.fontSize = initialSize + 'px';
}

btndecrease.addEventListener('click', function (){
    initialSize -= 10;
    heading2.style.fontSize = initialSize + 'px';
})