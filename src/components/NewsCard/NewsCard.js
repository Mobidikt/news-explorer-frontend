import React from 'react';
import './NewsCard.css';
import image from '../../images/image_08.png';
import { useLocation } from 'react-router-dom';
import { ROUTES_MAP } from '../../utils/routesMap';

const TEXT_DELETE = 'Убрать из сохраненных';
const TEXT_INFO = `Войдите, чтобы сохранять статьи`;
const user = false;
function NewsCard() {
  const { pathname } = useLocation();
  const main = pathname === ROUTES_MAP.MAIN ? true : false;
  const classButton =
    pathname === '/' ? 'card-news__button' : 'card-saved-news__button';
  return (
    <div className='card'>
      <img className='card__image' src={image} alt='Фото'></img>
      <div className='card__info'>
        <p className='card__date'>2 августа, 2019</p>
        <h5 className='card__title'>
          «Первозданная тайга»: новый фотопроект Игоря Шпиленка
        </h5>
        <p className='card__text'>
          В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала
          складываться система национальных парков – охраняемых территорий, где
          и сегодня каждый может приобщиться к природе.
        </p>
        <p className='card__source'>Медуза</p>
      </div>
      <div className={`card__button ${classButton}`}>
        <span className='card__informer'>{user ? TEXT_DELETE : TEXT_INFO}</span>
      </div>
      {main ? '' : <p className='card__origin'>Природа</p>}
    </div>
  );
}
export default NewsCard;
