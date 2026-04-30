// =================== PASS BY VALUE ====================
function testPrimitive() {
    let a = 10;
    let b = a;

    b = 20;

    document.getElementById("primitiveResult").innerText = `a: ${a}, b: ${b}`;
}

// =================== PASS BY REFERENCE ====================
function testObject() {
    let obj1 = { value: 10 };
    let obj2 = obj1;

    obj2.value = 20;

    document.getElementById("objectResult").innerText = `obj1.value: ${obj1.value}, obj2.value: ${obj2.value}`;
}

// =================== MUTATION BUG ====================
let user = { name: "Yathe" };

function changeName(obj) {
    obj.name = "Changed";
}

changeName(user);
console.log(user.name);

// =================== FIX USING SPREAD ====================
function fixMutation() {
    let original = { name: "Yathe" };

    let copy = {...original};

    copy.name = "Updated";

    document.getElementById("fixedResult").innerText = `Original: ${original.name}, Copy: ${copy.name}`;
}

// =================== DEEP COPY (basic) ====================
function deepCopyExample() {
    let obj = { a: 1, nested: {b: 2} };

    let copy = JSON.parse(JSON.stringify(obj));

    copy.nested.b = 100;

    console.log(obj.nested.b);
}

