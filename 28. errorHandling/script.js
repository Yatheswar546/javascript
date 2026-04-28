// ================= BASIC TRY CATCH =================
function parseJSON() {
    let input = document.getElementById("jsonInput").value;

    try {
        let result = JSON.parse(input);
        document.getElementById("jsonResult").innerHTML = "Valid JSON: " + JSON.stringify(result);
    } catch (error) {
        document.getElementById("jsonResult").innerHTML = "Error: Invalid JSON";
    } finally {
        console.log("JSON parse attempt finished");
    }
}

// ================= THROW CUSTOM ERROR =================
function validateAge(age) {
    if(age < 18) {
        throw new Error("Age must be 18+");
    }
    return "Valid Age";
}

// ================= OPTIONAL CHAINING =================
function checkUser() {
    let user = {
        name: "Yathe",
        address: null
    };

    // without optional chaining -> error
    // user.address.city ❌

    let city = user.address?.city || "City not available";

    document.getElementById("userResult").innerHTML = city;
}

// ================= SAFE JSON UTILITY =================
function safeParse(json) {
    try {
        return JSON.parse(json);
    } catch {
        return null;
    }
}

// ================= GLOBAL ERROR HANDLER =================
window.onerror = function (msg, url, line) {
    console.log("Global Error: ", msg);
};