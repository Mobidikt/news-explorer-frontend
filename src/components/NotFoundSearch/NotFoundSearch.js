import React from 'react';
import './NotFoundSearch.css';
import notFoundSearchImg from '../../images/not-found-search.svg';

function NotFoundSearch(props) {
  return (
    <section className='not-found-search'>
      <img src={notFoundSearchImg} alt='Лупа' className='not-found__image' />
      <h2 className='not-found-search__title'>Ничего не найдено</h2>
      <p className='not-found-search__text'>
        К сожалению по вашему запросу ничего не найдено.
      </p>
    </section>
  );
}

export default NotFoundSearch;
