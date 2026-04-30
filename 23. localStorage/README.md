# 📘 JavaScript localStorage

## 🔹 Topic Overview

localStorage is a browser storage mechanism that lets you store data in the user's browser permanently (until manually cleared).

---

## 🔹 Key Features

* Data persists even after page refresh or browser restart
* Stores data as key-value pairs
* Part of the Web Storage API
* Stores data only as strings

---

## 🔹 Basic Methods

### Save Data

```js id="l1"
localStorage.setItem("username", "yathe");
```

---

### Get Data

```js id="l2"
localStorage.getItem("username");
```

---

### Remove Data

```js id="l3"
localStorage.removeItem("username");
```

---

### Clear All Data

```js id="l4"
localStorage.clear();
```

---

## 🔹 Important Note

👉 Both keys and values are stored as **strings**

---

## 🔹 Storing Objects (Important)

### Save Object

```js id="l5"
let user = { name: "Yathe", age: 25 };

localStorage.setItem("user", JSON.stringify(user));
```

---

### Get Object

```js id="l6"
let data = JSON.parse(localStorage.getItem("user"));
console.log(data.name);
```

---

## 🔹 Why JSON.stringify and JSON.parse?

* localStorage stores only strings
* Objects must be converted to string
* When retrieving, convert back to object

---

## 🔹 Example (Persistent Todo)

```js id="l7"
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

tasks.push("Learn JS");

localStorage.setItem("tasks", JSON.stringify(tasks));
```

---

## 🔹 localStorage vs sessionStorage

| Feature     | localStorage   | sessionStorage |
| ----------- | -------------- | -------------- |
| Persistence | Permanent      | Session only   |
| Tab sharing | Yes            | No             |
| Use case    | Long-term data | Temporary data |

---

## 🔹 Storage Limits

* Around 5MB (depends on browser)
* Not suitable for large data

---

## 🔹 Security Concerns

* Accessible via JavaScript
* Not safe for sensitive data
* Avoid storing passwords, tokens

---

## 🔹 Common Mistakes

* Forgetting JSON.stringify
* Forgetting JSON.parse
* Storing large data
* Assuming it is secure

---

## 🔹 Interview Questions (with Answers)

### 1. What is localStorage?

Browser storage to store data permanently.

---

### 2. Why stringify needed?

Because localStorage stores only strings.

---

### 3. localStorage vs sessionStorage?

* localStorage → permanent
* sessionStorage → temporary

---

### 4. Storage limits?

Around 5MB.

---

### 5. Is localStorage secure?

No, avoid storing sensitive data.

---

## 🔹 Practice Problems

1. Persistent todo app
2. Theme switcher save preference
3. Cart persistence
4. Auto-save form draft
5. Storage wrapper utility

---

## 🔹 Bonus

### Theme Switcher Example

```js id="l8"
localStorage.setItem("theme", "dark");

let theme = localStorage.getItem("theme");

document.body.className = theme;
```

---

### Safe Get Utility

```js id="l9"
function getStorage(key) {
    try {
        return JSON.parse(localStorage.getItem(key));
    } catch {
        return null;
    }
}
```

---

## 🔹 Summary

* localStorage stores data in browser
* Data persists after refresh
* Only strings allowed
* Use JSON for objects
* Useful for caching, preferences

---
