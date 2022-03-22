import React from 'react';

import bemCssModules from 'bem-css-modules';

import { default as AboutMeStyle } from './AboutMe.module.scss';

const style = bemCssModules(AboutMeStyle);

const AboutMe = () => {
  return (
    <section className={style()} id='about'>
      <h2 className={style('title-h2')}>
        About Me <span></span>
      </h2>
      <div className={style('wrapper')}>
        <div className={style('image')}></div>
        <div className={style('decription')}>
          <h3 className={style('title-h3')}>Hello my name is Dawid</h3>
          <p className={style('text-area')}>
            Enthusiastic junior JavaScript developer, trying to begin developing websites. <br />
            <br />
            I have been learning how to code, develop since January 2021 and im still triyng to improve my skills. My
            main point now is to become a frontend developer and gain some experience in international environment. I'm
            focusing on JavaScript, CSS, React. <br />
            <br />
            In my free time I like to play football so i know how to colaborate, i'm a good teamplayer.
          </p>
          <h3 className={style('title-h3')}>Skills</h3>
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
