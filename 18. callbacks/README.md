# 📘 Callbacks in JavaScript

## 🔹 Topic Overview

A callback is a function that is passed into another function as an argument to be executed later.

Callbacks make sure that a function is not going to run before a task is completed but will run right after the task has been completed.

---

## 🔹 Definition

* A callback is a function passed as an argument
* It is executed after another function completes
* Commonly used in "Asynchronous" programming

---

## 🔹 Why Callbacks?

* Control execution order
* Handle asynchronous operations
* Make code reusable

---

## 🔹 Basic Example

```js
function greet() {
    console.log("Hello");
}

function process(callback) {
    callback();
}

process(greet);
```

---

## 🔹 Your Example

```js
function ringAlarm() {
    console.log("Wake Up !!!! It's time");
}

function setAlarm(callback) {
    console.log("Wake up at 7am!!!");
    callback();
}

setAlarm(ringAlarm);
```

---

## 🔹 Different Forms of Callbacks

### 1. Function Declaration

```js
function greet(n) {
    console.log(`Hello ${n}`);
}

function reception(param) {
    let name = "Yatheswar";
    param(name);
}

reception(greet);
```

---

### 2. Function Expression

```js
reception(function (n) {
    console.log(`Hello ${n}`);
});
```

---

### 3. Arrow Function

```js
reception(n => console.log(`Hello ${n}`));
```

---

## 🔹 Synchronous Callback

Executes immediately

```js
function test(cb) {
    cb();
}
```

---

## 🔹 Asynchronous Callback

Executes later (after delay/task)

```js
setTimeout(() => {
    console.log("Done");
}, 1000);
```

---

## 🔹 Callback Hell

Nested callbacks make code hard to read and maintain.

```js
step1(() => {
    step2(() => {
        step3(() => {
            console.log("Done");
        });
    });
});
```

---

## 🔹 Common Mistakes

* Forgetting to call callback
* Passing function call instead of function
* Too many nested callbacks
* Not handling errors

---

## 🔹 Interview Questions (with Answers)

### 1. What is callback?

Function passed as argument and executed later.

---

### 2. What is callback hell?

Too many nested callbacks making code unreadable.

---

### 3. Synchronous vs Asynchronous callback?

* Sync → runs immediately
* Async → runs later (after task)

---

## 🔹 Practice Problems

1. Create custom callback function
2. Convert normal function to callback usage
3. Simulate async using setTimeout
4. Create nested callbacks example
5. Fix callback hell structure

---

## 🔹 Bonus

### Pass Data in Callback

```js
function process(cb) {
    cb("JS");
}

process(name => console.log(name));
```

---
