# 📘 HTTP (HyperText Transfer Protocol)

## 🔹 Topic Overview

HTTP is a protocol used for communication between a client (frontend) and a server (backend).

```text
CLIENT (Frontend)  --------->  SERVER (Backend)
          Request

CLIENT (Frontend)  <---------  SERVER (Backend)
          Response
```

---

## 🔹 What is HTTP?

* It is a **stateless protocol** so each request is independent
* Used to transfer data over the web
* Works on request-response model

---

## 🔹 HTTP Request & Response

### Request contains:

* Method (GET, POST, etc.)
* URL
* Headers
* Body (optional)

### Response contains:

* Status code
* Headers
* Body (data)

---

## 🔹 Structure of URL

```text
https://jsonplaceholder.typicode.com/todos/1
```

| Part                         | Meaning     |
| ---------------------------- | ----------- |
| https                        | Protocol    |
| jsonplaceholder.typicode.com | Domain      |
| /todos                       | Endpoint    |
| /1                           | Resource ID |

---

## 🔹 HTTP Methods

| Method | Purpose     |
| ------ | ----------- |
| GET    | Fetch data  |
| POST   | Create data |
| PUT    | Update data |
| DELETE | Remove data |

---

## 🔹 Example: GET Request

```js
fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(res => res.json())
    .then(data => console.log(data));
```

---

## 🔹 Example: POST Request

```js
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "Hello",
        body: "World"
    })
});
```

---

## 🔹 XMLHttpRequest (Old Way)

```js
const xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1");

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(JSON.parse(xhr.responseText));
    }
};

xhr.send();
```

---

## 🔹 Handling HTTP Repsonse

### readyState Values

* "readyState" property: It is a XMLHttpRequest Object that holds the status.

| Value | State            |
| ----- | ---------------- |
| 0     | UNSENT           |
| 1     | OPENED           |
| 2     | HEADERS RECEIVED |
| 3     | LOADING          |
| 4     | DONE             |

* "onreadystatechange" : defines a function to be executed when the readyState changes.

---

## 🔹 HTTP Status Codes

### 1xx – Informational

* 100 Continue
* 101 Switching Protocols
* 102 Processing
* 103 Early Hints

---

### 2xx – Success

* 200 OK
* 201 Created
* 202 Accepted
* 204 No Content
* 206 Partial Content

---

### 3xx – Redirection

* 300 Multiple choices
* 301 Moved Permanently
* 304 Not Modified
* 307 Temporary Redirect
* 308 Permanent Redirect

---

### 4xx – Client Error

* 400 Bad Request
* 401 Unauthorized
* 403 Forbidden
* 404 Not Found
* 409 Not Conflict

---

### 5xx – Server Error

* 500 Internal Server Error
* 501 Not implemented
* 502 Bad Gateway
* 503 Service Unavailable
* 504 Gateway Timeout

---

## 🔹 Key Concepts

* HTTP is stateless
* Uses request-response model
* Methods define actions
* Status codes define result

---

## 🔹 Common Mistakes

* Not checking response.ok
* Forgetting headers in POST
* Ignoring errors
* Confusing GET and POST

---

## 🔹 Interview Questions (with Answers)

### 1. What is HTTP?

Protocol used for communication between client and server.

---

### 2. Difference between GET and POST?

* GET → fetch data
* POST → send/create data

---

### 3. What are status codes?

Codes returned by server to indicate result.

---

### 4. What is stateless?

Server does not remember previous requests.

---

### 5. What is endpoint?

Specific URL path for accessing resources.

---

## 🔹 Practice Problems

1. Fetch data from API
2. Create POST request
3. Handle errors
4. Show loading state
5. Display API data

---

## 🔹 Bonus

### Check Response Status

```js
if (!response.ok) {
    throw new Error("Request Failed");
}
```

---

## 🔹 Summary

* HTTP connects frontend and backend
* Uses request-response model
* Methods define action
* Status codes define result

---
