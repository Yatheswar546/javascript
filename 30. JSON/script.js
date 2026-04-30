var obj = {
    "name" : 'Yathe',
    "age" : 28,
    "married" : false,
    "score" : [22,45,67,13],
    "grade" : null,
    "marks": {
        "ml" : 65,
        "python" : 76,
        "javascript" : 87,
    },
    "lastName" : undefined,
    "getName" : function(){
        return this.name
    }
}

console.log(obj)

obj = JSON.stringify(obj)
console.log(obj)
console.log(JSON.stringify(obj))

obj = JSON.parse(obj)
console.log(obj)

obj = JSON.stringify(obj)
console.log(obj)

var arr = [
    {
        "name" : 'Yathe',
        "age" : 22
    },
    {
        "name" : 'Swarup',
        "age" : 21
    },
    {
        "name" : 'Suhaas',
        "age" : 20
    },
]

console.log(arr[1].age)

// ================= JSON.parse =================
function parseJSON() {
    const input = document.getElementById("jsonInput").value;

    try {
        const obj = JSON.parse(input);

        document.getElementById("parseResult").textContent = "Valid JSON:\n" + JSON.stringify(obj, null, 2);
    } catch (error) {
        document.getElementById("parseResult").textContent = "Invalid JSON ❌";
    }
}

// ================= JSON.stringify =================
function stringifyJSON() {
    const obj = {
        name: "Yathe",
        age: 28,
        skills: ["JS", "React"],
        details: {
            city: "Vizag"
        },
        lastName: undefined, // removed in JSON
        greet: function () {} // removed in JSON
    };

    const json = JSON.stringify(obj, null, 2);

    document.getElementById("stringifyResult").textContent = json;
}

// ================= FETCH API =================
async function fetchUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if(!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await response.json();

        const simplified = data.slice(0, 3).map(user => ({
            name: user.name,
            email: user.email,
            city: user.address.city
        }));

        document.getElementById("apiResult").textContent = JSON.stringify(simplified, null, 2);
    }   catch (error) {
        document.getElementById("apiResult").textContent = "Error fetching data ❌";
    }
}

// ================= SAFE PARSE UTILITY =================
function safeParse(json) {
    try {
        return JSON.parse(json);
    } catch {
        return null;
    }
}

// ================= EXTRA: STRINGIFY WITH FILTER =================
function customStringify() {
    const obj = {
        name: "Yathe",
        password: "123456"
    };

    const json = JSON.stringify(obj, (key, value) => {
        if(key === "password") return undefined;
        return value;
    });

    console.log(json);
}