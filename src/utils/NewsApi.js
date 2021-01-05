// GET https://nomoreparties.co/news/v2/top-headlines?country=us&apiKey=
import { NEWS_API } from './routesMap';

// запрос — то, что ввёл пользователь в поиск;
// apiKey — ключ, который вы получите после регистрации;
// from — 7 дней назад от текущей даты;
// to — текущая дата;

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();
const day = today.getDate();
const week = new Date() - 7 * 24 * 60 * 60 * 1000;
const weekYear = week.getFullYear();
const weekMonth = week.getMonth();
const weekDay = week.getDate();
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

export const getArticles = (searchRequest) => {
  const URL =
    `${NEWS_API.URL}?` +
    `q=${searchRequest}&` +
    `apiKey=${NEWS_API.KEY}&` +
    'from='`${weekYear}-${addZero(weekMonth)}-${addZero(weekDay)}` +
    '&' +
    'to='`${year}-${addZero(month)}-${addZero(day)}` +
    '&' +
    `pageSize=${NEWS_API.PAGE_SIZE}`;

  return fetch(URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(
      new Error(`Новости недоступны (Ошибка: ${res.status})`),
    );
  });
};
