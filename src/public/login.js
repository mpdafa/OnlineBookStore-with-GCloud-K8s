document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const loginError = document.getElementById("loginError"); // Add this element

  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Display success message
        loginError.textContent = "Login successful. Redirecting...";
        // Redirect to main page after a brief delay
        setTimeout(() => {
          window.location.href = "index.html";
        }, 1500);
      } else {
        // Display error message to the user if login fails
        loginError.textContent = "Invalid username or password.";
      }
    } catch (error) {
      // Display error message to the user if login fails
      loginError.textContent = "An error occurred during login.";
      console.error("Login error:", error);
    }
  });
});
