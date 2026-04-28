// ================= BASIC CALLBACK =================
function ringAlarm(){
    console.log("Wake Up !!!! It's time");
}

function setAlarm(functionExecuteLater){
    console.log("Wake up at 7am!!!");
    functionExecuteLater();
}

function runCallback() {
    let result = setAlarm(ringAlarm);
    document.getElementById("callbackResult").innerText = result;
}

// ================= DIFFERENT FORMS of CALLBACKS =================

// 1. Callback with Function Declaration Syntax

// Function declaration
// function greet(name){
//     console.log(`Hello ${name}`);
// }

// // Function taking a callback
// function reception1(callback){
//     let name = "Yatheswar";
//     callback(name);
// }

// // Using the function declaration as a callback
// reception1(greet);

///////////////////////////////////////////////////////////////

// 2. Function Expression 

// 2 (a). Callback with Function Expression Syntax

// // Function Expression
// let greet = function(n){
//     console.log(`Hello ${n}`);
// }

// // Function taking a callback
// function reception2(callback){
//     let name = "Yatheswar";
//     callback(name);
// }

// // Using the function expression as a callback
// reception2(greet);

// 2 (b). Inline Callback with Function Expression 

// Function Expression
// function reception2(callback){
//     let name = "Yatheswar";
//     callback(name);
// }

// // Using the function expression as a Callback
// reception2(function (n){
//     console.log(`Hello ${n}`)
// });

////////////////////////////////////////////////////////////////

// 3. Arrow Function 

// 3 (a). Callback with Arrow Function Syntax

// Arrow Function
let greet = n => console.log(`Hello ${n}`);

// // Function taking a Callback
function reception3(callback){
    let name = "Yatheswar";
    callback(name);
}

// // Using the arrow function as a Callback
reception3(greet);

// 3 (b). Inline Callback with Arrow Function Syntax

function reception3(callback){
    let name = "Yatheswar";
    callback(name);
}

reception3( n => console.log(`Hello ${n}`));


// ================= ASYNC CALLBACK =================
function runAsync() {
    document.getElementById("asyncResult").innerText = "Waiting...";

    setTimeout(() => {
        document.getElementById("asyncResult").innerText = "Executed after 2 seconds";
    }, 2000);
}