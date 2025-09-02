  














// Open modal
function openModal(id) {
  document.getElementById(id).style.display = "flex";
}

// Close modal
function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

// Switch modals
function switchToRegister() {
  closeModal('loginModal');
  openModal('registerModal');
}
function switchToLogin() {
  closeModal('registerModal');
  openModal('loginModal');
}

// Handle Register
document.getElementById("registerForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("regName").value;
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;

  // Save user in localStorage
  localStorage.setItem("user", JSON.stringify({ name, email, password }));
  alert("Registration successful! Please login.");
  closeModal("registerModal");
  openModal("loginModal");
});

// Handle Login
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.email === email && user.password === password) {
    alert("Welcome back, " + user.name + "!");
    closeModal("loginModal");
    // You can redirect to dashboard.html here if you want
    // window.location.href = "dashboard.html";
  } else {
    alert("Invalid email or password!");
  }
});








   