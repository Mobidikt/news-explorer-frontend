import React from 'react';
import './FormPopup.css';

function FormPopup(props) {
  return (
    <form
      className='popup__form'
      name={props.name}
      noValidate
      onSubmit={props.onSubmit}
    >
      {props.children}

      <span className='server-error'>{props.serverError}</span>

      <button
        type='submit'
        disabled={props.buttonLocked}
        className={`popup__button ${
          props.buttonLocked ? 'popup__button_disable' : ''
        }`}
      >
        {props.button_text}
      </button>
    </form>
  );
}

export default FormPopup;
