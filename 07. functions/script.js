// ================= Problem 1: FIBONACCI =================

// function calculatefibonacci(num){
//     if(num == 1){
//         return 0;
//     } else if (num == 2){
//         return 1;
//     } else{
//         return calculatefibonacci(num-1) + calculatefibonacci(num-2);
//     }

// }

function calculateFibonacci(n) {
    n = Number(n);

    if (n <= 0) return 0;
    if (n === 1) return 0;
    if (n === 2) return 1;

    let a = 0;
    let b = 1;
    let c;

    for (let i = 0; i < n - 2; i++) {
        c = a + b;
        a = b;
        b = c;
    }

    return c;
}

function fibonacci(){
    let num = document.getElementById("fibonacciNum").value;
    let result = calculateFibonacci(num);

    document.getElementById("fibonacciResult").innerText = "Fibonacci Number is: " + result;

}

// ================= Problem 2: PRIME CHECK =================

// Logic - 1
// function isPrime(n){
//     let count = 0;
//     for(i=1; i<=n; i++){
//         if(n%i==0){
//             count++;
//         }
//     }
//     return (count <= 2) ? true : false;
// }

// Logic - 2
function isPrime(n){

    n = Number(n);

    if(n==2 || n==3) return true;
    
    for(let i=2; i<=Math.sqrt(n); i++){
        if(n%i == 0) return false;
    }
    return true;
}

function checkPrime(){
    let num = document.getElementById("primeNum").value;
    let result = isPrime(num);

    document.getElementById("primeResult").innerText = result ? "Result: Prime Number" : "Result: Not a Prime Number";
    
}