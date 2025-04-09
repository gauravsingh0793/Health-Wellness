document.addEventListener("DOMContentLoaded", function () {
    // Sign-Up Form Submission
    document.querySelector(".sign-up form").addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent default form submission

        const name = document.querySelector(".sign-up input[placeholder='Name']").value.trim();
        const email = document.querySelector(".sign-up input[placeholder='Email']").value.trim().toLowerCase();
        const password = document.querySelector(".sign-up input[placeholder='Password']").value;

        if (!name || !email || !password) {
            alert("⚠️ Please fill in all fields!");
            return;
        }

        // Store user credentials in LocalStorage
        localStorage.setItem("userName", name);
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);

        alert("✅ Account created successfully! You can now log in.");

        // Clear input fields after successful registration
        document.querySelector(".sign-up input[placeholder='Name']").value = "";
        document.querySelector(".sign-up input[placeholder='Email']").value = "";
        document.querySelector(".sign-up input[placeholder='Password']").value = "";
    });

    // Login Form Submission
    document.querySelector(".sign-in form").addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent default form submission

        const email = document.querySelector(".sign-in input[placeholder='Email']").value.trim().toLowerCase();
        const password = document.querySelector(".sign-in input[placeholder='Password']").value;

        const storedEmail = localStorage.getItem("userEmail");
        const storedPassword = localStorage.getItem("userPassword");

        if (email === storedEmail && password === storedPassword) {
            alert("🎉 Login successful! Redirecting...");

            // Redirect to another page after login (change this to your actual page)
            window.location.href = "dashboard.html"; // Example
        } else {
            alert("❌ Invalid email or password. Please try again!");
        }
    });
});
