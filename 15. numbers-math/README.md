# 📘 JavaScript Numbers & Math

## 🔹 Topic Overview

JavaScript provides built-in support for numbers and mathematical operations.

Covers:

* Special Numbers
* Floating Point Behavior
* Math Functions

---

## 🔹 Special Numbers

```js id="n1"
Infinity
-Infinity
NaN
-0
```

* `NaN` → Not a Number
* `Infinity` → result of division by zero

```js id="n2"
typeof NaN; // number
typeof Infinity; // number
```

---

## 🔹 Floating Point Numbers

JavaScript uses **floating point arithmetic**

```js id="n3"
0.1 + 0.2; // 0.30000000000000004
```

👉 Happens due to binary representation
👉 Addition, Multiplication are subject to rounding errors.
---

## 🔹 Math Functions

```js id="n4"
Math.trunc()  - returns only integer part.
Math.round()  - returns round-off values.
Math.floor()  - returns the lower round-off value.
Math.ceil()   - returns the upper round-off value.

* NOTE: `trunc()` and `floor()` works differently with -ve numbers.

Math.max()  - returns the maximum value.
Math.min()  - returns the minimum value.

Math.pow(base,power) - returns the power of a number.

Math.PI     -  3.141592653589793
```

---

### 🔸 Difference (Important)

```js id="n5"
Math.trunc(-3.7); // -3
Math.floor(-3.7); // -4
```

---

## 🔹 Syntax / Examples

```js id="n6"
Math.round(4.6); // 5
Math.floor(4.9); // 4
Math.ceil(4.1);  // 5
```

---

## 🔹 Common Mistakes

* Floating point precision issues
* Confusing `floor` and `trunc`
* Assuming `toFixed()` returns number
* Ignoring NaN checks

---

## 🔹 Interview Questions (with Answers)

### 1. Why 0.1 + 0.2 !== 0.3?

Due to floating point precision issues in binary.

---

### 2. What is NaN and how to check it?

* NaN → invalid number

```js id="n7"
Number.isNaN(value);
```

---

### 3. Difference between parseInt and Number?

* `parseInt` → parses string until invalid char
* `Number` → strict conversion

```js id="n8"
parseInt("10px"); // 10
Number("10px");   // NaN
```

---

## 🔹 Practice Problems

1. Round number to 2 decimals
2. Generate random number in range
3. Check integer
4. Implement custom toFixed

---

## 🔹 Bonus

### Random number (inclusive)

```js id="n9"
Math.floor(Math.random() * (max - min + 1)) + min;
```

---

### Convert string to number

```js id="n10"
Number("123");
parseInt("123px");
```

---
