// ================= EVENT BUBBLING =================
document.getElementById("grandparent").addEventListener("click", () => {
    console.log("Grandparent Clicked");
});

document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent Clicked");
});

document.getElementById("child").addEventListener("click", () => {
    console.log("Child Clicked");
});

// ================= STOP PROPAGATION =================
document.getElementById("child").addEventListener("dblclick", (e) => {
    e.stopPropagation();
    console.log("Double Click - Bubbling Stopped");
})

// ================= EVENT DELEGATION =================
document.getElementById("list").addEventListener("click", (e) => {
    if(e.target.tagName === "LI") {
        console.log("Clicked: ", e.target.textContent);
    }
});

// ================= CAPTURING PHASE =================
document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent Capturing");
}, true);