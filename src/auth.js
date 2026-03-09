const visibilityBtn = document.querySelectorAll(".btn-visibility");

// 비밀번호 보기, 숨기기 버튼 조작
visibilityBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const input = btn.previousElementSibling;
    const img = btn.querySelector("img");

    const isPassword = input.type === "password";

    input.type = isPassword ? "text" : "password";
    img.src = `./images/icon/btn_visibility_${isPassword ? "on" : "off"}.svg`;
    img.alt = isPassword ? "비밀번호 숨기기" : "비밀번호 보기";
  });
});

// 인풋 값 검증
const form = document.querySelector(".auth-form");
const inputWrap = document.querySelectorAll(".input-field");
const inputs = document.querySelectorAll("input");
// const inputs = document.querySelectorAll(".input-field input");
const submitBtn = document.querySelector(".submit-btn");

// 에러 메시지 출력 함수
function showError(input, message) {
  const wrap = input.closest(".input-field");
  const errorMsg = wrap.querySelector(".errorMsg");

  input.classList.add("error");
  errorMsg.textContent = message;
  errorMsg.classList.add("active");
}

// 에러 제거
function clearError(input) {
  const wrap = input.closest(".input-field");
  const errorMsg = wrap.querySelector(".errorMsg");

  input.classList.remove("error");
  errorMsg.textContent = "";
  errorMsg.classList.remove("active");
}

// input 하나 검증
function validateInput(input) {
  const value = input.value.trim();

  console.log("👉", input);

  if (!value) {
    const messageMap = {
      email: "이메일을 입력해주세요.",
      password: "비밀번호를 입력해주세요.",
      text: "닉네임을 입력해주세요.",
    };

    showError(input, messageMap[input.type] || "값을 입력해주세요.");
    return false;
  }
  if (input.type === "password" && value.length < 8) {
    showError(input, "비밀번호를 8자 이상 입력해주세요.");
    return false;
  }

  if (input.type === "email" && !input.validity.valid) {
    showError(input, "올바른 이메일 형식이 아닙니다.");
    return false;
  }

  clearError(input);
  return true;
}

// 전체 폼 검사
function checkFormValid() {
  const isValid = [...inputs].every((input) => validateInput(input));

  submitBtn.classList.toggle("active", isValid);
  submitBtn.disabled = !isValid;
}

// 실시간 검사
inputWrap.forEach((input) => {
  console.log(input);
  input.addEventListener("input", checkFormValid);
  // input.addEventListener("focusout", checkFormValid);
});

// form 제출 시 페이지 이동
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const pathname = window.location.pathname;

  if (pathname === "/signup.html") {
    window.location.href = "/login.html";
  } else {
    window.location.href = "/items.html";
  }
});
