import bemCssModules from 'bem-css-modules';

import TimelineStyle from './Timeline.module.scss';

import { START_LEARNING } from '../../../../helpers/timelineData';

import timeSince from '../../../../helpers/timelineData';

const style = bemCssModules(TimelineStyle);

const timelineItem = START_LEARNING.map((item) => (
    <div className={style('item')}>
        <p className={style('name')}>{item.name}</p>
        <p className={style('date')}>{timeSince(item.date)}</p>
    </div>
));

const Timeline = () => {
    return (
        <div className={style()}>
            Writing code since:
            <div className={style('container')}>{timelineItem}</div>
        </div>
    );
};

export default Timeline;
