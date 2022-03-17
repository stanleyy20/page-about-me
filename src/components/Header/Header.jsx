import React from 'react';

import bemCssModules from 'bem-css-modules';
import NavMenu from '../NavMenu/NavMenu';

import { default as HeaderStyle } from './Header.module.scss';

const style = bemCssModules(HeaderStyle);

const Header = ({ isVisible, setIsVisible }) => {
  return (
    <header className={style()} id='header'>
      <NavMenu isVisibleMenu={isVisible} setIsVisibleMenu={setIsVisible} />
      <div className={style('back-color')}></div>
      <div className={style('back-img')}></div>
      <div className={style('wrapper')}>
        <h3 className={style('wrapper__text')}>Hello my name is Dawid</h3>
        <h2 className={style('wrapper__title')}>Frontend developer</h2>
        <div className={style('wrapper__info')}>
          <p className={style('country')}>Poland</p>
          <p>Rzeszów</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
