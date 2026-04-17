// ==================== VAR ====================
var a = 10;
console.log("var a: ",a);

// Redeclaration allowed
var a = 20;
console.log("var a after redeclaration:", a);

// ================= LET =================
let b = 10;
console.log("let b:", b);

// Re-assignment allowed
b = 20;
console.log("let b after reassignment:", b);

// Redeclaration not allowed
// let b = 30; // ❌ Error

// ================= CONST =================
const c = 10;
console.log("const c:", c);

// Re-assignment not allowed
// c = 20; // ❌ Error

// Redeclaration not allowed
// const c = 30; // ❌ Error

// ================= SCOPE EXAMPLE =================
{
    var x = 100;
    let y = 200;
    const z = 300;
}

console.log("var x (outside block):", x); // ✅ accessible
// console.log(y); ❌ Error
// console.log(z); ❌ Error


// ================= HOISTING PREVIEW =================
console.log(testVar); // undefined
var testVar = 5;

// console.log(testLet); ❌ ReferenceError
// let testLet = 5;

// ================= PROBLEMS =======================

// 1. Swap two variables without third variable
let first = 50;
let second = 40;

console.log("Before Swapping:", first, second);

// Method 1: Arithmetic
first = first + second;
second = first - second;
first = first - second;

console.log("After Swapping (Arithmetic):", first, second);

// Method 2: Destructuring (modern way)
[first, second] = [second, first];

console.log("After Swapping (Destructuring):", first, second);



