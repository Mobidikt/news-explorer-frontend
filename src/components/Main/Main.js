import React, { useState } from 'react';

import About from '../About/About.js';
import NewsCardList from '../NewsCardList/NewsCardList.js';
import NotFoundSearch from '../NotFoundSearch/NotFoundSearch.js';
import Preloader from '../Preloader/Preloader.js';
import SearchForm from '../SearchForm/SearchForm.js';

function Main({ searchArticle, isLoading, searchResultArray }) {
  return (
    <main>
      <SearchForm searchArticle={searchArticle} />
      {isLoading ? <Preloader /> : <></>}
      {searchResultArray.length === 0 ? (
        <NotFoundSearch />
      ) : (
        <NewsCardList cardsArray={searchResultArray} />
      )}
      <About />
    </main>
  );
}
export default Main;
