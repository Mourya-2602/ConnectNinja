import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section-light mt-navbar-gap">
      <Container fluid className="hero-container px-4">
        <Row className="justify-content-center align-items-center">
          <Col xl={11} lg={12} className="text-center">
            <Row className="align-items-center strategy-section">
              <Col lg={12} className="text-center mb-4">
                <h2 className="strategy-heading"> Have a project in mind?</h2>
                <p className="hero-subheadline">
                We believe great results start with real conversations. Book a quick free call with us ,  we'll take the 
                time to understand your goals, explore ideas together and see how we can turn your vision into 
                something powerful. 
                </p>
                <Button
                  variant="danger"
                  size="lg"
                  className="cta-button"
                  onClick={() => window.location.href = '#contact'}
                >
                  Book your call for free
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
