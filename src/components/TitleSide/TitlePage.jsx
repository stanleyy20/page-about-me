import React from 'react';
import bemCssModules from 'bem-css-modules';

import { default as TitleSideStyle } from './TitlePage.module.scss';

const style = bemCssModules(TitleSideStyle);

const TitlePage = () => {
  return (
    <div className={style()}>
      <h1 className={style('title')}>DAWID</h1>
      <a className={style('button')} href='#main'>
        DAWID<span></span>
      </a>
    </div>
  );
};

export default TitlePage;
