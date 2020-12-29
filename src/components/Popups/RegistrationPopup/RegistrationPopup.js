import React, { useState } from 'react';
import FormPopup from '../FormPopup/FormPopup';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function RegistrationPopup({ open, onClose, switchPopup }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

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
  const handleSubmit = (e) => {
    e.preventDefault();
    // props.onAddPlace({
    //   name: name,
    //   link: link,
    // });
  };

  return (
    <PopupWithForm
      name='registration'
      title='Регистрация'
      onClose={onClose}
      isOpen={open}
    >
      <FormPopup
        name='registration'
        onSubmit={handleSubmit}
        button_text='Зарегистрироваться'
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
          <span className='popup__error' id='email-error' />
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
            value={name}
            onChange={handleNameChange}
          />
          <span className='popup__error' id='name-error' />
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
          Войти
        </span>
      </p>
    </PopupWithForm>
  );
}
export default RegistrationPopup;
