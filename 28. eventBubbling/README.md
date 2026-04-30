# 📘 JavaScript Event Bubbling

## 🔹 Topic Overview

Event Bubbling is a JavaScript behavior where an event triggered on a child element propagates upward through its parent elements in the DOM.

👉 Flow:

Child → Parent → Grandparent → Document

---

## 🔹 Example

```js
document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent Clicked");
});

document.getElementById("child").addEventListener("click", () => {
    console.log("Child Clicked");
});
```

### Output:

```
Child Clicked
Parent Clicked
```

👉 First child runs → then parent (bubbling)

---

## 🔹 Event Flow Order

JavaScript events follow 3 phases:

1. Capturing Phase (top → down)
2. Target Phase
3. Bubbling Phase (bottom → up)

---

## 🔹 Event Bubbling vs Capturing

| Phase     | Direction   |
| --------- | ----------- |
| Capturing | Top → Down  |
| Bubbling  | Bottom → Up |

👉 By default, JavaScript uses **bubbling**

---

## 🔹 Event Delegation

Event Delegation means attaching a single event listener to a parent to handle child events.

```js
document.querySelector("#list").addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        console.log("Clicked", e.target.textContent);
    }
});
```

### Why use it?

* Better performance
* Works for dynamic elements
* Less code

---

## 🔹 Stopping Event Bubbling

```js
element.addEventListener("click", (e) => {
    e.stopPropagation();
});
```

👉 Stops event from moving to parent elements

---

## 🔹 Key Concepts

* Events bubble up by default
* Parent can handle child events
* Delegation improves performance
* stopPropagation stops bubbling

---

## 🔹 Common Mistakes

* Forgetting bubbling behavior
* Misusing stopPropagation
* Not using delegation for dynamic elements
* Confusing capturing and bubbling

---

## 🔹 Interview Questions (with Answers)

### 1. What are event flow phases?

1. Capturing
2. Target
3. Bubbling

---

### 2. Event bubbling vs capturing?

* Bubbling → bottom to top
* Capturing → top to bottom

---

### 3. preventDefault vs stopPropagation?

* preventDefault → stops default behavior
* stopPropagation → stops event flow

---

### 4. What is event delegation?

Handling child events using parent listener.

👉 Efficient because:

* fewer listeners
* handles dynamic elements

---

## 🔹 Practice Problems

1. Button click counter
2. Form validation using preventDefault
3. Event delegation todo delete
4. Keyboard event listener
5. Detect outside click

---

## 🔹 Bonus

### Enable Capturing

```js
element.addEventListener("click", handler, true);
```

---

### Detect Click Outside Element

```js
document.addEventListener("click", (e) => {
    if (!element.contains(e.target)) {
        console.log("Clicked outside");
    }
});
```

---

## 🔹 Summary

* Event Bubbling is default behavior
* Events move from child → parent
* Event Delegation is powerful and efficient
* stopPropagation controls event flow

---
