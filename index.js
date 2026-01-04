const passwordView = document.querySelectorAll(".password-toggle");
const inputEmail = document.querySelector(".input-email");
const signupNicknameInput = document.querySelector("#signup-nickname");
const inputPassword = document.querySelector(".input-password");
const btnSignupLogin = document.querySelector(".btn-signup-login");
const signupPasswordCheckInput = document.querySelector(
  ".signup-password-check"
);

// 비밀 번호 보기 토글
passwordView.forEach(function (button) {
  button.addEventListener("click", function (e) {
    e.preventDefault();

    const passwordWrap = button.closest(".password-wrap");
    const input = passwordWrap.querySelector("input");

    if (!input) return;

    if (input.type === "password") {
      input.type = "text";
      button.classList.add("active");
    } else {
      input.type = "password";
      button.classList.remove("active");
    }
  });
});

// 유효성 검사 객체
const validity = {};

// 이메일 인풋 이벤트
inputEmail.addEventListener("focusout", function (event) {
  const eventTarget = event.currentTarget;
  const noti = eventTarget.parentElement.querySelector(".noti");

  if (inputEmail.value == "") {
    noti.innerText = "이메일을 입력해주세요.";
    eventTarget.style.border = "1px solid #F74747";
    validity.email = false;
  } else if (!inputEmail.value.includes("@")) {
    noti.innerText = "잘못된 이메일 형식입니다";
    eventTarget.style.border = "1px solid #F74747";
    validity.email = false;
  } else {
    noti.innerText = "";
    eventTarget.style.border = "1px solid transparent";
    validity.email = true;
  }
  checkSignupAvailable();
});

inputEmail.addEventListener("keydown", function (event) {
  const eventTarget = event.currentTarget;
  const noti = eventTarget.parentElement.parentElement.querySelector(".noti");
  if (inputEmail.value.includes("@")) {
    noti.innerText = "";
    checkSignupAvailable();
  }
});

// 닉네임 인풋 이벤트
signupNicknameInput.addEventListener("focusout", function (event) {
  const eventTarget = event.currentTarget;
  const noti = eventTarget.parentElement.querySelector(".noti");

  if (signupNicknameInput.value == "") {
    noti.innerText = "닉네임을 입력해주세요.";
    eventTarget.style.border = "1px solid #F74747";
    validity.nickname = false;
  } else {
    noti.innerText = "";
    eventTarget.style.border = "1px solid #3692FF";
    validity.nickname = true;
  }

  checkSignupAvailable();
});

// 비밀번호
inputPassword.addEventListener("focusout", function (event) {
  const eventTarget = event.currentTarget;
  const noti = eventTarget.parentElement.parentElement.querySelector(".noti");
  if (inputPassword.value == "") {
    noti.innerText = "비밀번호를 입력해주세요.";
    eventTarget.style.border = "1px solid #F74747";
    validity.password = false;
  } else if (inputPassword.value.length < 8) {
    noti.innerText = "비밀번호를 8자 이상 입력해주세요";
    eventTarget.style.border = "1px solid #F74747";
    validity.password = false;
  } else {
    noti.innerText = "";
    eventTarget.style.border = "1px solid transparent";
    validity.password = true;
  }

  checkSignupAvailable();
});

inputPassword.addEventListener("keydown", function (event) {
  const eventTarget = event.currentTarget;
  const noti = eventTarget.parentElement.parentElement.querySelector(".noti");
  if (inputPassword.value.length >= 8) {
    noti.innerText = "";
    validity.password = true;
    checkSignupAvailable();
  }
});

signupPasswordCheckInput.addEventListener("input", function () {
  const targetVelue = signupPasswordCheckInput.value;
  const passwordquery = inputPassword.value;
  const noti =
    signupPasswordCheckInput.parentElement.parentElement.querySelector(".noti");

  if (targetVelue !== passwordquery) {
    noti.innerText = "비밀번호가 일치하지 않습니다";
    signupPasswordCheckInput.style.border = "1px solid #F74747";
    validity.passwordCheck = false;
  } else {
    noti.innerText = "";
    signupPasswordCheckInput.style.border = "1px solid transparent";
    validity.passwordCheck = true;
  }

  checkSignupAvailable();
});

function checkSignupAvailable() {
  const someReturn = Object.values(validity).every(function (el) {
    return el;
  });
  if (someReturn) {
    btnSignupLogin.removeAttribute("disabled");
  } else {
    btnSignupLogin.setAttribute("disabled", true);
  }
}
