import React from 'react';

import bemCssModules from 'bem-css-modules';

import { default as NavStyle } from './MobileMenu.module.scss';
import { Link } from '../NavMenu/Link/Link';

const style = bemCssModules(NavStyle);

const MobileMenu = ({ isVisible, setIsVisible }) => {
    const onClick = () => {
        setIsVisible(false);
    };

    return (
        <div className={style({ hide: isVisible })}>
            <Link onClick={onClick} classNameModifier={{ visible: true }} />
        </div>
    );
};

export default MobileMenu;
