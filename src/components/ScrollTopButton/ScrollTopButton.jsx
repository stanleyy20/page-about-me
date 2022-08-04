import React, { useEffect, useState } from 'react';

import bemCssModules from 'bem-css-modules';

import { default as ButtonStyle } from './ScrollTopButton.module.scss';

const style = bemCssModules(ButtonStyle);

const ScrollTopButton = () => {
    const [isVisible, setIsVisible] = useState(true);

    const listenToScroll = () => {
        let heightToHideFrom = 600;

        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if (winScroll > heightToHideFrom) {
            isVisible && setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    };

    const scrollTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll);
        return () => window.removeEventListener('scroll', listenToScroll);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <button className={style({ hide: isVisible })} onClick={scrollTop}>
            <i className='fa fa-arrow-up'></i>
        </button>
    );
};

export default ScrollTopButton;
