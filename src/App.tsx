import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AboutMe } from './components/AboutMe';
import { NavBar } from './components/NavBar';
import { Skills } from './components/Skills';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <AboutMe/>
      <Skills />
    </div>
  );
}

export default App;
