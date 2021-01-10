import React from 'react';

import NewsCardList from '../NewsCardList/NewsCardList';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';

function SavedNews({ name, deleteCard, isLogin, userCards }) {
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
