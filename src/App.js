import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Template from './components/Template.js';
import Mycontent from './components/Mycontent.js';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Template/>
      <Mycontent/>
    </div>
  );
}

export default App;
