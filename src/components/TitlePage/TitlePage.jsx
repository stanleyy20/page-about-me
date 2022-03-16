import React from 'react';
import bemCssModules from 'bem-css-modules';

import { default as TitleSideStyle } from './TitlePage.module.scss';
import { useNavigate } from 'react-router-dom';

const style = bemCssModules(TitleSideStyle);

const TitlePage = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/main');
  };

  return (
    <div className={style()}>
      <h1 className={style('title')}>stanley_20</h1>
      <button className={style('button')} onClick={handleOnClick}>
        stanley_20<span></span>
      </button>
    </div>
  );
};

export default TitlePage;
