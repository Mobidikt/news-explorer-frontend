import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES_MAP } from '../../utils/routesMap';
import './Navigation.css';

function Navigation({ mainLocation, openPopupLogin, user, isLogin, exit }) {
  return (
    <nav className='nav'>
      <ul className='nav__list'>
        <li className='nav__item'>
          <NavLink
            className={`nav__item_link ${
              mainLocation ? `nav__item_active ` : `nav__item_black`
            }`}
            to={ROUTES_MAP.MAIN}
          >
            Главная
          </NavLink>
        </li>
        {isLogin ? (
          <li className='nav__item'>
            <NavLink
              className={`nav__item_link ${
                mainLocation ? `` : `nav__item_active nav__item_black `
              }`}
              to={ROUTES_MAP.SAVED_NEWS}
            >
              Сохранённые статьи
            </NavLink>
          </li>
        ) : (
          <></>
        )}
        <li className='nav__item'>
          {user ? (
            <button
              className={`nav__button nav__button_user ${
                mainLocation ? `` : `nav__button_black`
              }`}
            >
              {user}
              <i className='nav__exit' onClick={exit}></i>
            </button>
          ) : (
            <button
              className={`nav__button ${
                mainLocation ? `` : `nav__button_black`
              }`}
              onClick={openPopupLogin}
            >
              Авторизоваться
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
