// Problem 1: Function to generate Fibonacci

// function calculatefibonacci(num){
//     if(num == 1){
//         return 0;
//     } else if (num == 2){
//         return 1;
//     } else{
//         return calculatefibonacci(num-1) + calculatefibonacci(num-2);
//     }

// }

function calculatefibonacci(n){

    if(n==1){
        return 0;
    } else if(n==2){
        return 1;
    } else {
        a = 0;
        b = 1;
        for(i=0; i<n-2; i++){
            c = a+b;
            a = b;
            b = c;
        }
        return c;
    }

}

function fibonacci(){
    let num = document.getElementById("fibonacciNum").value;

    let result = calculatefibonacci(num);
    document.getElementById("fibonacciResult").innerHTML = "Fibonacci Number is: " + result;

}

// Problem 2: Check whether the number is Prime or not

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
// function isPrime(n){
//     if(n==2 || n==3 || n==3){
//         return true;
//     } else {
//         let count = 0;
//         for(let i=2; i<=parseInt(n/2); i++){
//             if(n%i == 0) count++;
//             console.log(count);
//         }
//         return (count <= 1) ? true : false; 
//     }
// }

function checkPrime(){
    let num = document.getElementById("primeNum").value;

    let result = isPrime(num);

    if(result){
        document.getElementById("primeResult").innerHTML = "Result: Prime Number"; 
    }
    else{
        document.getElementById("primeResult").innerHTML = "Result: Not a Prime Number";
    }
    
}