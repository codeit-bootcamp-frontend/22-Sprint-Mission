const emailInput = document.getElementById('emailInput');
const emailErrorMsg = document.getElementById('emailErrorMsg');


function validateEmail(email) {
  const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
  return pattern.test(email);
}

emailInput.addEventListener('focusout', function() {
  const value = emailInput.value.trim();

  if (value === '') {
    emailInput.classList.add('input-error');
    emailErrorMsg.textContent = "이메일을 입력해주세요.";
    emailErrorMsg.classList.add('show');
  } 

  else if (!validateEmail(value)) {
    emailInput.classList.add('input-error');
    emailErrorMsg.textContent = "잘못된 이메일 형식입니다.";
    emailErrorMsg.classList.add('show');
  } 

  else {
    emailInput.classList.remove('input-error');
    emailErrorMsg.classList.remove('show');
    emailErrorMsg.textContent = "";
  }
});