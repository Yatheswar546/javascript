for (let i = 0; i < 10; i++) {
    // console.log(i);
}

a1 = ["a", "b", "c", "d", "e"];
for (let x in a1) {
    // console.log(x, a1[x]);
}

/*
    0, a1[0]
    1, a1[1]
    2, a1[2]
*/

a1 = ["a", "b", "c", "d", "e"];
for (let x of a1) {
    // console.log(x);
}

res = 0;
while (res < 10) {
    // console.log(res);
    res += 1;
}

ans = 10
do {
    // console.log(ans)
    ans -= 1
} while (ans > 0);

//////////// Problems ////////////

// 1. Print Pyramid Pattern 
function printPattern(){
    let num = document.getElementById("patternNum").value;
    // console.log(num);
    let pattern = "";
    for(let j=0; j<num; j++){
        pattern = pattern + "*"
        console.log(pattern);
    }
}

// 2. Find factorial 
function factorial(){
    let num = document.getElementById("factorialNum").value;
    let factorial = 1;
    for(let i=1; i<=num; i++){
        factorial = factorial*i;
    }
    document.getElementById("factorialResult").innerHTML = "Factorial is: " + factorial;
}

// 3. Sum of digits of a Number
function sumofNumber(){
    let num = document.getElementById("sumofNumber").value;
    let sum = 0;
    while(num!=0){
        r = parseInt(num%10);
        sum = sum + r;
        num = parseInt(num/10);
    }

    document.getElementById("sumResult").innerHTML = "Sum of Number is: " + sum;
}

// 4. Remove duplicates from Array using Loop

let initialArray = [1,2,3,4,5,1,2,3,4,5,6,7,8,9];

console.log("initial array: ", initialArray);
let resultArray = [];

for(let i=0; i<initialArray.length; i++){
    if(initialArray[i] in resultArray){
        continue;
    } 
    else {
        resultArray.push(initialArray[i]);
    }
}

console.log("result array: ", resultArray);
