import React from 'react';
import { useLocation } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';
import './NewsCardList.css';

function NewsCardList() {
  const { pathname } = useLocation();
  const main = pathname === '/' ? true : false;
  return (
    <section className='card-list'>
      <div
        className={`card-list__container ${
          main ? '' : 'card-list-save__container'
        }`}
      >
        {main ? <h3 className='card-list__title'>Результаты поиска</h3> : ''}

        <ul className='card-list__list'>
          <li className='card-list__item'>
            <NewsCard />
          </li>
          <li className='card-list__item'>
            <NewsCard />
          </li>
          <li className='card-list__item'>
            <NewsCard />
          </li>
        </ul>
        <button className='card-list__button'>Показать ещё</button>
      </div>
    </section>
  );
}
export default NewsCardList;
