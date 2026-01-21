const visibilityBtn = document.querySelectorAll('.btn-visibility');

// 비밀번호 보기, 숨기기 버튼 조작
for (let i = 0; i < visibilityBtn.length; i++) {
  visibilityBtn[i].addEventListener('click', (event) => {
    const targetTag = event.target;
    const inputTag = event.target.parentElement.previousElementSibling;

    if (targetTag.tagName !== 'IMG') return;

    // 버튼 클릭시 이미지, input type 변경
    if (inputTag.type != 'text') {
      targetTag.src = './images/icon/btn_visibility_on.svg';
      targetTag.alt = '비밀번호 숨기기';
      inputTag.type = 'text';
    } else {
      targetTag.src = './images/icon/btn_visibility_off.svg';
      targetTag.alt = '비밀번호 보기';
      inputTag.type = 'password';
    }
  });
}
