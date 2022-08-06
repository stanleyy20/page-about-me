import React from 'react';

import bemCssModules from 'bem-css-modules';

import SkillsModule from './Skills.module.scss';
import { SKILLS } from '../../../../helpers/skillsData';

const style = bemCssModules(SkillsModule);

const Skills = () => {
    const iconStyle = { color: '#ff3d4f', marginLeft: '10px', fontSize: '22px' };

    const skillsContent = SKILLS.map((skill) => {
        const icon = (
            <span
                key={skill.ICON}
                className='iconify'
                data-icon={skill.ICON}
                style={iconStyle}></span>
        );

        return (
            <div key={skill.TITLE} className={style('skill')}>
                <p>
                    {skill.TITLE}
                    {icon}
                </p>
            </div>
        );
    });

    return (
        <div className={style()}>
            <h3>Skills</h3>
            <div className={style('skills-wrapper')}>{skillsContent}</div>
        </div>
    );
};

export default Skills;
