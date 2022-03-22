import React from 'react';

import bemCssModules from 'bem-css-modules';
import NavMenu from '../NavMenu/NavMenu';

import { default as HeaderStyle } from './Header.module.scss';

const style = bemCssModules(HeaderStyle);

const Header = ({ isVisible, setIsVisible }) => {
  return (
    <header className={style()} id='header'>
      <NavMenu isVisibleMenu={isVisible} setIsVisibleMenu={setIsVisible} />
      <div className={style('background-color')}></div>
      <div className={style('background-img')}></div>
      <div className={style('wrapper')}>
        <h3 className={style('title-h3')}>Hello my name is Dawid</h3>
        <h2 className={style('title-h2')}>Frontend developer</h2>
        <div className={style('info')}>
          <p className={style('text')}>Poland</p>
          <p className={style('text', { lighter: true })}>Rzeszów</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
