import bemCssModules from 'bem-css-modules';

import ImgSectionStyle from './ImgSection.module.scss';

import { START_LEARNING } from '../../../../helpers/timelineData';

import timeSince from '../../../../helpers/timelineData';

const startLearning = timeSince(START_LEARNING[0].date);

const style = bemCssModules(ImgSectionStyle);

const ImgSection = () => {
    return (
        <div className={style()}>
            <div className={style('img-container')}>
                <div className={style('text-container')}>
                    <h4>Dawid</h4>
                    <p>Frontend Developer</p>
                    <p>{startLearning} of learning frontend</p>
                </div>
                <div className={style('img')}></div>
            </div>
        </div>
    );
};

export default ImgSection;
