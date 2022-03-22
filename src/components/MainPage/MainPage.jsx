import React, { Fragment, useState } from 'react';

import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';
import FollowMe from '../FollowMe/FollowMe';
import Header from '../Header/Header';
import MobileMenu from '../MobileMenu/MobileMenu';
import MyProject from '../MyProjects/MyProject';
import ScrollTopButton from '../ScrollTopButton/ScrollTopButton';

const MainPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Fragment>
      <FollowMe />
      <Header isVisible={isVisible} setIsVisible={setIsVisible} />
      <AboutMe />
      <MyProject />
      <Contact />
      <ScrollTopButton />
      <MobileMenu isVisible={isVisible} setIsVisible={setIsVisible} />
    </Fragment>
  );
};

export default MainPage;
