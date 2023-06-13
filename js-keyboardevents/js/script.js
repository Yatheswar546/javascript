// Keydown event

document.body.addEventListener('keydown', function(e) {
    var keycode = e.keyCode;

    // 13 is keycode for enter
    if(keycode === 13){
        console.log(keycode + 'KeyDown - A key is clicked !!!')
    }
    // console.log(keycode + 'KeyDown - A key is clicked !!!')
});

// Keyup event

document.body.addEventListener('keyup', function(e) {
    var keycode = e.keyCode;

    // 13 is keycode for enter
    if(keycode === 13){
        console.log(keycode + 'Keyup - A key is clicked !!!')
    }
    // console.log(keycode + 'Keyup -  is clicked !!!')
});

// Keypress event

document.body.addEventListener('keypress', function(e) {
    var keycode = e.keyCode;

    // 13 is keycode for enter
    if(keycode === 13){
        console.log(keycode + 'Keypress - A key is clicked !!!')
    }
    // console.log(keycode + 'Keypress -  is clicked !!!')
});

