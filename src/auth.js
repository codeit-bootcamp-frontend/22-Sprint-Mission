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
