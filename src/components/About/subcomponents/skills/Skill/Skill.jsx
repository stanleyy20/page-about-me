import bemCssModules from 'bem-css-modules';

import { default as SkillStyle } from './Skill.module.scss';

const style = bemCssModules(SkillStyle);

const Skills = ({ title, icon }) => {
    return (
        <div className={style()}>
            <p>
                {title}
                <i class={icon}></i>
            </p>
        </div>
    );
};

export default Skills;
