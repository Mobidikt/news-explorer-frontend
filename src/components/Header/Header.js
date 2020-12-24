import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { ROUTES_MAP } from '../../utils/routesMap';
import './Header.css';

function Header() {
  return (
    <Switch>
      <Route path='/404' exact />
      <Route path='*'>
        <header className='header'>
          <h1>NewsExplorer</h1>
          <Route path='/' exact>
            <div className='header__user'>
              <p className='header__email'></p>
              <button className='header__button'>Авторизоваться</button>
            </div>
          </Route>
        </header>
      </Route>
    </Switch>
  );
}
export default Header;
