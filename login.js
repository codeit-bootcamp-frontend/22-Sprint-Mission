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
});


passwordInput.addEventListener('input', function() {
  passwordInput.classList.remove('input-error');
  passwordErrorMsg.classList.remove('show');
});