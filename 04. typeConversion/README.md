# 📘 JavaScript Type Conversion

## 🔹 Topic Overview

Type conversion is the process of converting a value from one data type to another.

There are two types:

* Implicit Conversion (Type Coercion)
* Explicit Conversion

---

## 🔹 Key Concepts

### 1. Implicit Conversion (Type Coercion)

* Done automatically by JavaScript
* Happens during operations

```js
5 == "5"; // true
```

---

### 2. Explicit Conversion

* Done manually by developer

```js
Number("123"); // 123
String(123);   // "123"
Boolean(1);    // true
```

---

## 🔹 Type Coercion

Type coercion is automatic conversion of one data type to another.

```js
"5" + 2; // "52"
"5" - 2; // 3
```

---

## 🔹 Syntax / Examples

```js
Number("10");   // 10
String(10);     // "10"
Boolean(0);     // false
```

---

## 🔹 Truthy and Falsy Values

In JavaScript, every value is either **truthy** or **falsy** when used in a boolean context.

---

### 🔸 Falsy Values (only these 7)

These values always return `false`:

```js
false
0
-0
0n
""
null
undefined
NaN
```

Example:

```js
if (0) {
    console.log("This won't run");
} else {
    console.log("Falsy value");
}
```

---

### 🔸 Truthy Values

Everything else is **truthy**:

```js
true
1
"hello"
[]
{}
function() {}
```

Example:

```js
if ("Hello") {
    console.log("Truthy value");
}
```

---

### 🔸 Boolean Conversion

```js
Boolean(0);      // false
Boolean("");     // false
Boolean(null);   // false

Boolean(1);      // true
Boolean("Hi");   // true
Boolean([]);     // true
Boolean({});     // true
```

---

### 🔸 Tricky Cases (Important for Interviews)

```js
Boolean([]);   // true
Boolean({});   // true
Boolean("0");  // true
Boolean(" ");  // true (space is truthy)
```

---

### 🔸 Interview Tip

* Only **7 falsy values** exist in JavaScript
* Everything else is **truthy**

---

## 🔹 Examples

### Example 1: String + Number

```js
50 + "5"; // "505"
```

### Example 2: Multiple Operations

```js
50 + 30 + "JS"; // "80JS"
```

### Example 3: Boolean Conversion

```js
Boolean(""); // false
Boolean("Hi"); // true
```

---

## 🔹 Common Mistakes

* Confusing `+` behavior (string vs number)
* Assuming all operations behave the same
* Not handling `NaN`
* Misunderstanding `null` and `undefined`

---

## 🔹 Important Cases

```js
"5" + 2;  // "52"
"5" - 2;  // 3
null + 1; // 1
undefined + 1; // NaN
```

---

## 🔹 Interview Questions (with Answers)

### 1. What is type conversion?

Changing one data type into another.

---

### 2. Difference between implicit and explicit conversion?

* Implicit → done by JavaScript automatically
* Explicit → done manually using functions

---

### 3. What is type coercion?

Automatic type conversion during operations.

---

### 4. Why `"5" + 2` gives `"52"` but `"5" - 2` gives `3`?

* `+` → converts number to string
* `-` → converts string to number

---

### 5. What is `NaN`?

* Stands for "Not a Number"
* Result of invalid numeric operations

```js
Number("abc"); // NaN
```

---

## 🔹 Practice Problems

1. Convert string to number and add 10.
2. Check if a value is truthy or falsy.
3. Predict output:

```js
console.log("10" + 5);
```

4. Predict output:

```js
console.log("10" - 5);
```

5. Predict output:

```js
console.log(undefined + 1);
```

---
