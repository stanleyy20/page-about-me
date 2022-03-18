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
            <div className={style('wrapper__element__container__img', { 'bg-one': true })}>
              {' '}
              <i class='fa-solid fa-cloud-sun'></i>
            </div>
          </div>
          <h3 className={style('title-h3')}>Weather App </h3>
        </div>
        <div className={style('wrapper__element')}>
          <div className={style('wrapper__element__container')}>
            {' '}
            <a
              className={style('wrapper__element__container__link')}
              href='https://stanleyy20.github.io/repository-search-github/'>
              Link
            </a>
            <div className={style('wrapper__element__container__img', { 'bg-two': true })}>
              <i class='fa-solid fa-magnifying-glass'></i>
            </div>
          </div>
          <h3 className={style('title-h3')}>Repository search </h3>
        </div>
        <div className={style('wrapper__element')}>
          <div className={style('wrapper__element__container')}>
            {' '}
            <a className={style('wrapper__element__container__link')} href='https://stanleyy20.github.io/to-do-app/'>
              Link
            </a>
            <div className={style('wrapper__element__container__img', { 'bg-three': true })}>
              <i class='fa-solid fa-calendar-check'></i>
            </div>
          </div>
          <h3 className={style('title-h3')}>To do App </h3>
        </div>
        <div className={style('wrapper__element')}>
          <div className={style('wrapper__element__container')}>
            {' '}
            <a
              className={style('wrapper__element__container__link')}
              href='https://stanleyy20.github.io/calculator-like-in-windows/'>
              Link
            </a>
            <div className={style('wrapper__element__container__img')}>
              {' '}
              <i class='fa-solid fa-calculator'></i>
            </div>
          </div>
          <h3 className={style('title-h3')}>Calculator</h3>
        </div>
        <div className={style('wrapper__element')}>
          <div className={style('wrapper__element__container')}>
            {' '}
            <a className={style('wrapper__element__container__link')} href='https://stanleyy20.github.io/game-saper/'>
              Link
            </a>
            <div className={style('wrapper__element__container__img', { 'bg-two': true })}>
              <i class='fa-solid fa-chess-board'></i>
            </div>
          </div>
          <h3 className={style('title-h3')}>Game Saper </h3>
        </div>
        <div className={style('wrapper__element')}>
          <div className={style('wrapper__element__container')}>
            {' '}
            <a
              className={style('wrapper__element__container__link')}
              href='https://stanleyy20.github.io/game-black-jack/'>
              Link
            </a>
            <div className={style('wrapper__element__container__img')}>
              <i class='fa-solid fa-diamond'></i>
            </div>
          </div>
          <h3 className={style('title-h3')}>Game Black Jack </h3>
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
