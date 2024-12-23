import React from 'react';
import { NavBar } from './components/NavBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AboutMe } from './components/AboutMe';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <AboutMe/>
    </div>
  );
}

export default App;
