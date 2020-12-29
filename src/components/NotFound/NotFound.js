import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES_MAP } from '../../utils/routesMap';
import './NotFound.css';

function NotFound({ login }) {
  return (
    <div className='notFound'>
      <h1 className='notFound__title'>404</h1>
      <p className='notFound__text'>
        Здесь ничего нет.{' '}
        <Link className='link' to={ROUTES_MAP.MAIN}>
          Вернуться
        </Link>
        .
      </p>
    </div>
  );
}
export default NotFound;
