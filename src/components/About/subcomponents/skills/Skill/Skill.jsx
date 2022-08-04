import bemCssModules from 'bem-css-modules';

import { default as SkillStyle } from './Skill.module.scss';

const style = bemCssModules(SkillStyle);

const Skills = ({ title, icon }) => {
    const iconContent =
        icon === 'type-script' ? (
            <span
                className='iconify'
                data-icon='simple-icons:typescript'
                style={{ color: '#ff3d4f', marginLeft: '10px' }}></span>
        ) : (
            <i className={icon}></i>
        );

    return (
        <div className={style()}>
            <p>
                {title}
                {iconContent}
            </p>
        </div>
    );
};

export default Skills;
