import bemCssModules from 'bem-css-modules';

import TimelineStyle from './Timeline.module.scss';

const style = bemCssModules(TimelineStyle);

const Timeline = () => {
    return <div className={style()}>Writing code since:</div>;
};

export default Timeline;
