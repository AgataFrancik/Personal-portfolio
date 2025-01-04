import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AboutMe } from './components/AboutMe';
import { NavBar } from './components/NavBar';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { ContactMe } from './components/ContactMe';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <AboutMe/>
      <Skills />
      <Experience />
      <Projects />
      <ContactMe />
    </div>
  );
}

export default App;
