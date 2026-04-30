# 📘 JavaScript Asynchronous Programming

## 🔹 Topic Overview

Asynchronous programming means:

👉 "I will finish it later!"

It allows JavaScript to run tasks in the background without blocking the main program. 

---

## 🔹 What is Asynchronous Programming?

* Writing code where tasks run in background without stopping the execution of other code.

* It allows other work to continue while waiting for results.

* We can refer as functions `running in parallel` with other functions.

👉 Example:

* API calls
* Timers
* File operations

---

## 🔹 Synchronous vs Asynchronous

### Synchronous (Default JS)

```js
console.log("1");
console.log("2");
console.log("3");
```

Output:

```
1
2
3
```

👉 Runs line-by-line

---

### Asynchronous

```js
console.log("1");

setTimeout(() => {
    console.log("2");
}, 2000);

console.log("3");
```

Output:

```
1
3
2
```

👉 Step 2 runs later

---

## 🔹 setTimeout()

Used to delay execution.

```js
setTimeout(function() {
    console.log("Hello");
}, 1000);
```

### Explanation:

* setTimeout → wait function
* function   → task to run
* 1000       → delay in milliseconds

---

## 🔹 setInterval()

Runs repeatedly after interval.

```js
setInterval(() => {
    console.log("Running...");
}, 1000);
```

---

## 🔹 Ways to Achieve Asynchronous Programming

### 1. Callbacks

```js
setTimeout(() => {
    console.log("Done");
}, 2000);
```

---

### 2. Promises

👉 Will be covered next

---

### 3. Async / Await

👉 Cleaner way to handle async code

---

### 4. Timers

* setTimeout()
* setInterval()

---

### 5. Event Listeners

```js
button.addEventListener("click", () => {
    console.log("Clicked");
});
```

---

## 🔹 Important Note

JavaScript Engine is:

* Single-threaded
* Synchronous

👉 It can execute only one line at a time

👉 Asynchronous behavior is possible because of:

* Web APIs
* Event Loop

---

## 🔹 How Async Works (Core Concept)

```text
Call Stack → Web API → Callback Queue → Event Loop → Call Stack
```

### Flow:

1. JS executes code
2. Async task goes to Web API
3. After completion → moves to queue
4. Event loop executes it

---

## 🔹 Real Example

```js
console.log("Start");

setTimeout(() => {
    console.log("Async Task");
}, 2000);

console.log("End");
```

Output:

```
Start
End
Async Task
```

---

## 🔹 Common Mistakes

* Expecting async code to run immediately
* Not understanding execution order
* Forgetting callbacks run later
* Ignoring event loop

---

## 🔹 Interview Questions (with Answers)

### 1. What is asynchronous programming?

Running tasks without blocking main execution.

---

### 2. Is JavaScript synchronous or asynchronous?

👉 Single-threaded synchronous
👉 Supports async using Web APIs

---

### 3. Why async is needed?

To handle:

* API calls
* Timers
* User interactions

---

### 4. Difference between setTimeout and setInterval?

* setTimeout → runs once
* setInterval → runs repeatedly

---

### 5. What is event loop?

Mechanism that executes async callbacks.

---

## 🔹 Practice Problems

1. Delay execution using setTimeout
2. Create digital clock using setInterval
3. Stop interval using clearInterval
4. Simulate API delay using setTimeout
5. Print numbers with delay

---

## 🔹 Bonus

### Clear Timeout

```js
let id = setTimeout(() => {}, 2000);
clearTimeout(id);
```

---

### Async Simulation

```js
function fakeAPI() {
    setTimeout(() => {
        console.log("Data received");
    }, 2000);
}
```

---

## 🔹 Summary

* JavaScript is single-threaded
* Async allows background execution
* setTimeout & setInterval are core tools
* Event loop handles execution
* Foundation for Promises & async/await

---
