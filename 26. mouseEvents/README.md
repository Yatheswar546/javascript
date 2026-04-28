# 📘 JavaScript Mouse Events

## 🔹 Topic Overview

Mouse events are triggered when a user interacts with the mouse.

---

## 🔹 What are Mouse Events?

👉 Events triggered when mouse buttons are:

* Clicked
* Released
* Moved
* Hovered

---

## 🔹 Types of Mouse Events

### 1. mousedown

Triggered when any mouse button is pressed.

```js id="me1"
element.addEventListener("mousedown", () => {
    console.log("Mouse Down");
});
```

---

### 2. mouseup

Triggered when mouse button is released.

```js id="me2"
element.addEventListener("mouseup", () => {
    console.log("Mouse Up");
});
```

---

### 3. click

Triggered when mouse is pressed and released on same element.

```js id="me3"
element.addEventListener("click", () => {
    console.log("Clicked");
});
```

---

### 4. dblclick

Triggered when element is double clicked.

```js id="me4"
element.addEventListener("dblclick", () => {
    console.log("Double Click");
});
```

---

### 5. mouseover

Triggered when mouse enters element **including child elements**.

```js id="me5"
element.addEventListener("mouseover", () => {
    console.log("Mouse Over");
});
```

---

### 6. mouseenter

Triggered when mouse enters element (not child elements).

```js id="me6"
element.addEventListener("mouseenter", () => {
    console.log("Mouse Enter");
});
```

---

### 🔸 Difference: mouseover vs mouseenter

| Feature                    | mouseover | mouseenter |
| -------------------------- | --------- | ---------- |
| Triggers on child elements | Yes       | No         |
| Bubbles                    | Yes       | No         |

---

### 7. mousemove

Triggered when mouse moves over element.

```js id="me7"
element.addEventListener("mousemove", () => {
    console.log("Moving");
});
```

---

## 🔹 Your Example Explained

### Button Events

```js id="me8"
btn.addEventListener("mousedown", () => {});
btn.addEventListener("mouseup", () => {});
btn.addEventListener("click", () => {});
btn.addEventListener("dblclick", () => {});
```

---

### Hover Counter

```js id="me9"
over.addEventListener("mouseover", () => {
    count++;
});
```

---

### Mouse Move Counter

```js id="me10"
move.addEventListener("mousemove", () => {
    count++;
});
```

---

## 🔹 Key Concepts

* Mouse events detect user interaction
* click = mousedown + mouseup
* mousemove can fire many times
* mouseenter is more controlled than mouseover

---

## 🔹 Common Mistakes

* Confusing mouseover and mouseenter
* Using mousemove unnecessarily (performance issue)
* Forgetting event bubbling behavior
* Not handling multiple clicks properly

---

## 🔹 Interview Questions (with Answers)

### 1. Difference between mousedown and click?

* mousedown → when pressed
* click → press + release

---

### 2. mouseover vs mouseenter?

* mouseover → includes children
* mouseenter → only parent

---

### 3. What is dblclick?

Triggered when user clicks twice quickly.

---

### 4. Why avoid mousemove sometimes?

Because it fires continuously and can affect performance.

---

## 🔹 Practice Problems

1. Create click counter
2. Change color on hover
3. Drag element using mousemove
4. Detect double click action
5. Show mouse coordinates

---

## 🔹 Bonus

### Get Mouse Position

```js id="me11"
document.addEventListener("mousemove", (e) => {
    console.log(e.clientX, e.clientY);
});
```

---

### Hover Effect Example

```js id="me12"
element.addEventListener("mouseenter", () => {
    element.style.backgroundColor = "red";
});
```

---

## 🔹 Summary

Mouse events help build interactive UI by detecting user actions like clicking, hovering, and movement.

---
