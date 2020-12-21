import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__copyright'>
        &copy; 2020 Supersite, Powered by News API
      </p>
      <div className='footer__info'>
        {/* <Link className='link' to='/'>
            Главная
          </Link>
        <Link className='link' to='https://praktikum.yandex.ru/'>
          Яндекс.Практикум
        </Link>

        <Link className='link' to='https://github.com/Mobidikt'></Link> */}
        {/* <Link className='link' to='#'></Link> */}
      </div>
    </footer>
  );
}
export default Footer;
