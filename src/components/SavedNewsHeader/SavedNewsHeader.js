import React, { useMemo } from 'react';
import {
  pluralizeConfigArticles,
  pluralizeConfigKeyword,
} from '../../utils/config';
import { countKeyword } from '../../utils/countKeywords';
import pluralizeArticles from '../../utils/pluralizeArticle';
import pluralizeKeywords from '../../utils/pluralizeKeyword';
import { ucFirst } from '../../utils/ucFirst';
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
          {ucFirst(name)}
          {pluralizeArticles(userCards.length, pluralizeConfigArticles)}
        </h1>
        {userCards.length > 0 ? (
          <p className='saved-news-header__info'>
            По ключевым словам:
            {userCards.length === 1 ? (
              <span className='saved-news-header__info_accent'>
                {' '}
                {ucFirst(keywordsArr[0].keyword)}
              </span>
            ) : userCards.length === 2 ? (
              <>
                <span className='saved-news-header__info_accent'>
                  {' '}
                  {ucFirst(keywordsArr[0].keyword)}
                </span>{' '}
                и{' '}
                <span className='saved-news-header__info_accent'>
                  {ucFirst(keywordsArr[1].keyword)}
                </span>
              </>
            ) : (
              <>
                <span className='saved-news-header__info_accent'>
                  {' '}
                  {ucFirst(keywordsArr[0].keyword)} ,{' '}
                  {ucFirst(keywordsArr[1].keyword)}
                </span>{' '}
                и{' '}
                <span className='saved-news-header__info_accent'>
                  {pluralizeKeywords(
                    keywordsArr.length - 2,
                    pluralizeConfigKeyword,
                  )}
                </span>
              </>
            )}
          </p>
        ) : (
          <p className='saved-news-header__info'>
            Вы не сохранили ещё ни одной статьи
          </p>
        )}
      </div>
    </section>
  );
}
export default SavedNewsHeader;
