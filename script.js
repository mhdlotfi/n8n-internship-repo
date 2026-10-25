const form = document.querySelector('#login-form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const emailError = document.querySelector('#email-error');
const passwordError = document.querySelector('#password-error');
const status = document.querySelector('#form-status');
const toggle = document.querySelector('#password-toggle');

function clearErrors() {
  emailError.textContent = '';
  passwordError.textContent = '';
  emailInput.closest('.field-group').classList.remove('has-error');
  passwordInput.closest('.field-group').classList.remove('has-error');
}

function validate() {
  clearErrors();
  let valid = true;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = 'لطفاً یک ایمیل معتبر وارد کنید.';
    emailInput.closest('.field-group').classList.add('has-error');
    valid = false;
  }

  if (passwordInput.value.length < 6) {
    passwordError.textContent = 'رمز عبور باید حداقل ۶ کاراکتر باشد.';
    passwordInput.closest('.field-group').classList.add('has-error');
    valid = false;
  }

  return valid;
}

toggle.addEventListener('click', () => {
  const isPassword = passwordInput.type === 'password';
  passwordInput.type = isPassword ? 'text' : 'password';
  toggle.textContent = isPassword ? 'مخفی' : 'نمایش';
  toggle.setAttribute('aria-label', isPassword ? 'مخفی کردن رمز عبور' : 'نمایش رمز عبور');
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  status.textContent = '';
  if (validate()) {
    status.textContent = 'ورود با موفقیت انجام شد.';
  }
});

[emailInput, passwordInput].forEach((input) => {
  input.addEventListener('input', () => {
    input.closest('.field-group').classList.remove('has-error');
    input.closest('.field-group').querySelector('.error-message').textContent = '';
  });
});
