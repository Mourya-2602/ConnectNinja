import React from 'react';
import '../styles/Services.css';
import VidEdit from '../assets/VidEdit.png';
import WebsiteDevelopment from '../assets/WebsiteDevelopment.png';
import GRAPHICS from '../assets/GRAPHICS.png';
import CAD from '../assets/CAD.png';

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="services" className="services-container">
      <h2 className="services-title">Our Services</h2>
      <p className="services-subtext">We offer a full stack of creative services to bring your brand to life scroll down and see what we do best.</p>
      <div className="service-item full-width social-media" onClick={scrollToContact} style={{ cursor: 'pointer' }}>
        <img src={WebsiteDevelopment} alt="Social Media Management" />
      </div>
      <div className="service-item full-width VidEdit" onClick={scrollToContact} style={{ cursor: 'pointer' }}>
        <img src={VidEdit} alt="VidEdit" />
      </div>
      <div className="service-item full-width GRAPHICS" onClick={scrollToContact} style={{ cursor: 'pointer' }}>
        <img src={GRAPHICS} alt="GRAPHICS" />
      </div>
      <div className="service-item full-width CAD" onClick={scrollToContact} style={{ cursor: 'pointer' }}>
        <img src={CAD} alt="CAD" />
      </div>
    </div>
  );
};

export default Services;