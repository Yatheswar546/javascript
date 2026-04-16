var btn = document.getElementById('btn');

btn.addEventListener('mousedown', function(){
    console.log('Mouse Down Event');
});

btn.addEventListener('mouseup', function(){
    console.log('Mouse Up Event');
});

btn.addEventListener('click', function(){
    console.log('Mouse Click Event');
});

btn.addEventListener('dblclick', function(){
    console.log('Double Click Event');
});

var over = document.getElementById('over');
var overCount = 0;
var overText = over.querySelector('p');

over.addEventListener('mouseover',function() {
    overCount ++;
    overText.innerHTML = overCount;
});

var enter = document.getElementById('enter');
var enterCount = 0;
var enterText = enter.querySelector('p');

enter.addEventListener('mouseenter',function() {
    enterCount ++;
    enterText.innerHTML = enterCount;
});

var move = document.getElementById('move');
var moveCount = 0;
var moveText = move.querySelector('p');

move.addEventListener('mousemove',function() {
    moveCount ++;
    moveText.innerHTML = moveCount;
});