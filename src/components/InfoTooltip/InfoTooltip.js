import React from 'react';

function InfoTooltip({ open, onClose }) {
  const handleClickClose = () => {
    onClose();
  };
  return (
    <div className={`popup popup_type_info ${open ? 'popup_opened' : ''}`}>
      <div className={`popup__container popup__container_info`}>
        <h3 className='popup__title popup__title_login'>
          Пользователь успешно зарегистрирован!
        </h3>
        <p
          className='popup__link'
          // onClick={}
        >
          Войти
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
