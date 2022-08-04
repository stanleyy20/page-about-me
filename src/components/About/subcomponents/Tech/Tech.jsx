import bemCssModules from 'bem-css-modules';

import TechMeStyle from './Tech.module.scss';

import TagCloud from './TagCloud/TagCloud';

const style = bemCssModules(TechMeStyle);

const Tech = () => {
    return (
        <div className={style()}>
            <h3>Known Technologies</h3>
            <div className={style('tag-continer')}>
                <TagCloud />
            </div>
        </div>
    );
};

export default Tech;
