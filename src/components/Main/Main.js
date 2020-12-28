import React from 'react';
import About from '../About/About.js';
import NewsCardList from '../NewsCardList/NewsCardList.js';
import Preloader from '../Preloader/Preloader.js';
import SearchForm from '../SearchForm/SearchForm.js';

function Main({ openInfoTooltip, openPopupLogin }) {
  return (
    <main>
      <SearchForm />
      <NewsCardList />
      <Preloader />
      <About />
    </main>
  );
}
export default Main;
