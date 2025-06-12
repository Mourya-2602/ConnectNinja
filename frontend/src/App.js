import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/Responsive.css';
import NavigationBar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Methodology from './components/Methodology';
import Connect from './components/Connect';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <Methodology />
              <Contact />
              <About />
              <Connect />
            </>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App; 