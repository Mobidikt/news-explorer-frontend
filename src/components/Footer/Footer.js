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
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  className='footer__link'
                  href='https://praktikum.yandex.ru/'
                >
                  Яндекс.Практикум
                </a>
              </div>
              <div className='footer__social'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  className='footer__link '
                  href='https://github.com/Mobidikt'
                >
                  <i className='footer__link_git' />
                </a>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  className='footer__link'
                  href='https://www.strava.com/athletes/41677348'
                >
                  <i className='footer__link_strava' />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </Route>
    </Switch>
  );
}
export default Footer;
