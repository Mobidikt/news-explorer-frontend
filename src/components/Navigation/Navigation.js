import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation({ mainLocation }) {
  const classLink = mainLocation
    ? 'nav__item_link'
    : 'nav__item_link nav__item_black';
  return (
    <nav className='nav'>
      <ul className='nav__list'>
        <li className='nav__item'>
          <Link
            title='Перейти на страницу с поиском'
            className={
              mainLocation ? `nav__item_active ${classLink} ` : `${classLink}`
            }
            to='/'
          >
            Главная
          </Link>
        </li>
        <li className='nav__item'>
          <Link
            title='Перейти на страницу с сохранёнными статьями'
            className={
              mainLocation ? `${classLink}` : `nav__item_active ${classLink}`
            }
            to='/saved-news'
          >
            Сохранённые статьи
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
