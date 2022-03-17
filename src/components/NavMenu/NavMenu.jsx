import React, { useState, useEffect } from 'react';

import bemCssModules from 'bem-css-modules';

import { default as NavStyle } from './NavMenu.module.scss';

const style = bemCssModules(NavStyle);

const NavMenu = ({ isVisibleMenu, setIsVisibleMenu }) => {
  const [isVisible, setIsVisible] = useState(true);

  const listenToScroll = () => {
    let heightToHideFrom = 10;

    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      isVisible && setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClick = () => {
    setIsVisibleMenu(!isVisibleMenu);
  };

  return (
    <nav className={style({ barmenu: !isVisible })}>
      <div className={style('bars-mobile')}>
        <i onClick={onClick} class='fa-solid fa-bars'></i>
      </div>
      <ul className={style('list')}>
        <li className={'item'}>
          <a href='#about' className={style('link')}>
            About
          </a>
        </li>
        <li li className={'item'}>
          <a href='#project' className={style('link')}>
            Projects
          </a>
        </li>
        <li li className={'item'}>
          <a href='https://github.com/stanleyy20' className={style('link')}>
            GitHub
          </a>
        </li>
        <li li className={'item'}>
          <a href='#contact' className={style('link')}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
