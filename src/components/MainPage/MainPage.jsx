import React, { Fragment } from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';
import FollowMe from '../FollowMe/FollowMe';
// import bemCssModules from 'bem-css-modules';

import Header from '../Header/Header';
import MyProject from '../MyProjects/MyProject';
import ScrollTopButton from '../ScrollTopButton/ScrollTopButton';

// import { default as HeaderStyle } from './MainPage.module.scss';

// const style = bemCssModules(HeaderStyle);

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
