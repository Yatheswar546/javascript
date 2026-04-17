// ================= PRIMITIVE TYPES =================
let number = 10;
let string = "JavaScript";
let boolean = true;

// BigInt (must use 'n')
let bigInt = 10987256480192n;

let unDefined;
let nullVar = null;

// ================= typeof =================
console.log("number:", typeof number);       // number
console.log("string:", typeof string);       // string
console.log("boolean:", typeof boolean);     // boolean
console.log("bigInt:", typeof bigInt);       // bigint
console.log("undefined:", typeof unDefined); // undefined
console.log("null:", typeof nullVar);        // object (known bug)

// ================= NON-PRIMITIVE =================
let obj = { name: "JS" };
let arr = [1, 2, 3];
let func = function () {};
let date = new Date();

console.log("object:", typeof obj);   // object
console.log("array:", typeof arr);    // object
console.log("function:", typeof func);// function
console.log("date:", typeof date);    // object


// ================= PROBLEMS =================

// 1. Function to check type
function checkType(input) {
    return typeof input;
}

console.log(checkType("Hello"));  // string
console.log(checkType(100));      // number
console.log(checkType(null));     // object


// 2. Bonus: Check if value is array (important)
function isArray(value) {
    return Array.isArray(value);
}

console.log(isArray([1,2,3])); // true
console.log(isArray({}));      // false