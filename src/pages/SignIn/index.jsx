import LogoImage from '@/assets/logo.svg';
import Input from '@/components/Common/Input';
import PasswordInput from '@/components/Common/PasswordInput';
import Button from '@/components/Common/Button';
import LinkTo from '@/components/Common/LinkTo';
import styles from './index.module.css';
import cn from 'classnames';
import { useState } from 'react';

function SignIn() {
  const [mailValue, setMailValue] = useState('');
  const [isMailValid, setIsMailValid] = useState(false);
  const [mailMessage, setMailMessage] = useState('');

  const [nicknameValue, setNicknameValue] = useState('');
  const [isNicknameValid, setIsNicknameValid] = useState(false);
  const [nicknameMessage, setNicknameMessage] = useState('');

  const [passwordValue, setPasswordValue] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState('');

  const [isPasswordCheckValid, setIsPasswordCheckValid] = useState(false);
  const [passwordCheckMessage, setPasswordCheckMessage] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleMailChange = (e) => {
    const v = e.target.value;
    setMailValue(v);

    if (emailRegex.test(v)) {
      setIsMailValid(true);
    } else {
      setIsMailValid(false);
    }
  };

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
  const handleMailBlur = (e) => {
    const v = e.target.value;

    if (!v) {
      setIsMailValid(false);
      setMailMessage('이메일을 입력해주세요.');
      return;
    }

    if (!emailRegex.test(v)) {
      setIsMailValid(false);
      setMailMessage('이메일 형식이 올바르지 않습니다.');
      return;
    }

    setIsMailValid(true);
    setMailMessage('');
  };
  const handleNicknameBlur = (e) => {
    const v = e.target.value;

    if (!v) {
      setIsNicknameValid(false);
      setNicknameMessage('닉네임을 입력해주세요.');
      return;
    }
    setIsNicknameValid(true);
    setNicknameMessage('');
  };
  const handlePasswordBlur = (e) => {
    const v = e.target.value;

    if (!v) {
      setIsPasswordValid(false);
      setPasswordMessage('비밀번호를 입력해주세요.');
      return;
    }

    if (v.length < 8) {
      setIsPasswordValid(false);
      setPasswordMessage('비밀번호는 8글자 이상 입력해주세요.');
      return;
    }

    setIsPasswordValid(true);
    setPasswordMessage('');
  };

  const handlePasswordCheckBlur = (e) => {
    const v = e.target.value;

    console.log('password', passwordValue);
    if (v !== passwordValue) {
      setIsPasswordCheckValid(false);
      setPasswordCheckMessage('비밀번호가 일치하지 않습니다.');
      return;
    }

    setIsPasswordCheckValid(true);
    setPasswordCheckMessage('');
  };

  const isFormValid =
    isMailValid && isNicknameValid && isPasswordValid && isPasswordCheckValid;

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
            id="loginEmail"
            className={styles.inputEmail}
            placeholder="이메일을 입력해주세요."
            onChange={handleMailChange}
            onBlur={handleMailBlur}
            error={mailValue && !isMailValid}
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
            onBlur={handleNicknameBlur}
            placeholder="닉네임을 입력해주세요."
            error={nicknameValue && !isNicknameValid}
          />
          {nicknameMessage && <p className={styles.alert}>{nicknameMessage}</p>}
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
              onBlur={handlePasswordBlur}
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
              id="loginCheckPassword"
              className={styles.inputPassword}
              placeholder="비밀번호를 다시 한번 입력해주세요."
              onBlur={handlePasswordCheckBlur}
              error={passwordValue && !isPasswordValid}
            />
          </div>
          {passwordCheckMessage && (
            <p className={styles.alert}>{passwordCheckMessage}</p>
          )}
        </div>
        <Button
          id="btnlogin"
          type="button"
          className="primary btnsignup"
          disabled={!isFormValid}
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
          <LinkTo to="/login" className="loginButton">
            로그인
          </LinkTo>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
