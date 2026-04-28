# 📘 Scope, Hoisting & Closures

## 🔹 Topic Overview

This topic covers how JavaScript handles:

* Scope
* Hoisting
* Closures

These are **core concepts for interviews and real-world coding**.

---

# 🔹 Scope of a Variable

```
        Types 
    ______|______
    |           |
  Global       Local 
                |-> Function (var)
                |-> Block (let, const)
```

---

## 🔹 Function Scope

* Variables declared inside a function cannot be accessed outside the function
* Applies to `var`, `let`, and `const`
* Used especially in `functions`

```js id="sc1"
function func() {
    var b = "Hello";
    console.log(b); // Hello
}

func();
console.log(b); // Error
```

---

## 🔹 Block Scope

* Only `let` and `const` are block scoped i.e. accessed within the block
* `var` is NOT block scoped i.e. accessed outside the block also
* Used especially in block `{}`

---

### Example 1 (let)

```js id="sc2"
var a = 5;

if (a === 5) {
    let b = 15;
    console.log(b); // 15
}

console.log(b); // Error
```

---

### Example 2 (var)

```js id="sc3"
var a = 5;

if (a === 5) {
    var b = 150;
    console.log(b); // 150
}

console.log(b); // 150
```

---

## 🔹 Lexical Scope

* Ability for an inner scope to access the variable from outer scope i.e. inner scope is lexically bound to the outer scope.
* Lexical scope means a function can access variables from its outer scope based on where the function is defined in the code, not where it is executed.
* Inner function can access variables from outer scope
* Scope depends on **where function is defined**, not executed

---

### Variable Lookup Order

JavaScript looks for variables in this order:

1. Current scope
2. Outer scope
3. Global scope

---

### Example

```js id="sc4"
let message = "Hello";

function outer() {
    let name = "Yatheswar";

    function inner() {
        console.log(message);
        console.log(name);
    }

    inner();
}

outer();
```

---

# 🔹 Hoisting

* JavaScript moves declarations to the top of their scope before execution
* "variables" and "function declarations" are moved to top of their scope before code execution.

---

## ⚠️ Important Correction

❌ "Only var supports hoisting" → **Wrong**
✅ `var`, `let`, and `const` are all hoisted

* `var` → initialized as `undefined`
* `let` and `const` → in **Temporal Dead Zone (TDZ)**

---

## 🔹 Examples

### Example 1

```js id="sc5"
a = 10;
console.log(a); // 10
var a;          // ✅ No error
```

---

### Example 2 (Function Hoisting)

```js id="sc6"
func();

function func() {
    console.log("Hello");
}
```

---

### Example 3

```js id="sc7"
console.log(a); // undefined
var a = 10;
```

---

### Example 4 (TDZ)

```js id="sc8"
console.log(a); // Error
let a = 10;
```

---

# 🔹 Closures (Function + Lexical Environment)

* If a function is created inside another function, it retains access to scope of that outer function even after that outer function returns, because the outer function is in the lexical scope of the function.
* If in a inner function if the "child function is returned" then it is a CLOSURE.
* A function remembers variables from its outer scope
* Works even after outer function finishes execution

---

## 🔹 Key Idea

👉 Closure = Function + its lexical scope

---

## 🔹 Example (Your Version)

```js id="sc9"
function parentFunction() {

    const message = "Hi!, I am parent";

    function childFunction() {
        console.log(message);
    }

    return childFunction;
}

const ans = parentFunction();
console.log(ans); // function returned
ans(); // prints message
```

---

## 🔹 Example (Counter - Practical)

```js id="sc10"
function outer() {
    let count = 0;

    return function inner() {
        count++;
        return count;
    };
}

let counter = outer();

counter(); // 1
counter(); // 2
```

---

## 🔹 Key Concepts

* Scope controls accessibility
* Hoisting moves declarations
* Closures preserve data

---

## 🔹 Common Mistakes

* Thinking only var is hoisted
* Confusing block scope and function scope
* Ignoring TDZ
* Thinking closure requires return always

---

## 🔹 Interview Questions (with Answers)

### 1. What is scope?

Defines where variables are accessible.

---

### 2. What is hoisting?

Moving declarations to the top before execution.

---

### 3. What is TDZ?

Time between declaration and initialization of `let`/`const`.

---

### 4. What is closure?

Function that remembers outer scope variables.

---

### 5. Why are closures useful?

* Data privacy
* State management
* Callbacks

---

### 6. Lexical Scope Explanation

Lexical scope means a function can access variables from its outer scope based on where it is **defined**, not where it is executed.

```js
let a = 10;

function outer() {
    function inner() {
        console.log(a);
    }
    inner();
}

outer(); // 10
```

---

### 7. Temporal Dead Zone (TDZ)

Temporal Dead Zone is the time between variable declaration and initialization where the variable cannot be accessed.

```js
console.log(a); // Error
let a = 10;
```

* Applies to `let` and `const`
* Prevents usage before initialization

---

### 8. Classic Closure Interview Question

```js
for (var i = 1; i <= 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
```

👉 Output:

```
4
4
4
```

👉 Reason:

* `var` is function scoped
* All callbacks share the same `i`

---

### 9. How Closures Help in Data Hiding

Closures allow variables to be private and accessible only through functions.

```js
function createUser() {
    let name = "Yathe";

    return {
        getName() {
            return name;
        }
    };
}

let user = createUser();
console.log(user.getName()); // Yathe
```

👉 `name` cannot be accessed directly
👉 This provides **data encapsulation**

---

## 🔹 Practice Problems

1. Create a counter using closure
2. Implement private variable using closure
3. Fix loop closure bug (`var` vs `let`)
4. Implement memoization using closure
5. Predict output of scope examples
6. Explain hoisting behavior in given code
7. Hoisting behavior questions
8. Use closure for private variables

---

## 🔹 Bonus Problem Examples

### Fix Loop Closure Bug

```js
for (let i = 1; i <= 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
```

👉 Output:

```
1
2
3
```

---

### Memoization using Closure

```js
function memoizedAdd() {
    let cache = {};

    return function (num) {
        if (cache[num]) {
            return cache[num];
        } else {
            let result = num + 10;
            cache[num] = result;
            return result;
        }
    };
}

const add = memoizedAdd();

add(5); // calculated
add(5); // cached
```

---

### Private Variable using Closure

```js id="sc11"
function createUser() {
    let name = "Yathe";

    return {
        getName() {
            return name;
        }
    };
}
```

---