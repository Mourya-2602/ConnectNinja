import React from 'react';
import { useLocation } from 'react-router-dom';
import Hero from './Hero';
import Services from './Services';
import GrowthPlan from './GrowthPlan';
import Contact from './Contact';
import Newsletter from './Newsletter';
import About from './About';
import Footer from './Footer';

const HomePage = () => {
  const location = useLocation();
  const username = location.state && location.state.username ? location.state.username : '';
  return (
    <>
      <Hero isLoggedIn={true} username={username} />
      <Services />
      <GrowthPlan />
      <Contact />
      <Newsletter />
      <About />
      <Footer />
    </>
  );
};

export default HomePage; 