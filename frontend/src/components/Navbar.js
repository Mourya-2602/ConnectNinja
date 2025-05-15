import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const NavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" style={{ marginBottom: '2.5rem' }}>
      <Container>
        {location.pathname === '/home' ? (
          <Navbar.Brand className="brand-text"><span role="img" aria-label="ninja" style={{marginRight: '10px', fontSize: '1.5em', verticalAlign: 'middle'}}>🥷</span>ConnectNinja Welcomes You </Navbar.Brand>
        ) : (
          <Navbar.Brand as={Link} to="/" className="brand-text"><span role="img" aria-label="ninja" style={{marginRight: '10px', fontSize: '1.5em', verticalAlign: 'middle'}}>🥷</span>ConnectNinja</Navbar.Brand>
        )}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="align-items-center">
            {location.pathname === '/home' ? (
              <Button variant="danger" className="get-started-btn" onClick={() => navigate('/')}>Logout</Button>
            ) : (
              <>
                <Link to="/login" className="nav-link">Login</Link>
                <Button variant="primary" className="get-started-btn" onClick={() => navigate('/register')}>Get Started</Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar; 