// forEach()

let forEachArray = [1,2,3,4,5];

// forEachArray.forEach( a => console.log(a));

// forEachArray.forEach( (a,b,c) => console.log(a,b,c));

// let forEachresult = forEachArray.forEach( (a) => console.log(a));
// console.log(forEachresult);

/////////////////////////////////////////////////////////////////////

// find()

let findArray1 = [1,2,3,4,5];

let findArray1result = findArray1.find( ele => (ele%2 === 0));
// console.log(findArray1result);

let findArray2 = ["JavaScript", "DOM", "Events", "Arrays", "DOM"];

let findArray2result = findArray2.find( ele => (ele === "DOM"));
// console.log(findArray2result);

/////////////////////////////////////////////////////////////////////

// sort()

let sortArray1 = ["JavaScript", "DOM", "Events", "Arrays"];

let sortArray1result = sortArray1.sort();
// console.log(sortArray1result);

let sortArray2 = [2,1,5,4,3,8,6,10,20,45];

let sortArray2result1 = sortArray2.sort();
// console.log(sortArray2result1);  // (10) [1, 10, 2, 20, 3, 4, 45, 5, 6, 8]

let sortArray2result2 = sortArray2.sort( (a,b) => (a - b));
// console.log(sortArray2result2);  // (10) [1, 2, 3, 4, 5, 6, 8, 10, 20, 45]

let sortArray2result3 = sortArray2.sort( (a,b) => (b - a));
// console.log(sortArray2result3);  // (10) [45, 20, 10, 8, 6, 5, 4, 3, 2, 1]

/////////////////////////////////////////////////////////////////////

// map()

let mapArray = [1,2,3,4,5];

let mapArrayresult = mapArray.map( ele => (ele*2));
// console.log(mapArrayresult);

/////////////////////////////////////////////////////////////////////

// filter()

let filterArray = ["JavaScript", "DOM", "Events", "Arrays", "DOM"];

let filterArrayresult = filterArray.filter( ele => (ele==="DOM"));
// console.log(filterArrayresult)

/////////////////////////////////////////////////////////////////////

// reduce()

let reduceArray1 = [1,2,3,4,5,6,7,8,9];

let reduceArray1result = reduceArray1.reduce( (total, ele) => (total+=ele), 0);
// console.log(reduceArray1result);

let reduceArray2 = ["apple", "kiwi", "orange"];

let reduceArray2result1 = reduceArray2.reduce( (total, ele) => (total += ele.length), 0);
// console.log(reduceArray2result1);

let reduceArray2result2 = reduceArray2.reduce( (total, ele) => (total += ele.length));
// console.log(reduceArray2result2);

/////////////// PROBLEMS ///////////////

// Problem 1: Sort Users by Age

const users = [
    {
        name: "yathe",
        age: 25
    },
    {
        name: "vijay",
        age: 24
    },
    {
        name: "ratnakar",
        age: 30
    }
]

console.log(users.sort( (a,b) => a.age - b.age));

// Problem 2: Total Price from cart using reduce

const cart = [
    {
        item: "Book",
        price: 320
    },
    {
        item: "dress",
        price: 599
    },
    {
        item: "earpods",
        price: 1299
    }
]

console.log(cart.reduce( (total, ele) => (total+=ele.price), 0) );


