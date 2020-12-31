import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation({ mainLocation, openPopupLogin }) {
  return (
    <nav className='nav'>
      <ul className='nav__list'>
        <li className='nav__item'>
          <Link
            title='Перейти на страницу с поиском'
            className={`nav__item_link ${
              mainLocation ? `nav__item_active ` : `nav__item_black`
            }`}
            to='/'
          >
            Главная
          </Link>
        </li>
        <li className='nav__item'>
          <Link
            title='Перейти на страницу с сохранёнными статьями'
            className={`nav__item_link ${
              mainLocation ? `` : `nav__item_active nav__item_black `
            }`}
            to='/saved-news'
          >
            Сохранённые статьи
          </Link>
        </li>
        <li className='nav__item'>
          <button
            className={`nav__button ${mainLocation ? `` : `nav__button_black`}`}
            onClick={openPopupLogin}
          >
            Авторизоваться
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
