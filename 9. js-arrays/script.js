// Creating an Array
//    0            1             2      3    4
let students = ["Bharath", "SaiNavadeep", "Akash", 123, true];
// console.log(students);

const fruits = new Array("Apple", "Banana", "Grapes");
// console.log(fruits);

// Arrays Memory Representation
let x = [1, 2, 3]
let y = x

// console.log(x === y);

let z = [1, 2, 3];

// console.log(x === z);
// console.log(x === y);
// console.log(y === z);

// In arrays it will check for memory locations but for actual values.

let movies = ["WAR2", "Coolie", "Kingdom", "Narasimha", "Salaar"];
let films = movies;

// console.log(movies);
// console.log(films);

movies[0] = "Spirit";
// console.log(movies);
// console.log(films);
// Arrays are Mutable

// Accessing Array Elements;

// console.log(movies[1]);

for (let i = 0; i < movies.length; i++) {
    // console.log(movies[i]);
}

for (let i in movies) {
    // console.log(movies[i]);
}

for (let movie of movies) {
    // console.log(movie);
}

// Array Methods
movies = ["WAR2", "Coolie", "Kingdom", "Narasimha", "Salaar"];
// console.log(movies)

// console.log(movies.length);

// console.log(movies.at(2));

// console.log(movies.join(' - '));

// movies.pop()
// console.log(movies);

// movies.push('RRR')
// console.log(movies);

// movies.shift();
// console.log(movies);

// movies.unshift('Devara');
// console.log(movies);

telugu_movies = ["Devara", "Coolie", "Kingdom", "Narasimha", "Salaar"];

hinid_movies = ["WAR2", "Pathan", "Tiger", "Dear Zindagi"];

let indian_films = telugu_movies.concat(hinid_movies);
// console.log(indian_films);

let total_films = telugu_movies + ',' + hinid_movies;
// console.log(total_films);
// console.log(typeof (total_films));

movies = ["WAR2", "Coolie", "Kingdom", "Narasimha", "Salaar"];
////////// 0       1           2          3            4

// console.log(movies.slice(1));
// console.log(movies.slice(1, 4)); // [1, 4)

// array_name.splice(position_to_add, no. of elements to be removed, new_element)
// movies.splice(3, 0, 'OG');
// movies.splice(2, 2, 'OG');
// console.log(movies);

// Search Methods
movies = ["WAR2", "Coolie", "Kingdom", "Coolie", "Narasimha", "Salaar", "OG"];
/////////   0        1          2         3          4          5        6

// console.log(movies.indexOf('Coolie'));
// console.log(movies.lastIndexOf('Coolie'));

// console.log(movies.includes('OG'));

////////////// PROBLEMS ////////////////

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
    let firstLargest = -9999, secondLargest = -9999;

    for(let i=0; i<arr.length; i++){
        if(arr[i] > firstLargest){
            secondLargest = firstLargest;
            firstLargest = arr[i];
        } 
        else if(arr[i] < firstLargest && arr[i] > secondLargest){
            secondLargest = arr[i];
        }
    }

    console.log(secondLargest);

}

// Problem 2: Rotate array by 'k' times
function rotateArray(){
    let array = document.getElementById("rotateArray").value;
    let arr = array.split(' ').map(Number);
    let k = document.getElementById("kValue").value;
    let n = arr.length
    
    k = k % n;

    let resultArray = [];

    for(let i=0; i<n; i++){
        if(i<k){
            resultArray.push(arr[n+i-k]);
        }
        else{
            resultArray.push(arr[i-k]);
        }
    }

    document.getElementById("rotatedArray").innerHTML = `Result: ${resultArray}`;
}