import React from 'react';

import bemCssModules from 'bem-css-modules';

import { default as FollowMeStyle } from './FollowMe.module.scss';

const style = bemCssModules(FollowMeStyle);

const FollowMe = () => {
  return (
    <div className={style()}>
      <p className={style('text')}>Follow Me</p>
      <a href='https://www.instagram.com/stanleyyy_20/'>
        <i className='fa fa-instagram'></i>
      </a>

      <a href='https://www.facebook.com/stanleyyy20/'>
        <i className='fa fa-facebook'></i>
      </a>

      <a href='https://www.linkedin.com/in/dawid-stach-873620232/'>
        <i className='fa fa-linkedin'></i>
      </a>
    </div>
  );
};

export default FollowMe;
