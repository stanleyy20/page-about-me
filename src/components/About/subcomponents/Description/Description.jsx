import bemCssModules from 'bem-css-modules';

import DescriptionMeStyle from './Description.module.scss';

import { ABOUT_ME } from '../../../../helpers/aboutMeData';

const style = bemCssModules(DescriptionMeStyle);

const { DESCRIPTION_ONE, DESCRIPTION_TWO, DESCRIPTION_THREE, DESCRIPTION_TITLE } = ABOUT_ME;

const Description = () => {
    return (
        <div className={style()}>
            <h3>{DESCRIPTION_TITLE}</h3>
            <div>
                {DESCRIPTION_ONE}
                <br />
                <br />
                {DESCRIPTION_TWO}
                <br />
                <br />
                {DESCRIPTION_THREE}
            </div>
        </div>
    );
};

export default Description;
