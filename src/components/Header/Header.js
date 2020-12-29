import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
// import { ROUTES_MAP } from '../../utils/routesMap';
import Navigation from '../Navigation/Navigation.js';
import './Header.css';

function Header({ location, openPopupLogin }) {
  const mainLocation = location === '/';
  const classHeader = mainLocation ? '' : 'header_black';
  const classLogo = mainLocation ? '' : 'header__logo_black';
  const classButton = mainLocation ? '' : 'header__button_black';
  return (
    <Switch>
      <Route path='/404' exact />
      <Route path='*'>
        <header className={`header ${classHeader}`}>
          <div className='header__container'>
            <Link to='/' className={`header__logo ${classLogo}`}>
              NewsExplorer
            </Link>
            <div className='header__menu'>
              <Navigation mainLocation={mainLocation} />
              <button
                className={`header__button ${classButton}`}
                onClick={openPopupLogin}
              >
                Авторизоваться
              </button>
            </div>
          </div>
        </header>
      </Route>
    </Switch>
  );
}
export default Header;
