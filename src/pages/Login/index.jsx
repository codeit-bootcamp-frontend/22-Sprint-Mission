import LogoImage from '@/assets/logo.svg';
import Input from '@/components/Common/Input';
import Button from '@/components/Common/Button';
import PasswordInput from '@/components/Common/PasswordInput';
import LinkTo from '@/components/Common/LinkTo';
import { useState } from 'react';
import styles from './index.module.css';
import cn from 'classnames';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function Login() {
  const [mailValue, setMailValue] = useState('');
  const [isMailValid, setIsMailValid] = useState(false);
  const [mailMessage, setMailMessage] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState('');

  const handleMailChange = (e) => {
    const v = e.target.value;
    setMailValue(v);

    if (EMAIL_REGEX.test(v)) {
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
    setTouched((prev) => ({ ...prev, mail: true }));
    const v = e.target.value;

    if (!v) {
      setIsMailValid(false);
      setMailMessage('이메일을 입력해주세요.');
      return;
    }

    if (!EMAIL_REGEX.test(v)) {
      setIsMailValid(false);
      setMailMessage('이메일 형식이 올바르지 않습니다.');
      return;
    }

    setIsMailValid(true);
    setMailMessage('');
  };

  const handlePasswordBlur = (e) => {
    setTouched((prev) => ({ ...prev, password: true }));
    const v = e.target.value;

    if (!v) {
      setIsPasswordValid(false);
      setPasswordMessage('비밀번호를 입력해주세요.');
      return;
    }

    setIsPasswordValid(true);
    setPasswordMessage('');
  };
  const [touched, setTouched] = useState({
    mail: false,
    password: false,
  });
  const isFormValid = isMailValid && isPasswordValid;

  return (
    <div className={cn(styles.pageWrap, styles.loginPage)}>
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
          <label htmlFor="loginEmail" className={styles.label}>
            이메일
          </label>
          <Input
            type="email"
            id="loginEmail"
            className={styles.inputEmail}
            placeholder="이메일을 입력해주세요."
            onChange={handleMailChange}
            onBlur={handleMailBlur}
            error={touched.mail && !isMailValid}
          />
          {mailMessage && <p className={styles.alert}>{mailMessage}</p>}
        </div>
        <div>
          <label htmlFor="loginPassword" className={styles.label}>
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
              error={touched.password && !isPasswordValid}
            />
          </div>
          {passwordMessage && <p className={styles.alert}>{passwordMessage}</p>}
        </div>
        <Button
          id="btnLogin"
          type="submit"
          className="primary btnLogin"
          active={true}
          disabled={!isFormValid}
        >
          로그인
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
          판다마켓이 처음이신가요?{' '}
          <LinkTo to="/signIn" className="signInButton">
            회원가입
          </LinkTo>
        </p>
      </div>
    </div>
  );
}

export default Login;
