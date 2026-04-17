// ================= STRING → ARRAY =================
let statement = "This is JavaScript Notes";

let words = statement.split(" ");
console.log(words);


// ================= ARRAY → STRING =================
let topics = ["Array", "String", "Object", "Callbacks", "Promises", "Async-Await"];

let sentence = topics.join(" - ");
console.log(sentence);

// ================= COMMON USE CASES =================

// 1. Convert CSV string to array
let csv = "a,b,c,d";
let arr = csv.split(",");
console.log(arr);  // ["a","b","c","d"]

//2 . Remove extra spaces
let messy = "   JS   is fun    ";
let clean = messy.trim().split(/\s+/).join(" ");
console.log(clean);  // "JS is fun"

// 3. Convert array to sentence 
let wordsArr = ["JS", "is", "awesome"];
let result = wordsArr.join(" ");
console.log(result);


// ================= PROBLEM =================

// String to Array Conversion
function convertToArray(){
    let str = document.getElementById("inputStr").value;
    let result = str.split(" ");

    document.getElementById("arrayResult").innerText = result;
}

// Array to String Conversion
function convertToString(){
    let str = document.getElementById("inputArr").value;
    let arr = str.split(",");

    document.getElementById("stringResult").innerText = arr.join(" ");
}

// Custom join function
function customJoin(arr, seperator){
    let result = "";

    for(let i=0; i < arr.length; i++){
        result += arr[i];

        if(i !== arr.length - 1){
            result += seperator;
        }
    }

    return result;
}



console.log(customJoin(["a","b","c"], "-"));  // a-b-c