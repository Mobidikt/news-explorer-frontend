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
        <form
          className='popup__form'
          name={props.name}
          noValidate
          onSubmit={props.onSubmit}
        >
          {props.children}
          <button type='submit' className='popup__button'>
            {props.button_text}
          </button>
        </form>
        <p className='popup__text'>
          или <span className='popup__link'>{props.textLink}</span>
        </p>
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
