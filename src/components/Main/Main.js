import React from 'react';
import About from '../About/About.js';
import NewsCardList from '../NewsCardList/NewsCardList.js';
import SearchForm from '../SearchForm/SearchForm.js';

function Main({ openInfoTooltip, openPopupLogin }) {
  return (
    <main>
      <SearchForm />
      <NewsCardList />
      <About />
    </main>
  );
}
export default Main;
