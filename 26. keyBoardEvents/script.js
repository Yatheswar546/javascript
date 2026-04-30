// Keydown event

document.body.addEventListener('keydown', (e) => {

    if(e.key === "Enter"){
        console.log('KeyDown - A key is pressed !!!')
    }
});

// Keyup event

document.body.addEventListener('keyup', (e) => {

    if(e.key === "Enter"){
        console.log('Keyup - A key is released !!!')
    }
});