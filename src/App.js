import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Template from './components/Template.js';
import Projects from './components/Projects.js';
import Message from './components/Message';
import Skills from './components/Skills';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Template/>
      <Projects/>
      <Skills/>
      <Message/>
    </div>
  );
}

export default App;
