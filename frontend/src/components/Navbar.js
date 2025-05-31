import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import '../styles/Navbar.css';
import CN_logo from '../assets/CN_logo_crop.png';

const NavigationBar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" style={{ marginBottom: '2.5rem' }}>
      <Container>
        <Navbar.Brand onClick={() => scrollToSection('home')} className="brand-text" style={{ cursor: 'pointer' }}>
          <img
            src={CN_logo}
            alt="ConnectNinja Logo"
            style={{ height: '80px' }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => scrollToSection('home')} style={{ cursor: 'pointer' }}>Home</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('services')} style={{ cursor: 'pointer' }}>Services</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('about')} style={{ cursor: 'pointer' }}>About Us</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('connect')} style={{ cursor: 'pointer' }}>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
