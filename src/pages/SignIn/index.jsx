import LogoImage from '@/assets/logo.svg';
import Input from '@/components/Common/Input';
import PasswordInput from '@/components/Common/PasswordInput';
import Button from '@/components/Common/Button';
import Link from '@/components/Common/Link';
import styles from './index.module.css';
import cn from 'classnames';
import { useState } from 'react';

function SignIn() {
  const [mailValue, setMailValue] = useState('');
  const [isMailValid, setIsMailValid] = useState(false);
  const [mailMessage, setMailMessage] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleMailChange = (e) => {
    const v = e.target.value;
    setMailValue(v);

    if (emailRegex.test(v)) {
      setIsMailValid(true);
      setMailMessage('');
    } else {
      setIsMailValid(false);
      setMailMessage('이메일이 올바르지 않습니다.');
    }
  };

  const [passwordValue, setPasswordValue] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState('');

  const handlePasswordChange = (e) => {
    const v = e.target.value;
    setPasswordValue(v);

    if (v.length >= 8) {
      setIsPasswordValid(true);
      setPasswordMessage('');
    } else {
      setIsPasswordValid(false);
      setPasswordMessage('비밀번호는 8글자 이상 입력해주세요.');
    }
  };
  const handleBlur = () => {
    if (!mailValue) {
      setIsMailValid(false);
      setMailMessage('이메일을 입력해주세요.');
      setPasswordMessage('');
    }
    if (!passwordValue) {
      setIsPasswordValid(false);
      setMailMessage('');
      setPasswordMessage('비밀번호를 입력해주세요.');
    }
  };
  return (
    <div className={cn(styles.pageWrap, styles.signInPage)}>
      <div className={styles.logo}>
        <a href="/">
          <img
            src={LogoImage}
            className={styles.LogoImage}
            alt="판다마켓 로고"
          />
        </a>
      </div>
      <form action="" className={styles.formBox}>
        <div>
          <label htmlFor="login-email" className={styles.label}>
            이메일
          </label>
          <Input
            type="email"
            id="login-email"
            className={styles.inputEmail}
            placeholder="이메일을 입력해주세요."
          />
          {mailMessage && <p className={styles.alert}>{mailMessage}</p>}
        </div>
        <div>
          <label htmlFor="login-email" className={styles.label}>
            닉네임
          </label>
          <Input
            type="text"
            id="login-nickname"
            className={styles.inputNickname}
            placeholder="닉네임을 입력해주세요."
          />
          <p className={styles.noti}></p>
        </div>
        <div>
          <label htmlFor="login-password" className={styles.label}>
            비밀번호
          </label>
          <div className={styles.passwordWrap}>
            <PasswordInput
              type="password"
              id="loginPassword"
              className={styles.inputPassword}
              placeholder="비밀번호를 입력해주세요."
              onChange={handlePasswordChange}
              onBlur={handleBlur}
              error={passwordValue && !isPasswordValid}
            />
          </div>
          {passwordMessage && <p className={styles.alert}>{passwordMessage}</p>}
        </div>
        <div>
          <label htmlFor="login-confirm-password" className={styles.label}>
            비밀번호 확인
          </label>
          <div className={styles.passwordWrap}>
            <PasswordInput
              type="password"
              id="loginPassword"
              className={styles.inputPassword}
              placeholder="비밀번호를 다시 한번 입력해주세요."
              onChange={handlePasswordChange}
              onBlur={handleBlur}
              error={passwordValue && !isPasswordValid}
            />
          </div>
          <p className={styles.noti}></p>
        </div>
        <Button
          id="btnlogin"
          type="button"
          className="primary btnsignup"
          disabled
        >
          회원 가입
        </Button>
      </form>
      <div className={styles.easyLoginWrap}>
        <p className={styles.easyLoginWrapTxt}>간편 로그인하기</p>
        <a
          href="https://www.google.com/"
          target="_blank"
          className={cn(styles.btnSns, styles.btnSnsGoogle)}
        >
          구글로 로그인하기
        </a>
        <a
          href="https://www.kakaocorp.com/page/"
          target="_blank"
          className={cn(styles.btnSns, styles.btnSnsKakao)}
        >
          카카오톡으로 로그인하기
        </a>
      </div>
      <div className={cn(styles.forNewUser, styles.notiBox)}>
        <p>
          이미 회원이신가요?{' '}
          <Link to="/login" className="loginButton">
            로그인
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
