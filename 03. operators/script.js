var a = 5;
var b = "5";

console.log(a==b);
console.log(a===b);

// Problems

// write a function that returns the largest of three numbers
function largestofThree(a,b,c){

    if(a>b && a>c){
        return a;
    } else if(b>c){
        return b;
    } else{
        return c;
    }

}

console.log(largestofThree(5,10,4));