var countdownelement = document.getElementById('countdown');
var bgimgelement = document.getElementById('bg-image');

// console.log(bgimgelement.src);

var initialcountdown = countdownelement.innerHTML;

var interval = setInterval(function() {
    initialcountdown = initialcountdown > 0 ? initialcountdown -= 1 : 0;

    countdownelement.innerHTML = initialcountdown;

    // countdownelement.style.fontSize = initialcountdown * 100 + "px";

    // bgimgelement.style.width = initialcountdown * 10 + "%";

    var backimgpath = initialcountdown % 2 === 0 ? './images/bg1.jpg' : './images/bg2.jpg';

    bgimgelement.src = backimgpath;

    // console.log('Interval is Runinng');

    // bgimgelement.className = 'BackImage';
    // console.log(bgimgelement);

    if(initialcountdown <= 0){
        clearInterval(interval);
    }

}, 1000);
