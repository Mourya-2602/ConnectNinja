import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import '../styles/Navbar.css';

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home" className="brand-text"><span role="img" aria-label="ninja" style={{marginRight: '10px', fontSize: '1.5em', verticalAlign: 'middle'}}>🥷</span>ConnectNinja</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="align-items-center">
            <Nav.Link href="#login" className="nav-link">Login</Nav.Link>
            <Button variant="primary" className="get-started-btn">Get Started</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar; 