import React from 'react';

import About from '../About/About.js';
import NewsCardList from '../NewsCardList/NewsCardList.js';
import NotFoundSearch from '../NotFoundSearch/NotFoundSearch.js';
import Preloader from '../Preloader/Preloader.js';
import SearchForm from '../SearchForm/SearchForm.js';

function Main({
  isSearch,
  searchArticle,
  isLoading,
  searchResultArray,
  isLogin,
  addCard,
  userCards,
  deleteCard,
  openPopupLogin,
}) {
  return (
    <main>
      <SearchForm searchArticle={searchArticle} />
      {isLoading ? <Preloader /> : <></>}
      {isSearch ? (
        searchResultArray.length === 0 ? (
          <NotFoundSearch />
        ) : (
          <NewsCardList
            openPopupLogin={openPopupLogin}
            userCards={userCards}
            addCard={addCard}
            deleteCard={deleteCard}
            isLogin={isLogin}
            cardsArray={searchResultArray}
          />
        )
      ) : (
        <></>
      )}
      <About />
    </main>
  );
}
export default Main;
