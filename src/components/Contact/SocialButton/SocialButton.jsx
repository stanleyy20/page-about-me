import bemCssModules from 'bem-css-modules';

import ButtonStyle from './SocialButton.module.scss';

import { SOCIAL_BUTTON } from '../../../helpers/socialButtonData';

const style = bemCssModules(ButtonStyle);

export const SocialButton = () =>
    SOCIAL_BUTTON.map((button) => (
        <a key={button.ICON} className={style()} href={button.LINK}>
            {' '}
            <i className={button.ICON}></i>
        </a>
    ));
