import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
// import HeroSection from './component/HeroSection';
import HeroSection from './component/HeroSection';
import Navbarr from './component/Navbar';

function App() {
  return (

  <>
  <Navbarr></Navbarr>
  <HeroSection ></HeroSection>
  </>)
}

export default App;
