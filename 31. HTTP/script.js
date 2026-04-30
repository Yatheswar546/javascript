// ================= GET REQUEST =================
async function getData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

        const data = await response.json();

        document.getElementById("getResult").textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        console.log("Error:", error);
    }
}

// ================= POST REQUEST =================
async function postData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "JS Notes",
                body: "Learning HTTP",
                userId: 1
            })
        });

        const data = await response.json();

        document.getElementById("postResult").textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        console.log("Error:", error);
    }
}