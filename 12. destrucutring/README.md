# 📘 JavaScript Destructuring

## 🔹 Topic Overview

Destructuring is a way to extract values from arrays and objects into variables in a single line.

* Instead of manually accessing properties using dot notation or index positions, destructuring makes the code shorter and easier to read.

It makes code:

* shorter
* cleaner
* easier to read

---

## 🔹 Object Destructuring

* Unpack the properties (key-value pairs) into individual variables.

```js id="d1"
const book = {
    title: "A Belated Bachelor Party",
    author: "Ravinder Singh",
    year: 2013,
    genre: "Friendship Novel"
};

let { title, author, year, genre } = book;

console.log(title); // A Belated Bachelor Party
console.log(year);  // 2013
```

---

### 🔸 Rename Variables

```js id="d2"
let { title: x1, author: x2, year: x3, genre: x4 } = book;

console.log(x2); // Ravinder Singh
console.log(x4); // Friendship Novel
```

---

### 🔸 Default Values

```js id="d3"
let { city = "Unknown" } = user;
```

---

### 🔸 Function Parameters

```js id="d4"
function printUser({ name }) {
    console.log(name);
}
```

---

## 🔹 Array Destructuring

* Unpack elements into variables.

```js id="d5"
let arr = ["sun", "mon", "tue", "wed"];

let [a, b, c, d] = arr;
console.log(a, b, c, d); // sun mon tue wed

let [ , , x, y] = arr;
console.log(x, y); // tue wed
```

---

### 🔸 Skip Values

```js id="d6"
let [ , , third] = arr;
```

---

### 🔸 Default Values

```js id="d7"
let [a = 10, b = 20] = [5];
```

---

## 🔹 Nested Destructuring

### Objects

```js id="d8"
const user = {
    name: "Yatheswar",
    address: {
        city: "Vizag",
        pincode: 530008
    }
};

const { address: { city } } = user;
console.log(city); // Vizag

// Alternative way
const { address } = user;
const { city: cityName } = address;
```

---

### Arrays

```js id="d9"
const arr = [1, [2, 3]];
const [x, [y, z]] = arr;

console.log(x); // 1
console.log(z); // 3
```

---

### 🔸 Key Points of Nested Destructuring

* Improves readability and reduces code
* Default values handle undefined cases
* Useful for deeply nested data
* Common in APIs and React

---

## 🔹 Key Differences in Array and Object Destructuring

* Object → order is not important
* Array → order is important

---

## 🔹 Benefits

* Cleaner syntax
* Less repetitive code
* Better readability
* Useful in APIs and React
* Makes function parameters cleaner
* Avoids temporary variables

---

## 🔹 Common Mistakes

* Confusing object vs array syntax
* Forgetting variable names must match keys
* Not handling undefined values
* Overusing nested destructuring

---

## 🔹 Interview Questions (with Answers)

### 1. What is destructuring?

Extracting values from arrays/objects into variables.

---

### 2. Difference between object and array destructuring?

* Object → based on keys
* Array → based on position

---

### 3. Can we rename variables?

Yes.

```js id="d10"
let { name: newName } = obj;
```

---

### 4. What are default values?

Used when value is undefined.

---

### 5. Where is destructuring used?

* Function parameters
* API responses
* React props

---

## 🔹 Practice Problems

1. Extract values from object
2. Swap two variables using destructuring
3. Get nested object values
4. Skip elements in array
5. Use destructuring in function

---

## 🔹 Bonus

### Swap variables

```js id="d11"
let a = 10, b = 20;

[a, b] = [b, a];
```

---

### Array of Objects

* Array containing multiple objects
* Common in real-world data (API responses)

```js id="d12"
let students = [
    { name: "yathe", major: "CSE" },
    { name: "eswar", major: "DS" }
];

console.log(students[1].name);  // eswar
console.log(students[0].major); // CSE
```

---
