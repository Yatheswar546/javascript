# 📘 Array Iteration Callback Methods

## 🔹 Topic Overview

Array iteration methods allow us to process elements using callbacks.

---

## 🔹 forEach()

* Runs a function at once for each element
* "Go through each element and does some operation with it"
* Does NOT return anything
* forEach() accepts only `one` argument i.e. a `callback function`

```js
arr.forEach( () => {} );
```

* This callback function will accept "3" arguments (element, index, array)

```js
arr.forEach((element, index, array) => {});
```

`NOTE`: By default index starts at "0".
      element is only mandatory, index & array are optional
---

### Example 1

```js
let arr = [1,2,3];

arr.forEach(a => console.log(a));
```

👉 Output:

```
1 2 3
```

### Example 2

```js
let arr = [1,2,3];

arr.forEach( (a,b,c) => console.log(a,b,c));
```

👉 Output:

```
1, 0, [1,2,3,4,5]
2, 1, [1,2,3,4,5]
3, 2, [1,2,3,4,5]
4, 3, [1,2,3,4,5]
5, 4, [1,2,3,4,5]
```

`NOTE:` forEach() won't return anything. It just prints the data.

```js
let result = arr.forEach( a => console.log(a));
console.log(result);
```

👉 Output:

```
undefined
```

---

## 🔹 Array Callback Methods

These functions iterate on each element of the array at once and performs an operation and returns the value.

* find()
* sort()
* map()
* filter()
* reduce()

---

## 🔹 find()

* Returns first matching element in the array that satisfies the condition mentioned in the callback function.

```js
arr = ["JavaScript", "DOM", "Events", "Arrays", "DOM"]
        
let result = arr.find( ele => (ele.name === "DOM"));
console.log(result);
```

👉 Output:

```
DOM
```

---

## 🔹 sort()

* sort elements of an array in-place (modifies)
* returns sorted array
* Default: string sort

```js
arr = ["JavaScript", "DOM", "Events", "Arrays"]

arr.sort();
```

👉 Output:

```
["Arrays", "DOM", "Events", "JavaScript", "DOM"];
```

* sort tries to convert the array elements to strings first and sorts lexicographically (dictionary) order.

`NOTE:` for numbers it doesn't sort as expected because numbers are considered as strings with "sort()" function.

* Sort with comparator function:

```js
arr.sort((a, b) => a - b); // ascending
arr.sort((a, b) => b - a); // descending
```

---

## 🔹 map()

* Transforms array in a cleaner way
* Applies a function to each one of the elements
* Returns new array

```js
arr = [1,2,3,4,5];

let r = arr.map(ele => ele*2);
console.log(r);
```

👉 Output:

```
[2,4,6,8,10]
```

`NOTE:` map() is superior of forEach();
        map() is capable of creating new Array 
                                       applying transformation
                                       push results into new Array.
        map() always returns an array.


---

## 🔹 filter()

* Returns all matching elements
* Same as find() but returns all elements that satisfies the given condition

```js
arr = ["JavaScript", "DOM", "Events", "Arrays", "DOM"];

arr.filter(ele => ele === "DOM");
```

👉 Output:

```
['DOM', 'DOM']
```

---

## 🔹 reduce()

* Reduces array to single value
* It does not change the original array
* Real-Life example is "cart-page"

### Syntax:

```js
array.reduce( accumulatorFn, initialValue);

accumulatorFn = ( accumulator, currentValue, index, currentArray) => { reducerLogic };

arr.reduce((total, ele) => total + ele, 0);
```

### accumulator (required):
* It accumulates callback's return value.
* It stores all the values returned by callback.
* Can be a number, array, object.

### currentValue (required):
* array element i.e. array[i]

### index (optional):
* current index of item

### currentArray (optional):
* the iterating array

### initialValue (optional):
* A value to use as first argument to first call of the callback.

### Example: Count total no. of characters in array "arr"

```js
let  arr = ["apple", "kiwi", "orange"];

let result = arr.reduce ( (total, ele) => total += ele.length, 0)
```

👉 Output:
```
10
```

### Example: with no Initial Value

```js
let  arr = ["apple", "kiwi", "orange"];

let result = arr.reduce ( (total, ele) => total += ele.length)
```

👉 Output:
```
apple46
```

---

## 🔹 Key Difference

| Method  | Returns      | Use          |
| ------- | ------------ | ------------ |
| forEach | undefined    | side effects |
| map     | new array    | transform    |
| filter  | new array    | condition    |
| find    | single value | first match  |
| reduce  | single value | aggregation  |

---

## 🔹 Important Notes

* map() returns new array
* filter() returns subset
* sort() modifies original
* reduce() is most powerful

---

## 🔹 Common Mistakes

* Using forEach instead of map
* Forgetting return in map
* Using sort without comparator
* Misusing reduce

---

## 🔹 Interview Questions (with Answers)

### 1. Difference between forEach and map?

* forEach → no return
* map → returns new array

---

### 2. When to use reduce?

* Summation
* Aggregation
* Transforming array into object

---

## 🔹 Practice Problems

1. Implement custom map
2. Implement custom filter
3. Implement custom reduce
4. Group array of objects by property
5. Sort users by age
6. Find first duplicate
7. Total price from cart

---

## 🔹 Bonus

### Group by property

```js
arr.reduce((acc, obj) => {
    acc[obj.key] = acc[obj.key] || [];
    acc[obj.key].push(obj);
    return acc;
}, {});
```

---
