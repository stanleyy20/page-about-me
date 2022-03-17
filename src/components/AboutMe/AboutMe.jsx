import React from 'react';

import bemCssModules from 'bem-css-modules';

import { default as AboutMeStyle } from './AboutMe.module.scss';

const style = bemCssModules(AboutMeStyle);

const AboutMe = () => {
  return (
    <section className={style()} id='about'>
      <h2 className={style('title')}>
        About Me <span></span>
      </h2>
      <div className={style('wrapper')}>
        <div className={style('image')}></div>
        <div className={style('decription')}>
          <h3>Hello my name is Dawid</h3>
          <p className={style('text-area')}>
            I like JavaScript and CSS. <br />
            <br />
            Started learing frontend development: 12 months ago. I'm trying to commit daily to my{' '}
            <a href='https://github.com/stanleyy20'>GitHub</a> in order to recieve the best results. <br />
            <br />
            Currently I am focusing on improving my skills in the React library
          </p>
          <h3>Skills</h3>
          <div className={style('skills')}>
            <div className={style('skills__element')}>
              <p>
                JavaScript <i class='fa-brands fa-js-square'></i>
              </p>
            </div>
            <div className={style('skills__element')}>
              <p>
                React <i class='fa-brands fa-react'></i>
              </p>
            </div>
            <div className={style('skills__element')}>
              <p>
                HTML <i class='fa fa-html5' aria-hidden='true'></i>
              </p>
            </div>
            <div className={style('skills__element')}>
              <p>
                CSS <i class='fa-brands fa-css3-alt'></i>
              </p>
            </div>
            <div className={style('skills__element', { last: true })}>
              <p>
                SASS <i class='fa-brands fa-sass'></i>
              </p>
            </div>
            <div className={style('skills__element')}>
              <p>
                Git <i class='fa-solid fa-code-branch'></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
