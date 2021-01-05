import React from 'react';
import './InfoTooltip.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function InfoTooltip({ open, onClose, openPopupLogin }) {
  const openPopupIn = () => {
    onClose();
    openPopupLogin();
  };
  return (
    <PopupWithForm
      name='info'
      title='Пользователь успешно зарегистрирован!'
      onClose={onClose}
      isOpen={open}
    >
      <p className='popup__text'>
        <span className='popup__link' onClick={openPopupIn}>
          Войти
        </span>
      </p>
    </PopupWithForm>
  );
}

export default InfoTooltip;
