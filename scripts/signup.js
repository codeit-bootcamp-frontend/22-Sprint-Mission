const emailInput = document.querySelector("#email");
const nicknameInput = document.querySelector("#nickname");
const passwordInput = document.querySelector("#password");
const passwordConfirmInput = document.querySelector("#password-confirm");
const submitBtn = document.querySelector(".submit-btn");

function showError(inputElement, errorMessage) {
  inputElement.classList.add("input-error");

  const inputWrapDiv = inputElement.closest(".input-wrap");
  const errorTag = inputWrapDiv.querySelector(".error-msg");
  errorTag.textContent = errorMessage;
}

function clearError(inputElement) {
  inputElement.classList.remove("input-error");

  const inputWrapDiv = inputElement.closest(".input-wrap");
  const errorTag = inputWrapDiv.querySelector(".error-msg");

  if (errorTag) {
    errorTag.textContent = "";
  }
}

function getEmailError(value) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (value === "") return "이메일을 입력해주세요.";
  if (!emailRegex.test(value)) return "잘못된 이메일 형식입니다.";
  return "";
}

function getNicknameError(value) {
  if (value === "") return "닉네임을 입력해주세요.";
  return "";
}

function getPasswordError(value) {
  if (value === "") return "비밀번호를 입력해주세요.";
  if (value.length < 8) return "비밀번호를 8자 이상 입력해주세요.";
  return "";
}

function getConfirmError(value, pw) {
  if (value !== pw) return "비밀번호가 일치하지 않습니다.";
  return "";
}

function checkButtonStatus() {
  const emailError = getEmailError(emailInput.value);
  const nicknameError = getNicknameError(nicknameInput.value);
  const passwordError = getPasswordError(passwordInput.value);
  const confirmError = getConfirmError(
    passwordConfirmInput.value,
    passwordInput.value,
  );

  if (emailError === "") clearError(emailInput);
  if (nicknameError === "") clearError(nicknameInput);
  if (passwordError === "") clearError(passwordInput);
  if (confirmError === "") clearError(passwordConfirmInput);

  submitBtn.disabled = !(
    emailError === "" &&
    nicknameError === "" &&
    passwordError === "" &&
    confirmError === ""
  );
}

emailInput.addEventListener("focusout", () => {
  const error = getEmailError(emailInput.value);
  if (error) showError(emailInput, error);
});

nicknameInput.addEventListener("focusout", () => {
  const error = getNicknameError(nicknameInput.value);
  if (error) showError(nicknameInput, error);
});

passwordInput.addEventListener("focusout", () => {
  const error = getPasswordError(passwordInput.value);
  if (error) showError(passwordInput, error);
});

passwordConfirmInput.addEventListener("focusout", () => {
  const error = getConfirmError(
    passwordConfirmInput.value,
    passwordInput.value,
  );
  if (error) showError(passwordConfirmInput, error);
});

emailInput.addEventListener("input", checkButtonStatus);
nicknameInput.addEventListener("input", checkButtonStatus);
passwordInput.addEventListener("input", checkButtonStatus);
passwordConfirmInput.addEventListener("input", checkButtonStatus);

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  location.href = "/login.html";
});
