var username = document.getElementById('name');

// input event
// we can use input/change both are same
username.addEventListener('input', function(event) {
    // console.log(event.target.value);  
    var currentValue = event.target.value;
    currentValue = currentValue.toUpperCase();
    console.log(currentValue);  
    username.value = currentValue;
});

// focus event
username.addEventListener('focus', function() {
    console.log('Focused');
})

// blur event
username.addEventListener('blur', function() {
    console.log('Element lost Focus');
})

//Submit event 
var form = document.getElementById('form');

form.addEventListener('submit', function (e) {
    // console.log('Submitted');
    e.preventDefault();
    alert('Submitted');
});