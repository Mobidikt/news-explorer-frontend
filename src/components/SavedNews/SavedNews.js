import React, { useEffect, useState } from 'react';
import api from '../../utils/MainApi';
import NewsCardList from '../NewsCardList/NewsCardList';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
// import { ROUTES_MAP } from '../../utils/routesMap';

function SavedNews({
  isLoading,
  searchResultArray,
  name,
  deleteCard,
  isLogin,
}) {
  const [userCards, setUserCards] = useState([]);
  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    api
      .getInitialCards(jwt)
      .then((res) => {
        setUserCards(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
