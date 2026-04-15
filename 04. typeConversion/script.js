let x1 = 5
let x2 = "5"

// console.log(x1 == x2)

res1 = 51 + 90
// console.log(res1)

res2 = "Hello " + "Everyone";
// console.log(res2)

res3 = 51 + 90 + "JavaScript";
// console.log(res3)

/*  
    51 + 90 + "JavaScript"
    141 (number) + "JavaScript" (string)
    "141" (string) + "JavaScript" (string)
    141JavaScript
*/

res4 = 50 + 30 + "JavaScript" + 20 + 100
// console.log(res4) //80JavaScript20100
/*
    80JavaScript120
    200JavaScript
    JavaScript200

    Working:
    50 + 30 + "JavaScript" + 20 + 100
    80 (number) + "JavaScript" + 20 (number) + 100 (number)
    "80" (string) + "JavaScript" + 20 (number) + 100 (number)
    "80JavaScript" + 20 (number) + 100 (number)
    "80JavaScript" + "20" (string) + 100 (number)
    "80JavaScript20" (string) + "100" (string)
    "80JavaScript20100"
*/

// let num = 123;

// console.log(num, typeof (num))

// let str1 = String(num);

// console.log(str1, typeof (str1));

// let str2 = "456"

// console.log(str2, typeof (str2));

// let num2 = Number(str2);

// console.log(num2, typeof (num2));

// num2 = num2 + 300;

// console.log(num2, typeof (num2))

// Type Coersion
let a = 5;
let b = "5";

console.log(a==b);
console.log(a===b);