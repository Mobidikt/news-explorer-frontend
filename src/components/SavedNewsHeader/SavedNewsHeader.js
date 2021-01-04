import React from 'react';
import pluralize from '../../utils/pluralize';
import './SavedNewsHeader.css';

function SavedNewsHeader({ name }) {
  const config = {
    zero: ', у вас нет сохраненных статей',
    one: ', у вас {} сохраненная статья',
    few: ', у вас {} сохраненные статьи',
    many: ', у вас {} сохраненных статей',
    radix: 10,
    fewMax: 4,
  };
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
          <span className='saved-news-header__info_accent'> Тайга,</span>
          <span className='saved-news-header__info_accent'> Природа</span> и
          <span className='saved-news-header__info_accent'> 2-м другим</span>
        </p>
      </div>
    </section>
  );
}
export default SavedNewsHeader;
