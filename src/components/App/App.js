import React, { useState } from 'react';
import Header from '../Header/Header';
import About from '../About/About';
import Footer from '../Footer/Footer';
import './App.css';
import SearchForm from '../SearchForm/SearchForm';
import RegistrationPopup from '../RegistrationPopup/RegistrationPopup';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

function App() {
  const [infoTooltipOpen, setInfoTooltipOpen] = useState(false);
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
  const closeAllPopups = () => {
    setInfoTooltipOpen(false);
    document.removeEventListener('keydown', handleEsc);
    document.removeEventListener('click', overlayClose);
  };
  return (
    <div className='App'>
      <Header />
      <SearchForm />
      <About />
      <RegistrationPopup />
      <InfoTooltip open={infoTooltipOpen} onClose={closeAllPopups} />
      <Footer />
    </div>
  );
}

export default App;
