# 📘 JavaScript Functions

## 🔹 Topic Overview

A function is a block of code used to perform a specific task and can be reused multiple times.

---

## 🔹 Syntax

```js
// function definition
function functionName(param1, param2, ...... paramN) {
    ......... code ..........
    ......... to be .........
    ....... executed ........

    return statement;
}

// function call
function_name(arguments); 
```

---

## 🔹 Types of Functions

### 1. Function Declaration

```js
function add(a, b) {
    return a + b;
}
```

---

### 2. Function Expression

```js
const add = function(a, b) {
    return a + b;
};
```

---

### 3. Arrow Function

```js
const add = (a, b) => a + b;
```

---

## 🔹 Key Concepts

* Functions improve code reusability
* Can take parameters and return values
* Can be stored in variables

---

## 🔹 Examples

### Example 1: Simple Function

```js
function greet(name) {
    return "Hello " + name;
}
```

---

### Example 2: Arrow Function

```js
const square = (num) => num * num;
```

---

## 🔹 Common Mistakes

* Forgetting `return`
* Not converting input values
* Using undeclared variables
* Confusing function declaration vs expression

---

## 🔹 Interview Questions (with Answers)

### 1. Difference between function declaration and expression?

* Declaration → hoisted
* Expression → not hoisted

---

### 2. What is a default parameter?

A parameter with a default value if no argument is passed.

```js
function greet(name = "Guest") {
    return name;
}
```

---

### 3. What is a pure function?

A function that:

* Always returns same output for same input
* Has no side effects

---

### 4. What is an arrow function?

Short syntax for writing functions.

---

### 5. Can functions return functions?

Yes, functions are first-class citizens in JavaScript.

---

## 🔹 Practice Problems

1. Generate Fibonacci number.
2. Check prime number.
3. Implement custom `Math.max`.
4. Reverse a string using function.
5. Check palindrome using function.

---

## 🔹 Bonus (Optimized Prime Check)

```js
function isPrime(n) {
    if (n <= 1) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }

    return true;
}
```

---

## 🔹 Bonus (Recursive Fibonacci)

```js
function fib(n) {
    if (n <= 2) return n - 1;
    return fib(n - 1) + fib(n - 2);
}
```

---
