
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Gallery from './pages/Gallery';
import Careers from './pages/Careers';
import YearBookModal from './components/YearBookModal';

const App: React.FC = () => {
  const [isYearbookOpen, setIsYearbookOpen] = useState(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar onOpenYearbook={() => setIsYearbookOpen(true)} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/primary" element={<Academics type="primary" />} />
            <Route path="/secondary" element={<Academics type="secondary" />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/careers" element={<Careers />} />
          </Routes>
        </main>

        <Footer />
        
        <YearBookModal 
          isOpen={isYearbookOpen} 
          onClose={() => setIsYearbookOpen(false)} 
        />
      </div>
    </Router>
  );
};

export default App;
