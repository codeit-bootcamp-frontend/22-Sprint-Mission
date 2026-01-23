import {
  EMAIL_REGEX,
  PASSWORD_REGEX,
  PASSWORD_MIN_LEN,
  NICKNAME_REGEX,
} from '../constants/auth.constants.js';

const authForm = document.querySelector('.auth-form');
const emailInput = document.querySelector('#email');
const nicknameInput = document.querySelector('#nickname');
const passwordInput = document.querySelector('#password');
const passwordCheckInput = document.querySelector('#password_check');
const submitButton = document.querySelector('.auth-submit-button');
const passwordToggles = document.querySelectorAll('.auth-password-toggle');

// 로그인 페이지인지 여부
const isLoginPage = authForm.classList.contains('auth-login-form');

//필수값 검증
const isRequired = (value, fieldName) =>
  value.trim() === '' ? `${fieldName}을 입력해주세요.` : '';

const emailField = (value) => {
  const requiredError = isRequired(value, '이메일');
  if (requiredError) return requiredError;
  return EMAIL_REGEX.test(value) ? '' : '잘못된 이메일 형식입니다.';
};

const nameField = (value) => {
  const requiredError = isRequired(value, '닉네임');
  if (requiredError) return requiredError;
  return NICKNAME_REGEX.test(value) ? '' : '잘못된 닉네임 형식입니다.';
};

const passwordField = (value) => {
  const requiredError = isRequired(value, '비밀번호');
  if (requiredError) return requiredError;

  if (value.length < PASSWORD_MIN_LEN) {
    return `비밀번호를 ${PASSWORD_MIN_LEN}자 이상 입력해주세요.`;
  }

  if (!isLoginPage && !PASSWORD_REGEX.test(value)) {
    return '잘못된 비밀번호 형식입니다.';
  }

  return '';
};

const passwordCheckField = (value, originalPassword) =>
  value !== originalPassword ? '비밀번호가 일치하지 않습니다.' : '';

const fieldConfig = {
  email: { input: emailInput, validator: emailField },
  ...(nicknameInput && {
    nickname: { input: nicknameInput, validator: nameField },
  }),
  password: { input: passwordInput, validator: passwordField },
  ...(passwordCheckInput && {
    password_check: {
      input: passwordCheckInput,
      validator: (value) =>
        passwordCheckField(value, passwordInput.value),
    },
  }),
};

const getFieldContainer = (input) =>
  input.closest('.auth-field');

// 에러 메시지 표시
const showError = (input, message) => {
  input.classList.add('error');

  const field = getFieldContainer(input);
  if (!field) return;

  const existingError = field.querySelector('.error-message');
  if (existingError) existingError.remove();

  const errorElement = document.createElement('span');
  errorElement.className = 'error-message';
  errorElement.textContent = message;
  field.appendChild(errorElement);
};

// 에러 메시지 제거
const clearError = (input) => {
  input.classList.remove('error');

  const field = getFieldContainer(input);
  if (!field) return;

  const errorElement = field.querySelector('.error-message');
  if (errorElement) errorElement.remove();
};

// 전체 필드 기준으로 제출 버튼 활성화 여부
const updateSubmitButton = () => {
  const hasError = Object.values(fieldConfig).some(
    ({ input, validator }) => validator(input.value)
  );
  submitButton.disabled = hasError;
};

// 단일 필드 검증 실행
const validateField = (inputId) => {
  const config = fieldConfig[inputId];
  if (!config) return '';

  const { input, validator } = config;
  const error = validator(input.value);

  if (error) {
    showError(input, error);
  } else {
    clearError(input);
  }

  updateSubmitButton();
  return error;
};

// 비밀번호 변경 시 비밀번호 확인 필드 재검증
const revalidatePasswordCheck = () => {
  if (!passwordCheckInput || !passwordCheckInput.value) return;
  validateField('password_check');
};

// 포커스가 벗어날 때 검증
authForm.addEventListener('focusout', (e) => {
  const input = e.target;
  if (!input.matches('input')) return;

  validateField(input.id);

  if (input.id === 'password') {
    revalidatePasswordCheck();
  }
});

// 입력 중 실시간 검증
const handleInput = (inputId) => {
  validateField(inputId);

  if (inputId === 'password') {
    revalidatePasswordCheck();
  }
};

emailInput.addEventListener('input', () =>
  handleInput('email')
);

if (nicknameInput) {
  nicknameInput.addEventListener('input', () =>
    handleInput('nickname')
  );
}

passwordInput.addEventListener('input', () =>
  handleInput('password')
);

if (passwordCheckInput) {
  passwordCheckInput.addEventListener('input', () =>
    handleInput('password_check')
  );
}

// 폼 제출 시 전체 필드 검증
authForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const hasError = Object.keys(fieldConfig)
    .some(validateField);

  if (!hasError) {
    window.location.href = isLoginPage
      ? 'items.html'
      : 'login.html';
  }
});

// 비밀번호 표시 상태 토글
passwordToggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    const input = toggle
      .closest('.auth-password-container')
      .querySelector('input');
    const img = toggle.querySelector('img');

    const isHidden = input.type === 'password';
    input.type = isHidden ? 'text' : 'password';
    img.src = isHidden
      ? '../assets/icons/ic_eye.svg'
      : '../assets/icons/ic_eye_off.svg';
    img.alt = isHidden
      ? '비밀번호 숨기기'
      : '비밀번호 보기';
  });
});

// 초기 렌더링 시 버튼 상태 설정
updateSubmitButton();
