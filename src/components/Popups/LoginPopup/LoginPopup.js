import React, { useState } from 'react';
import FormPopup from '../FormPopup/FormPopup';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function LoginPopup({ onClose, open, switchPopup }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    console.log(password, 'password');
  };
  const passing = () => {
    onClose();
    switchPopup();
  };
  const handleSubmit = (e) => {
    // e.preventDefault();
    // props.onAddPlace({
    //   name: name,
    //   link: link,
    // });
  };

  return (
    <PopupWithForm name='login' title='Вход' onClose={onClose} isOpen={open}>
      <FormPopup name='login' onSubmit={handleSubmit} button_text='Войти'>
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
          <span className='popup__error' id='email-error' />
        </label>
        <label className='popup__field'>
          Пароль
          <input
            name='password'
            type='password'
            placeholder='Введите пароль'
            className='popup__input'
            id='password'
            minLength='5'
            required
            value={password}
            onChange={handlePasswordChange}
          />
          <span className='popup__error' id='password-error' />
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
