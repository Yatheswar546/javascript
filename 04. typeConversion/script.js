// ================= IMPLICIT CONVERSION =================
let x1 = 5;
let x2 = "5";

console.log(x1 == x2);   // true (type coercion)
console.log(x1 === x2);  // false

// ================= STRING + NUMBER =================
let res1 = 51 + 90;
console.log(res1); // 141

let res2 = "Hello " + "Everyone";
console.log(res2); // Hello Everyone

let res3 = 51 + 90 + "JavaScript";
console.log(res3); // 141JavaScript

/*  
    51 + 90 + "JavaScript"
    141 (number) + "JavaScript" (string)
    "141" (string) + "JavaScript" (string)
    141JavaScript
*/

res4 = 50 + 30 + "JavaScript" + 20 + 100
// console.log(res4) //80JavaScript20100
/*
    80JavaScript120
    200JavaScript
    JavaScript200

    Working:
    50 + 30 + "JavaScript" + 20 + 100
    80 (number) + "JavaScript" + 20 (number) + 100 (number)
    "80" (string) + "JavaScript" + 20 (number) + 100 (number)
    "80JavaScript" + 20 (number) + 100 (number)
    "80JavaScript" + "20" (string) + 100 (number)
    "80JavaScript20" (string) + "100" (string)
    "80JavaScript20100"
*/

// ================= EXPLICIT CONVERSION =================

let num = 123;
console.log(num, typeof (num))

let str1 = String(num);
console.log(str1, typeof (str1));

let str2 = "456"
console.log(str2, typeof (str2));

let num2 = Number(str2);
console.log(num2, typeof (num2));

num2 = num2 + 300;
console.log(num2, typeof (num2))

// Boolean conversion
console.log(Boolean(0));      // false
console.log(Boolean(1));      // true
console.log(Boolean(""));     // false
console.log(Boolean("Hello"));// true

// ================= Type Coersion =================
let a = 5;
let b = "5";

console.log(a==b);
console.log(a===b);

// ================= TRICKY CASES =================
console.log("5" - 2); // 3  (string → number)
console.log("5" + 2); // 52 (number → string)

console.log(null + 1);      // 1
console.log(undefined + 1); // NaN


// ================= PROBLEMS =================

// 1. Convert string to number and add 10
function addTen(value) {
    return Number(value) + 10;
}

console.log(addTen("20")); // 30

// 2. Check if value is truthy or falsy
function checkTruthy(value) {
    return Boolean(value);
}

console.log(checkTruthy(0));     // false
console.log(checkTruthy("Hi"));  // true