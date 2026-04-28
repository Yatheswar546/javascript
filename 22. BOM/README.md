# 📘 Browser Object Model (BOM)

## 🔹 Topic Overview

The Browser Object Model (BOM) represents the browser window and allows JavaScript to interact with it.

---

## 🔹 Key Idea

👉 BOM allows interaction with browser features like:

* URL
* History
* Screen
* Browser info

---

## 🔹 BOM Structure

```id="f0k2c9"
                                window
        ___________________________|___________________________
        |            |             |             |             |
     document     history       location       screen       navigator
```

---

## 🔹 window Object

* Global object in browser
* All BOM objects are inside `window`

```js
window.alert("Hello");
```

---

## 🔹 document Object

* Represents HTML page
* Used for DOM manipulation

---

## 🔹 location Object

* Contains current URL information

```js
window.location.href
window.location.reload()
window.location.assign("url")
```

---

## 🔹 history Object

* Stores browser history

```js
window.history.back()
window.history.forward()
```

---

## 🔹 screen Object

* Provides screen size

```js
window.screen.width
window.screen.height
```

---

## 🔹 navigator Object

* Provides browser and OS info

```js
navigator.userAgent
navigator.platform
```

---

## 🔹 Examples

### 1. Get Screen Size

```js id="bom1"
window.screen.width
window.screen.height
```

---

### 2. Redirect Page

```js id="bom2"
window.location.href = "https://google.com";
```

---

### 3. Browser Info

```js id="bom3"
navigator.userAgent
```

---

### 4. Navigation

```js id="bom4"
window.history.back();
```

---

## 🔹 Key Concepts

* window is root object
* BOM interacts with browser
* DOM is part of BOM

---

## 🔹 Common Mistakes

* Confusing DOM and BOM
* Using location incorrectly
* Not understanding window scope

---

## 🔹 Interview Questions (with Answers)

### 1. window vs document?

* window → browser
* document → HTML

---

### 2. location vs history?

* location → URL control
* history → navigation

---

### 3. navigator use cases?

* Detect browser
* Detect OS
* Feature support

---

## 🔹 Practice Problems

1. Redirect after 3 seconds
2. Detect user browser
3. Get screen size
4. Create custom back button

---

## 🔹 Bonus

### Reload Page

```js id="bom5"
window.location.reload();
```

---

### Alert & Confirm

```js id="bom6"
alert("Hello");
confirm("Are you sure?");
```

---

## 🔹 Summary

BOM helps JavaScript interact with the browser environment beyond HTML.

---
