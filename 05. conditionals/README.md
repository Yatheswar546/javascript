# 📘 JavaScript Conditional Statements

## 🔹 Topic Overview

Conditional statements are used to execute code based on conditions.

---

## 🔹 Types of Conditional Statements

### 1. if

```js id="v1q2a3"
if (condition) {
    // code
}
```

---

### 2. if-else

```js id="v2q3a4"
if (condition) {
    // code
} else {
    // code
}
```

---

### 3. if-else-if

```js id="v3q4a5"
if (condition1) {
    // code
} else if (condition2) {
    // code
} else {
    // code
}
```

---

### 4. switch

```js id="v4q5a6"
switch (value) {
    case 1:
        break;
    default:
}
```

---

## 🔹 Syntax / Examples

```js id="x1y2z3"
let age = 18;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
```

---

## 🔹 Examples

### Example 1: if-else

```js id="ex1"
let num = 10;

if (num % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}
```

---

### Example 2: switch

```js id="ex2"
let day = 1;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    default:
        console.log("Invalid");
}
```

---

## 🔹 Common Mistakes

* Forgetting `break` in switch
* Using string values instead of numbers (input issue)
* Not converting input values
* Confusing truthy/falsy values

---

## 🔹 Special Case: Truthy & Falsy

Falsy values:

* false
* 0, -0, 0n
* ""
* null
* undefined
* NaN

Everything else is truthy.

---

## 🔹 Interview Questions (with Answers)

### 1. What are conditional statements?

Statements used to make decisions in code based on conditions.

---

### 2. Difference between if-else and switch?

* `if-else` → used for complex conditions
* `switch` → used for multiple fixed values

---

### 3. What happens if we don’t use break in switch?

Execution continues to next cases (fall-through).

---

### 4. What are truthy and falsy values?

* Falsy → values that behave as false (false, 0, -0, 0n, "", null, undefined, NaN)
* Truthy → all other values

---

### 5. When to use switch instead of if?

When checking one variable against multiple fixed values.

---

## 🔹 Practice Problems

1. Build a calculator using switch.
2. Check if a number is positive, negative, or zero.
3. Predict output:

```js id="p1"
if ("") {
    console.log("Hello");
} else {
    console.log("World");
}
```

4. Predict output:

```js id="p2"
switch(2) {
    case 1:
        console.log("One");
    case 2:
        console.log("Two");
    default:
        console.log("Done");
}
```

---
