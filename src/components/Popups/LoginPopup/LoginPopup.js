import React, { useEffect, useState } from 'react';
import {
  ERROR_EMAIL,
  ERROR_PASSWORD,
  RegExp_EMAIL,
} from '../../../utils/config';
import FormPopup from '../FormPopup/FormPopup';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function LoginPopup({
  onClose,
  open,
  switchPopup,
  login,
  serverError,
  isGettingData,
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [buttonLocked, setButtonLocked] = useState(true);
  const [buttonText, setButtonText] = useState('Войти');
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  useEffect(() => {
    setEmail('');
    setPassword('');
    setEmailError('');
    setPasswordError('');
  }, [open]);
  useEffect(() => {
    if (!email) {
      setEmailError(ERROR_EMAIL.FILLED);
      setEmailValid(false);
    } else if (RegExp_EMAIL.test(email)) {
      setEmailError('');
      setEmailValid(true);
    } else {
      setEmailError(ERROR_EMAIL.INVALID);
      setEmailValid(false);
    }
  }, [email]);
  useEffect(() => {
    if (password.length < 5) {
      setPasswordError(ERROR_PASSWORD.LENGTH);
      setPasswordValid(false);
    } else if (!password.trim()) {
      setPasswordError(ERROR_PASSWORD.INVALID);
      setPasswordValid(false);
    } else {
      setPasswordError('');
      setPasswordValid(true);
    }
  }, [password]);
  useEffect(() => {
    if (passwordValid && emailValid) {
      setButtonLocked(false);
    } else setButtonLocked(true);
  }, [passwordValid, emailValid]);
  useEffect(() => {
    if (isGettingData) {
      setButtonText('Входим...');
    } else setButtonText('Войти');
  }, [isGettingData]);
  const passing = () => {
    onClose();
    switchPopup();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    login({
      email: email,
      password: password,
    });
  };

  return (
    <PopupWithForm name='login' title='Вход' onClose={onClose} isOpen={open}>
      <FormPopup
        name='login'
        onSubmit={handleSubmit}
        button_text={buttonText}
        buttonLocked={buttonLocked}
        serverError={serverError}
      >
        <label className='popup__field'>
          Email
          <input
            name='email'
            type='email'
            placeholder='Введите почту'
            className='popup__input'
            id='email-login'
            required
            value={email}
            onChange={handleEmailChange}
          />
          <span className='popup__error' id='email-login-error'>
            {emailError}
          </span>
        </label>
        <label className='popup__field'>
          Пароль
          <input
            name='password'
            type='password'
            placeholder='Введите пароль'
            className='popup__input'
            id='password-login'
            required
            value={password || ''}
            autoComplete='on'
            onChange={handlePasswordChange}
          />
          <span className='popup__error' id='password-login-error'>
            {passwordError}
          </span>
        </label>
      </FormPopup>
      <p className='popup__text'>
        или{' '}
        <span className='popup__link' onClick={passing}>
          Зарегистрироваться
        </span>
      </p>
    </PopupWithForm>
  );
}
export default LoginPopup;
