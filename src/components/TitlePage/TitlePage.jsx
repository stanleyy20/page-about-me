import React, { useState } from 'react';
import bemCssModules from 'bem-css-modules';

import { default as TitleSideStyle } from './TitlePage.module.scss';
import { useNavigate } from 'react-router-dom';

const style = bemCssModules(TitleSideStyle);

const TitlePage = () => {
  const [isVisible, setisVisible] = useState(true);
  const navigate = useNavigate();

  const handleOnClick = () => {
    hideButton();
    setTimeout(changePage, 2000);
  };

  const hideButton = () => {
    setisVisible(false);
  };

  const changePage = () => {
    navigate('/main#contact');
    window.location.reload(true);
  };

  return (
    <div className={style()}>
      <h1 className={style('title')}>stanley_20</h1>
      <button className={style('button', { hide: !isVisible })} onClick={handleOnClick}>
        stanley_20<span></span>
      </button>
    </div>
  );
};

export default TitlePage;
