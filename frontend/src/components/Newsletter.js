import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../styles/Newsletter.css';

const dummyImg = "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80";

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
  };

  return (
    <section className="newsletter-section">
      <Container fluid>
        <Row className="align-items-center newsletter-row">
          <Col lg={6} className="newsletter-content-col">
            <h2 className="section-title">Join the Ninja Network</h2>
            <p className="newsletter-description">
              Get stealthy strategies and social tips straight to your inbox.
            </p>
            <Form onSubmit={handleSubmit} className="newsletter-form-flex">
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="newsletter-input"
              />
              <Button type="submit" className="subscribe-button">
                Subscribe
              </Button>
            </Form>
          </Col>
          <Col lg={6} className="newsletter-img-col">
            <div className="newsletter-img-wrapper">
              <img src={dummyImg} alt="Join Ninja Network" className="newsletter-img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter; 