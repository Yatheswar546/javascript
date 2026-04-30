# 📘 JavaScript JSON

## 🔹 Topic Overview

JSON (JavaScript Object Notation) is a lightweight data format used to store and transfer data between a server and a web application.

👉 It is:

* Lightweight
* Self-describing
* Easy to read
* Easy to parse
* Easy to understand

---

## 🔹 Why JSON?

Before JSON, XML was used.

* XML (eXtensible Markup Language) is a markup language designed to store and transport data in a structured format.
* It was used before JSON, but data transfer was more complex because of its tag-based structure (similar to HTML).
* Fetching and processing data in plain text or XML format is difficult because it is bulky and adds overhead to web services.

### XML Problems:

* Verbose (too many tags)
* Heavy
* Slower parsing

### JSON Advantages:

* Less verbose
* Faster
* Human-readable
* Matches JavaScript objects

---

## 🔹 JSON Syntax

```json
{
    "name": "Yathe",
    "age": 28,
    "isMarried": false,
    "skills": ["JS", "React"],
    "marks": {
        "math": 90
    }
}
```

---

## 🔹 Key Rules

* Keys must be in double quotes `" "`
* No functions
* No undefined
* Supports:

  * string
  * number
  * boolean
  * null
  * array
  * object

---

## 🔹 JSON vs JavaScript Object

| JSON                   | JS Object         |
| ---------------------- | ----------------- |
| Keys must be in quotes | Quotes optional   |
| No functions           | Functions allowed |
| No undefined           | Allowed           |
| Language independent   | JS only           |

---

## 🔹 JSON.parse()

Converts JSON string → JavaScript object

* Data received from a server is usually in string format, so we need to parse it to convert it into an object.

```js
let json = '{"name":"Yathe"}';

let obj = JSON.parse(json);

console.log(obj.name);
```

---

## 🔹 JSON.stringify()

Converts JavaScript object → JSON string

* Data should be sent to the server in string format.

```js
let obj = { name: "Yathe" };

let json = JSON.stringify(obj);

console.log(json);
```

---

## 🔹 JSON Flow

```text
                    JSON.parse()
Web Page   <--------------------------  SERVER
           -------------------------->
                    JSON.stringify()
```

---

## 🔹 Why JSON is better?

* It does not use closing tags
* It is shorter
* Quicker to read and write
* Supports arrays
* XML must be parsed using an XML parser, whereas JSON can be parsed using `JSON.parse()`
* For AJAX applications, JSON is faster and easier

---

## 🔹 Important Behavior

```js
let obj = {
    name: "Yathe",
    age: 28,
    lastName: undefined,
    greet: function() {}
};

console.log(JSON.stringify(obj));
```

👉 Output:

```json
{"name":"Yathe","age":28}
```

❗ `undefined` and functions are removed during JSON conversion

---

## 🔹 Real-World Usage (API)

```js
fetch("https://api.example.com/user")
    .then(res => res.json())
    .then(data => console.log(data));
```

👉 Server sends JSON → we convert it using `.json()`

---

## 🔹 JSON Flow (Concept)

```text
Client → JSON.stringify() → Server  
Server → JSON → JSON.parse() → Client  
```

---

## 🔹 JSON vs XML

| Feature     | JSON         | XML        |
| ----------- | ------------ | ---------- |
| Size        | Small        | Large      |
| Readability | Easy         | Complex    |
| Speed       | Fast         | Slow       |
| Parsing     | JSON.parse() | XML parser |

---

## 🔹 Similarities (JSON & XML)

* Self-describing
* Human-readable
* Hierarchical
* Used in data transfer
* Can be parsed and used by programming languages
* Can be fetched using `XMLHttpRequest`

---

## 🔹 Common Mistakes

* Using single quotes ❌
* Adding trailing commas ❌
* Including functions ❌
* Using undefined ❌

---

## 🔹 Interview Questions (with Answers)

### 1. What is JSON?

A lightweight data format used for data exchange.

---

### 2. Where do you use JSON?

Mainly in API communication between frontend and backend.

---

### 3. Difference between JSON and JS object?

* JSON → string format
* Object → actual data structure

---

### 4. What does JSON.parse do?

Converts JSON string → object

---

### 5. What does JSON.stringify do?

Converts object → JSON string

---

### 6. Can JSON store functions?

No

---

### 7. Why JSON is used in APIs?

Because it is lightweight, fast, and easy to parse.

---

## 🔹 Practice Problems

1. Convert object → JSON
2. Convert JSON → object
3. Remove invalid JSON fields
4. Parse API response
5. Validate JSON safely

---

## 🔹 Bonus

### Pretty Print JSON

```js
JSON.stringify(obj, null, 2);
```

---

### Safe Parse

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

## 🔹 Summary

* JSON is used for data transfer
* `parse` → string to object
* `stringify` → object to string
* No functions or undefined
* Widely used in APIs

---
