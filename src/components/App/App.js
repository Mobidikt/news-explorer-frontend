import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './App.css';
import '../../vendor/fonts/fonts.css';
import RegistrationPopup from '../RegistrationPopup/RegistrationPopup';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import NewsCardList from '../NewsCardList/NewsCardList';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import LoginPopup from '../LoginPopup/LoginPopup';

function App() {
  const [infoTooltipOpen, setInfoTooltipOpen] = useState(false);
  const [popupLoginOpen, setPopupLoginOpen] = useState(false);
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
  const openPopupLogin = () => {
    setPopupLoginOpen(true);
    setEventListeners();
  };
  const closeAllPopups = () => {
    setInfoTooltipOpen(false);
    setPopupLoginOpen(false);
    document.removeEventListener('keydown', handleEsc);
    document.removeEventListener('click', overlayClose);
  };
  return (
    <div className='App'>
      <Header openPopupLogin={openPopupLogin} />
      <Switch>
        <Route path='/' exact>
          <Main />
        </Route>
        <Route path='/saved-news' exact>
          <SavedNews />
        </Route>
      </Switch>
      <Footer />
      <LoginPopup open={popupLoginOpen} onClose={closeAllPopups} />
      <RegistrationPopup />
      <InfoTooltip open={infoTooltipOpen} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
