# 📘 JavaScript Fetch API

## 🔹 Topic Overview

Fetch API:

👉 Used to make HTTP requests (GET, POST, etc.)
👉 It is a Web API
👉 It returns a Promise

👉 FETCH = Create Promise + Process Promise

---

## 🔹 What is Fetch API?

Fetch API helps to:

* Get data from server
* Send data to server
* Work with APIs

👉 It returns a Promise

---

## 🔹 Basic Syntax

```js id="f1"
fetch("URL")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
```

---

## 🔹 Important Point

```js id="f2"
fetch("URL").then(res => res.json());
```

👉 res.json() also returns a Promise

---

## 🔹 GET Request

```js id="f3"
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => console.log(data));
```

---

## 🔹 POST Request

```js id="f4"
fetch("URL", {
    method: "POST",
    body: JSON.stringify({ name: "Crio.do" }),
    headers: {
        "Content-Type": "application/json"
    }
})
.then(res => res.json())
.then(data => console.log(data));
```

---

## 🔹 Error Handling

```js id="f5"
fetch("URL")
    .then(res => {
        if (!res.ok) {
            throw new Error("HTTP Error " + res.status);
        }
        return res.json();
    })
    .then(data => console.log(data))
    .catch(err => console.log(err));
```

---

## 🔹 Why fetch doesn't reject on 404?

👉 Fetch only rejects on **network errors**
👉 404, 500 are considered valid HTTP responses

👉 So we must manually check:

```js id="f6"
if (!res.ok) throw new Error("Error");
```

---

## 🔹 Headers Purpose

Headers provide metadata about request:

```js id="f7"
headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer token"
}
```

👉 Used for:

* content type
* authentication
* caching

---

## 🔹 CORS (Basic Idea)

CORS = Cross-Origin Resource Sharing

👉 Browser blocks requests to different domains unless allowed

👉 Server must allow access using headers

---

## 🔹 Fetch vs Axios

| Feature        | Fetch  | Axios     |
| -------------- | ------ | --------- |
| Built-in       | Yes    | No        |
| JSON parsing   | Manual | Automatic |
| Error handling | Manual | Automatic |
| Interceptors   | No     | Yes       |

---

## 🔹 Real Flow

```text id="f8"
Frontend → fetch() → Server
Server → JSON → response.json() → Data
```

---

## 🔹 Common Mistakes

* Forgetting res.json()
* Not handling errors
* Assuming fetch rejects on 404
* Not converting body to JSON

---

## 🔹 Interview Questions (with Answers)

### 1. Why fetch doesn't reject on 404?

Because 404 is a valid HTTP response, not a network failure.

---

### 2. Difference between axios and fetch?

Axios has automatic JSON parsing and better error handling.

---

### 3. Purpose of headers?

To send metadata like content-type, authentication.

---

### 4. What is CORS?

Security mechanism that restricts cross-origin requests.

---

## 🔹 Practice Problems

1. GET posts from public API
2. POST form data
3. Add custom headers
4. Handle loading state
5. Handle network failure
6. Build mini GitHub user search

---

## 🔹 Bonus

### Async/Await Version

```js id="f9"
async function getData() {
    try {
        let res = await fetch("URL");
        let data = await res.json();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}
```

---

## 🔹 Summary

* Fetch is used for HTTP requests
* Returns a Promise
* res.json() also returns Promise
* Must handle errors manually
* Foundation for real-world APIs

---
