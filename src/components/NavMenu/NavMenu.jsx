import React from 'react';

import bemCssModules from 'bem-css-modules';

import { default as NavStyle } from './NavMenu.module.scss';

const style = bemCssModules(NavStyle);

const NavMenu = () => {
  return (
    <nav className={style()}>
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
          <a href='/' className={style('link')}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
