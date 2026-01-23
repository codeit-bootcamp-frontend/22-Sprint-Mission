const emailInput = document.getElementById('emailInput');
const emailErrorMsg = document.getElementById('emailErrorMsg');

/* 이메일 검증 */
function validateEmail(email) {
  const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
  return pattern.test(email);
}

emailInput.addEventListener('focusout', function() {
  const value = emailInput.value.trim();

  if (emailInput.value.trim() === '') {      // 값이 비어있음
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
  }

  checkFormValidity();
});



const passwordInput = document.getElementById('passwordInput');
const passwordErrorMsg = document.getElementById('passwordErrorMsg');

passwordInput.addEventListener('focusout', function() {
  const value = passwordInput.value; // 비밀번호는 공백도 문자로 칠 수 있어서 trim() 안 함


  if (value === '') {
    passwordInput.classList.add('input-error');
    passwordErrorMsg.textContent = "비밀번호를 입력해주세요.";
    passwordErrorMsg.classList.add('show');
  } 

  else if (value.length < 8) {
    passwordInput.classList.add('input-error');
    passwordErrorMsg.textContent = "비밀번호를 8자 이상 입력해주세요.";
    passwordErrorMsg.classList.add('show');
  } 

  else {
    passwordInput.classList.remove('input-error');
    passwordErrorMsg.classList.remove('show');
  }

  checkFormValidity();
});


passwordInput.addEventListener('input', function() {
  passwordInput.classList.remove('input-error');
  passwordErrorMsg.classList.remove('show');
});


const loginButton = document.querySelector('.login-button');

function checkFormValidity() {
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value; // 비밀번호는 trim() 하지 않음

  const isEmailValid = validateEmail(emailValue);
  const isPasswordValid = passwordValue.length >= 8;

  if (isEmailValid && isPasswordValid) {
    loginButton.disabled = false;
    loginButton.style.backgroundColor = '#3692FF'; 
  } else {
    loginButton.disabled = true;
    loginButton.style.backgroundColor = '#9CA3AF'; 
  }
}

// 기본값
checkFormValidity();

emailInput.addEventListener('input', checkFormValidity);
passwordInput.addEventListener('input', checkFormValidity);




loginButton.addEventListener('click', function(e) {
  // form 태그 안에 버튼이 있으므  기본 동작 막아야함 
  e.preventDefault(); 
  

  if (!loginButton.disabled) {
    location.href = "./items.html"; 
  }
});