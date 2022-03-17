import React from 'react';

// import { Route, Routes } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';

import bemCssModules from 'bem-css-modules';

// import TitlePage from './components/TitlePage/TitlePage';

import './App.module.scss';
import MainPage from './components/MainPage/MainPage';

bemCssModules.setSettings({
  modifierDelimiter: '--',
});

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path='/' element={<TitlePage />} />
    //     <Route path='/main' element={<MainPage />} />
    //   </Routes>
    // </Router>
    <MainPage />
  );
}

export default App;
