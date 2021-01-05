import React from 'react';
import './PopupWithForm.css';

function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_type_${props.name} ${
        props.isOpen ? 'popup_opened' : ''
      }`}
    >
      <div className={`popup__container popup__container_${props.name}`}>
        <h3 className='popup__title'>{props.title}</h3>
        {props.children}
        <button
          type='button'
          className='popup__close'
          onClick={props.onClose}
        />
      </div>
    </div>
  );
}

export default PopupWithForm;
