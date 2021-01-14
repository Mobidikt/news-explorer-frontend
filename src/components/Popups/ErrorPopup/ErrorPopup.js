import React from 'react';
import './ErrorPopup.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function ErrorPopup({ open, onClose, serverError }) {
  return (
    <PopupWithForm
      name='error'
      title='Что-то пошло не так'
      onClose={onClose}
      isOpen={open}
    >
      <p className='popup__text'>{serverError}</p>
    </PopupWithForm>
  );
}

export default ErrorPopup;
