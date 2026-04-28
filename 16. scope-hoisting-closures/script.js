// ================= SCOPE =================
function scopeDemo() {
    let message = "Hello";

    function inner() {
        return message;
    }

    document.getElementById("scopeResult").innerText = inner();
}

// ================= HOISTING  =================
function hoistingDemo() {
    let output = "";

    output += a + "\n";  // undefined (var hoisting)
    var a = 10;

    try {
        output += b;   // TDZ error
    } catch (e) {
        output += "Error (TDZ)";
    }

    document.getElementById("hoistingResult").innerText = output;
}

// ================= CLOSURE =================
function closureDemo() {
    function outer() {
        let count = 0;

        return function inner() {
            count++;
            return count;
        };
    }

    const counter = outer();

    let result = counter() + "," + counter() + "," + counter();

    document.getElementById("closureResult").innerText = result;
}