var number = 10;
var string = "JavaScript";
var boolean = true;

var bigInt = 10987256480192;
var unDefined;
var Null = null;

// typeof() is used to check the data-types

console.log(typeof(number));
console.log(typeof(string));
console.log(typeof(boolean));
console.log(typeof(bigInt));
console.log(typeof(unDefined));
console.log(typeof(Null));

/////////// PROBLEMS /////////////

// 1. write a function that prints type of any input
function checkType(input){
    return typeof(input);
}

console.log(checkType("vbdshvhis"));