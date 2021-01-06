import { NEWS_API } from './routesMap';

const locales = 'sv';
const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
const today = new Intl.DateTimeFormat(locales, options).format(Date.now());
const week = new Intl.DateTimeFormat(locales, options).format(
  Date.now() - 24 * 60 * 60 * 1000 * 7,
);

export const getArticles = (searchRequest) => {
  const URL =
    `${NEWS_API.URL}?` +
    `q=${searchRequest}&` +
    `apiKey=${NEWS_API.KEY}&` +
    `from=${today}` +
    '&' +
    `to=${week}` +
    '&' +
    `pageSize=${NEWS_API.PAGE_SIZE}`;
  console.log(URL);
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
