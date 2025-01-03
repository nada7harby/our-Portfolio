import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import HeroSection from './component/HeroSection';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        {/* <Route path="/user/:id" element={<AboutSection />} />
        <Route path="/portfolio" element={<PortfolioSection />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
