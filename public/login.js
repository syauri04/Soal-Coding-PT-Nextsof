document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("login-form");
  const errorContainer = document.getElementById("error-message");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
      errorContainer.textContent = "Username dan password harus diisi!";
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Login berhasil!");
        window.location.href = "dashboard.html"; // Redirect ke dashboard
      } else {
        errorContainer.textContent = result.message || "Login gagal!";
      }
    } catch (error) {
      console.error("Error:", error);
      errorContainer.textContent = "Terjadi kesalahan. Coba lagi nanti.";
    }
  });
});
