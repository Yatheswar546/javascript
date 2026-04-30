# 📘 JavaScript Promises

## 🔹 Topic Overview

Promises:

👉 "I Promise a Result !!!"

A Promise represents a value (output of a request) which is not available now but will be available in the future.

👉 A Promise is an object that represents the eventual completion or failure of an asynchronous operation.

---

## 🔹 What is a Promise?

A Promise is:

* A placeholder for a future value
* Used to handle asynchronous operations
* Helps avoid callback problems
* It defers the execution of a code block until an asynchronous request is completed

👉 Important Correction:

❌ *"Promises have a deterministic value from the very start"*
✔ A Promise does NOT have the actual value immediately, but its **state is predictable** (pending → fulfilled/rejected)

👉 Example:

* API calls
* File reading
* Database operations

---

## 🔹 There are primarily two scenarios where we use a Promise:

* When you create a Promise (Producing code)
* When you consume the result of a Promise (Consuming code)

---

## 🔹 Why Promises?

In asynchronous programming:

* Code runs in background
* We need a way to handle result later

👉 Promise solves this problem by giving structured handling of async results.

---

## 🔹 Promise Syntax

```js id="p1"
const myPromise = new Promise((resolve, reject) => {
    // Promise body - async task

    if (success) {
        resolve("Success");
    } else {
        reject("Error");
    }
});
```

👉 Promise constructor has only **one argument → a callback function**

👉 Callback receives two parameters:

* resolve() → called when operation is successful
* reject() → called when operation fails

---

## 🔹 Promise States

```text id="p2"
Pending → Fulfilled / Rejected
```

(“Start” and “Result” are conceptual, not actual states)

### 1. Pending

* Initial state
* Waiting for result

### 2. Fulfilled

* Operation successful
* resolve() called

### 3. Rejected

* Operation failed
* reject() called

---

## 🔹 Producing vs Consuming

### Producing Code

👉 Code that creates the Promise

```js id="p3"
const promise = new Promise((resolve, reject) => {
    resolve("Data Ready");
});
```

---

### Consuming Code

👉 Code that uses the Promise result

```js id="p4"
promise
    .then(data => console.log(data))
    .catch(err => console.log(err));
```

👉 When producing code gets result:

* Success → resolve(result)
* Failure → reject(error)

---

## 🔹 Handling Promises

### then() and catch()

* then() → handles success → RESOLVE

* catch() → handles error → REJECT

* then() receives data passed to resolve()

* catch() receives data passed to reject()

```js id="p5"
promise
    .then(res => console.log(res))
    .catch(err => console.error(err));
```

---

## 🔹 Example (ATM Example)

```js id="p6"
const isCashAvailable = true;

const atmPromise = new Promise((resolve, reject) => {
    if(isCashAvailable){
        resolve({ message: "Cash Available" });
    } else {
        reject({ message: "No Cash" });
    }
});

atmPromise
    .then(data => console.log(data))
    .catch(err => console.error(err));
```

---

## 🔹 Promise Chaining

```js id="p7"
new Promise(resolve => resolve(5))
    .then(num => num * 2)
    .then(num => num + 3)
    .then(result => console.log(result));
```

👉 Output:

```text id="p8"
13
```

---

## 🔹 Real Example (API Simulation)

```js id="p9"
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data from server");
        }, 2000);
    });
}

fetchData().then(data => console.log(data));
```

---

## 🔹 Important Concepts

### 1. Promises are asynchronous

They do not block execution of other code.

---

### 2. Always return in chaining

```js id="p10"
.then(data => {
    return data * 2;
})
```

👉 Without return, next then() will get undefined

---

### 3. Error Handling

```js id="p11"
promise
    .then(res => console.log(res))
    .catch(err => console.log(err));
```

---

## 🔹 Common Mistakes

* Not using catch()
* Not returning value in then()
* Nesting instead of chaining
* Confusing sync vs async
* Forgetting that Promises are async

---

## 🔹 Interview Questions (with Answers)

### 1. What is a Promise?

A Promise is an object that represents the eventual completion or failure of an asynchronous operation.

---

### 2. States of Promise?

* Pending
* Fulfilled
* Rejected

---

### 3. Difference between then and catch?

* then → handles success
* catch → handles errors

---

### 4. Why Promises over callbacks?

* Avoid callback hell
* Better readability
* Better error handling

---

### 5. What is chaining?

Passing the result from one then() to another then().

---

## 🔹 Practice Problems

1. Create a promise that resolves after 2 seconds
2. Handle both success and failure
3. Chain multiple then() calls
4. Simulate API call using setTimeout
5. Convert callback-based code to Promise

---

## 🔹 Bonus

### Promise.all()

```js id="p12"
Promise.all([
    Promise.resolve(1),
    Promise.resolve(2)
]).then(res => console.log(res));
```

👉 Runs multiple promises in parallel

---

### Promise.race()

```js id="p13"
Promise.race([
    new Promise(r => setTimeout(() => r("First"), 1000)),
    new Promise(r => setTimeout(() => r("Second"), 2000))
]).then(console.log);
```

👉 Returns the fastest promise

---

## 🔹 Summary

* Promises handle async operations
* resolve() → success
* reject() → failure
* then() and catch() handle results
* chaining improves readability
* foundation for async/await

---
