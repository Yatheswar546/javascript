# 📘 DOM Counter Example (Countdown Timer)

## 🔹 Project Overview

This project is a simple **JavaScript countdown timer** built using DOM manipulation.

* Counts down from **10 → 0**
* Updates UI every second
* Changes background image dynamically
* Demonstrates `setInterval` and DOM updates

---

## 🔹 Features

* Live countdown display
* Background image changes on each tick
* Stops automatically at 0
* Uses pure JavaScript (no libraries)

---

## 🔹 How It Works

1. Get DOM elements using `getElementById`
2. Read initial value from HTML
3. Use `setInterval()` to update every second
4. Update text and image dynamically
5. Stop timer using `clearInterval()`

---

## 🔹 DOM Elements Used

```js
let countdownelement = document.getElementById("countdown");
let bgimgelement = document.getElementById("bg-image");
```

---

## 🔹 Core Logic

```js
let interval = setInterval(function () {

    initialcountdown = initialcountdown > 0 
        ? initialcountdown - 1 
        : 0;

    countdownelement.innerHTML = initialcountdown;

    let backimgpath = initialcountdown % 2 === 0 
        ? './images/bg1.jpg' 
        : './images/bg2.jpg';

    bgimgelement.src = backimgpath;

    if (initialcountdown <= 0) {
        clearInterval(interval);
    }

}, 1000);
```

---

## 🔹 Key Concepts Used

### 1. DOM Manipulation

* Access elements
* Update text
* Change attributes

---

### 2. setInterval()

Runs a function repeatedly after fixed time

```js
setInterval(callback, 1000);
```

---

### 3. clearInterval()

Stops the interval

```js
clearInterval(interval);
```

---

### 4. Ternary Operator

```js
condition ? value1 : value2;
```

---

## 🔹 Image Switching Logic

```js
initialcountdown % 2 === 0
```

* Even → `bg1.jpg`
* Odd → `bg2.jpg`

---

## 🔹 CSS Concepts Used

* Absolute positioning
* Centering using transform
* Full-width image

---

## 🔹 Common Mistakes

* Forgetting `clearInterval()` → infinite loop
* Using string instead of number
* Not updating DOM properly
* Incorrect path for images

---

## 🔹 Improvements (Optional)

### 1. Convert to Number explicitly

```js
let initialcountdown = Number(countdownelement.innerHTML);
```

---

### 2. Add Start / Pause Button

---

### 3. Add Sound when reaches 0

---

### 4. Add Reset Function

---

### 5. Smooth Animation

---

## 🔹 Interview Questions (with Answers)

### 1. What is setInterval?

Runs a function repeatedly after fixed time.

---

### 2. Difference between setInterval and setTimeout?

* setInterval → repeats
* setTimeout → runs once

---

### 3. Why clearInterval is needed?

To stop execution and avoid memory leaks.

---

### 4. How DOM updates work here?

Using `innerHTML` and `src` updates.

---

## 🔹 Practice Problems

1. Build countdown timer
2. Create stopwatch
3. Add pause/resume
4. Add progress bar
5. Change UI dynamically

---

## 🔹 Bonus

### setTimeout Example

```js
setTimeout(() => {
    console.log("Runs once");
}, 1000);
```

---

## 🔹 Summary

This project demonstrates:

* DOM manipulation
* Timers in JavaScript
* Dynamic UI updates
* Conditional logic

---
