// Normal Functions to Arrow Functions

////////////// Example-1 (Function with no parameters) //////////////

// function greet(){
//     console.log("Hello World");
// }
// greet();

// let greet = () => {
//     console.log("Hello World");
// }
// greet();

let greet = () => console.log("Hello World");
greet();

////////////// Example-2 (Function with 1 parameter) //////////////

// function square(num){
//     console.log(num * num);
// }
// square(5);

// let square = (num) => {
//     console.log(num * num);
// }
// square(52);

let square = num => num * num;
let n = 23
console.log(`Square of ${n} is ${square(n)}`);

////////////// Example-3 (Function with multiple parameters) //////////////

// function add(a,b){
//     console.log(`${a} + ${b} is ${a+b}`);
// }
// add(2,3);

let add = (a,b) => a + b;
console.log(add(5,8));

////////////// Example-4 (Function with multiple lines) //////////////

// function checkEven(num){
//     if(num%2 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(checkEven(10));

// const checkEven = (num) => {
//     if(num%2 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(checkEven(3));

// const checkEven = (num) => { return (num%2 === 0) ? true : false };
// console.log(checkEven(13));

const checkEven = num => num%2 === 0;
console.log(checkEven(234));

////////////// Example-5 (Function returning an object) //////////////

// function createUser(name, age){
//     return {name: name, age: age};
// }
// console.log(createUser("Yatheswar", 25));

let createUser = (name, age) => ( {name: name, age: age} );
console.log(createUser("Yatheswar", 25));

// NOTE: Arrow function must wrap object in parentheses. If not Js thinks it's a function body.

