// ================= BASIC =================
// Creating an Array
//    0            1             2      3    4
let students = ["Bharath", "SaiNavadeep", "Akash", 123, true];
console.log(students);

const fruits = new Array("Apple", "Banana", "Grapes");
console.log(fruits);

// ================= REFERENCE =================
// Arrays Memory Representation
let x = [1, 2, 3]
let y = x

console.log(x === y);

let z = [1, 2, 3];

console.log(x === z);
console.log(x === y);
console.log(y === z);

// In arrays it will check for memory locations but not for actual values.

// ================= MUTABILITY =================
let movies = ["WAR2", "Coolie", "Kingdom", "Narasimha", "Salaar"];
let films = movies;

console.log(movies);
console.log(films);

movies[0] = "Spirit";
console.log(movies);
console.log(films);

// Arrays are Mutable

// Accessing Array Elements;
console.log(movies[1]);

for (let i = 0; i < movies.length; i++) {
    console.log(movies[i]);
}

for (let i in movies) {
    console.log(movies[i]);
}

for (let movie of movies) {
    console.log(movie);
}

// ================= ARRAY METHODS =================
movies = ["WAR2", "Coolie", "Kingdom", "Narasimha", "Salaar"];

console.log(movies)

console.log(movies.length);

console.log(movies.at(2));

console.log(movies.join(' - '));

movies.pop()
console.log(movies);

movies.push('RRR')
console.log(movies);

movies.shift();
console.log(movies);

movies.unshift('Devara');
console.log(movies);

telugu_movies = ["Devara", "Coolie", "Kingdom", "Narasimha", "Salaar"];

hinid_movies = ["WAR2", "Pathan", "Tiger", "Dear Zindagi"];

let indian_films = telugu_movies.concat(hinid_movies);
console.log(indian_films);

let total_films = telugu_movies + ',' + hinid_movies;
console.log(total_films);
console.log(typeof (total_films));

movies = ["WAR2", "Coolie", "Kingdom", "Narasimha", "Salaar"];
////////// 0       1           2          3            4

console.log(movies.slice(1));
console.log(movies.slice(1, 4)); // [1, 4)

// Syntax: array_name.splice(position_to_add, no. of elements to be removed, new_element)
movies.splice(3, 0, 'OG');
movies.splice(2, 2, 'OG');
console.log(movies);

// ================= SEARCH Methods =================
movies = ["WAR2", "Coolie", "Kingdom", "Coolie", "Narasimha", "Salaar", "OG"];
/////////   0        1          2         3          4          5        6

console.log(movies.indexOf('Coolie'));
console.log(movies.lastIndexOf('Coolie'));

console.log(movies.includes('OG'));

// ================= PROBLEMS =================

// Problem 1: Find second largest number
function readArray(){
    let array = document.getElementById("array").value;
    let arr = array.split(' ').map(Number);

    // Logic 1
    // let firstLargest=-9999999;
    // for(let i=0; i<arr.length; i++){
    //     if(arr[i] > firstLargest) firstLargest = arr[i];
    // }

    // let secondLargest = -9999;
    // for(let i=0; i<arr.length; i++){
    //     if(arr[i] > secondLargest && arr[i]!= firstLargest){
    //         secondLargest = arr[i];
    //     }
    // }

    // Logic 2
    if(arr.length < 2){
        document.getElementById("secondLargest").innerText = "Result: Not enough elements";
        return;
    }

    let firstLargest = -Infinity, secondLargest = -Infinity;

    for(let num of arr){
        if(num > firstLargest){
            secondLargest = firstLargest;
            firstLargest = num;
        } 
        else if(num > secondLargest && num !== firstLargest){
            secondLargest = num;
        }
    }

    document.getElementById("secondLargest").innerText = `Result: ${secondLargest}`;

}

// Problem 2: Rotate array by 'k' times
function rotateArray(){
    let array = document.getElementById("rotateArray").value;
    let arr = array.split(' ').map(Number);

    let k = document.getElementById("kValue").value;
    let n = arr.length;
    
    if(n===0) return;

    k = k % n;

    let resultArray = [];

    for(let i=0; i<n; i++){
        if(i < k){
            resultArray.push(arr[n + i - k]);
        }
        else{
            resultArray.push(arr[i - k]);
        }
    }

    document.getElementById("rotatedArray").innerText = `Result: ${resultArray}`;
}