# 📘 DOM (Document Object Model)

## 🔹 Topic Overview

The DOM (Document Object Model) is a programming interface for web pages.

* It represents HTML as a **tree structure**
* JavaScript uses the DOM to **access and modify HTML**
* DOM is **object-oriented**

---

## 🔹 Important Concept

👉 JavaScript does NOT directly understand HTML. JavaScript understand datatype
👉 It treats HTML as a **document object**
👉 HTML in terms of Js is a document

---

## 🔹 DOM Structure (Tree Representation)

```id="h0dwv1"
                                Document
                                   |
                                Root <html>
                    _______________|_______________
                    |                             |
                  <head>                        <body>
                    |                     ________|________
                  <title>                 |               |
                    |                    <h1>            <a>
                  "My Title"              |               |
                                        Text            href
```

👉 When a page is loaded, the browser creates a DOM of page
👉 Tree representation of the HTML document
👉 DOM tree can be modified with the help of Js

---

## 🔹 What Can We Do Using DOM?

* Access HTML elements and attributes
* Modify content
* Change styles
* Handle events

---

# 🔹 CRUD Operations in DOM

---

## 🔹 1. Create Elements

* createElement('tag')   - is used to create an HTML Element
* createTextNode('text') - is used to place the string in the created element

```js id="dom1"
document.createElement("tag");
document.createTextNode("text");
```

---

### Example

```js id="dom2"
let li = document.createElement("li");
li.innerText = "Task";
```

---

## 🔹 2. Read (Select Elements)

### Traditional Methods

* getElementById()
* getElementByTagName()
* getElementByClassName()

```js id="dom3"
document.getElementById("id");
document.getElementsByClassName("class");
document.getElementsByTagName("tag");
```

---

### Modern Methods

Query Selectors: css selectors to select HTML elements
* querySelector()     - selects 1st element of class 
* querySelectorAll()  - selects all elements of class 

```js id="dom4"
document.querySelector(".class");
document.querySelectorAll(".class");
```

---

## 🔹 3. Update Elements

* element.innerHTML       - new HTML element
* element.attribute       - new value 
    element.setAttribute('attr','value')
    element.getAttribute('attr')
* element.style.property  - new style 
* element.innerText       - only for updating text and considers only visible text
* element.textContent     - only for updating text but considers invisible text by CSS
* parent.insertBefore(created Element, sibling Element) - to insert element before an element. called on parent element

```js id="dom5"
element.innerHTML
element.innerText
element.textContent
element.style.color = "red"
element.setAttribute("id", "test")
```

---

### innerHTML vs textContent

| Property    | Behavior        |
| ----------- | --------------- |
| innerHTML   | parses HTML     |
| textContent | plain text only |

---

## 🔹 4. Add Elements

* appendChild()      - appends a new HTML element to an existing one as a Child Element
* element.append()   - can append text and elements
* element.prepend()  - inserts at beginning

```js id="dom6"
parent.appendChild(child);
element.append("text");
element.prepend("text");
```

---

## 🔹 5. Replace Elements

* replaceChild('new created element', 'selected element to be replaced') 
                         - used for replacing elements and must be called on parent element
* element.replaceWith()  - modern alternative to replaceChild()

```js id="dom7"
parent.replaceChild(newNode, oldNode);
element.replaceWith(newNode);
```

---

## 🔹 6. Delete Elements

* parent.removeChild('selected Element) - to delete an HTML element. called on parent element
* element.remove()                      - removes element directly without referencing parent

```js id="dom8"
parent.removeChild(child);
element.remove();
```

---

## 🔹 Class Manipulation

### Add, Remove & Toggle classes from HTML elements:

* classList: It holds all the classes of an HTML element

* add()    :  used to add class (adds class name for an existing HTML element)
* remove() :  removes class name from an existing HTML element
* toggle() :  to toggle a class name (if it exits then removes or else adds a class name to HTML element)

```js id="dom9"
element.classList.add("class");
element.classList.remove("class");
element.classList.toggle("class");
```

---

## 🔹 Useful Properties

* childElementCount  - returns the no. of child elements
* firstElementChild  - returns the first element of list
* cloneNode(true)    - copies element

```js id="dom10"
element.childElementCount;
element.firstElementChild;
element.cloneNode(true);
```

---

# 🔹 Current Example (To-Do App)

### Add Item

```js id="dom11"
let li = document.createElement("li");
li.innerText = inputValue;

taskList.appendChild(li);
```

---

### Update Item

```js id="dom12"
heading.style.textDecoration = "line-through";
```

---

### Delete Item

```js id="dom13"
li.remove();
```

---

# 🔹 Key Concepts

* DOM is tree structure
* JavaScript manipulates DOM
* Everything is node

---

# 🔹 Common Mistakes

* Using innerHTML unnecessarily
* Forgetting event binding
* Manipulating DOM repeatedly (performance issue)
* Not using querySelector

---

# 🔹 Interview Questions (with Answers)

### 1. Difference between getElementById and querySelector?

* getElementById → faster, specific
* querySelector → flexible (CSS selectors)

---

### 2. innerHTML vs textContent?

* innerHTML → parses HTML
* textContent → plain text

---

### 3. What is reflow and repaint?

* Reflow → layout calculation
* Repaint → visual update

---

# 🔹 Practice Problems

1. Build To-Do List
2. Create element dynamically
3. Highlight searched text
4. Remove all child nodes
5. Live character counter

---

# 🔹 Bonus

### Remove all children

```js id="dom14"
element.innerHTML = "";
```

---

### Event Listener (Better than onclick)

```js id="dom15"
button.addEventListener("click", function () {
    console.log("Clicked");
});
```

---
