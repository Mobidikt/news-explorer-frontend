import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { ROUTES_MAP } from '../../utils/routesMap';
import Navigation from '../Navigation/Navigation.js';
import './Header.css';

function Header() {
  return (
    <Switch>
      <Route path='/404' exact />
      <Route path='*'>
        <header className='header'>
          <div className='header_container'>
            <Link to='/' className='header__logo'>
              NewsExplorer
            </Link>
            <Route path='/' exact>
              <div className='header__menu'>
                <Navigation />
                <button className='header__button'>Авторизоваться</button>
              </div>
            </Route>
            <Route path='/saved-news'>
              <div className='header__menu'>
                <Navigation />
                <button className='header__button'>Авторизоваться</button>
              </div>
            </Route>
          </div>
        </header>
      </Route>
    </Switch>
  );
}
export default Header;
