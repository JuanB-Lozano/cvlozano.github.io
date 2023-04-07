import React, {Component} from 'react';
import NavBar from './components/NavBar.js';
import About from './components/About';
import Exp from './components/Exp';
import Education from './components/Education.js';
import Certificates from './components/Certificates';



function App() {
  return (
    <NavBar>
      <About />,
      <Exp />,
      <Education />,
      <Certificates />
    </NavBar>
  );
}

export default App;
