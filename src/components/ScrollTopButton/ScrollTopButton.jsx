import React, { useEffect, useState } from 'react';

import bemCssModules from 'bem-css-modules';

import { default as ButtonStyle } from './ScrollTopButton.module.scss';

const style = bemCssModules(ButtonStyle);

const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(true);

  const listenToScroll = () => {
    let heightToHideFrom = 600;

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

  return (
    <a className={style({ hide: isVisible })} href='#header'>
      <i class='fa fa-arrow-up'></i>
    </a>
  );
};

export default ScrollTopButton;
