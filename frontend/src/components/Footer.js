import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Footer.css';

const quickLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Blog', href: '#' },
  { name: 'Pricing', href: '#' },
  { name: 'Contact', href: '#contact' }
];

const socialLinks = [
  { name: 'Instagram', icon: <i className="fab fa-instagram"></i>, href: '#' },
  { name: 'LinkedIn', icon: <i className="fab fa-linkedin"></i>, href: '#' },
  { name: 'X', icon: <i className="fab fa-x-twitter"></i>, href: '#' },
  { name: 'YouTube', icon: <i className="fab fa-youtube"></i>, href: '#' }
];

const Footer = () => {
  return (
    <footer className="footer-ninja">
      <div className="footer-visuals">
        {/* Ninja star */}
        <svg className="ninja-star" width="40" height="40" viewBox="0 0 40 40" fill="none"><g filter="url(#glow)"><polygon points="20,2 24,20 38,20 26,26 30,38 20,30 10,38 14,26 2,20 16,20" stroke="#b6f7b0" strokeWidth="1.5" fill="none"/></g><defs><filter id="glow" x="-10" y="-10" width="60" height="60"><feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#b6f7b0"/></filter></defs></svg>
        {/* Katana */}
        <svg className="katana" width="120" height="12" viewBox="0 0 120 12" fill="none"><g filter="url(#glow2)"><rect x="10" y="5" width="100" height="2" rx="1" fill="#ff4d4d"/><rect x="5" y="4" width="5" height="4" rx="2" fill="#b6f7b0"/></g><defs><filter id="glow2" x="0" y="0" width="120" height="12"><feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#ff4d4d"/></filter></defs></svg>
        {/* Circuit grid */}
        <svg className="circuit-grid" width="100%" height="40" viewBox="0 0 400 40" fill="none"><g filter="url(#glow3)"><polyline points="0,20 50,20 60,10 80,30 120,10 160,30 200,10 240,30 280,10 320,30 350,20 400,20" stroke="#b6f7b0" strokeWidth="1.2" fill="none"/></g><defs><filter id="glow3" x="-10" y="-10" width="420" height="60"><feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#b6f7b0"/></filter></defs></svg>
      </div>
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <div className="quick-links mb-4">
              {quickLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href}
                  className="quick-link"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="social-links mb-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <p className="copyright">
              © 2025 ConnectNinja. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer; 