import React from 'react';
import pluralize from '../../utils/pluralize';
// import { ROUTES_MAP } from '../../utils/routesMap';

import './SavedNewsHeader.css';

function SavedNewsHeader({ name }) {
  //Это конфиг для заголовка страницы SavedNews
  const config = {
    zero: ', у Вас нет сохраненных статей',
    one: ', у Вас {} сохраненная статья',
    few: ', у Вас {} сохраненные статьи',
    many: ', у Вас {} сохраненных статей',
    radix: 10,
    fewMax: 4,
  };
  console.log(pluralize(5, config));
  return (
    <section className='saved-news-header'>
      <div className='saved-news-header__container'>
        <p className='saved-news-header__name'>Сохраненные статьи</p>
        <h1 className='saved-news-header__title'>
          {name}
          {pluralize(5, config)}
        </h1>
        <p className='saved-news-header__info'>
          По ключевым словам:
          <span className='saved-news-header__info_accent'> тайга</span> и
        </p>
      </div>
    </section>
  );
}
export default SavedNewsHeader;
