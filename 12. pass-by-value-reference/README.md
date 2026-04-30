# 📘 Pass by Value vs Pass by Reference

## 🔹 Topic Overview

JavaScript handles variables in two ways:

* Pass by Value
* Pass by Reference

---

## 🔹 Pass by Value

* A **copy** of the value is created
* Changes do **not affect original value**
* Applies to **primitive data types**

```js id="pv1"
let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20
```

---

## 🔹 Pass by Reference

* A **reference (memory address)** is shared
* Changes **affect original value**
* Applies to **objects, arrays, functions**

```js id="pv2"
let obj1 = { value: 10 };
let obj2 = obj1;

obj2.value = 20;

console.log(obj1.value); // 20
```

---

## 🔹 Key Difference

| Feature          | Pass by Value | Pass by Reference |
| ---------------- | ------------- | ----------------- |
| Copy             | Yes           | No (reference)    |
| Affects Original | No            | Yes               |
| Data Types       | Primitive     | Non-Primitive     |

---

## 🔹 Mutation Problem

```js id="pv3"
let user = { name: "Yathe" };

function change(obj) {
    obj.name = "Changed";
}

change(user);

console.log(user.name); // Changed
```

---

## 🔹 Fix Using Spread Operator

```js id="pv4"
let user = { name: "Yathe" };

let copy = { ...user };

copy.name = "Updated";

console.log(user.name); // Yathe
```

---

## 🔹 Shallow vs Deep Copy

### Shallow Copy

* Copies only first level
* Nested objects are still referenced

```js id="pv5"
let obj = { a: 1, nested: { b: 2 } };

let copy = { ...obj };

copy.nested.b = 100;

console.log(obj.nested.b); // 100 ❌
```

---

### Deep Copy

* Creates full independent copy

```js id="pv6"
let obj = { a: 1, nested: { b: 2 } };

let copy = JSON.parse(JSON.stringify(obj));

copy.nested.b = 100;

console.log(obj.nested.b); // 2 ✅
```

---

## 🔹 Common Mistakes

* Assuming objects are copied like primitives
* Forgetting spread is shallow
* Mutating objects unintentionally
* Comparing objects using `===`

---

## 🔹 Interview Questions (with Answers)

### 1. Difference between pass by value and reference?

* Value → copy
* Reference → memory reference

---

### 2. How do primitives behave?

They are copied (pass by value).

---

### 3. How to avoid object mutation?

Use spread operator or deep copy.

---

### 4. What is shallow copy?

Copies only top-level properties.

---

### 5. What is deep copy?

Copies all nested levels.

---

## 🔹 Practice Problems

1. Demonstrate mutation bug
2. Fix mutation using spread
3. Write clone function
4. Compare shallow vs deep copy
5. Predict output of object mutation

---

## 🔹 Bonus

### Clone Utility

```js id="pv7"
function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
```

---