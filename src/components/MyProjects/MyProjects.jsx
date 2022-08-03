import React from 'react';

import bemCssModules from 'bem-css-modules';

import { default as ProjectStyle } from './MyProjects.module.scss';
import { Project } from './Project/Project';

const style = bemCssModules(ProjectStyle);

const MyProjects = () => {
    return (
        <section className={style()} id='project'>
            <h2 className={style('title-h2')}>
                My projects <span></span>
            </h2>
            <p className={style('text')}>Here you will find a list of my sample projects</p>
            <div className={style('wrapper')}>
                <Project
                    projectUrl='https://stanleyy20.github.io/weather-app/'
                    projectIcon={<i class='fa-solid fa-cloud-sun'></i>}
                    projectName='Weather App '
                />
                <Project
                    projectUrl='https://stanleyy20.github.io/repository-search-github/'
                    projectIcon={<i class='fa-solid fa-magnifying-glass'></i>}
                    projectName='Repository search '
                />
                <Project
                    projectUrl='https://stanleyy20.github.io/to-do-app/'
                    projectIcon={<i class='fa-solid fa-calendar-check'></i>}
                    projectName='To do App '
                />
                <Project
                    projectUrl='https://stanleyy20.github.io/calculator-like-in-windows/'
                    projectIcon={<i class='fa-solid fa-calculator'></i>}
                    projectName='Calculator '
                />
                <Project
                    projectUrl='https://stanleyy20.github.io/game-saper/'
                    projectIcon={<i class='fa-solid fa-chess-board'></i>}
                    projectName='Game Saper '
                />
                <Project
                    projectUrl='https://stanleyy20.github.io/game-black-jack/'
                    projectIcon={<i class='fa-solid fa-diamond'></i>}
                    projectName='Game Black Jack '
                />
            </div>
            <p className={style('text', { botoom: true })}>
                You can find all my projects on{' '}
                <span>
                    <a href='https://github.com/stanleyy20'> GitHub </a>{' '}
                    <i class='fa fa-github'></i>
                </span>
            </p>
        </section>
    );
};

export default MyProjects;
