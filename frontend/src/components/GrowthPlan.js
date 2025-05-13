import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/GrowthPlan.css';

const dummyImg = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80";

const GrowthPlan = () => {
  return (
    <section id="growth-plan" className="growth-plan-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="growth-img-col">
            <div className="growth-img-wrapper">
              <img src={dummyImg} alt="Growth Plan" className="growth-img" />
            </div>
          </Col>
          <Col lg={6} className="growth-content-col">
            <h2 className="section-title">Your Growth Journey Starts Here</h2>
            <p className="growth-description">
              You've seen what we do — now let's make it all about you. 
              Every business is different, and so is every strategy we create. 
              Whether you're just starting or scaling fast, our team will build 
              a custom plan tailored to your goals, audience, and budget. 
              Let's map out a growth path that actually works.
            </p>
            <Button 
              variant="primary" 
              size="lg" 
              className="cta-button"
              onClick={() => window.location.href = '#contact'}
            >
              Get a Custom Growth Plan
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GrowthPlan; 