import React from 'react';
import './NewsCardList.css';

function NewsCardList() {
  return (
    <section className='card-list'>
      <div className='card-list__container'>
        <h3 className='card-list__title'></h3>
        <ul className='card-list__list'>
          {/* {Array.from(props.searchResultArray)
          .slice(0, arrayOfArticles)
          .map((card, key) => (
            // <NewsCard
            //   main={props.main}
            //   key={key}
            //   card={card}
            //   pathname={props.pathname}
            //   loggedIn={props.loggedIn}
            //   addAnArticleToTheSavedList={props.addAnArticleToTheSavedList}
            //   savedArticlesArray={props.savedArticlesArray}
            //   valueSearchInput={props.valueSearchInput} // инпут - ключевое слово
            // />
          ))} */}
        </ul>
        <button className='card-list__button'>Показать ещё</button>
      </div>
    </section>
  );
}
export default NewsCardList;
