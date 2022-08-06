import React from 'react';

import bemCssModules from 'bem-css-modules';

import ProjectsStyle from './MyProjects.module.scss';
import ProjectListStyle from './Project.module.scss';

import { GIT_HUB } from '../../helpers/projectsData';

import { PROJECTS } from '../../helpers/projectsData';

const style = bemCssModules(ProjectsStyle);
const styleList = bemCssModules(ProjectListStyle);

const MyProjects = () => {
    const projectList = PROJECTS.map((project) => (
        <div className={styleList()}>
            <a
                className={styleList('link')}
                href={project.URL}
                target='_blank'
                rel='noopener noreferrer'>
                Link
            </a>
            <div className={styleList('img')}>
                <i className={project.ICON}></i>
            </div>
            <h3 className={styleList('title-h3')}>{project.TITLE}</h3>
        </div>
    ));

    return (
        <section className={style()} id='project'>
            <h2 className={style('title-h2')}>
                My projects <span></span>
            </h2>
            <p className={style('text')}>Here you will find a list of my sample projects</p>
            <div className={style('wrapper')}>{projectList}</div>
            <p className={style('text', { botoom: true })}>
                You can find all my projects on{' '}
                <span>
                    <a href={GIT_HUB.URL} target='_blank' rel='noopener noreferrer'>
                        {GIT_HUB.TITLE}
                    </a>{' '}
                    <i className={GIT_HUB.ICON}></i>
                </span>
            </p>
        </section>
    );
};

export default MyProjects;
