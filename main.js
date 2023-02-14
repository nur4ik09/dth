const togglePassword = document.querySelector('.toggle-password');
const passwordInput = document.querySelector('#password');
const btn = document.getElementById("button")

togglePassword.addEventListener('click', function() {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
  this.classList.toggle("show-password");
});