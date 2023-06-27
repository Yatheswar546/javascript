var username = document.getElementById('username');
var password = document.getElementById('password'); 
var form = document.getElementById('login-form');
var errorMsg = document.getElementById('username-err');

username.addEventListener('input',function(e){
    var pattern = /^[\w]{6,8}$/
    var currentValue = e.target.value
    var valid = pattern.test(currentValue)

    if(valid){
         errorMsg.style.display = 'none';
    }
    else{
        errorMsg.style.display = 'block';
    }

})