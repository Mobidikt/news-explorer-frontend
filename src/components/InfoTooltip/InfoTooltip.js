import React from 'react';
import './InfoTooltip.css';

function InfoTooltip({ open, onClose, openPopupLogin }) {
  const handleClickClose = () => {
    onClose();
  };
  const openPopupIn = () => {
    onClose();
    openPopupLogin();
  };
  return (
    <div className={`popup popup_type_info ${open ? 'popup_opened' : ''}`}>
      <div className={`popup__container popup__container_info`}>
        <h3 className='popup__title popup__title_info'>
          Пользователь успешно зарегистрирован!
        </h3>
        <p className='popup__text'>
          <span className='popup__link' onClick={openPopupIn}>
            Войти
          </span>
        </p>
        <button
          type='button'
          className='popup__close'
          onClick={handleClickClose}
        />
      </div>
    </div>
  );
}

export default InfoTooltip;
