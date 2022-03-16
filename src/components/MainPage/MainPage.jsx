import React, { Fragment } from 'react';
import AboutMe from '../AboutMe/AboutMe';
import FollowMe from '../FollowMe/FollowMe';
// import bemCssModules from 'bem-css-modules';

import Header from '../Header/Header';
import MyProject from '../MyProjects/MyProject';

// import { default as HeaderStyle } from './MainPage.module.scss';

// const style = bemCssModules(HeaderStyle);

const MainPage = () => {
  return (
    <Fragment>
      <FollowMe />
      <Header />
      <AboutMe />
      <MyProject />
    </Fragment>
  );
};

export default MainPage;
