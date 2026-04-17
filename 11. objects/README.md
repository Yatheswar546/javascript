# 📘 JavaScript Objects

## 🔹 Topic Overview

Objects are used to store data in **key-value pairs**.
They help represent and group related data and behavior in a structured way.

* Non-primitive data type
* Key-value pairs (properties)
* Used to represent real-world entities
* Can store both data and functions

---

## 🔹 Key Concepts

* Key-value pairs (`key: value`)
* Mutable
* Stored by reference

---

## 🔹 Creating Objects

### 1. Object Literal

```js id="o1"
const obj = { name: "John" };
```

---

### 2. Empty Object

```js id="o2"
const obj = {};
obj.name = "John";
```

---

### 3. Using new Object()

```js id="o3"
const obj = new Object();
obj.name = "John";
```

---

## 🔹 Accessing Properties

```js id="o4"
obj.name
obj["name"]
```

* Get keys → `Object.keys(obj)`
* Get values → `Object.values(obj)`

---

## 🔹 Add / Update / Delete

```js id="o5"
obj.age = 25;        // add/update
delete obj.age;      // delete
```

* We cannot delete the entire object directly
* But we can assign it to `null` or `undefined`

---

## 🔹 hasOwnProperty

* Used to check if a property exists in the object

```js id="o13"
obj.hasOwnProperty("name");
```

---

## 🔹 Object Keys

* Object keys can be numbers, booleans, etc.
* But JavaScript **converts them to strings internally**

```js id="o14"
const obj = {
    1: "one",
    true: "yes"
};

console.log(Object.keys(obj)); // ["1", "true"]
```

---

## 🔹 Object Methods

* A method is a function stored as a property of an object

```js id="o6"
const person = {
    name: "John",
    greet() {
        return "Hello " + this.name;
    }
};
```

---

## 🔹 Nested Objects

### Creation

```js id="o7a"
const obj1 = {
    key1: "value1",
    obj2: {
        key2: "value2"
    }
};
```

### Accessing

```js id="o7b"
obj1.key1
obj1.obj2.key2
obj1["obj2"]["key2"]
```

```js id="o7c"
const user = {
    name: "John",
    address: {
        city: "Hyderabad"
    }
};

user.address.city;
```

---

## 🔹 Object Utilities

```js id="o8"
Object.keys(obj)
Object.values(obj)
Object.entries(obj)
```

---

## 🔹 "const" in Objects

* `const` does **not make object immutable**
* It only prevents **reassignment**

```js id="o15"
const obj = { name: "John" };
obj.name = "Doe"; // ✅ allowed
// obj = {} ❌ not allowed
```

---

## 🔹 Looping Through Object

```js id="o9"
for (let key in obj) {
    console.log(key, obj[key]);
}
```

---

## 🔹 Important Notes

* Object keys are converted to strings
* Objects are mutable
* Stored by reference

---

## 🔹 Common Mistakes

* Confusing dot vs bracket notation
* Forgetting `this` in methods
* Comparing objects using `===`
* Assuming objects are immutable

---

## 🔹 Interview Questions (with Answers)

### 1. Dot vs Bracket notation?

* Dot → simple access
* Bracket → dynamic or computed keys

---

### 2. How to loop through object?

Using `for...in` loop.

---

### 3. What happens if key doesn’t exist?

Returns `undefined`.

---

### 4. Can object keys be non-string?

Yes, but they are converted to strings internally.

---

### 5. What is `this` in object?

Refers to the current object.

---

## 🔹 Practice Problems

1. Count character frequency
2. Merge two objects
3. Convert object to array
4. Deep freeze object
5. Clone object

---

## 🔹 Bonus

### Merge objects

```js id="o10"
let result = { ...obj1, ...obj2 };
```

---

### Object to array

```js id="o11"
Object.entries(obj);
```

---

### Shallow copy

```js id="o12"
let copy = { ...obj };
```

---
