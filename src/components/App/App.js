import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import '../../vendor/fonts/fonts.css';
import RegistrationPopup from '../Popups/RegistrationPopup/RegistrationPopup';
import InfoTooltip from '../Popups/InfoTooltip/InfoTooltip';
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
} from 'react-router-dom';
import { getArticles } from '../../utils/NewsApi.js';
import { ROUTES_MAP } from '../../utils/routesMap';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import LoginPopup from '../Popups/LoginPopup/LoginPopup';
import NotFound from '../NotFound/NotFound';
import api from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
  const history = useHistory();
  const { pathname } = useLocation();
  const [currentUser, setCurrentUser] = useState('');
  const [infoTooltipOpen, setInfoTooltipOpen] = useState(false);
  const [popupLoginOpen, setPopupLoginOpen] = useState(false);
  const [popupRegistrationOpen, setPopupRegistrationOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [searchResultArray, setSearchResultArray] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [name, setName] = useState('');
  const [userCards, setUserCards] = useState([]);
  const handleEsc = (e) => {
    if (e.key === 'Escape') {
      closeAllPopups();
    }
  };
  const overlayClose = (e) => {
    if (e.target.classList.contains('popup')) {
      closeAllPopups();
    }
  };
  const setEventListeners = () => {
    document.addEventListener('keydown', handleEsc);
    document.addEventListener('click', overlayClose);
  };
  const openInfoTooltip = () => {
    setInfoTooltipOpen(true);
    setEventListeners();
  };
  const openPopupRegistration = () => {
    setPopupRegistrationOpen(true);
    setEventListeners();
  };
  const openPopupLogin = () => {
    setPopupLoginOpen(true);
    setEventListeners();
  };
  const closeAllPopups = () => {
    setInfoTooltipOpen(false);
    setPopupLoginOpen(false);
    setPopupRegistrationOpen(false);
    document.removeEventListener('keydown', handleEsc);
    document.removeEventListener('click', overlayClose);
  };
  const exit = () => {
    localStorage.removeItem('jwt');
    setName('');
    setCurrentUser('');
    history.push(ROUTES_MAP.MAIN);
    setIsLogin(false);
  };
  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      api
        .getToken(jwt)
        .then((res) => {
          setCurrentUser(res);
          setIsLogin(true);
          setName(res.name);
        })
        .catch((err) => {
          if (err === 401) {
            console.log('Переданный токен некорректен');
          } else {
            console.log(`Ошибка: ${err}`);
          }
        });
    }
  }, [history]);
  const handleLogin = ({ email, password }) => {
    api
      .login({ email, password })
      .then((res) => {
        localStorage.setItem('jwt', res.token);
        api
          .getToken(res.token)
          .then((res) => {
            setIsLogin(true);
            setName(res.name);
          })
          .catch((err) => {
            if (err === 401) {
              console.log('Переданный токен некорректен');
            } else {
              console.log(`Ошибка: ${err}`);
            }
          });
        closeAllPopups();
      })
      .catch((err) => {
        if (err === 400) {
          return console.log('Не передано одно из полей');
        }
        if (err === 401) {
          return console.log('Пользователь с email не найден');
        } else {
          return console.log(`Ошибка: ${err}`);
        }
      });
  };

  const handleRegister = ({ name, password, email }) => {
    api
      .register({ name, password, email })
      .then((res) => {
        console.log(res);
        openInfoTooltip();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const searchArticle = (search) => {
    setIsSearch(false);
    setIsLoading(true);
    setSearchResultArray([]);
    getArticles(search)
      .then((res) => {
        setSearchKeyword(search);
        setSearchResultArray(res.articles);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsSearch(true);
        setIsLoading(false);
      });
  };
  const addCard = (card) => {
    const info = {
      keyword: searchKeyword,
      title: card.title,
      text: card.description,
      date: card.publishedAt,
      source: card.source.name,
      link: card.url,
      image: card.urlToImage,
    };
    const jwt = localStorage.getItem('jwt');
    api
      .createCard(info, jwt)
      .then(() => {
        getUserCards();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteCard = (cardId) => {
    const jwt = localStorage.getItem('jwt');

    api
      .deleteCard(cardId, jwt)
      .then(() => {
        getUserCards();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getUserCards = () => {
    const jwt = localStorage.getItem('jwt');
    api
      .getInitialCards(jwt)
      .then((res) => {
        setUserCards(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    if (isLogin) {
      const jwt = localStorage.getItem('jwt');
      api
        .getInitialCards(jwt)
        .then((res) => {
          setUserCards(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isLogin, history]);
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='App'>
        <Header
          name={name}
          location={pathname}
          openPopupLogin={openPopupLogin}
          isLogin={isLogin}
          exit={exit}
        />
        <Switch>
          <Route path='/' exact>
            <Main
              openPopupLogin={openPopupLogin}
              userCards={userCards}
              addCard={addCard}
              isSearch={isSearch}
              searchArticle={searchArticle}
              isLoading={isLoading}
              isLogin={isLogin}
              deleteCard={deleteCard}
              searchResultArray={searchResultArray}
            />
          </Route>
          <ProtectedRoute
            path='/saved-news'
            component={SavedNews}
            userCards={userCards}
            deleteCard={deleteCard}
            isLogin={isLogin}
            name={name}
            isLoading={isLoading}
            searchResultArray={searchResultArray}
          />
          <Route path='/404' exact>
            <NotFound />
          </Route>
          <Route path='*'>
            <Redirect to='/404' />
          </Route>
        </Switch>

        <Footer />
        <LoginPopup
          open={popupLoginOpen}
          onClose={closeAllPopups}
          switchPopup={openPopupRegistration}
          login={handleLogin}
        />
        <RegistrationPopup
          open={popupRegistrationOpen}
          onClose={closeAllPopups}
          switchPopup={openPopupLogin}
          registration={handleRegister}
        />
        <InfoTooltip
          open={infoTooltipOpen}
          onClose={closeAllPopups}
          openPopupLogin={openPopupLogin}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
