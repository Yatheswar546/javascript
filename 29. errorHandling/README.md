# 📘 JavaScript Error Handling

## 🔹 Topic Overview

When an error occurs, Js will normally stop, and generate an error message. 

Error handling is used to handle runtime errors and prevent application crashes.

👉 Without error handling:

* Program stops execution
* User experience breaks

👉 With error handling:

* Program continues safely
* Errors are managed

---

## 🔹 try / catch / finally

* The try/ catch/ finally statements handles some or all errors during the execution of a block of code (wrong input etc...), preventing the program from crashing.

### Syntax

```js
try {
    // risky code
} catch (error) {
    // handle error
} finally {
    // always runs
}
```

---

## 🔹 Example

```js
try {
    JSON.parse("invalid json");
} catch (error) {
    console.log("Error occurred");
} finally {
    console.log("Done");
}
```

---

## 🔹 throw (Custom Errors)

Used to create custom errors.

```js
function validate(age) {
    if (age < 18) {
        throw new Error("Age must be 18+");
    }
}
```

---

## 🔹 finally Block

* Always executes
* Used for cleanup

Example:

```js
finally {
    console.log("Execution completed");
}
```

---

## 🔹 Optional Chaining (?.)

Used to safely access nested properties.

```js
let city = user.address?.city;
```

👉 Prevents:

```
Cannot read property of undefined ❌
```

---

## 🔹 Defensive Programming

Writing code that prevents errors before they occur.

Examples:

* Input validation
* Null checks
* Safe parsing

---

## 🔹 Key Concepts

* try handles risky code
* catch handles errors
* finally always runs
* throw creates custom errors
* optional chaining avoids crashes

---

## 🔹 Common Mistakes

* Overusing try/catch
* Not logging errors
* Catching errors but ignoring them
* Not using optional chaining

---

## 🔹 Interview Questions (with Answers)

### 1. What are try/catch limitations?

* Only works for runtime errors
* Does not catch syntax errors
* Cannot catch async errors without await

---

### 2. How to throw custom error?

```js
throw new Error("Custom message");
```

---

### 3. What is finally?

Block that always executes.

---

### 4. Purpose of optional chaining?

Safely access nested properties without crashing.

---

## 🔹 Practice Problems

1. Safe JSON parse utility
2. Fetch wrapper with error handling
3. Retry with exponential backoff
4. Null-safe object reader
5. Global error handler

---

## 🔹 Bonus

### Safe JSON Parse

```js
function safeParse(json) {
    try {
        return JSON.parse(json);
    } catch {
        return null;
    }
}
```

---

### Retry Logic (Basic)

```js
async function retry(fn, attempts = 3) {
    for (let i = 0; i < attempts; i++) {
        try {
            return await fn();
        } catch (e) {
            if (i === attempts - 1) throw e;
        }
    }
}
```

---

## 🔹 Summary

* Error handling prevents crashes
* try/catch handles runtime errors
* throw creates custom errors
* optional chaining prevents undefined errors
* defensive programming improves stability

---
