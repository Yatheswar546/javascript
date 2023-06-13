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
over.addEventListener('mouseover',function() {
    var count = document.querySelector('#over > p');
    overCount += 1;
    count.innerHTML = overCount;
});

