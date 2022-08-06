import bemCssModules from 'bem-css-modules';

import InfoStyle from './Info.module.scss';

import { INFO } from '../../../helpers/infoData';

const style = bemCssModules(InfoStyle);

const { ADRESS, EMAIL, PHONE_NUMBER } = INFO;

export const Info = () => (
    <div className={style()}>
        <div className={style('container')}>
            <h4>EMAIL</h4>
            <p>{EMAIL.FIRST}</p>
            <p>{EMAIL.SECOND}</p>
            <h4>CALL ME</h4>
            <p>{PHONE_NUMBER}</p>
            <h4>ADDRES</h4>
            <p>{ADRESS}</p>
        </div>
    </div>
);
