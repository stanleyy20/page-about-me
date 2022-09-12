import React from 'react';

import bemCssModules from 'bem-css-modules';

import { default as NavStyle } from './MobileMenu.module.scss';
import { Link } from '../Link/Link';

const style = bemCssModules(NavStyle);

const MobileMenu = ({ isVisible, setIsVisible }) => {
    const onClick = () => {
        setIsVisible(false);
    };

    const classModify = {
        hide: isVisible,
        visible: true,
    };

    const { hide, visible } = classModify;

    return (
        <div className={style({ hide })}>
            <Link onClick={onClick} classNameModifier={{ visible }} />
        </div>
    );
};

export default MobileMenu;
