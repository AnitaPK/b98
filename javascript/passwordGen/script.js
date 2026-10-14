function generatePassword() {
  const length = document.getElementById("length").value;
  const includeNumbers = document.getElementById("includeNumbers").checked;
  const includeUppercase = document.getElementById("includeUppercase").checked;
  const includeSpecial = document.getElementById("includeSpecial").checked;

  let charset = "abcdefghijklmnopqrstuvwxyz";
  if (includeNumbers) charset += "0123456789";
  if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (includeSpecial) charset += "!@#$%^&*()_+";
  if (document.getElementById("excludeAmbiguous").checked) {
    charset = charset.replace(/[l1I0O]/g, "");
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  document.getElementById("result").value = password;

  evaluateStrength(password);
}
//   Password Strength Indicator (Visual Meter)

function evaluateStrength(password) {
  const strengthBar = document.getElementById("strengthBar");
  const strengthText = document.getElementById("strengthText");
  let strength = 0;

  if (password.length >= 8) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++;

  let width = strength * 25;
  strengthBar.style.width = width + "%";

  if (strength === 0) {
    strengthText.textContent = "";
    strengthBar.className = "progress-bar";
  } else if (strength === 1) {
    strengthText.textContent = "Weak";
    strengthBar.className = "progress-bar bg-danger";
  } else if (strength === 2) {
    strengthText.textContent = "Medium";
    strengthBar.className = "progress-bar bg-warning";
  } else if (strength === 3) {
    strengthText.textContent = "Strong";
    strengthBar.className = "progress-bar bg-info";
  } else {
    strengthText.textContent = "Very Strong";
    strengthBar.className = "progress-bar bg-success";
  }
}
// Copy to Clipboard Button
function copyPassword() {
  const resultInput = document.getElementById("result");
  resultInput.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");
}
// show password
function togglePasswordVisibility() {
  const input = document.getElementById("result");
  input.type = input.type === "password" ? "text" : "password";
}