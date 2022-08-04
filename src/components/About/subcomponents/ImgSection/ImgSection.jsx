import bemCssModules from 'bem-css-modules';

import ImgSectionStyle from './ImgSection.module.scss';

const style = bemCssModules(ImgSectionStyle);

const ImgSection = () => {
    return (
        <div className={style()}>
            
            <div className={style('img-container')}>
                <div className={style('text-container')}>
                    <h4>Dawid</h4>
                    <p>Frontend Developer</p> <p>9 months of learning frontend</p>
                </div>
                <div className={style('img')}></div>
            </div>
        </div>
    );
};

export default ImgSection;
