const authForm = document.querySelector(".auth-form");
const sumitBtn = document.querySelector(".auth-form__submit-btn");

const inputEmail = document.querySelector("input[id=email]");
const inputNickname = document.querySelector("input[id=nickname]");
const inputPass = document.querySelector("input[id=password]");
const inputPassConfirm = document.querySelector("input[id=password-confirm]");

const formEmail = document.querySelector("[data-field='email']");
const formNickname = document.querySelector("[data-field='nickname']");
const formPass = document.querySelector("[data-field='password']");
const formPassConfirm = document.querySelector(
  "[data-field='password-confirm']"
);

const emailCheck = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const formStatus = {
  email: false,
  nickname: inputNickname ? false : true,
  password: false,
  passConfirm: inputPassConfirm ? false : true,
};

// 폼 체크 이벤트의 에러 동작 함수
function setError(el, message) {
  el.classList.remove("success");
  el.classList.add("error");
  el.lastElementChild.textContent = message;
}
// 폼 체크 이벤트의 성공 동작 함수
function setSuccess(el) {
  el.classList.remove("error");
  el.classList.add("success");
}

// 폼 체크 이벤트 ( 포커스 아웃 )
function formCheckEvent(e) {
  const id = e.target.id;
  const value = e.target.value;

  switch (id) {
    case "email":
      if (value === "") {
        setError(formEmail, "이메일을 입력해주세요.");
      } else if (!emailCheck.test(value)) {
        setError(formEmail, "잘못된 이메일 형식입니다.");
      } else {
        setSuccess(formEmail);
      }
      break;

    case "nickname":
      if (value === "") {
        setError(formNickname, "닉네임을 입력해주세요.");
      } else {
        setSuccess(formNickname);
      }
      break;

    case "password":
      if (value === "") {
        setError(formPass, "비밀번호를 입력해주세요.");
      } else if (value.length < 8) {
        setError(formPass, "비밀번호를 8자 이상 입력해주세요.");
      } else {
        setSuccess(formPass);
      }
      break;
  }
}
authForm.addEventListener("focusout", formCheckEvent);

// 폼 체크 이벤트 ( 입력 / 비밀번호 일치 여부 )
function passCheckEvent(e) {
  if (
    !inputPassConfirm ||
    inputPassConfirm.value === "" ||
    (e.target.id !== "password" && e.target.id !== "password-confirm")
  ) {
    return;
  }

  inputPass.value === inputPassConfirm.value
    ? setSuccess(formPassConfirm)
    : setError(formPassConfirm, "비밀번호가 일치하지 않습니다.");
}
authForm.addEventListener("keyup", passCheckEvent);

// 입력 시, submit 버튼 활성화 이벤트
function submitCheckEvent(e) {
  const id = e.target.id;
  const value = e.target.value;

  switch (id) {
    case "email":
      formStatus.email = value !== "" && emailCheck.test(value);
      break;

    case "nickname":
      formStatus.nickname = value !== "";
      break;

    case "password":
    case "password-confirm":
      const passwordCorrect =
        inputPass.value !== "" && inputPass.value.length >= 8;

      if (inputPassConfirm) {
        const confirmCorrect = inputPass.value === inputPassConfirm.value;
        formStatus.password = passwordCorrect && confirmCorrect;
        formStatus.passConfirm = passwordCorrect && confirmCorrect;
      } else {
        formStatus.password = passwordCorrect;
      }
      break;
  }

  Object.values(formStatus).every(Boolean)
    ? sumitBtn.classList.add("active")
    : sumitBtn.classList.remove("active");
}
authForm.addEventListener("keyup", submitCheckEvent);

// 비밀번호 ON / OFF 토글 이벤트
function passToggleEvent(e) {
  if (e.target.type === "button") {
    const btn = e.target;
    const field = btn.parentElement.querySelector("input");
    const btnToggle = btn.classList.toggle("on");
    field.type = btnToggle ? "text" : "password";
  }
}
authForm.addEventListener("click", passToggleEvent);
