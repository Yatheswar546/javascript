// ================= OBJECT DESTRUCTURING =================
function showObject(){
    const user = {
        name: "Yathe",
        age: 25,
        role: "Developer"
    };

    let { name, age } = user;

    document.getElementById("objectResult").innerText = `Name: ${name}, Age: ${age}`;
}

// ================= ARRAY DESTRUCTURING =================
function showArray(){
    let arr = ["sun", "mon", "tue", "wed"];

    let [a,b,c] = arr;

    document.getElementById("arrayResult").innerText = `Days: ${a}, ${b}, ${c}`;
}

// ================= NESTED DESTRUCTURING =================
function showNested(){
    const user = {
        name: "Yathe",
        address : {
            city: "Vizag",
            pincode: 530008
        }
    };

    let { address: {city} } = user;

    document.getElementById("nestedResult").innerText = `City: ${city}`;
}

// ================= EXTRA EXAMPLES =================

// Default values
let [x=10, y=20] = [5];
console.log(x,y);  // 5, 20

// Renaming variables
const obj = { a: 1};
let { a: value } = obj;
console.log(value);  // 1

// Function destructuring
function greet({ name }){
    return `Hello ${name}`;
}

console.log(greet({ name: "JS"}));  // Hello JS