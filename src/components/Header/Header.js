import React, { useMemo, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import MobileMenu from '../MobileMenu/MobileMenu.js';
import { ROUTES_MAP } from '../../utils/routesMap';
import Navigation from '../Navigation/Navigation.js';
import './Header.css';

const user = false;
function Header({ location, openPopupLogin }) {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const mainLocation = location === ROUTES_MAP.MAIN;
  const classLogo = mainLocation ? '' : 'header__logo_black';
  const classButton = mainLocation ? '' : 'hamburger__line_blak';
  const closeMobileMenu = () => {
    setOpenMobileMenu(false);
    document.removeEventListener('click', overlayClose);
    document.body.style.overflow = 'auto';
  };
  const overlayClose = (e) => {
    if (e.target.classList.contains('mobile-menu')) {
      closeMobileMenu();
    }
  };
  const showMenu = () => {
    if (openMobileMenu) {
      closeMobileMenu();
    } else {
      setOpenMobileMenu(true);
      document.addEventListener('click', overlayClose);
      document.body.style.overflow = 'hidden';
    }
  };
  const openPopup = () => {
    closeMobileMenu();
    openPopupLogin();
  };
  const classHeader = useMemo(() => {
    if (openMobileMenu) {
      return mainLocation ? 'header_background-black' : 'header_black';
    }
    return mainLocation ? '' : 'header_black';
  }, [mainLocation, openMobileMenu]);
  return (
    <Switch>
      <Route path='/404' exact />
      <Route path='*'>
        <header className={`header ${classHeader}`}>
          <div className='header__container'>
            <a href='/' className={`header__logo ${classLogo}`}>
              NewsExplorer
            </a>
            <div className='header__menu'>
              <Navigation
                user={user}
                mainLocation={mainLocation}
                openPopupLogin={openPopupLogin}
              />
            </div>
            <button className='header__button_menu-mobile' onClick={showMenu}>
              <span
                className={`hamburger__line ${classButton} ${
                  openMobileMenu ? 'hamburger__line_active' : ''
                }`}
              ></span>
            </button>
          </div>
        </header>
        <MobileMenu
          user={user}
          isOpen={openMobileMenu}
          mainLocation={mainLocation}
          openPopup={openPopup}
        />
      </Route>
    </Switch>
  );
}
export default Header;
