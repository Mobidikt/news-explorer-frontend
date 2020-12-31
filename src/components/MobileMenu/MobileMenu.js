import React from 'react';
// import { ROUTES_MAP } from '../../utils/routesMap';
import Navigation from '../Navigation/Navigation.js';
import './MobileMenu.css';

function MobileMenu({ mainLocation, openPopupLogin, isOpen }) {
  return (
    <div className={`mobile-menu ${isOpen ? 'mobile-menu_opened' : ''} `}>
      <div
        className={`mobile-menu__container ${
          mainLocation ? '' : 'mobile-menu__container_white'
        }`}
      >
        <Navigation
          mainLocation={mainLocation}
          openPopupLogin={openPopupLogin}
        />
      </div>
    </div>
  );
}
export default MobileMenu;
