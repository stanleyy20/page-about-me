import bemCssModules from 'bem-css-modules';

import ImgSectionStyle from './ImgSection.module.scss';

const style = bemCssModules(ImgSectionStyle);

const ImgSection = () => {
    return <div className={style()}>Dawid</div>;
};

export default ImgSection;
