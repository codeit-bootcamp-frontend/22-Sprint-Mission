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
const inputWrap = document.querySelectorAll(".input-field");

inputWrap.forEach((ele) => {
  const input = ele.querySelector("input");
  const errorMsg = ele.querySelector(".errorMsg");

  input.addEventListener("focusout", () => {
    const value = input.value.trim();
    const inputType = input.type;
    const fieldNames = {
      email: "이메일",
      password: "비밀번호",
      text: "닉네임",
    };

    let errorText = "";

    // 공통: 값이 비어있는 경우
    if (!value) {
      errorText = `${fieldNames[inputType] || "값"}을 입력해주세요.`;
    }

    // 이메일 검증
    else if (inputType === "email" && !value.includes("@")) {
      errorText = "잘못된 이메일 형식입니다.";
    }

    // 비밀번호 검증
    else if (inputType === "password" && value.length < 8) {
      errorText = "비밀번호를 8자 이상 입력해주세요.";
    }

    // 에러 상태 적용
    const hasError = Boolean(errorText);

    input.classList.toggle("error", hasError);
    errorMsg.classList.toggle("active", hasError);
    errorMsg.innerText = errorText;
  });

  console.log(ele);
});
