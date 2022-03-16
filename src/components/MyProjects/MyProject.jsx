import React from 'react';

import bemCssModules from 'bem-css-modules';

import { default as ProjectStyle } from './MyProject.module.scss';

const style = bemCssModules(ProjectStyle);

const MyProject = () => {
  return (
    <section className={style()} id='project'>
      <h2 className={style('title')}>
        My projects <span></span>
      </h2>
      <p>Here you will find a list of my sample projects</p>
      <div className={style('wrapper')}>
        <div className={style('wrapper__element')}>
          <div className={style('wrapper__element__container')}>
            {' '}
            <a className={style('wrapper__element__container__link')} href='https://stanleyy20.github.io/weather-app/'>
              Link
            </a>
            <div className={style('wrapper__element__container__img', { 'bg-one': true })}></div>
          </div>
          <h3 className={style('title-h3')}>Weather App </h3>
          <p className={style('text')}>Simple app java script</p>
        </div>
        <div className={style('wrapper__element')}>
          <div className={style('wrapper__element__container')}>
            {' '}
            <a className={style('wrapper__element__container__link')} href='https://stanleyy20.github.io/weather-app/'>
              Link
            </a>
            <div className={style('wrapper__element__container__img', { 'bg-two': true })}></div>
          </div>
          <h3 className={style('title-h3')}>Repository search </h3>
          <p className={style('text')}>
            Application for searching GitHub repositories. Project is created with: HTML, CSS, Javascript and React
          </p>
        </div>
        <div className={style('wrapper__element')}>
          <div className={style('wrapper__element__container')}>
            {' '}
            <a className={style('wrapper__element__container__link')} href='https://stanleyy20.github.io/weather-app/'>
              Link
            </a>
            <div className={style('wrapper__element__container__img', { 'bg-three': true })}></div>
          </div>
          <h3 className={style('title-h3')}>Miniswapper </h3>
          <p className={style('text')}>Classic computer game. Project is created with: HTML, CSS and Javascript</p>
        </div>
      </div>
      <p className={style('text', { botoom: true })}>
        You can find all my projects on{' '}
        <span>
          <a href='https://github.com/stanleyy20'> GitHub </a> <i class='fa fa-github'></i>
        </span>
      </p>
    </section>
  );
};

export default MyProject;
