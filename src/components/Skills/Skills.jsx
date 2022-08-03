import bemCssModules from 'bem-css-modules';

import { default as AboutMeStyle } from './Skills.module.scss';

const style = bemCssModules(AboutMeStyle);

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
