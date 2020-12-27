import React, { useState } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function LoginPopup(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    console.log(password, 'password');
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    // props.onAddPlace({
    //   name: name,
    //   link: link,
    // });
  };

  return (
    <PopupWithForm
      name='login'
      title='Вход'
      button_text='Войти'
      onClose={props.onClose}
      isOpen={props.open}
      onSubmit={handleSubmit}
    >
      <label className='popup__field'>
        Email
        <input
          name='email'
          type='text'
          placeholder='Введите почту'
          className='popup__input'
          maxLength='30'
          minLength='1'
          id='mesto'
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
          required
          value={password}
          onChange={handlePasswordChange}
        />
        <span className='popup__error' id='password-error' />
      </label>
    </PopupWithForm>
  );
}
export default LoginPopup;
