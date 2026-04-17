# 📘 JavaScript Loops

## 🔹 Topic Overview

Loops are used to execute a block of code multiple times.

---

## 🔹 Types of Loops

### 1. for loop

Used when number of iterations is known.

```js id="l1"
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

---

### 2. while loop

Runs while condition is true.

```js id="l2"
let i = 0;
while (i < 5) {
    i++;
}
```

---

### 3. do-while loop

Runs at least once.

```js id="l3"
let i = 0;
do {
    i++;
} while (i < 5);
```

---

### 4. for...of

Used for values (arrays, strings)

```js id="l4"
let arr = [1,2,3];
for (let val of arr) {
    console.log(val);
}
```

---

### 5. for...in

Used for keys (objects, array indexes)

```js id="l5"
let arr = [1,2,3];
for (let i in arr) {
    console.log(i);
}
```

---

## 🔹 Key Concepts

* `for` → controlled loop
* `while` → condition-based loop
* `do-while` → executes at least once
* `for-of` → values
* `for-in` → keys/index

---

## 🔹 Common Mistakes

* Infinite loops (wrong condition)
* Using `for-in` for arrays (not recommended)
* Not converting input values
* Modifying loop variable incorrectly

---

## 🔹 Examples

### Example 1: Print numbers

```js id="exl1"
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

---

### Example 2: Iterate array

```js id="exl2"
let arr = [10, 20, 30];
for (let val of arr) {
    console.log(val);
}
```

---

## 🔹 Interview Questions (with Answers)

### 1. Difference between for, while, do-while?

* `for` → fixed iterations
* `while` → condition-based
* `do-while` → runs at least once

---

### 2. Difference between for-in and for-of?

* `for-in` → indexes/keys
* `for-of` → values

---

### 3. What is an infinite loop?

A loop that never stops due to incorrect condition.

---

### 4. Can we break a loop?

Yes, using `break`.

---

### 5. What is continue?

Skips current iteration and continues next.

---

## 🔹 Practice Problems

1. Print pyramid pattern.
2. Find factorial of a number.
3. Find sum of digits.
4. Remove duplicates from array.
5. Reverse a number using loop.

---

## 🔹 Bonus (Important)

### Remove duplicates (optimized)

```js id="bonus1"
let arr = [1,2,2,3];
let unique = [...new Set(arr)];
```

---
