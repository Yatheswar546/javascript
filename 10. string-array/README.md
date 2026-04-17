# 📘 Array ↔ String Conversion

## 🔹 Topic Overview

JavaScript provides simple methods to convert between **strings and arrays**.

* String → Array → `split()`
* Array → String → `join()`

---

## 🔹 Key Concepts

* `split()` → converts string to array
* `join()` → converts array to string
* Very useful in real-world problems

---

## 🔹 Syntax

### String → Array

```js id="a1"
"hello world".split(" ");
```

---

### Array → String

```js id="a2"
["hello", "world"].join(" ");
```

---

## 🔹 Examples

### Example 1: Split

```js id="a3"
let str = "JS is fun";
str.split(" "); // ["JS","is","fun"]
```

---

### Example 2: Join

```js id="a4"
let arr = ["JS","is","fun"];
arr.join(" "); // "JS is fun"
```

---

### Example 3: CSV Conversion

```js id="a5"
"a,b,c".split(","); // ["a","b","c"]
```

---

## 🔹 Common Mistakes

* Using wrong delimiter
* Forgetting spaces `" "`
* Not trimming input
* Assuming split always returns clean data

---

## 🔹 Interview Questions (with Answers)

### 1. What does split() do?

Converts string into array based on delimiter.

---

### 2. What does join() do?

Converts array into string using separator.

---

### 3. Difference between split("") and split(" ")?

* `split("")` → splits characters
* `split(" ")` → splits words

---

### 4. How to remove extra spaces from a string?

```js id="a6"
str.trim().split(/\s+/).join(" ");
```

---

### 5. Can join() modify original array?

No ❌
It returns a new string.

---

## 🔹 Practice Problems

1. Convert `"a,b,c,d"` → array
2. Convert `["js","is","fun"]` → sentence
3. Remove extra spaces
4. Implement custom join

---

## 🔹 Bonus

### Reverse words

```js id="a7"
"JS is fun".split(" ").reverse().join(" ");
```

---
