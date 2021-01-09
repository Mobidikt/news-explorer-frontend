import React from 'react';
import './NewsCard.css';

const TEXT_DELETE = 'Убрать из сохраненных';
const TEXT_INFO = `Войдите, чтобы сохранять статьи`;
const user = false;
function NewsCard({ card, main }) {
  const date = new Date(main ? card.publishedAt : card.date);
  const fullDate = `${date.toLocaleString('ru', {
    day: 'numeric',
    month: 'long',
  })}, ${date.getFullYear()}`;
  console.log(card);

  const classButton = main ? 'card-news__button' : 'card-saved-news__button';
  return (
    <div className='card'>
      <img className='card__image' src={card.urlToImage} alt='Фото'></img>
      <div className='card__info'>
        <p className='card__date'>{fullDate}</p>
        <h5 className='card__title'>{card.title}</h5>
        <p className='card__text'>{card.description}</p>
        <p className='card__source'>{card.source.name}</p>
      </div>
      <div className={`card__button ${classButton}`}>
        <span className='card__informer'>{user ? TEXT_DELETE : TEXT_INFO}</span>
      </div>
      {main ? <></> : <p className='card__origin'>Природа</p>}
    </div>
  );
}
export default NewsCard;
