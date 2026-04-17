// ================= BASIC LOOPS =================

// for loop
for (let i = 0; i < 5; i++) {
    // console.log(i);
}

// for-in (indexes)
let arr1 = ["a", "b", "c"];
for (let i in arr1) {
    // console.log(i, arr1[i]);
}

// for-of (values)
for (let value of arr1) {
    // console.log(value);
}

// while loop
let res = 0;
while (res < 5) {
    // console.log(res);
    res++;
}

// do-while
let ans = 5;
do {
    // console.log(ans);
    ans--;
} while (ans > 0);


// ================= PROBLEMS =================

// 1. Pyramid Pattern
function printPattern() {
    let num = Number(document.getElementById("patternNum").value);
    let pattern = "";

    for (let i = 0; i < num; i++) {
        pattern += "*";
        console.log(pattern);
    }
}

// 2. Factorial
function factorial() {
    let num = Number(document.getElementById("factorialNum").value);
    let fact = 1;

    for (let i = 1; i <= num; i++) {
        fact *= i;
    }

    document.getElementById("factorialResult").innerText = "Factorial is: " + fact;
}

// 3. Sum of digits
function sumofNumber() {
    let num = Number(document.getElementById("sumofNumber").value);
    let sum = 0;

    while (num > 0) {
        let r = num % 10;
        sum += r;
        num = Math.floor(num / 10);
    }

    document.getElementById("sumResult").innerText = "Sum of Number is: " + sum;
}

// 4. Remove duplicates
let initialArray = [1,2,3,4,5,1,2,3,4,5,6,7,8,9];

let resultArray = [];

for (let i = 0; i < initialArray.length; i++) {
    if (!resultArray.includes(initialArray[i])) {
        resultArray.push(initialArray[i]);
    }
}

console.log("Result array:", resultArray);