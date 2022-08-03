import bemCssModules from 'bem-css-modules';

import TimelineStyle from './Timeline.module.scss';

const style = bemCssModules(TimelineStyle);

const Timeline = () => {
    return <div className={style()}>About</div>;
};

export default Timeline;
