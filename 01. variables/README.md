# 📘 JavaScript Variables

## 🔹 Topic Overview

Variables are used to store data values in JavaScript.
JavaScript provides three ways to declare variables:

* `var`
* `let`
* `const`

---

## 🔹 Key Concepts

### 1. var

* Function scoped
* Can be re-declared
* Can be re-assigned
* Hoisted with `undefined`

### 2. let

* Block scoped
* Cannot be re-declared
* Can be re-assigned
* Hoisted but not initialized (Temporal Dead Zone)

### 3. const

* Block scoped
* Cannot be re-declared
* Cannot be re-assigned
* Must be initialized during declaration

---

## 🔹 Scope

```js
{
    var a = 10;
    let b = 20;
    const c = 30;
}

console.log(a); // ✅ Works
// console.log(b); ❌ Error
// console.log(c); ❌ Error
```

---

## 🔹 Redeclaration vs Reassignment

| Type  | Redeclare | Reassign |
| ----- | --------- | -------- |
| var   | ✅ Yes     | ✅ Yes    |
| let   | ❌ No      | ✅ Yes    |
| const | ❌ No      | ❌ No     |

---

## 🔹 Hoisting (Intro)

```js
console.log(a); // undefined
var a = 10;
```

```js
// console.log(b); ❌ ReferenceError
let b = 10;
```

* `var` is hoisted and initialized as `undefined`
* `let` and `const` are hoisted but not initialized

---

## 🔹 Using Variable Without Declaration

```js
a = 10;
console.log(a);
```

* This creates a **global variable**
* This is **bad practice**
* Always use `let`, `const`, or `var`

---

## 🔹 Syntax / Examples

```js
var x = 10;
let y = 20;
const z = 30;
```

---

## 🔹 Examples

### Example 1: Basic Usage

```js
let name = "John";
name = "Doe";
```

### Example 2: Constant Value

```js
const PI = 3.14;
```

### Example 3: Block Scope

```js
{
    let a = 10;
}
// console.log(a); ❌ Error
```

---

## 🔹 Common Mistakes

* Using `var` everywhere
* Forgetting `const` must be initialized
* Assuming `var` is block scoped
* Using variables without declaration
* Confusing hoisting behavior

---

## 🔹 Interview Questions (with Answers)

### 1. Difference between `var`, `let`, and `const`?

* `var`:

  * Function scoped
  * Can be re-declared and re-assigned
  * Hoisted and initialized with `undefined`

* `let`:

  * Block scoped
  * Cannot be re-declared
  * Can be re-assigned
  * Hoisted but not initialized

* `const`:

  * Block scoped
  * Cannot be re-declared or re-assigned
  * Must be initialized during declaration

---

### 2. What is scope in JavaScript?

Scope defines where a variable can be accessed in the code.

* **Global Scope** → Accessible everywhere
* **Function Scope** → Accessible inside a function (`var`)
* **Block Scope** → Accessible inside `{}` (`let`, `const`)

---

### 3. What is hoisting?

Hoisting is JavaScript's default behavior of moving variable and function declarations to the top of their scope before execution.

* `var` → hoisted and initialized as `undefined`
* `let` and `const` → hoisted but not initialized

---

### 4. What is Temporal Dead Zone (TDZ)?

Temporal Dead Zone is the time between variable declaration and initialization where the variable cannot be accessed.

```js
console.log(a); // ❌ ReferenceError
let a = 10;
```

Even though `a` is hoisted, it is not accessible before initialization.

---

### 5. Can we declare a `const` without value?

No ❌

```js
const a; // ❌ Error
```

A `const` variable must be initialized at the time of declaration.

---

### 6. What happens if we use a variable without declaring?

```js
a = 10;
console.log(a);
```

* It creates a **global variable**
* This is **bad practice**
* Can cause unexpected bugs

---

### 7. Why is `var` considered problematic?

* Not block scoped (can lead to unexpected behavior)
* Allows redeclaration (can overwrite values accidentally)
* Hoisting can cause confusion

Example:

```js
if (true) {
    var x = 10;
}
console.log(x); // ✅ Accessible (unexpected for beginners)
```

---


---

## 🔹 Practice Problems

1. Swap two variables without using a third variable.
2. Write a program to check scope of variables inside a block.
3. Try redeclaring variables using `var`, `let`, and `const`.

### Predict the output:

```js
console.log(a);
var a = 10;
```

```js
console.log(b);
let b = 10;
```

---
