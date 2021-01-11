import React, { useEffect, useState } from 'react';
import {
  ERROR_EMAIL,
  ERROR_NAME,
  ERROR_PASSWORD,
  RegExp_EMAIL,
} from '../../../utils/config';
import FormPopup from '../FormPopup/FormPopup';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function RegistrationPopup({
  open,
  onClose,
  switchPopup,
  registration,
  serverError,
  isGettingData,
}) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [nameValid, setNameValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [buttonText, setButtonText] = useState('Зарегистрироваться');
  const [buttonLocked, setButtonLocked] = useState(true);
  useEffect(() => {
    setEmail('');
    setName('');
    setPassword('');
    setEmailError('');
    setNameError('');
    setPasswordError('');
  }, [open]);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const passing = () => {
    onClose();
    switchPopup();
  };
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
    if (!name) {
      setNameError(ERROR_NAME.FILLED);
      setNameValid(false);
    } else if (2 <= name.length <= 30) {
      setNameError('');
      setNameValid(true);
    } else {
      setNameError(ERROR_NAME.INVALID);
      setNameValid(false);
    }
  }, [name]);
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
  }, [passwordValid, emailValid, nameValid]);
  const handleSubmit = (e) => {
    e.preventDefault();
    registration({
      name: name,
      email: email,
      password: password,
    });
  };
  useEffect(() => {
    if (isGettingData) {
      setButtonText('Зарегистрируем...');
    } else setButtonText('Зарегистрироваться');
  }, [isGettingData]);
  return (
    <PopupWithForm
      serverError={serverError}
      name='registration'
      title='Регистрация'
      onClose={onClose}
      isOpen={open}
    >
      <FormPopup
        buttonLocked={buttonLocked}
        serverError={serverError}
        name='registration'
        onSubmit={handleSubmit}
        button_text={buttonText}
      >
        <label className='popup__field'>
          Email
          <input
            name='email'
            type='email'
            placeholder='Введите почту'
            className='popup__input'
            id='email'
            required
            value={email}
            onChange={handleEmailChange}
          />
          <span className='popup__error' id='email-error'>
            {emailError}
          </span>
        </label>
        <label className='popup__field'>
          Имя
          <input
            name='name'
            type='text'
            placeholder='Введите своё имя'
            className='popup__input'
            maxLength='30'
            minLength='2'
            id='name'
            required
            value={name || ''}
            onChange={handleNameChange}
          />
          <span className='popup__error' id='name-error'>
            {nameError}
          </span>
        </label>
        <label className='popup__field'>
          Пароль
          <input
            name='password'
            type='password'
            placeholder='Введите пароль'
            className='popup__input'
            id='password'
            required
            value={password || ''}
            autoComplete='on'
            onChange={handlePasswordChange}
          />
          <span className='popup__error' id='password-error'>
            {passwordError}
          </span>
        </label>
      </FormPopup>
      <p className='popup__text'>
        или{' '}
        <span className='popup__link' onClick={passing}>
          Войти
        </span>
      </p>
    </PopupWithForm>
  );
}
export default RegistrationPopup;
