import React, { useState } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function RegistrationPopup(props) {
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

  const handleSubmit = (e) => {
    // e.preventDefault();
    // props.onAddPlace({
    //   name: name,
    //   link: link,
    // });
  };

  return (
    <PopupWithForm
      name='add-user'
      title='Регистрация'
      button_text='Зарегистрироваться'
      onClose={props.onClose}
      isOpen={props.isOpen}
      onSubmit={handleSubmit}
    >
      <label className='popup__field'>
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
        <input
          name='name'
          type='text'
          placeholder='Введите своё имя'
          className='popup__input'
          maxLength='30'
          minLength='1'
          id='name'
          required
          value={name}
          onChange={handleNameChange}
        />
        <span className='popup__error' id='name-error' />
      </label>
      <label className='popup__field'>
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
export default RegistrationPopup;
