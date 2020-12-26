import React from 'react';
import './NewsCard.css';

function NewsCard() {
  return (
    <div className='card'>
      <img src='' alt=''></img>
      <div className='card__info'>
        <p className='card__date'></p>
        <h5 className='card__title'></h5>
        <p className='card__text'></p>
      </div>
    </div>
  );
}
export default NewsCard;
