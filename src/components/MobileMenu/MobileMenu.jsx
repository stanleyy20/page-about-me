import React from 'react';

import bemCssModules from 'bem-css-modules';

import { default as NavStyle } from './MobileMenu.module.scss';

const style = bemCssModules(NavStyle);

const MobileMenu = ({ isVisible, setIsVisible }) => {
  const onClick = () => {
    setIsVisible(false);
  };

  return (
    <div className={style({ hide: isVisible })}>
      <ul className={style('list')}>
        <li className={style('item')}>
          <a onClick={onClick} href='#about' className={style('link')}>
            About
          </a>
        </li>
        <li className={style('item')}>
          <a onClick={onClick} href='#project' className={style('link')}>
            Projects
          </a>
        </li>
        <li className={style('item')}>
          <a onClick={onClick} href='https://github.com/stanleyy20' className={style('link')}>
            GitHub
          </a>
        </li>
        <li className={style('item')}>
          <a onClick={onClick} href='#contact' className={style('link')}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
