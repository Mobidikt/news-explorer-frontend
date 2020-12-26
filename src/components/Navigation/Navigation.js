import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation(props) {
  return (
    <nav className='nav'>
      <ul className='nav__list'>
        <li className='nav__item'>
          <Link
            title='Перейти на страницу с поиском'
            className='nav__item_link'
            to='/'
          >
            Главная
          </Link>
        </li>
        <li className='nav__item'>
          <Link
            title='Перейти на страницу с сохранёнными статьями'
            className='nav__item_link'
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
