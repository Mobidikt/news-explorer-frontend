import React, { useMemo } from 'react';
import { pluralizeConfig } from '../../utils/config';
import { countKeyword } from '../../utils/countKeywords';
import pluralize from '../../utils/pluralize';
import './SavedNewsHeader.css';

function SavedNewsHeader({ name, userCards }) {
  const keywordsArr = useMemo(() => {
    return countKeyword(userCards);
  }, [userCards]);
  return (
    <section className='saved-news-header'>
      <div className='saved-news-header__container'>
        <p className='saved-news-header__name'>Сохраненные статьи</p>
        <h1 className='saved-news-header__title'>
          {name}
          {pluralize(userCards.length, pluralizeConfig)}
        </h1>
        <p className='saved-news-header__info'>
          По ключевым словам:
          <span className='saved-news-header__info_accent'>
            {' '}
            {keywordsArr[0].keyword},
          </span>
          <span className='saved-news-header__info_accent'>
            {' '}
            {keywordsArr[1].keyword}
          </span>{' '}
          и{' '}
          <span className='saved-news-header__info_accent'>
            {keywordsArr.length - 2}-м другим
          </span>
        </p>
      </div>
    </section>
  );
}
export default SavedNewsHeader;
