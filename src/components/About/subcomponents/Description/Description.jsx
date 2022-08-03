import bemCssModules from 'bem-css-modules';

import DescriptionMeStyle from './Description.module.scss';

const style = bemCssModules(DescriptionMeStyle);

const Description = () => {
    return <div className={style()}>About</div>;
};

export default Description;
