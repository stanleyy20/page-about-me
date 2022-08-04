import React from 'react';

import bemCssModules from 'bem-css-modules';

import { default as ProjectStyle } from './MyProjects.module.scss';
import { Project } from '../ProjectItem/Project';

import { PROJECTS } from '../../helpers/projectsData';

const {
    CALCULATOR,
    GAME_SAPER,
    REPO_SEARCH,
    TO_DO_APP,
    WEATHER,
    BOOKS,
    ROCK_PAPER_SCISSORS,
    TRANSLATOR,
    GIT_HUB,
} = PROJECTS;

const style = bemCssModules(ProjectStyle);

const MyProjects = () => {
    return (
        <section className={style()} id='project'>
            <h2 className={style('title-h2')}>
                My projects <span></span>
            </h2>
            <p className={style('text')}>Here you will find a list of my sample projects</p>
            <div className={style('wrapper')}>
                <Project Url={BOOKS.URL} Icon={BOOKS.ICON} Title={BOOKS.TITLE} />
                <Project Url={TRANSLATOR.URL} Icon={TRANSLATOR.ICON} Title={TRANSLATOR.TITLE} />
                <Project
                    Url={ROCK_PAPER_SCISSORS.URL}
                    Icon={ROCK_PAPER_SCISSORS.ICON}
                    Title={ROCK_PAPER_SCISSORS.TITLE}
                />
                <Project Url={WEATHER.URL} Icon={WEATHER.ICON} Title={WEATHER.TITLE} />
                <Project Url={REPO_SEARCH.URL} Icon={REPO_SEARCH.ICON} Title={REPO_SEARCH.TITLE} />
                <Project Url={TO_DO_APP.URL} Icon={TO_DO_APP.ICON} Title={TO_DO_APP.TITLE} />
                <Project Url={CALCULATOR.URL} Icon={CALCULATOR.ICON} Title={CALCULATOR.TITLE} />
                <Project Url={GAME_SAPER.URL} Icon={GAME_SAPER.ICON} Title={GAME_SAPER.TITLE} />
            </div>
            <p className={style('text', { botoom: true })}>
                You can find all my projects on{' '}
                <span>
                    <a href={GIT_HUB.URL} target='_blank' rel='noopener noreferrer'>
                        {GIT_HUB.TITLE}
                    </a>{' '}
                    <i class={GIT_HUB.ICON}></i>
                </span>
            </p>
        </section>
    );
};

export default MyProjects;
