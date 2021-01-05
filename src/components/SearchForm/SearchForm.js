import React, { useState } from 'react';
import './SearchForm.css';

function SearchForm({ searchArticle }) {
  const [search, setSearch] = useState('');
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    searchArticle(search);
    setSearch('');
  };
  return (
    <section className='search-form'>
      <div className='search-form__container'>
        <h1 className='search-form__title'>
          Что творится в<br /> мире?
        </h1>
        <p className='search-form__subtitle'>
          Находите самые свежие статьи на&nbsp;любую тему&nbsp;и сохраняйте в
          своём личном кабинете.
        </p>

        <form className='search-form__input-container'>
          <input
            title='Введите запрос'
            type='text'
            className='search-form__input'
            placeholder='Введите тему новости'
            value={search}
            onChange={handleSearchChange}
            required
          />
          <button
            className='search-form__button'
            type='submit'
            onClick={handleSubmit}
          >
            Искать
          </button>
        </form>
        <span className={`search-form__error `}>
          Нужно ввести ключевое слово
        </span>
      </div>
    </section>
  );
}

export default SearchForm;
