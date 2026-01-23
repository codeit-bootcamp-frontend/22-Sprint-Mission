const emailInput = document.getElementById('emailInput');
const emailErrorMsg = document.getElementById('emailErrorMsg');

const nicknameInput = document.getElementById('nicknameInput');
const nicknameErrorMsg = document.getElementById('nicknameErrorMsg');

const passwordInput = document.getElementById('passwordInput');
const passwordErrorMsg = document.getElementById('passwordErrorMsg');

const passwordCheckInput = document.getElementById('passwordCheckInput');
const passwordCheckErrorMsg = document.getElementById('passwordCheckErrorMsg');


const signupButton = document.querySelector('.login-button');

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


nicknameInput.addEventListener('focusout', function() {
  const value = nicknameInput.value.trim();

  if (value === '') {
    nicknameInput.classList.add('input-error');
    nicknameErrorMsg.textContent = "닉네임을 입력해주세요.";
    nicknameErrorMsg.classList.add('show');
  } else {
    nicknameInput.classList.remove('input-error');
    nicknameErrorMsg.classList.remove('show');
  }
});



passwordInput.addEventListener('focusout', function() {
  const value = passwordInput.value;

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


passwordCheckInput.addEventListener('focusout', function() {
  const value = passwordCheckInput.value;
  const passwordValue = passwordInput.value;

  
  if (value !== passwordValue) {
    passwordCheckInput.classList.add('input-error');
    passwordCheckErrorMsg.textContent = "비밀번호가 일치하지 않습니다.";
    passwordCheckErrorMsg.classList.add('show');
  } 
  else {
    passwordCheckInput.classList.remove('input-error');
    passwordCheckErrorMsg.classList.remove('show');
  }
});



function checkSignupValidity() {
  const emailValue = emailInput.value.trim();
  const nicknameValue = nicknameInput.value.trim();
  const passwordValue = passwordInput.value; // 공백 포함 가능
  const passwordCheckValue = passwordCheckInput.value;

  const isEmailValid = validateEmail(emailValue);
  
  const isNicknameValid = nicknameValue !== '';
  
  const isPasswordValid = passwordValue.length >= 8;
  
  const isPasswordCheckValid = (passwordCheckValue === passwordValue) && (passwordCheckValue !== '');

  if (isEmailValid && isNicknameValid && isPasswordValid && isPasswordCheckValid) {
    signupButton.disabled = false;
    signupButton.style.backgroundColor = '#3692FF'; 
    signupButton.style.cursor = 'pointer';
  } else {
    signupButton.disabled = true;
    signupButton.style.backgroundColor = '#9CA3AF'; 
    signupButton.style.cursor = 'not-allowed';
  }
}

// 모든 입력창에 'input' 이벤트 연결 (타이핑 할 때마다 검사)
emailInput.addEventListener('input', checkSignupValidity);
nicknameInput.addEventListener('input', checkSignupValidity);
passwordInput.addEventListener('input', checkSignupValidity);
passwordCheckInput.addEventListener('input', checkSignupValidity);


signupButton.addEventListener('click', function(e) {
  e.preventDefault(); // 폼 전송 막기
  
  // 버튼이 활성화된 상태라면 이동
  if (!signupButton.disabled) {
    
    location.href = "./login.html"; 
  }
});

// 페이지 로드 시 한 번 검사(비활성화 상태로 시작)
checkSignupValidity();