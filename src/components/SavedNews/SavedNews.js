import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
// import { ROUTES_MAP } from '../../utils/routesMap';

function SavedNews({
  isLoading,
  searchResultArray,
  name,
  deleteCard,
  isLogin,
  userCards,
}) {
  return (
    <main>
      <SavedNewsHeader name={name} userCards={userCards} />
      <NewsCardList
        isLogin={isLogin}
        cardsArray={userCards}
        deleteCard={deleteCard}
      />
    </main>
  );
}
export default SavedNews;
