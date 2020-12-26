import React, { useState } from 'react';
import Header from '../Header/Header';
import About from '../About/About';
import Footer from '../Footer/Footer';
import './App.css';
import '../../vendor/fonts/fonts.css';
import SearchForm from '../SearchForm/SearchForm';
import RegistrationPopup from '../RegistrationPopup/RegistrationPopup';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import NewsCardList from '../NewsCardList/NewsCardList';

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
    // setPopupLoginOpen(true);
    setEventListeners();
  };
  const closeAllPopups = () => {
    setInfoTooltipOpen(false);
    document.removeEventListener('keydown', handleEsc);
    document.removeEventListener('click', overlayClose);
  };
  return (
    <div className='App'>
      <Header
        openInfoTooltip={openInfoTooltip}
        openPopupLogin={openPopupLogin}
      />
      <SearchForm />
      <NewsCardList />
      <About />
      <RegistrationPopup />
      <InfoTooltip open={infoTooltipOpen} onClose={closeAllPopups} />
      <Footer />
    </div>
  );
}

export default App;
