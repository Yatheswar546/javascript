# 📘 JavaScript Web APIs

## 🔹 Topic Overview

Web APIs are browser-provided features that allow JavaScript to interact with the browser environment.

👉 JavaScript alone is synchronous and limited
👉 Web APIs give it extra capabilities

---

## 🔹 What are Web APIs?

Web APIs are built-in browser features like:

* DOM manipulation
* Timers (setTimeout)
* HTTP requests (fetch)
* Storage (localStorage)

👉 These are not part of core JavaScript
👉 They are provided by the browser
👉 `Web APIs are provided by the browser to handle asynchronous operations.`

---

## 🔹 Why Web APIs?

JavaScript is synchronous by default.

```js
console.log("A");
console.log("B");
```

Output:

```
A
B
```

👉 But real-world apps need:

* Delays
* API calls
* User interactions

👉 Web APIs make this possible

---

## 🔹 How Web APIs Work

```text
JavaScript → Web API → Callback Queue → Event Loop → Call Stack
```

👉 Flow:

1. JS calls Web API
2. Web API handles task
3. Result goes to callback queue
4. Event loop pushes it back to JS

---

## 🔹 Common Web APIs

### 1. DOM API

Used to interact with HTML elements.

```js
document.getElementById("id");
```

---

### 2. setTimeout()

Runs code after delay.

```js
setTimeout(() => {
    console.log("Hello");
}, 2000);
```

---

### 3. Fetch API

Used to make HTTP requests.

```js
fetch("https://api.com")
    .then(res => res.json())
    .then(data => console.log(data));
```

---

### 4. LocalStorage API

Stores data in browser.

```js
localStorage.setItem("name", "Yathe");
localStorage.getItem("name");
```

---

### 5. console API

Used for debugging.

```js
console.log("Hello");
```

---

## 🔹 Key Concepts

* Web APIs are provided by browser
* Enable async behavior
* Work with event loop
* Not part of JavaScript engine

---

## 🔹 Real Example Flow

```js
setTimeout(() => {
    console.log("Hello");
}, 2000);
```

👉 Flow:

1. JS sends setTimeout to Web API
2. Timer runs in browser
3. After 2s → goes to callback queue
4. Event loop executes it

---

## 🔹 Common Mistakes

* Thinking Web APIs are part of JS
* Ignoring async behavior
* Not understanding event loop
* Misusing fetch without error handling

---

## 🔹 Interview Questions (with Answers)

### 1. What are Web APIs?

Browser-provided features that extend JavaScript.

---

### 2. Are Web APIs part of JavaScript?

No, they are provided by the browser.

---

### 3. Why Web APIs are needed?

To handle async tasks like API calls, timers, DOM.

---

### 4. What is event loop role?

Moves tasks from queue to execution stack.

---

### 5. Examples of Web APIs?

* DOM
* fetch
* setTimeout
* localStorage

---

## 🔹 Practice Problems

1. Use setTimeout to delay output
2. Fetch data from API
3. Store user data in localStorage
4. Create timer app
5. Display API data on UI

---

## 🔹 Bonus

### setInterval Example

```js
setInterval(() => {
    console.log("Running...");
}, 1000);
```

---

### Clear Timeout

```js
let id = setTimeout(() => {}, 2000);
clearTimeout(id);
```

---

## 🔹 Summary

* Web APIs extend JavaScript
* Enable async programming
* Work with event loop
* Essential for real-world apps

---
