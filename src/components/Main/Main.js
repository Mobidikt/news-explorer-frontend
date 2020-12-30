import React from 'react';
import About from '../About/About.js';
import NewsCardList from '../NewsCardList/NewsCardList.js';
import NotFoundSearch from '../NotFoundSearch/NotFoundSearch.js';
import Preloader from '../Preloader/Preloader.js';
import SearchForm from '../SearchForm/SearchForm.js';

function Main({ openInfoTooltip, openPopupLogin }) {
  return (
    <main>
      <SearchForm />
      <NewsCardList />
      {/* <Preloader />
      <NotFoundSearch /> */}
      <About />
    </main>
  );
}
export default Main;
