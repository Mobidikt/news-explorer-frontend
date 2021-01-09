import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';
import './NewsCardList.css';

function NewsCardList({ cardsArray }) {
  const [countCards, setCountCards] = useState(3);
  const [cards, setCards] = useState(cardsArray.slice(0, countCards));

  // const ;
  console.log(cardsArray.length);
  const { pathname } = useLocation();
  const main = pathname === '/' ? true : false;
  useEffect(() => {
    setCards(cardsArray.slice(0, countCards));
  }, [cardsArray, countCards]);
  const changeCards = () => {
    setCountCards(countCards + 3);
  };
  const disableButton = useMemo(() => {
    return cards.length >= cardsArray.length ? 'card-list__button_disable' : '';
  }, [cards, cardsArray]);
  return (
    <section className='card-list'>
      <div
        className={`card-list__container ${
          main ? '' : 'card-list-save__container'
        }`}
      >
        {main ? <h3 className='card-list__title'>Результаты поиска</h3> : ''}

        <ul className='card-list__list'>
          {cards.map((card) => (
            <li className='card-list__item' key={card.title}>
              <NewsCard card={card} />
            </li>
          ))}
        </ul>
        <button
          type='button'
          className={`card-list__button ${disableButton}`}
          onClick={changeCards}
        >
          Показать ещё
        </button>
      </div>
    </section>
  );
}
export default NewsCardList;
