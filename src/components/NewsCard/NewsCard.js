import React from 'react';
import './NewsCard.css';

const TEXT_DELETE = 'Убрать из сохраненных';
const TEXT_INFO = `Войдите, чтобы сохранять статьи`;
function NewsCard({ card, main, isLogin, addCard, deleteCard }) {
  const date = new Date(main ? card.publishedAt : card.date);
  const fullDate = `${date.toLocaleString('ru', {
    day: 'numeric',
    month: 'long',
  })}, ${date.getFullYear()}`;
  const clickCard = () => {
    addCard(card);
  };
  const cardDelete = () => {
    deleteCard(card._id);
  };
  const classButton = main ? 'card-news__button' : 'card-saved-news__button';
  return (
    <div className='card'>
      <img
        className='card__image'
        src={main ? card.urlToImage : card.image}
        alt={card.title}
      ></img>
      <div className='card__info'>
        <p className='card__date'>{fullDate}</p>
        <h5 className='card__title'>{card.title}</h5>
        <p className='card__text'>{main ? card.description : card.text}</p>
        <p className='card__source'>{main ? card.source.name : card.source}</p>
      </div>
      <div
        className={`card__button ${classButton}`}
        onClick={main ? clickCard : cardDelete}
      >
        <span className='card__informer'>
          {isLogin ? TEXT_DELETE : TEXT_INFO}
        </span>
      </div>
      {main ? <></> : <p className='card__origin'>{card.keyword}</p>}
    </div>
  );
}
export default NewsCard;
