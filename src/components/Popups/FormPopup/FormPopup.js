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

      <span className='server-error' />

      <button type='submit' className='popup__button'>
        {props.button_text}
      </button>
    </form>
  );
}

export default FormPopup;
