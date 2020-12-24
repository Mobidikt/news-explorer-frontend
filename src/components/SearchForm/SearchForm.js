import React from 'react';
import './SearchForm.css';

function SearchForm(props) {
  return (
    <section className='search-form'>
      <div className='search-form__container'>
        <h1 className='search-form__title'>Что творится в мире?</h1>
        <p className='search-form__subtitle'>
          Находите самые свежие статьи на&nbsp;любую тему и&nbsp;сохраняйте
          в&nbsp;своём личном кабинете.
        </p>

        <form className='search-form__input-container'>
          <input
            title='Введите запрос'
            type='text'
            className='search-form__input'
            placeholder='Введите тему новости'
            required
          />
          <button
            searchForm={true}
            value='Искать'
            className='search-form__button'
            type='submit'
          />
        </form>
        <span className={`search-form__error `}>
          Нужно ввести ключевое слово
        </span>
      </div>
    </section>
  );
}

export default SearchForm;
