# 📘 JavaScript Operators

## 🔹 Topic Overview

Operators are used to perform operations on variables and values.

---

## 🔹 Types of Operators

### 1. Arithmetic

`+  -  *  /  %  **  ++  --`

### 2. Assignment

`=  +=  -=  *=  /=  %=  **=`

### 3. Comparison

`==  ===  !=  !==  >  <  >=  <=`

### 4. Logical

`&&  ||  !`

### 5. Bitwise

`&  |  ^  ~  <<  >>  >>>`

### 6. Ternary

`condition ? value1 : value2`

### 7. String

* `+` is used for concatenation

### 8. Type Operators

* `typeof`
* `instanceof`

---

## 🔹 Operator Precedence

Follows **BEDMRAS / BODMAS / PEMDAS**:

* Brackets
* Orders (powers)
* Division / Multiplication
* Addition / Subtraction

---

## 🔹 Type Coercion

Type coercion means automatic conversion of one data type to another.

```js id="0cxn3r"
5 == "5"; // true
```

---

## 🔹 Syntax / Examples

```js id="m7gqk2"
let a = 5;
let b = "5";

a == b;  // true
a === b; // false
```

---

## 🔹 Examples

### Example 1: Arithmetic

```js id="c6l7wq"
10 + 5; // 15
```

### Example 2: Logical

```js id="6l3bpn"
true && false; // false
```

### Example 3: Ternary

```js id="y4tfu4"
let age = 18;
age >= 18 ? "Adult" : "Minor";
```

---

## 🔹 Special Operators

### Nullish Coalescing (??)

```js id="b6m3o7"
let value = null;
value ?? "Default"; // "Default"
```

Used when value is `null` or `undefined`.

---

## 🔹 Common Mistakes

* Using `==` instead of `===`
* Forgetting operator precedence
* Confusing `||` with `??`
* Ignoring type coercion behavior

---

## 🔹 Interview Questions (with Answers)

### 1. Difference between `==` and `===`?

* `==` → compares values after type conversion
* `===` → compares value and type (strict)

```js id="2lf8xj"
5 == "5";  // true
5 === "5"; // false
```

---

### 2. Explain short-circuiting in `&&` and `||`

* `&&` → returns first falsy value or last truthy value
* `||` → returns first truthy value

```js id="a9v1jz"
"Hello" && "World"; // "World"
"" || "Default";    // "Default"
```

---

### 3. What is nullish coalescing (`??`)?

Returns right value only if left value is `null` or `undefined`.

```js id="1pj1yo"
null ?? "Default"; // "Default"
```

---

### 4. What is operator precedence?

It defines the order in which operations are performed.

---

### 5. What is type coercion?

Automatic conversion of one data type to another.

```js id="x6o7bd"
5 + "5"; // "55"
```

---

## 🔹 Practice Problems

1. Write a function to find largest of 3 numbers.
2. Write a program to check even or odd.
3. Predict output:

```js id="a4x1sl"
console.log(5 + "5");
```

4. Predict output:

```js id="q1k2pl"
console.log(null ?? "Hello");
```

5. Predict output:

```js id="r8m9zn"
console.log("" || "JS");
```

---
