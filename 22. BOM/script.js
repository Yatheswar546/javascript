// ================= SCREEN =================
function getScreenSize() {
    let width = window.screen.width;
    let height = window.screen.height;

    document.getElementById("screenResult").innerText = `Width: ${width}, Height: ${height}`;
}

// ================= NAVIGATOR =================
function getBrowserInfo() {
    let browser = navigator.userAgent;
    let platform = navigator.platform;

    document.getElementById("browserResult").innerText = `Browser: ${browser} | Platform: ${platform}`;
}

// ================= LOCATION =================
function redirectPage() {
    setTimeout(() => {
        window.location.href = 'https://www.google.com';
    }, 3000);
}

// ================= HISTORY =================
function goBack() {
    window.history.back();
}

function goForward() {
    window.history.forward();
}