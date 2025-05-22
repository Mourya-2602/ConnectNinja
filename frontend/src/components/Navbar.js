import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" style={{ marginBottom: '2.5rem' }}>
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-text">
          <span
            role="img"
            aria-label="ninja"
            style={{ marginRight: '10px', fontSize: '1.5em', verticalAlign: 'middle' }}
          >
            🥷
          </span>
          CONNECTNINJA
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/#services">Services</Nav.Link>
            <Nav.Link as={Link} to="/#about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/#contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
