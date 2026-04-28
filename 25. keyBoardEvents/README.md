# 📘 JavaScript Keyboard Events

## 🔹 Topic Overview

Keyboard events are triggered when a user interacts with the keyboard.

---

## 🔹 Types of Keyboard Events

| Event    | Description                                |
| -------- | ------------------------------------------ |
| keydown  | Triggered when key is pressed              |
| keyup    | Triggered when key is released             |
| keypress | Triggered when key is pressed (deprecated) |

---

# 🔹 keydown Event

Triggered when a key is pressed.

```js
document.addEventListener("keydown", (e) => {
    console.log(e.key);
});
```

---

# 🔹 keyup Event

Triggered when a key is released.

```js
document.addEventListener("keyup", (e) => {
    console.log(e.key);
});
```

---

# 🔹 keypress Event (Deprecated)

* Not recommended in modern JavaScript
* Does not detect all keys

---

# 🔹 Event Object Properties

```js
e.key      // key value (recommended)
e.code     // physical key on keyboard
e.keyCode  // deprecated
```

---

### Example

```js
document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        console.log("Enter pressed");
    }
});
```

---

# 🔹 Difference Between Events

| Feature          | keydown  | keyup      |
| ---------------- | -------- | ---------- |
| Trigger          | on press | on release |
| Fires repeatedly | Yes      | No         |

---

# 🔹 Your Example (Improved)

```js
document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        console.log("KeyDown - Enter pressed");
    }
});

document.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        console.log("KeyUp - Enter released");
    }
});
```

---

# 🔹 Key Concepts

* Keyboard events detect user input
* keydown is most commonly used
* keypress is deprecated
* event object gives key details

---

# 🔹 Common Mistakes

* Using keyCode instead of key
* Using keypress (deprecated)
* Not checking correct key value
* Attaching event to wrong element

---

# 🔹 Interview Questions (with Answers)

### 1. Difference between keydown and keyup?

* keydown → when key is pressed
* keyup → when key is released

---

### 2. Why is keypress deprecated?

It does not handle all keys and is inconsistent.

---

### 3. What is e.key?

Returns the key value pressed (recommended way).

---

### 4. Difference between key and code?

* key → actual character
* code → physical key

---

# 🔹 Practice Problems

1. Detect Enter key press
2. Build shortcut (Ctrl + S)
3. Detect arrow keys
4. Prevent typing numbers
5. Show pressed key on screen

---

# 🔹 Bonus

### Detect Shortcut

```js
document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key === "s") {
        e.preventDefault();
        console.log("Save triggered");
    }
});
```

---

### Show Typed Keys

```js
document.addEventListener("keydown", (e) => {
    console.log("Pressed:", e.key);
});
```

---

## 🔹 Summary

Keyboard events help capture user input and build interactive features like shortcuts and validation.

---
