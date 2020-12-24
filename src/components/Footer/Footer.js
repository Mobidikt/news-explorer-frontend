import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <Switch>
      <Route path='/404' exact />
      <Route path='*'>
        <footer className='footer'>
          <p className='footer__copyright'>
            &copy; 2020 Supersite, Powered by News API
          </p>
          <div className='footer__info'>
            <Link className='footer__link' to='/'>
              Главная
            </Link>
            <a className='footer__link' href='https://praktikum.yandex.ru/'>
              Яндекс.Практикум
            </a>
            <a
              className='footer__link footer__link_git'
              href='https://github.com/Mobidikt'
            ></a>
          </div>
        </footer>
      </Route>
    </Switch>
  );
}
export default Footer;
