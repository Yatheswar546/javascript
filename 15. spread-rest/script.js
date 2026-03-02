// Spread Operator

// Without spread 
let old_arr = [1,2,3,4,5];
let new_arr = old_arr;
// let new_arr = [...old_arr];

// console.log(`old array: ${old_arr}`);  // 1,2,3,4,5
// console.log(`new array: ${new_arr}`);  // 1,2,3,4,5

new_arr = new_arr.push(6,7,8,9);

// console.log(`old array: ${old_arr}`);  // 1,2,3,4,5,6,7,8,9
// console.log(`new array: ${new_arr}`);  // 9  (it returns the length as push returns the new length of array)

// With Spread
let spread_old_arr = [1,2,3,4,5];
let spread_new_arr = [...spread_old_arr];

// console.log(`spread old array: ${spread_old_arr}`);  // 1,2,3,4,5
// console.log(`spread new array: ${spread_new_arr}`);  // 1,2,3,4,5

spread_new_arr.push(6,7,8,9);

// console.log(`spread old array: ${spread_old_arr}`);  // 1,2,3,4,5
// console.log(`spread new array: ${spread_new_arr}`);  // 1,2,3,4,5,6,7,8,9


//////////// Problems ////////////

// Problem 1: Merge arrays using Spread

let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];

// console.log(arr1);
// console.log(arr2);

let arr3 = [...arr1, ...arr2]

// console.log(arr3);

// Problem 2: SUM unlimited arguments using rest

function sum(...arr){
    let total = 0;

    for(let i=0; i<arr.length; i++){
        total = total + arr[i];
    }

    return total;
}

function sumOfArray(){
    let array = document.getElementById("sumArray").value;

    arr = array.split(' ').map(Number);

    document.getElementById("arraySum").innerHTML = `Result: ${sum(...arr)}`;
}

