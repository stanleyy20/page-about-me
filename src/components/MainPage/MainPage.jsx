import React, { Fragment, useState } from 'react';

import Contact from '../Contact/Contact';
import FollowMe from '../FollowMe/FollowMe';
import Header from '../Header/Header';
import MobileMenu from '../MobileMenu/MobileMenu';
import MyProjects from '../MyProjects/MyProjects';
import ScrollTopButton from '../ScrollTopButton/ScrollTopButton';
import AboutMe from '../About/About';

// import scrollreveal from 'scrollreveal';

const MainPage = () => {
    const [isVisible, setIsVisible] = useState(false);

    // useEffect(() => {
    //   const scroll = scrollreveal({
    //     duration: 2000,
    //     reset: true,
    //   });
    //   scroll.reveal(
    //     `
    //     #header,
    //     #about,
    //     #project
    //     `
    //   );
    // }, []);

    return (
        <Fragment>
            <FollowMe />
            <Header isVisible={isVisible} setIsVisible={setIsVisible} />
            <AboutMe />
            <MyProjects />
            <Contact />
            <ScrollTopButton />
            <MobileMenu isVisible={isVisible} setIsVisible={setIsVisible} />
        </Fragment>
    );
};

export default MainPage;
