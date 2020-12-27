import React from 'react';
// import { ROUTES_MAP } from '../../utils/routesMap';

import './SavedNewsHeader.css';

function SavedNewsHeader({ name }) {
  return (
    <section>
      <p>Сохраненные статьи</p>
      <h1>{name}, у вас сохранных статей</h1>
      <p>
        По ключевым словам:
        <span></span> и
      </p>
    </section>
  );
}
export default SavedNewsHeader;
