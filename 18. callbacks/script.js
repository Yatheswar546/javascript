// Callback 

function ringAlarm(){
    console.log("Wake Up !!!! It's time");
}

function setAlarm(funtionExecuteLater){
    console.log("Wake up at 7am!!!");
    funtionExecuteLater();
}

setAlarm(ringAlarm);

// Different Forms of Callbacks

// 1. Callback with Function Declaration Syntax

// Function declaration
// function greet(n){
//     console.log(`Hello ${n}`);
// }

// // Function taking a callback
// function reception(param){
//     let name = "Yatheswar";
//     param(name);
// }

// // Using the function declaration as a callback
// reception(greet);

////////////////////////////////////////////////////////////////

// 2 (a). Callback with Function Expression Syntax

// // Function Expression
// let greet = function(n){
//     console.log(`Hello ${n}`);
// }

// // Function taking a callback
// function reception(param){
//     let name = "Yatheswar";
//     greet(name);
// }

// // Using the function expression as a callback
// reception(greet);

// 2 (b). Inline Callback with Function Expression 

// Function Expression
// function reception(param){
//     let name = "Yatheswar";
//     param(name);
// }

// // Using the function expression as a Callback
// reception(function (n){
//     console.log(`Hello ${n}`)
// });

////////////////////////////////////////////////////////////////

// 3 (a). Callback with Arrow Function Syntax

// Arrow Function
// let greet = n => console.log(`Hello ${n}`);

// // Function taking a Callback
// function reception(param){
//     let name = "Yatheswar";
//     param(name);
// }

// // Using the arrow function as a Callback
// reception(greet);

// 3 (b). Inline Callback with Arrow Function Syntax

function reception(param){
    let name = "Yatheswar";
    param(name);
}

reception( n => console.log(`Hello ${n}`));

////////////////////////////////////////////////////////////////