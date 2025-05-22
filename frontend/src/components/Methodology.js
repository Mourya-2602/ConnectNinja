import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/Methodology.css';

const Methodology = () => {
  return (
    <section className="methodology-section">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10} className="text-center">
            <h2 className="section-title">Why Choose Us?</h2>
          </Col>
        </Row>
        
        {/* Steps Section */}
        <Row className="steps-container justify-content-center">
          <Col md={4} className="step-col">
            <Card className="step-card">
              <Card.Body>
                <div className="step-number">Step 01</div>
                <div className="step-title">We Understand You</div>
                <p className="step-description">We analyze your brand, audience, and market trends to create a strategy that fits your business.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col xs="auto" className="d-flex align-items-center separator-col">
            <span className="separator-arrow">&gt;</span>
          </Col>
          <Col md={4} className="step-col">
            <Card className="step-card">
              <Card.Body>
                <div className="step-number">Step 02</div>
                <div className="step-title">We Bring Ideas to Life </div>
                <p className="step-description">Stunning websites, engaging content, and viral social media campaigns with the latest digital trends our experts ensure your brand stands out.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col xs="auto" className="d-flex align-items-center separator-col">
            <span className="separator-arrow">&gt;</span>
          </Col>
          <Col md={4} className="step-col">
            <Card className="step-card">
              <Card.Body>
                <div className="step-number">Step 03</div>
                <div className="step-title">We Grow with You </div>
                <p className="step-description">We don't just launch and leave; we track, optimize, and refine so your business keeps evolving.</p>
              </Card.Body>
            </Card>
          </Col>
          <p className="ending-text">Let's create something incredible together</p>
        </Row>
      </Container>
    </section>
  );
};

export default Methodology; 