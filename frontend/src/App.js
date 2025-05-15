import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/theme.css';
import './styles/App.css';
import NavigationBar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import GrowthPlan from './components/GrowthPlan';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <GrowthPlan />
              <Contact />
              <Newsletter />
              <About />
              <Footer />
            </>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App; 