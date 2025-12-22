const visibilityBtn = document.querySelectorAll('.btn-visibility');
const passwordInput = document.querySelectorAll(`input[type="password"]`);
const visibilityImg = document.querySelectorAll('.btn-visibility img');

function toggleVisibility(index) {
  if (passwordInput[index].type === 'password') {
    passwordInput[index].type = 'text';
    visibilityImg[index].src = './images/icon/btn_visibility_on.svg';
    visibilityImg[index].alt = '비밀번호 숨기기';
  } else {
    passwordInput[index].type = 'password';
    visibilityImg[index].src = './images/icon/btn_visibility_off.svg';
    visibilityImg[index].alt = '비밀번호 보기';
  }
}

for (let i = 0; i < visibilityBtn.length; i++) {
  visibilityBtn[i].addEventListener('click', () => {
    toggleVisibility(i);
  });
}
