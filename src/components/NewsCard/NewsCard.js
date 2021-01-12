import React from 'react';
import { TEXT_ADD, TEXT_DELETE, TEXT_INFO } from '../../utils/config';
import { ucFirst } from '../../utils/ucFirst';
import './NewsCard.css';

function NewsCard({
  card,
  main,
  isLogin,
  addCard,
  deleteCard,
  userCards,
  openPopupLogin,
}) {
  const date = new Date(main ? card.publishedAt : card.date);
  const fullDate = `${date.toLocaleString('ru', {
    day: 'numeric',
    month: 'long',
  })}, ${date.getFullYear()}`;
  const cardAdd = () => {
    addCard(card);
  };
  const cardDelete = () => {
    main
      ? userCards.forEach((userCard) => {
          if (userCard.title === card.title) {
            deleteCard(userCard._id);
          }
        })
      : deleteCard(card._id);
  };

  const classButton = main
    ? isLogin
      ? userCards.some((i) => i.title === card.title)
        ? 'card-news__button_active'
        : 'card-news__button'
      : 'card-news__button'
    : 'card-saved-news__button';
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
        onClick={
          main
            ? isLogin
              ? userCards.some((i) => i.title === card.title)
                ? cardDelete
                : cardAdd
              : openPopupLogin
            : cardDelete
        }
      >
        <span className='card__informer'>
          {main
            ? isLogin
              ? userCards.some((i) => i.title === card.title)
                ? TEXT_DELETE
                : TEXT_ADD
              : TEXT_INFO
            : TEXT_DELETE}
        </span>
      </div>
      {main ? <></> : <p className='card__origin'>{ucFirst(card.keyword)}</p>}
    </div>
  );
}
export default NewsCard;
