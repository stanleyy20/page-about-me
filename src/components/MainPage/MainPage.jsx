import React, { Fragment } from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';
import FollowMe from '../FollowMe/FollowMe';

import Header from '../Header/Header';
import MyProject from '../MyProjects/MyProject';
import ScrollTopButton from '../ScrollTopButton/ScrollTopButton';

const MainPage = () => {
  return (
    <Fragment>
      <FollowMe />
      <Header />
      <AboutMe />
      <MyProject />
      <Contact />
      <ScrollTopButton />
    </Fragment>
  );
};

export default MainPage;
