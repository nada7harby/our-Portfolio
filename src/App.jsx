import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './Component/HeroSection';
import Navbarr from "./Component/Navbar"

function App() {
  return (
    <Router>
      <Routes>
        {/* تمرير nickname كـ param */}
        <Route path="/:nickname" element={<Navbarr />} />
      </Routes>
    </Router>
  );
}

export default App;
