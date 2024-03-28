let users = [];

function register() {
  let regUsername = document.getElementById("regUsername").value.trim();
  let regPassword = document.getElementById("regPassword").value.trim();
  if (regUsername !== "" && regPassword !== "") {
    let user = {
      username: regUsername,
      password: regPassword
    };
    users.push(user);
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("successMessage").style.display = "block";
    document.getElementById("loggedInUser").textContent = regUsername;
  } else {
    showError("Please enter a username and password.");
  }
}

function login() {
  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value.trim();
  let user = users.find(u => u.username === username && u.password === password);
  if (user) {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("successMessage").style.display = "block";
    document.getElementById("loggedInUser").textContent = username;
  } else {
    showError("Invalid username or password.");
  }
}

function showRegisterForm() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("registerForm").style.display = "block";
  document.getElementById("successMessage").style.display = "none";
  document.getElementById("errorMessage").style.display = "none";
}

function showLoginForm() {
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("registerForm").style.display = "none";
  document.getElementById("successMessage").style.display = "none";
  document.getElementById("errorMessage").style.display = "none";
}

function showError(message) {
  document.getElementById("errorText").textContent = message;
  document.getElementById("errorMessage").style.display = "block";
}
