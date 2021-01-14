import React from 'react';
// import { ROUTES_MAP } from '../../utils/routesMap';
import Navigation from '../Navigation/Navigation.js';
import './MobileMenu.css';

function MobileMenu({ mainLocation, openPopup, isOpen, name, isLogin, exit }) {
  return (
    <div className={`mobile-menu ${isOpen ? 'mobile-menu_opened' : ''} `}>
      <div
        className={`mobile-menu__container ${
          mainLocation ? '' : 'mobile-menu__container_white'
        }`}
      >
        <Navigation
          exit={exit}
          isLogin={isLogin}
          user={name}
          mainLocation={mainLocation}
          openPopupLogin={openPopup}
        />
      </div>
    </div>
  );
}
export default MobileMenu;
