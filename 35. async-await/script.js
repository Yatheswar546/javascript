// ================= BASIC EXAMPLE =================
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function basicExample() {
    let output = "";

    output += "Step 1\n";

    document.getElementById("basicOutput").textContent = output;

    await delay(2000);

    output += "Step 2 (after 2 sec)\n";

    document.getElementById("basicOutput").textContent = output;

}

// ================= API CALL =================
async function getPosts() {
    let output = "Loading...\n";
    document.getElementById("apiOutput").textContent = output;

    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");

        if(!res.ok) throw new Error("HTTP Error: " + res.status);

        const data = await res.json();

        output = data.slice(0,5)
            .map(post => post.title)
            .join("\n");
    
    } catch (err) {
        output = err;
    } 

    document.getElementById("apiOutput").textContent = output;
}

// ================= ERROR HANDLING =================
async function getError() {
    try {
        const res = await fetch("https://invalid-url");
        const data = await res.json();
        document.getElementById("errorOutput").textContent = data;
    } catch (err) {
        document.getElementById("errorOutput").textContent = "Error: " + err.message;
    }
}

// ================= SEQUENTIAL =================
async function runSequential() {
    let output = "";

    const p1 = new Promise(res => setTimeout(() => res("Task 1 done"), 2000));
    const p2 = new Promise(res => setTimeout(() => res("Task 2 done"), 2000));

    const r1 = await p1;
    document.getElementById("output").textContent = r1;
    const r2 = await p2;

    output = r1 + "\n" + r2;

    document.getElementById("output").textContent = output;
}

// ================= PARALLEL =================
async function runParallel() {
    let output = "";

    const p1 = new Promise(res => setTimeout(() => res("Task 1 done"), 2000));
    const p2 = new Promise(res => setTimeout(() => res("Task 2 done"), 2000));

    const results = await Promise.all([p1,p2]);

    output = results.join("\n");

    document.getElementById("output").textContent = output;
}

// ================= CUSTOM PROMISE =================
function checkNumber(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(num > 0) {
                resolve("Success");
            } else {
                reject("Failure");
            }
        }, 1000);
    });
}

async function runCheck() {
    let num = document.getElementById("num").value;

    try {
        const result = await checkNumber(Number(num));
        document.getElementById("checkOutput").textContent = result;
    } catch (error) {
        document.getElementById("checkOutput").textContent = error;
    }
}