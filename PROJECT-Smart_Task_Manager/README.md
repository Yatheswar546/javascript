# 🧠 Smart Task Manager

A simple and responsive Task Manager web app built using **Vanilla JavaScript**.
This project helps users manage daily tasks while also displaying a motivational quote using a public API.

---

## 🚀 Features

* ✅ Add new tasks
* 🗑 Delete tasks
* ✔ Mark tasks as completed
* 🔍 Filter tasks (All / Completed / Pending)
* 💾 Save tasks using localStorage
* 🌐 Fetch motivational quotes from API
* 🔄 Get a new quote on button click
* 📱 Fully responsive design

---

## 🛠 Tech Stack

* HTML
* CSS (Flexbox + Responsive Design)
* JavaScript (ES6+)
* Web APIs (Fetch API, localStorage)

---

## 📂 Project Structure

```
task-manager/
│
├── index.html
├── style.css
├── script.js
```

---

## ⚙️ How It Works

### 1. Task Management

* Tasks are stored as objects inside an array
* Each task contains:

  * id
  * title
  * completed status

---

### 2. Local Storage

* Tasks are saved in the browser using:

```js
localStorage.setItem("tasks", JSON.stringify(tasks));
```

* Data persists even after page refresh

---

### 3. Fetch API (Quotes)

* Quotes are fetched from:

```
https://api.adviceslip.com/advice
```

* Example:

```js
const res = await fetch("https://api.adviceslip.com/advice");
const data = await res.json();
```

---

### 4. Error Handling

* Uses `try...catch` to handle API failures
* Displays fallback message if request fails

---

## 🎯 Concepts Covered

This project covers almost all core JavaScript concepts:

* Variables & Data Types
* Functions (Arrow, Callback)
* Arrays & Objects
* Destructuring & Spread Operator
* DOM Manipulation
* Events (click, submit, etc.)
* Array Methods (map, filter, etc.)
* JSON (parse & stringify)
* HTTP & Fetch API
* Promises & Async/Await
* Error Handling
* localStorage

---

## 📱 Responsive Design

* Works on mobile, tablet, and desktop
* Uses Flexbox and media queries

---

## 🧪 How to Run

1. Download or clone the repository
2. Open `index.html` in your browser

---

## 🔮 Future Improvements

* ✏ Edit task feature
* 📝 Add notes inside tasks
* 🌙 Dark mode
* 🔔 Notifications / Toast messages
* ⚛ Convert to React

---

## 🙌 Acknowledgement

This project is built as part of learning JavaScript fundamentals and applying them in a real-world scenario.

---

## ⭐ If you like this project

Give it a star ⭐ and share it!

---
