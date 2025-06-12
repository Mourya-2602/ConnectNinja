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
        <Row className="steps-container justify-content-center">
          <Col md={4} className="step-col">
            <Card className="step-card">
              <Card.Body>
                <div className="step-number"> Step 01</div>
                <div className="step-title">We Learn Your Vision</div>
                <p className="step-description">We start by understanding your goals, audience, and industry. Whether it’s a website, video, graphic, or CAD project — the strategy is built around you.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col xs="auto" className="d-flex align-items-center separator-col">
            <span className="separator-arrow">&gt;</span>
          </Col>
          <Col md={4} className="step-col">
            <Card className="step-card">
              <Card.Body>
                <div className="step-number"> Step 02 </div>
                <div className="step-title">We Bring It to Life</div>
                <p className="step-description">Our team creates sleek websites, engaging videos, standout graphics, and accurate CAD visuals — all aligned with your brand and purpose.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col xs="auto" className="d-flex align-items-center separator-col">
            <span className="separator-arrow">&gt;</span>
          </Col>
          <Col md={4} className="step-col">
            <Card className="step-card">
              <Card.Body>
                <div className="step-number"> Step 03</div>
                <div className="step-title">We Help You Grow</div>
                <p className="step-description">We don’t just deliver and leave. We track, optimize, and continuously refine to keep your brand evolving, growing, and performing at its best.</p>
              </Card.Body>
            </Card>
          </Col>
          <p className="ending-text">Let’s build something that not only looks great — but truly works for your business.</p>
        </Row>
      </Container>
    </section>
  );
};

export default Methodology; 