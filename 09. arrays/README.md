# 📘 JavaScript Arrays

## 🔹 Topic Overview

An array is a data structure used to store multiple values in a single variable.

* Can store different data types
* Arrays are **mutable**

---

## 🔹 Key Concepts

* Indexed collection (starts from 0)
* Stored by reference
* Mutable (can be changed)

---

## 🔹 Syntax

```js
let arr = [1, 2, 3];
```

---

## 🔹 Array Memory Representation

```js
let x = [1, 2, 3];
let y = x;
```

* `x` and `y` point to the **same memory location**
* A new array is **not created** for `y`

```js
x[0] = 1000;
console.log(y); // [1000, 2, 3]
```

👉 Changing `x` also affects `y`

**Note:**
Arrays are compared by **reference (memory location)**, not by actual values.

---

## 🔹 Array Methods

```js
arr.length
arr.at(index)
arr.join()

arr.push()
arr.pop()
arr.shift()
arr.unshift()

arr.concat()
old_array.concat(new_array);
old_array + ',' + new_array

array.slice(start,end) [start, end)
array.splice(position_to_add, no. of elements to be removed, new_element)

arr.indexOf('word')
arr.lastIndexOf('word')

arr.includes('word')
```

---

## 🔹 Examples

### Example 1: Access

```js
let arr = [10, 20, 30];
arr[0]; // 10
```

---

### Example 2: Add/Remove

```js
arr.push(40);
arr.pop();
```

---

### Example 3: Slice vs Splice

```js
arr.slice(1, 3); // returns new array
arr.splice(1, 2); // modifies original array
```

---

## 🔹 Common Mistakes

* Confusing reference vs value
* Using `+` instead of `concat`
* Mutating arrays unknowingly
* Using wrong method (`slice` vs `splice`)

---

## 🔹 Interview Questions (with Answers)

### 1. Mutable vs Immutable array methods?

* Mutable → change original array (`push`, `pop`, `splice`)
* Immutable → return new array (`slice`, `concat`)

---

### 2. Difference between slice and splice?

* `slice` → returns new array
* `splice` → modifies original array

---

### 3. What does array length store?

It stores the **number of elements**, not the last index.

```js
let arr = [1, 2, 3];
console.log(arr.length); // 3
```

---

### 4. What is reference in arrays?

Arrays store **reference (memory address)**, not actual values.

```js
let a = [1];
let b = a;

console.log(a === b); // true
```

---

### 5. How to copy an array?

```js
let copy = [...arr];
```

---

## 🔹 Practice Problems

1. Find second largest number
2. Rotate array by k steps
3. Flatten nested array
4. Remove duplicates
5. Remove falsy values

---

## 🔹 Bonus Topics

### Remove duplicates

```js
[...new Set(arr)];
```

---

### Remove falsy values

```js
arr.filter(Boolean);
```

---

### Flatten array (1 level)

```js
arr.flat();
```

---

### Shallow vs Deep Copy

* Shallow copy → copies reference for nested objects
* Deep copy → copies actual values

```js
let shallow = [...arr];
```

---
