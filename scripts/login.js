const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
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

function getPasswordError(value) {
  if (value === "") return "비밀번호를 입력해주세요.";
  if (value.length < 8) return "비밀번호를 8자 이상 입력해주세요.";
  return "";
}

function checkButtonStatus() {
  const emailError = getEmailError(emailInput.value);
  const passwordError = getPasswordError(passwordInput.value);

  if (emailError === "") clearError(emailInput);
  if (passwordError === "") clearError(passwordInput);

  submitBtn.disabled = !(emailError === "" && passwordError === "");
}

emailInput.addEventListener("focusout", () => {
  const error = getEmailError(emailInput.value);
  if (error) showError(emailInput, error);
});

passwordInput.addEventListener("focusout", () => {
  const error = getPasswordError(passwordInput.value);
  if (error) showError(passwordInput, error);
});

emailInput.addEventListener("input", checkButtonStatus);
passwordInput.addEventListener("input", checkButtonStatus);

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  location.href = "/items.html";
});
