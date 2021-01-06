import React, { useState } from 'react';
import { getArticles } from '../../utils/NewsApi.js';
import About from '../About/About.js';
import NewsCardList from '../NewsCardList/NewsCardList.js';
import NotFoundSearch from '../NotFoundSearch/NotFoundSearch.js';
import Preloader from '../Preloader/Preloader.js';
import SearchForm from '../SearchForm/SearchForm.js';

function Main({ openInfoTooltip, openPopupLogin }) {
  const [isLoading, setIsLoading] = useState(false);
  const [searchResultArray, setSearchResultArray] = useState([]);
  const searchArticle = (search) => {
    setIsLoading(true);
    getArticles(search)
      .then((res) => {
        setSearchResultArray(res.articles);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
    console.log(search);
  };
  return (
    <main>
      <SearchForm searchArticle={searchArticle} />
      {
        isLoading ? (
          <Preloader />
        ) : (
          <NewsCardList cardsArray={searchResultArray} />
        )
        /* 
      <NotFoundSearch /> */
      }
      <About />
    </main>
  );
}
export default Main;
