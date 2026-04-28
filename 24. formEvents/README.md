# 📘 JavaScript Form Events

## 🔹 Topic Overview

Form events are triggered when users interact with input fields or submit forms.

---

## 🔹 Common Form Events

| Event  | Description                                    |
| ------ | ---------------------------------------------- |
| change | Triggered when value changes and focus is lost (or) user selects a value from dropdown etc...|
| input  | Triggered on every keystroke                   |
| focus  | Triggered when input is focused                |
| blur   | Triggered when input loses focus               |
| submit | Triggered when form is submitted               |

---

# 🔹 change Event

Triggered when input value is changed and user leaves the field.

```js id="fe1"
input.addEventListener("change", (e) => {
    console.log(e.target.value);
});
```

---

## 🔹 input Event (Important)

Triggered on every key press.

```js id="fe2"
input.addEventListener("input", (e) => {
    console.log(e.target.value);
});
```

👉 Preferred for real-time validation

---

# 🔹 focus Event

Triggered when user clicks or tabs into input field.

```js id="fe3"
input.addEventListener("focus", () => {
    console.log("Focused");
});
```

---

# 🔹 blur Event

Triggered when input loses focus.

```js id="fe4"
input.addEventListener("blur", () => {
    console.log("Element lost focus");
});
```

---

# 🔹 submit Event

Triggered when form is submitted.

```js id="fe5"
form.addEventListener("submit", (e) => {
    e.preventDefault();
});
```

---

## 🔹 preventDefault()

Stops default browser behavior.

👉 Example:

* Prevent page reload on form submit

```js id="fe6"
e.preventDefault();
```

---

# 🔹 Key Concepts

* Form events handle user input
* Event object gives field value
* preventDefault prevents reload
* input event is better for validation

---

# 🔹 Common Mistakes

* Using `change` instead of `input`
* Forgetting `preventDefault()`
* Not validating inputs
* Accessing wrong element

---

# 🔹 Interview Questions (with Answers)

### 1. Difference between change and input?

* change → after focus loss
* input → on every keystroke

---

### 2. What does preventDefault do?

Stops default browser behavior like form reload.

---

### 3. What is submit event?

Triggered when form is submitted.

---

### 4. When to use blur event?

To validate input after user leaves field.

---

# 🔹 Practice Problems

1. Validate form using input event
2. Prevent empty submission
3. Show error message on blur
4. Convert input text to uppercase
5. Real-time email validation

---

# 🔹 Bonus

### Simple Validation Example

```js id="fe8"
form.addEventListener("submit", (e) => {
    let name = document.getElementById("name").value;

    if (name === "") {
        alert("Name is required");
        e.preventDefault();
    }
});
```

---

## 🔹 Summary

Form events help capture and validate user input before processing.

---
