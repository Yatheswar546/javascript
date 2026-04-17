// ================= COMPARISON =================
let a = 5;
let b = "5";

console.log("== :", a == b);   // true (type coercion)
console.log("=== :", a === b); // false (strict comparison)


// ================= ARITHMETIC =================
let x = 10;
let y = 3;

console.log("Add:", x + y);
console.log("Power:", x ** y);
console.log("Modulus:", x % y);


// ================= LOGICAL =================
console.log(true && false); // false
console.log(true || false); // true
console.log(!true);         // false


// ================= SHORT CIRCUIT =================
console.log("Hello" && "World"); // World
console.log("" || "Default");    // Default


// ================= NULLISH COALESCING =================
let value = null;
let result = value ?? "Default Value";
console.log(result); // Default Value


// ================= TYPE OPERATORS =================
console.log(typeof 10);          // number
console.log([] instanceof Array);// true


// ================= TERNARY =================
let age = 18;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status);


// ================= PROBLEMS =================

// 1. Largest of three numbers
function largestOfThree(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= c) {
        return b;
    } else {
        return c;
    }
}

console.log(largestOfThree(5, 10, 10)); // handles equal cases


// 2. Bonus: check even or odd
function isEven(num) {
    return num % 2 === 0;
}

console.log(isEven(4)); // true