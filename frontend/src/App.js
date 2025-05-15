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

function App() {
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      <NavigationBar />
      <Hero />
      <Services />
      <GrowthPlan />
      <Contact />
      <Newsletter />
      <About />
      <Footer />
    </div>
  );
}

export default App; 