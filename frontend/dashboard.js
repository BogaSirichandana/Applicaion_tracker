const API = "http://localhost:5000/api/applications";

export async function addApplication() {
    const company = document.getElementById("company").value;
    const role = document.getElementById("role").value;
    const eventType = document.getElementById("eventType").value;
    const eventDate = document.getElementById("eventDate").value;

    const userId = localStorage.getItem("userId");

    if (!userId) {
        alert("User not logged in");
        return;
    }

    if (!company || !role || !eventDate) {
        alert("Please fill all required fields");
        return;
    }

    try {
        const res = await fetch(`${API}/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                companyName: company,
                role,
                eventType,
                eventDate,
                status: "Upcoming",
                notes: "",
                userId,
            }),
        });

        const data = await res.json();

        if (!res.ok) {
            console.error(data);
            alert("Failed to add application");
            return;
        }

        alert("Application Added Successfully");

        document.getElementById("company").value = "";
        document.getElementById("role").value = "";
        document.getElementById("eventDate").value = "";

        loadApplications();
    } catch (error) {
        console.error(error);
    }
}

export async function loadApplications() {
    try {
        const userId = localStorage.getItem("userId");

        if (!userId) {
            alert("User not logged in");
            return;
        }

        const res = await fetch(`${API}/user/${userId}`);
        const data = await res.json();

        const list = document.getElementById("list");
        list.innerHTML = "";

        if (!Array.isArray(data)) {
            return;
        }

        data.forEach((app) => {
            let currentStatus = app.status;

            if (
                app.eventDate &&
                new Date(app.eventDate) < new Date() &&
                app.status === "Upcoming"
            ) {
                currentStatus = "Missed";
            }

            const div = document.createElement("div");
            div.classList.add("application-card");

            div.innerHTML = `
                <h3>${app.companyName}</h3>
                <p><b>Role:</b> ${app.role}</p>
                <p><b>Event:</b> ${app.eventType}</p>
                <p><b>Event Date:</b> ${new Date(
                    app.eventDate
                ).toLocaleDateString()}</p>
                <p><b>Status:</b> ${currentStatus}</p>
                <button data-id="${app._id}" class="delete-btn">
                    Delete
                </button>
            `;

            list.appendChild(div);
        });

        document.querySelectorAll(".delete-btn").forEach((btn) => {
            btn.addEventListener("click", () => {
                deleteApp(btn.dataset.id);
            });
        });
    } catch (error) {
        console.error(error);
    }
}

export async function deleteApp(id) {
    try {
        await fetch(`${API}/${id}`, {
            method: "DELETE",
        });

        loadApplications();
    } catch (error) {
        console.error(error);
    }
}

export function logout() {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");

    window.location.href = "login.html";
}

window.logout = logout;

window.addApplication = addApplication;

loadApplications();