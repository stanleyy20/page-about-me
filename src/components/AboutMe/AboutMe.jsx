import React from 'react';

import bemCssModules from 'bem-css-modules';

import { default as AboutMeStyle } from './AboutMe.module.scss';

import Skills from '../Skills/Skills';
import { SKILLS } from '../../helpers/skillsData';

const style = bemCssModules(AboutMeStyle);

const { CSS, GIT, HTML, JAVA_SCRIPT, REACT, SASS } = SKILLS;

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
                        Enthusiastic junior JavaScript developer, trying to begin developing
                        websites. <br />
                        <br />
                        I have been learning how to code, develop since January 2021 and im still
                        triyng to improve my skills. My main point now is to become a frontend
                        developer and gain some experience in international environment. I'm
                        focusing on JavaScript, CSS, React. <br />
                        <br />
                        In my free time I like to play football so i know how to colaborate, i'm a
                        good teamplayer.
                    </p>
                    <h3 className={style('title-h3')}>Skills</h3>
                    <div className={style('skills')}>
                        <Skills title={JAVA_SCRIPT.TITLE} icon={JAVA_SCRIPT.ICON} />
                        <Skills title={REACT.TITLE} icon={REACT.ICON} />
                        <Skills title={HTML.TITLE} icon={HTML.ICON} />
                        <Skills title={CSS.TITLE} icon={CSS.ICON} />
                        <Skills title={SASS.TITLE} icon={SASS.ICON} />
                        <Skills title={GIT.TITLE} icon={GIT.ICON} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
