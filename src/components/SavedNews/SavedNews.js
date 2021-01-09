import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
// import { ROUTES_MAP } from '../../utils/routesMap';

const name = 'Грета';
function SavedNews({ isLoading, searchResultArray }) {
  return (
    <main>
      <SavedNewsHeader name={name} />
      <NewsCardList cardsArray={searchResultArray} />
    </main>
  );
}
export default SavedNews;
