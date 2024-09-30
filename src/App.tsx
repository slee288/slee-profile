import React from 'react';
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import Header from './components/Header';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Header />
      <AboutMe />
    </div>
  );
}

export default App;
