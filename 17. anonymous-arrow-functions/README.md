# 📘 Anonymous & Arrow Functions

## 🔹 Topic Overview

Functions are reusable blocks of code that perform a specific task.

---

## 🔹 Uses of Functions

* Code Reusability
* Organization
* Encapsulation
* Abstraction
* Separation of Concerns

---

## 🔹 Types of Functions

### 1. Function Declaration

```js
function add(a, b) {
    return a + b;
}

add(5, 4);
```

---

### 2. Function Expression

```js
let sum = function (a, b) {
    return a + b;
};

sum(2, 3);
```

---

### 3. Arrow Functions (ES6)

```js
let add = (a, b) => {
    return a + b;
};
```

* In Arrow function you can skip "{}" and "return" for single line of code.

```js
let add = (a,b) => a + b;
```

* In case of only 1 argument and no arguments.

```js
let x1 = () => console.log("Hello World!");

let x2 = a => console.log(a);
```

---

### 🔸 Short Syntax

```js
let add = (a, b) => a + b;
```

---

### 🔸 Single Parameter

```js
let square = a => a * a;
```

---

### 🔸 No Parameter

```js
let greet = () => console.log("Hello World");
```

---

## 🔹 Returning Object (Important)

```js
let createUser = (name, age) => ({ name, age });
```

👉 Must wrap object in parentheses

---

## 🔹 Anonymous Functions

* Functions without a name
* Can be used as values

```js
let x = function () {
    console.log("Hello");
};

let y = () => console.log("Hi");
```

---

## 🔹 Arrow Function vs Normal Function

| Feature     | Normal Function | Arrow Function |
| ----------- | --------------- | -------------- |
| `this`      | Dynamic         | Lexical        |
| Syntax      | Longer          | Short          |
| Constructor | Yes             | No             |

---

## 🔹 Lexical `this` (Important)

Arrow functions do NOT have their own `this`.

```js
const obj = {
    name: "JS",

    normal() {
        console.log(this.name);
    },

    arrow: () => {
        console.log(this.name);
    }
};
```

👉 `arrow` does NOT refer to object

---

## 🔹 When NOT to Use Arrow Functions

* Object methods
* Constructors
* When `this` is required
* Event handlers (sometimes)

---

## 🔹 Common Mistakes

* Forgetting return in multi-line arrow
* Returning object without parentheses
* Misusing `this`
* Confusing anonymous vs arrow

---

## 🔹 Interview Questions (with Answers)

### 1. Arrow vs Normal Function?

* Arrow → lexical `this`
* Normal → dynamic `this`

---

### 2. What is lexical this?

Arrow function inherits `this` from surrounding scope.

---

### 3. When not to use arrow?

* When `this` is needed
* In object methods

---

## 🔹 Practice Problems

1. Convert normal functions to arrow
2. Write utility functions using arrow
3. Fix `this` binding bug
4. Return object using arrow
5. Predict output of arrow functions

---

## 🔹 Bonus

### Concise Arrow Utility

```js
const isEven = num => num % 2 === 0;
```

---

### Array Mapping

```js
[1,2,3].map(num => num * 2);
```

---
