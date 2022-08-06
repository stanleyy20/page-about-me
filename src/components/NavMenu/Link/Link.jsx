import bemCssModules from 'bem-css-modules';

import LinkStyle from './Link.module.scss';
import { LINKS } from '../../../helpers/nawMenuData';

const style = bemCssModules(LinkStyle);

export const Link = ({ classNameModifier, onClick }) => (
    <ul className={style(classNameModifier)}>
        {LINKS.map((link) => (
            <li className={'item'}>
                <a onClick={onClick} href={link.LINK} className={style('link')}>
                    {link.TITLE}
                </a>
            </li>
        ))}
        ;
    </ul>
);
