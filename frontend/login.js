async function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (res.ok) {
        alert("Login Successful");

        // ✅ FIX: store BOTH user and userId properly
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.userId);  // 🔥 IMPORTANT FIX

        window.location.href = "dashboard.html";
    } else {
        alert(data.message);
    }
}


// REGISTER
async function register() {
    const name = document.getElementById("name")?.value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, password })
    });

    const data = await res.json();

    if (res.ok) {
        alert("Registered successfully");
        window.location.href = "login.html";
    } else {
        alert(data.message);
    }
}