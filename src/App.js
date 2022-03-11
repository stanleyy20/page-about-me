import React from 'react';

import { HashRouter as Router } from 'react-router-dom';

import TitlePage from './components/TitleSide/TitlePage';

import './App.module.scss';

function App() {
  return (
    <Router>
      <TitlePage />
    </Router>
  );
}

export default App;
