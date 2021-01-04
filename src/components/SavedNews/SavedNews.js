import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
// import { ROUTES_MAP } from '../../utils/routesMap';

import './SavedNews.css';

const name = 'Грета';
function SavedNews() {
  return (
    <main>
      <SavedNewsHeader name={name} />
      <NewsCardList />
    </main>
  );
}
export default SavedNews;
