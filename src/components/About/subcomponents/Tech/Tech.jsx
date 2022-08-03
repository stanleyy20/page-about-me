import bemCssModules from 'bem-css-modules';

import TechMeStyle from './Tech.module.scss';

const style = bemCssModules(TechMeStyle);

const Tech = () => {
    return <div className={style()}>About</div>;
};

export default Tech;
