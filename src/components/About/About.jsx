import React from 'react';

import bemCssModules from 'bem-css-modules';

import { default as AboutMeStyle } from './About.module.scss';
import Skills from './subcomponents/skills/Skills';
import ImgSection from './subcomponents/ImgSection/ImgSection';

import { ABOUT_ME } from '../../helpers/AboutMeText';
import Tech from './subcomponents/Tech/Tech';
import Timeline from './subcomponents/Timeline/Timeline';
import Description from './subcomponents/Description/Description';

const style = bemCssModules(AboutMeStyle);

// const {
//     DESCRIPTION_ONE,
//     DESCRIPTION_TWO,
//     DESCRIPTION_THREE,
//     DESCRIPTION_TITLE,
//     MAIN_TITLE,
//     SKILLS_TITLE,
// } = ABOUT_ME;

const AboutMe = () => {
    return (
        <section className={style()} id='about'>
            <h2 className={style('title-h2')}>
                About Me <span></span>
            </h2>
            <div className={style('wrapper')}>
                <ImgSection />
                <Skills />
                <Description />
                <Tech />
                <Timeline />
            </div>
        </section>
    );
};

export default AboutMe;
