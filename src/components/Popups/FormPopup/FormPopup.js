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
      <button type='submit' className='popup__button'>
        {props.button_text}
      </button>
    </form>
  );
}

export default FormPopup;
