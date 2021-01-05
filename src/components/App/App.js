import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import '../../vendor/fonts/fonts.css';
import RegistrationPopup from '../Popups/RegistrationPopup/RegistrationPopup';
import InfoTooltip from '../Popups/InfoTooltip/InfoTooltip';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import LoginPopup from '../Popups/LoginPopup/LoginPopup';
import NotFound from '../NotFound/NotFound';

function App() {
  const { pathname } = useLocation();
  const [infoTooltipOpen, setInfoTooltipOpen] = useState(false);
  const [popupLoginOpen, setPopupLoginOpen] = useState(false);
  const [popupRegistrationOpen, setPopupRegistrationOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
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
    setIsLogin(false);
  };
  const handleLogin = () => {};
  const handleRegister = (name, password, email) => {
    openInfoTooltip();
  };
  return (
    <div className='App'>
      <Header
        location={pathname}
        openPopupLogin={openPopupLogin}
        isLogin={isLogin}
        exit={exit}
      />
      <Switch>
        <Route path='/' exact>
          <Main />
        </Route>
        <Route path='/saved-news'>
          <SavedNews />
        </Route>
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
      <InfoTooltip open={infoTooltipOpen} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
