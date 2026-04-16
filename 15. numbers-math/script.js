// Special Numbers in Js
console.log(`7/0 = ${7/0}`);
console.log(`-8/0 = ${-8/0}`);
console.log(`-0/17 = ${-0/17}`);
console.log(`"Js"/187 = ${"Js"/187}`);
console.log(`[1,9,8]/0 = ${[1,9,8]/0}`);

// Floating Point Numbers in Js
console.log(`202.2 * 2 = ${202.2 * 2}`);
console.log(`303.3 * 3 = ${303.3 * 3}`);
console.log(`0.1 + 0.2 = ${0.1 + 0.2}`);

// Math Functions in Js
console.log(`Math.trunc(3.654) = ${Math.trunc(3.654)}`);
console.log(`Math.round(7.876810) = ${Math.round(7.876810)}`);
console.log(`Math.floor(9.621793) = ${Math.floor(9.621793)}`);
console.log(`Math.ceil(5.66849846) = ${Math.ceil(5.66849846)}`);
console.log(`Math.max(8,9,0,19) = ${Math.max(8,9,0,19)}`);
console.log(`Math.min(9,10,18,10,-9,-6) = ${Math.min(9,10,18,10,-9,-6)}`);
console.log(`Math.pow(4,87) = ${Math.pow(4,87)}`);
console.log(`Math.PI = ${Math.PI}`);

////////////// Problems //////////////

// Problem 1: Round the number to 2 decimal places

function roundingNumber(){
    let num = document.getElementById("roundNum").value;

    // let result = Math.round(num * 100) / 100;
    let result = Number(num).toFixed(2);

    document.getElementById("roundResult").innerHTML = `Result: ${result}`;
}

// Problem 2: Generate a Random number in given range
function randomNumber(){
    let start = document.getElementById("startingNumber").value;
    let end = document.getElementById("endingNumber").value;

    // Formula:  Math.floor(Math.random() * (max - min)) + min

    let result = Math.floor(Math.random() * (Number(end) - Number(start))) + Number(start);

    document.getElementById("randomResult").innerHTML = `Random Number in given range is: ${result}`;

}

function checkInteger(){
    let num = document.getElementById("number").value;

    // if(Number.isInteger(Number(num))){
    //     document.getElementById("result").innerHTML = `Result: It is Integer`;
    // }
    // else{
    //     document.getElementById("result").innerHTML = `Result: Not an Integer`;
    // }

    // Number.isInteger(Number(num)) ? document.getElementById("result").innerHTML = `Result: It is Integer` : document.getElementById("result").innerHTML = `Result: Not an Integer`;

    document.getElementById("result").innerHTML = Number.isInteger(Number(num)) ? `Result: It is Integer` : `Result: Not an Integer`
}