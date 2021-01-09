import React, { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ROUTES_MAP } from '../../utils/routesMap';
import NewsCard from '../NewsCard/NewsCard';
import './NewsCardList.css';

function NewsCardList({ cardsArray }) {
  const { pathname } = useLocation();
  const main = pathname === ROUTES_MAP.MAIN ? true : false;
  const [countCards, setCountCards] = useState(3);
  const changeCards = () => {
    setCountCards(countCards + 3);
  };
  const disableButton = useMemo(() => {
    return countCards >= cardsArray.length ? 'card-list__button_disable' : '';
  }, [countCards, cardsArray]);
  return (
    <section className='card-list'>
      <div
        className={`card-list__container ${
          main ? '' : 'card-list-save__container'
        }`}
      >
        {main ? (
          <>
            <h3 className='card-list__title'>Результаты поиска</h3>
            <ul className='card-list__list'>
              {cardsArray.slice(0, countCards).map((card) => (
                <li className='card-list__item' key={card.title}>
                  <NewsCard card={card} main={main} />
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
          </>
        ) : (
          <ul className='card-list__list'>
            {cardsArray.map((card) => (
              <li className='card-list__item' key={card.title}>
                <NewsCard card={card} main={main} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
export default NewsCardList;
