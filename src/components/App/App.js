import React from 'react';
import './App.style.scss';

import Header from '../Header/Header';
import Cars from '../Cars/Cars';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Cars />
    </div>
  );
};

export default App;
