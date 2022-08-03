import React from 'react';

import bemCssModules from 'bem-css-modules';

import SkillsModule from './Skills.module.scss';

import Skill from './Skill/Skill';
import { SKILLS } from '../../../../helpers/skillsText';

const style = bemCssModules(SkillsModule);

const { CSS, GIT, HTML, JAVA_SCRIPT, REACT, SASS, BOOTSTRAP } = SKILLS;

const Skills = () => {
    return (
        <div className={style()}>
            <h3>Skills</h3>
            <div className={style('skills-wrapper')}>
                <Skill title={JAVA_SCRIPT.TITLE} icon={JAVA_SCRIPT.ICON} />
                <Skill title={REACT.TITLE} icon={REACT.ICON} />
                <Skill title={CSS.TITLE} icon={CSS.ICON} />
                <Skill title={SASS.TITLE} icon={SASS.ICON} />
                <Skill title={HTML.TITLE} icon={HTML.ICON} />
                <Skill title={GIT.TITLE} icon={GIT.ICON} />
            </div>
        </div>
    );
};

export default Skills;
