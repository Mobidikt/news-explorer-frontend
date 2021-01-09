import { SERVER_URL } from './routesMap';

class Api {
  constructor({ serverUrl }) {
    this._serverUrl = serverUrl;
  }

  _fetch(url, params) {
    return fetch(this._serverUrl + url, params).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res}`);
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
  getUserInfo(jwt) {
    return this._fetch('/users/me', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${jwt}`,
      },
    });
  }
  //редактирование информации профиля
  setUserInfo(info, jwt) {
    return this._fetch('/users/me', {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: info.name,
        about: info.about,
      }),
    });
  }
  //добавление карточки
  getInitialCards(jwt) {
    return this._fetch('/cards', {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    });
  }
  createCard(info, jwt) {
    return this._fetch('/cards', {
      method: 'POST',
      headers: {
        authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: info.name,
        link: info.link,
      }),
    });
  }
  //удаление карточки
  deleteCard(cardId, jwt) {
    return this._fetch(`/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      },
    });
  }
  //  Реализация лайка
  //   createLike(cardId, jwt) {
  //     return this._fetch(`/cards/likes/${cardId}`, {
  //       method: 'PUT',
  //       headers: {
  //         authorization: `Bearer ${jwt}`,
  //         'Content-Type': 'application/json',
  //       },
  //     });
  //   }
  //   deleteLike(cardId, jwt) {
  //     return this._fetch(`/cards/likes/${cardId}`, {
  //       method: 'DELETE',
  //       headers: {
  //         authorization: `Bearer ${jwt}`,
  //         'Content-Type': 'application/json',
  //       },
  //     });
  //   }
  //   changeLikeCardStatus(cardId, isLiked, jwt) {
  //     return this._fetch(`/cards/likes/${cardId}`, {
  //       method: isLiked ? 'PUT' : 'DELETE',
  //       headers: {
  //         authorization: `Bearer ${jwt}`,
  //         'Content-Type': 'application/json',
  //       },
  //     });
  //   }
}
const api = new Api({
  serverUrl: SERVER_URL,
});
export default api;
