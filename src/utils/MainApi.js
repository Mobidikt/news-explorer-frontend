import { MAIN_API } from './routesMap';

class Api {
  constructor({ serverUrl }) {
    this._serverUrl = serverUrl;
  }

  _fetch(url, params) {
    return fetch(this._serverUrl + url, params).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res);
    });
  }
  getToken(token) {
    return this._fetch('/users/me', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
  }
  login({ email, password }) {
    return this._fetch('/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
  }
  register({ name, email, password }) {
    return this._fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });
  }
  // getUserInfo(jwt) {
  //   return this._fetch('/users/me', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       authorization: `Bearer ${jwt}`,
  //     },
  //   });
  // }
  //редактирование информации профиля
  // setUserInfo(info, jwt) {
  //   return this._fetch('/users/me', {
  //     method: 'PATCH',
  //     headers: {
  //       authorization: `Bearer ${jwt}`,
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       name: info.name,
  //       about: info.about,
  //     }),
  //   });
  // }
  //добавление карточки
  getInitialCards(jwt) {
    return this._fetch('/articles', {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    });
  }
  createCard(info, jwt) {
    return this._fetch('/articles', {
      method: 'POST',
      headers: {
        authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        keyword: info.keyword,
        title: info.title,
        text: info.text,
        date: info.date,
        source: info.source,
        link: info.link,
        image: info.image,
      }),
    });
  }
  //удаление карточки
  deleteCard(cardId, jwt) {
    return this._fetch(`/articles/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      },
    });
  }
}
const api = new Api({
  serverUrl: MAIN_API,
});
export default api;
