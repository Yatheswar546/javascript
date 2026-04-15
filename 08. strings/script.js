//              -5-4-3-2-1
let str1 = "Hello Everyone";
//0123456789.................. 
// console.log(str1.length);

// console.log(str1.charAt(4));

// Concatination
let str2 = "JavaScript" + " " + "Strings";
// console.log(str2);

let str3 = "JavaScript".concat(" ", "Strings ", "Concat Method");
// console.log(str3);

// Slicing the Strings
/*
    slice(start, end)     
    substring(start, end)
    substr(start, length)
*/

let str4 = "Akshay is a Software Engineer";

// console.log(str4.slice(0, 6))
// console.log(str4.slice(0))
// console.log(str4.substring(12, 20))

// console.log(str4.substr(12, 17))

// console.log(str4.slice(-8, -1));
// console.log(str4.slice(-8));


// Converting the Characters

let str5 = "harsha";
// console.log(str5.toUpperCase());

let str6 = "UZWAL";
// console.log(str6.toLowerCase());

// Trimming
let str7 = "    Coolie is releasing on August 14th     "
// console.log(str7);

// console.log(str7.trim());
// console.log(str7.trimStart());
// console.log(str7.trimEnd());


// Replacing
let str8 = "15th is a Holiday";

// console.log(str8);

let new_str8 = str8.replace("15th", "14th");

// console.log(new_str8);

let str9 = "Dogs are very cute animals. I love Dogs very much";

// console.log(str9);

let new_str9 = str9.replaceAll("Dogs", "Cats");

// console.log(new_str9)

// Searching in a String 
let str10 = "My Portfolio is ready";

// console.log(str10.includes("Portfolio"));

// console.log(str10.indexOf("Portfolio"));

// console.log(str10.search("Portfolio"));

// console.log(str10.match("ready"));


// String Template Literals

// Example 1
// Old Way
let name = "Yathe";
let age = 25;
let text = "My name is " + name + " and I am " + age;

// New Way
text = `My name is ${name} and I am ${age}`;
// console.log(text);

// Example 2
let a = 10, b = 20;

// console.log(`Sum of a and b is: ${a+b}`);

// Example 3: using functions
function square(n){
    return n*n;
}

// console.log(`Sqaure of 5: ${square(5)}`);

// Example 4: multi line strings
let content = `line 1
line 2
line 3`;

// console.log(content);

// Example 5: Using in DOM
const user = {
    name: 'yathe',
    age: 25
}

const card = `
    <div class="card">
        <h2>${user.name}</h2>
        <h2>${user.age}</h2>
    </div>
`
document.getElementById("user").innerHTML = card;

// Example 6: Conditional statements

const isLoggedIn = true;

const message = `User is ${isLoggedIn ? "Online" : "Offline"}`;
// console.log(message);

// Example 7: Nested Literals
let userName = "Yathe";
let skills = ["HTML", "CSS", "Js"];

const output = `
    Name: ${userName}
    Skills ${skills.join(",")}
`;

// console.log(output);

// Example 8: Tagged Template Literals (Advanced for interviews)
// Used in libraries like styled-components

function highlight(strings, value){
    return `${strings[0]}**${value}**${strings[1]}`
}

let Name = "Yathe"
let result =  highlight`Hello ${name}!`;

// console.log(result);

/////////////// PROBLEMS //////////////////

// Problem 1: Reverse a String
function reversingString(){
    let str = document.getElementById("reverseStr").value;
    let result = str.split('').reverse().join('');
    
    document.getElementById("reversedString").innerHTML = `Result: ${result}`;
}

// Problem 2: Check Palindrome or Not
function checkPalindrome(){
    let str = document.getElementById("palindromeStr").value;
    
    if(str === str.split('').reverse().join('')) {
        document.getElementById("palindromeResult").innerHTML = "Result: It is Palindrome";
    }
    else{
        document.getElementById("palindromeResult").innerHTML = "Result: Not a Palindrome";
    }
}

// Problem 3: Count vowels in a String
function checkVowels(){
    let str = document.getElementById("vowelsStr").value;

    let count = 0;
    for(let i=0; i<str.length; i++){
        if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'
        || str[i] == 'A' || str[i] == 'E' || str[i] == 'I' || str[i] == 'O' || str[i] == 'U'
        ) {
            count++;
        }
    }

    document.getElementById("vowelsCount").innerHTML = `Result: There are ${count} vowels`;
}

// Problem 4: Capitalize first letter of each word
// Approach 1
// function capitaliseStr(){
//     let str = document.getElementById("capitalizeStr").value;

//     let result = "";

//     let stringArray = str.split(' ');

//     for(let i=0; i<stringArray.length; i++){
//         newWord = stringArray[i][0].toUpperCase() + stringArray[i].slice(1);

//         result = result + newWord + " ";
//     }

//     document.getElementById("capitaliseResult").innerHTML = `Result: ${result}`;
// }

// Approach 2
function capitaliseStr(){
    let str = document.getElementById("capitalizeStr").value;

    let result = str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

    document.getElementById("capitaliseResult").innerHTML = `Result: ${result}`;
}