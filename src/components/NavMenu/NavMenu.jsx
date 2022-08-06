import React, { useState, useEffect } from 'react';

import bemCssModules from 'bem-css-modules';

import { default as NavStyle } from './NavMenu.module.scss';
import { Link } from './Link/Link';

const style = bemCssModules(NavStyle);

const NavMenu = ({ isVisibleMenu, setIsVisibleMenu }) => {
    const [isVisible, setIsVisible] = useState(true);

    const listenToScroll = () => {
        let heightToHideFrom = 10;

        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if (winScroll > heightToHideFrom) {
            isVisible && setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll);
        return () => window.removeEventListener('scroll', listenToScroll);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onClick = () => {
        setIsVisibleMenu(!isVisibleMenu);
    };

    return (
        <nav className={style({ barmenu: !isVisible })}>
            <p className={style('logo')}>
                stanley<span>_20</span>
            </p>
            <div className={style('bars-mobile')}>
                <i onClick={onClick} className='fa-solid fa-bars'></i>
            </div>
            <Link />
        </nav>
    );
};

export default NavMenu;
