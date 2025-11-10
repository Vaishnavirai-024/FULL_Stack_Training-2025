const form = document.getElementById("registerForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");

form.addEventListener("submit", e => {
  e.preventDefault();
  validateForm();
});

function showError(input, message) {
  const small = input.nextElementSibling;
  small.textContent = message;
  input.classList.add("invalid");
  input.classList.remove("valid");
}

function showSuccess(input) {
  const small = input.nextElementSibling;
  small.textContent = "";
  input.classList.add("valid");
  input.classList.remove("invalid");
}

function validateForm() {
  let isValid = true;

  if (nameInput.value.trim() === "") {
    showError(nameInput, "Name is required");
    isValid = false;
  } else showSuccess(nameInput);

  if (emailInput.value.trim() === "") {
    showError(emailInput, "Email is required");
    isValid = false;
  } else if (!emailInput.value.includes("@")) {
    showError(emailInput, "Email must contain '@'");
    isValid = false;
  } else showSuccess(emailInput);

  if (passInput.value.trim() === "") {
    showError(passInput, "Password is required");
    isValid = false;
  } else if (passInput.value.length < 8) {
    showError(passInput, "At least 8 characters");
    isValid = false;
  } else showSuccess(passInput);

  if (isValid) alert("Form submitted successfully!");
}
