# 📘 JavaScript Async / Await

## 🔹 Topic Overview

Async / Await:

👉 "Makes promises easy to write"

`async/await is syntactic sugar over Promises that makes asynchronous code easier to read and write.`

* It is a cleaner and more readable way to handle asynchronous code instead of using `.then()` and `.catch()`.

---

## 🔹 What is Async / Await?

* async → makes a function asynchronous and always returns a Promise
* await → pauses execution until Promise resolves

---

## 🔹 Syntax

### Async Function

```js id="aa1"
async function func_name() {
    // code
    return "Hello";
}
```
👉 Always returns a Promise

---

### Await

```js id="aa2"
let result = await promise;
```
👉 Waits until Promise resolves

---

## 🔹 Example

```js id="aa3"
async function getData() {
    const res = await fetch("https://api.example.com");
    const data = await res.json();
    console.log(data);
}

getData();
```

---

## 🔹 Rules

1. async always returns a Promise
2. await works only inside async function
3. await pauses execution until Promise resolves

---

## 🔹 How Async Works

```text id="aa4"
async function → returns Promise
await → pauses function
resume after promise resolves
```

---

## 🔹 Error Handling (try-catch)

```js id="a4"
async function getData() {
    try {
        const res = await fetch("URL");
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}
```

---

## 🔹 Example

```js id="aa8"
function checkNumber(num) {
    return new Promise((resolve, reject) => {
        if (num > 0) resolve("Success");
        else reject("Failure");
    });
}

async function runCheck(num) {
    try {
        const result = await checkNumber(num);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
```

---

## 🔹 Converting Promise to Async/Await

### Before (then/catch)

```js id="aa5"
fetch("URL")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
```

---

### After (async/await)

```js id="aa6"
async function getData() {
    try {
        let res = await fetch("URL");
        let data = await res.json();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}
```

---

## 🔹 How to CONVERT any function to ASYNC

### Step 1

Add `async` keyword

### Step 2

Replace `.then()` with `await`

### Step 3

Replace `.catch()` with `try-catch`

---

### Example

```js id="a5"
// OLD (Promise)
function checkNumber(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num > 0) resolve("Success");
            else reject("Failure");
        }, 1000);
    });
}

// NEW (Async)
async function runCheck(num) {
    try {
        const result = await checkNumber(num);
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}
```

---

## 🔹 Important Note

👉 async function **suspends execution** when it encounters await

👉 After Promise resolves, execution continues

---

## 🔹 Advantages

* Cleaner code
* Easy to read
* Avoids chaining
* Better error handling
* Looks like synchronous code

---

## 🔹 Sequential vs Parallel

### Sequential

```js id="a6"
const r1 = await p1;
const r2 = await p2;
```

👉 Slow (waits one by one)

---

### Parallel

```js id="a7"
const results = await Promise.all([p1, p2]);
```

👉 Faster (runs together)

---

## 🔹 Promise vs Async/Await

| Feature      | Promise (.then) | Async/Await |
| ------------ | --------------- | ----------- |
| Syntax       | Complex         | Simple      |
| Readability  | Medium          | High        |
| Error Handle | catch()         | try-catch   |

---

## 🔹 Event Loop (Important)

👉 JavaScript is single-threaded

👉 Async works using:

```text id="a8"
Call Stack → Web APIs → Callback Queue → Event Loop
```

Flow:

1. Async task goes to Web API
2. After completion → queue
3. Event loop pushes it to stack

---

## 🔹 Async/Await Under the Hood

👉 async/await is just syntactic sugar over Promises

```js id="a9"
async function test() {
    return 5;
}
```

👉 Same as:

```js id="a10"
function test() {
    return Promise.resolve(5);
}
```

---

## 🔹 Microtask vs Macrotask (Bonus)

### Microtask Queue

* Promise.then
* queueMicrotask

### Macrotask Queue

* setTimeout
* setInterval

👉 Microtasks run first

---

## 🔹 Common Mistakes

* Using await outside async ❌
* Forgetting try-catch ❌
* Not handling errors ❌
* Writing sequential instead of parallel ❌
* Thinking await blocks entire JS (it only pauses inside function)

---

## 🔹 Interview Questions (with Answers)

### 1. What is async?

A function that always returns a Promise.

---

### 2. What does await do?

Pauses execution until Promise resolves.

---

### 3. Can we use await without async?

No.

---

### 4. Difference between async/await and then?

* async/await → cleaner, readable
* then → chaining style

---

### 5. Does async/await make code synchronous?

No, it only makes it look synchronous.

---

### 6. Event loop explanation

Mechanism that handles async execution using call stack and queue.

---

### 7. Async await under the hood?

It is built on top of Promises.

---

### 8. Promise vs async/await?

Async/await is cleaner and easier.

---

### 9. Microtask vs Macrotask?

Microtasks execute before macrotasks.

---

## 🔹 Practice Problems

1. Create your own promise
2. Promisify setTimeout
3. Run promises in parallel
4. Retry failed API call
5. Timeout wrapper for fetch
6. Sequential vs parallel API calls
7. Convert callback to promise
8. Convert Promise code to async/await
9. Fetch data using async/await
10. Handle API errors
11. Create delay function using await
12. Chain multiple awaits

---

## 🔹 Bonus

### Promisify setTimeout

```js id="a11"
function delay(ms) {
    return new Promise(res => setTimeout(res, ms));
}
```

### Parallel Execution

```js id="aa9"
let [a, b] = await Promise.all([
    fetch("url1"),
    fetch("url2")
]);
```

```js id="a12"
await Promise.all([p1, p2]);
```

---

### Delay Function

```js id="aa10"
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
```

---

## 🔹 Summary

* async makes function return Promise
* await pauses execution
* try-catch handles errors
* cleaner alternative to then/catch
* widely used in real-world apps

---
