# 📘 JavaScript Events (Basics)

## 🔹 Topic Overview

Events are actions that happen in a webpage.

Examples:

* Clicking the mouse
* Hovering
* Pressing keys
* Webpage loading
* Form submission
* Video controls

---

## 🔹 What are Events?

👉 All DOM elements (nodes) can generate events.

Some common examples:

| Action       | Event            |
| ------------ | ---------------- |
| Button click | click            |
| Mouse hover  | mouseover        |
| Form submit  | submit           |
| Page load    | DOMContentLoaded |

---

## 🔹 HTML Event Attributes

Events can be handled directly in HTML using:

```html
<button onclick="handleClick()">Click</button>
```

👉 `on<event>` format is used (like `onclick`, `onmouseover`)

---

# 🔹 Event Handlers

Event Handlers are functions that execute when an event occurs.

---

## 🔹 Two Ways of Event Handling

```id="evbasicflow"
        Event Handling Methods
       ________________________
       |                      |
 Event Properties     addEventListener()
```

---

### 1. Using Event Property

```js
element.onclick = function () {
    console.log("Clicked");
};
```

---

### 2. Using addEventListener()

```js
element.addEventListener("click", function () {
    console.log("Clicked");
});
```

👉 Recommended approach
👉 Allows multiple event handlers

---

## 🔹 Key Points on Event Handlers

* Every event automatically passes an **event object**
* This object contains useful information about the event

---

### Example

```js
element.addEventListener("click", function (event) {
    console.log(event);
});
```

---

## 🔹 event.target

```js
event.target
```

👉 It tells **which HTML element triggered the event**

---

### Example

```js
document.addEventListener("click", function (event) {
    console.log(event.target);
});
```

---

## 🔹 Simple Example

```js
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    alert("Button Clicked");
});
```

---

## 🔹 Key Concepts

* Events represent user or browser actions
* Event handlers define what to do
* Events are attached to DOM elements
* Event object gives additional details

---

## 🔹 Common Mistakes

* Using `onclick` instead of `addEventListener`
* Forgetting event object
* Not understanding which element triggered event
* Writing logic directly in HTML

---

## 🔹 Interview Questions

### 1. What are events in JavaScript?

Actions that occur in a webpage and can be handled using JavaScript.

---

### 2. Difference between onclick and addEventListener?

* onclick → only one handler
* addEventListener → multiple handlers

---

### 3. What is event.target?

The element that triggered the event.

---

## 🔹 Practice Problems

1. Create button click alert
2. Change text on click
3. Show clicked element using event.target
4. Add multiple event listeners to same element

---

## 🔹 Summary

Events allow interaction between user and webpage, and event handlers define how the application responds.

---