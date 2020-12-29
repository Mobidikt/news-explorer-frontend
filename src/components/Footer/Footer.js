import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <Switch>
      <Route path='/404' exact />
      <Route path='*'>
        <footer className='footer'>
          <div className='footer__container'>
            <p className='footer__copyright'>
              &copy; 2020 Supersite, Powered by News API
            </p>
            <div className='footer__menu'>
              <div className='footer__links'>
                <Link className='footer__link' to='/'>
                  Главная
                </Link>
                <Link
                  target='_blank'
                  className='footer__link'
                  to='https://praktikum.yandex.ru/'
                >
                  Яндекс.Практикум
                </Link>
              </div>
              <div className='footer__social'>
                <Link
                  target='_blank'
                  className='footer__link footer__link_git'
                  to='https://github.com/Mobidikt'
                />
                <Link
                  target='_blank'
                  className='footer__link footer__link_strava'
                  to='https://www.strava.com/athletes/41677348'
                />
              </div>
            </div>
          </div>
        </footer>
      </Route>
    </Switch>
  );
}
export default Footer;
