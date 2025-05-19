import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="contact-section">
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col lg={8}>
            <h2 className="section-title">Let's Talk Strategy</h2>
          </Col>
          <Col lg={8}>
            <p className="contact-subtext" >Have questions? Want to inquire about our solutions? Please fill out your information to get in touch. Maybe you're looking for scalable, ROI+ growth. On perhaps you need help with your channel strategy. Our digital marketing experts love answering complex questions.</p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={8}>
            <Form onSubmit={handleSubmit} className="contact-form">
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button type="submit" variant="primary" className="submit-button">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>

        <Row className="contact-info mt-5">
          <div className="contact-info">
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <p>Email: xxxxxxxxxx@gmail.com</p>
            </div>
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <p>Phone: +91-XXXXXXXXXX</p>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Contact; 