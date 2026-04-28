# 📘 Spread & Rest Operators

## 🔹 Topic Overview

The `...` operator in JavaScript is used in two ways:

* Spread Operator
* Rest Operator

---

## 🔹 Spread Operator

Used to **expand elements** of an array or object.

👉 It helps create **copies** and avoid mutation issues.
👉 In Pass by Reference we can't create a copy for arrays and objects but we need to original data. In such cases, we use Spread Operator (...)

---

### 🔸 Copy Array

```js id="s1"
let arr = [1, 2, 3];
let copy = [...arr];
```

* In the above example a copy (**new array**) is created rather than Reference.
* Changes in `copy` do not affect `arr`

---

### 🔸 Merge Arrays

```js id="s2"
let arr1 = [1, 2];
let arr2 = [3, 4];

let merged = [...arr1, ...arr2];
```

---

### 🔸 Copy Object

```js id="s3"
let obj = { a: 1 };
let copy = { ...obj };
```

---

### 🔸 Override Properties

```js id="s3a"
let obj = { a: 1, b: 2 };

let updated = { ...obj, b: 10 };

console.log(updated); // { a: 1, b: 10 }
```

---

## 🔹 Rest Operator

Used to collect multiple values into a single array.
Mainly used in **function parameters**.

```js id="s4"
function sum(...numbers) {
    return numbers;
}
```

---

## 🔹 Key Difference

| Spread                 | Rest                        |
| ---------------------- | --------------------------- |
| Expands values         | Collects values             |
| Used in arrays/objects | Used in function parameters |

---

## 🔹 Important Rule

👉 Rest parameter must be **last parameter**

```js id="s4a"
function test(a, b, ...rest) {} // ✅

// function test(...rest, a) {} ❌ Error
```

---

## 🔹 Examples

### Example 1: Spread

```js id="s5"
[...[1, 2, 3]]; // [1,2,3]
```

---

### Example 2: Rest

```js id="s6"
function test(...args) {
    console.log(args);
}
```

---

## 🔹 Common Mistakes

* Confusing spread and rest
* Assuming spread creates deep copy
* Forgetting spread is shallow
* Misplacing rest parameter

---

## 🔹 Interview Questions (with Answers)

### 1. Difference between spread and rest?

* Spread → expands values
* Rest → collects values

---

### 2. Where must rest be placed?

Rest parameter must be **last parameter** in function.

---

### 3. Spreading objects vs arrays?

* Arrays → spreads elements
* Objects → spreads key-value pairs

```js id="s9"
[...[1,2]]; // array
{...{a:1}}; // object
```

---

## 🔹 Practice Problems

### 1. Merge arrays using spread

```js id="p1"
let result = [...arr1, ...arr2];
```

---

### 2. Sum unlimited arguments using rest

```js id="p2"
function sum(...nums) {
    return nums.reduce((a, b) => a + b, 0);
}
```

---

### 3. Clone object and override property

```js id="p3"
let user = { name: "Yathe", age: 25 };

let updated = { ...user, age: 30 };
```

---

### 4. Remove property immutably

```js id="p4"
let user = { name: "Yathe", age: 25 };

let { age, ...rest } = user;

console.log(rest); // { name: "Yathe" }
```

---

## 🔹 Bonus

### Add elements using spread

```js id="s7"
let arr = [1,2];
let newArr = [...arr, 3, 4];
```

---

### Function with rest

```js id="s8"
function max(...nums) {
    return Math.max(...nums);
}
```

---