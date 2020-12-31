import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import MobileMenu from '../MobileMenu/MobileMenu.js';
// import { ROUTES_MAP } from '../../utils/routesMap';
import Navigation from '../Navigation/Navigation.js';
import './Header.css';

function Header({ location, openPopupLogin }) {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const mainLocation = location === '/';
  const classLogo = mainLocation ? '' : 'header__logo_black';
  const classButton = mainLocation ? '' : 'header__button_black';
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
  const classHeader = useMemo(() => {
    if (openMobileMenu) {
      return mainLocation ? 'header_background-black' : 'header_black';
    }
    return '';
  }, [mainLocation, openMobileMenu]);
  useEffect(() => {
    closeMobileMenu();
  }, [location]);
  return (
    <Switch>
      <Route path='/404' exact />
      <Route path='*'>
        <header className={`header ${classHeader}`}>
          <div className='header__container'>
            <Link to='/' className={`header__logo ${classLogo}`}>
              NewsExplorer
            </Link>
            <div className='header__menu'>
              <Navigation
                mainLocation={mainLocation}
                openPopupLogin={openPopupLogin}
              />
            </div>
            <button className='header__button_menu-mobile' onClick={showMenu}>
              <span className={`hamburger__line ${classButton}`}></span>
            </button>
          </div>
        </header>
        <MobileMenu
          isOpen={openMobileMenu}
          mainLocation={mainLocation}
          openPopupLogin={openPopupLogin}
        />
      </Route>
    </Switch>
  );
}
export default Header;
