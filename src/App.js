import React from 'react';
import bemCssModules from 'bem-css-modules';

import './App.scss';
import './variables.scss';
import MainPage from './components/MainPage/MainPage';

bemCssModules.setSettings({
    modifierDelimiter: '--',
});

function App() {
    return <MainPage />;
}

export default App;
