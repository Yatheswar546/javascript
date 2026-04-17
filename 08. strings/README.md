# 📘 JavaScript Strings

## 🔹 Topic Overview

Strings are used to represent text in JavaScript.

* Written using `' '`, `" "`, or `` ` ` ``
* Strings are **immutable**

---

## 🔹 Key Concepts

* Immutable → original string does not change
* Index-based access
* Many built-in methods

---

## 🔹 Common String Methods

```js
string.length

string.concat('', fname, lname)

string.charAt();

string.indexOf('word')
string.lastIndexOf('word')
string.includes('word');
string.search('word');
string.match('word');

string.slice(start, end)
string.slice(-0, -1)
string.slice(n) : from nth index to last
string.substring(start, end)
string.substr(start, length)

string.toUpperCase()
string.toLowerCase()

string.trim()
string.trimStart()
string.trimEnd()

string.replace('old_word', 'new_word')
str.replaceAll(" ", "");
```

---

## 🔹 Syntax / Examples

```js
let str = "Hello";
console.log(str.length);
```

---

## 🔹 Examples

### Example 1: Concatenation

```js
"Hello" + " World";
```

### Example 2: Slice

```js
"JavaScript".slice(0, 4); // "Java"
```

### Example 3: Template Literals

```js
let name = "John";
`Hello ${name}`;
```

---

## 🔹 Template Literals

* Template literals are strings enclosed in backticks that allow embedded expressions using ${}, support multi-line strings, and provide cleaner string interpolation compared to traditional concatenation.
* Use backticks `` ` ` `` instead of ` '' ` or ` "" `.
* Support variables and expressions
* Template literals are a modern way to work with strings in JavaScript.

They mainly help with:
* embedding variables
* multi-line strings
* string formatting
* expressions inside strings

### KeyPoint: ${ } allows you to insert variables or expressions.

```js
let name = "Yathe";
let age = 25;

`My name is ${name} and I am ${age}`;
```

---

## 🔹 Common Mistakes

* Forgetting strings are immutable
* Using wrong method (`slice` vs `substring`)
* Not handling case sensitivity
* Not trimming input

---

## 🔹 Interview Questions (with Answers)

### 1. Difference between "", '', and `` ?

* `""` and `''` → normal strings
* `` ` ` `` → template literals (supports variables, multiline)

---

### 2. Are strings mutable or immutable?

Strings are immutable.

---

### 3. When to use template literals?

* When using variables
* For multi-line strings
* For readable formatting

---

### 4. Difference between slice and substring?

* `slice` → supports negative indexes
* `substring` → does not

---

### 5. How to reverse a string?

```js
str.split("").reverse().join("");
```

---

## 🔹 Practice Problems

1. Reverse a string
2. Check palindrome
3. Count vowels
4. Capitalize words
5. Remove spaces from string

---