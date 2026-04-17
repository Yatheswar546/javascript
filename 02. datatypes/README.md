# 📘 JavaScript Data Types

## 🔹 Topic Overview

Data types define the type of data a variable can hold in JavaScript.

There are **2 main types**:

* Primitive Data Types
* Non-Primitive Data Types

---

## 🔹 Primitive Data Types

1. **Number** → integers and decimals
2. **String** → text (single or double quotes)
3. **Boolean** → true / false
4. **BigInt** → large integers
5. **Undefined** → declared but not assigned
6. **Null** → intentional empty value
7. **Symbol** → unique values (advanced use)

---

## 🔹 Non-Primitive Data Types

* Object
* Array
* Function
* Date

---

## 🔹 typeof Operator

Used to check the type of a variable.

```js
typeof 10;          // number
typeof "hello";     // string
typeof true;        // boolean
typeof undefined;   // undefined
typeof null;        // object (bug)
```

---

## 🔹 Syntax / Examples

```js
let num = 10;
let str = "Hello";
let isActive = true;
let big = 1234567890123456789n;
let data = null;
let value;
```

---

## 🔹 Examples

### Example 1: Basic Types

```js
let age = 25;
let name = "John";
let isLoggedIn = false;
```

### Example 2: Object & Array

```js
let user = { name: "John" };
let numbers = [1, 2, 3];
```

### Example 3: Function

```js
function greet() {
    return "Hello";
}
```

---

## 🔹 Common Mistakes

* Forgetting `n` in BigInt
* Thinking arrays are a separate type (`typeof []` → object)
* Confusing `null` and `undefined`
* Assuming `typeof null` should return "null"

---

## 🔹 Interview Questions (with Answers)

### 1. What are the data types in JavaScript?

* Primitive: Number, String, Boolean, BigInt, Undefined, Null, Symbol
* Non-Primitive: Object, Array, Function, Date

---

### 2. Difference between `null` and `undefined`?

* `undefined` → variable declared but not assigned
* `null` → intentionally assigned empty value

```js
let a;        // undefined
let b = null; // null
```

---

### 3. Why does `typeof null` return "object"?

This is a **historical bug** in JavaScript.
It was kept for backward compatibility.

---

### 4. What is `typeof` operator?

It is used to check the data type of a value.

```js
typeof "hello"; // string
```

---

### 5. Is array a primitive data type?

No ❌
Array is a type of **object**

```js
typeof [1,2,3]; // object
```

---

### 6. What is BigInt?

BigInt is used to store very large integers beyond Number limit.

```js
let big = 1234567890123456789n;
```

---

## 🔹 Practice Problems

1. Write a function to check type of any input.
2. Check whether a given value is an array.
3. Predict the output:

```js
console.log(typeof null);
```

4. Predict the output:

```js
console.log(typeof []);
```

5. Create variables for all primitive types and print their types.

---
