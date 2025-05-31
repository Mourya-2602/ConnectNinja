import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Connect.css';

const Connect = () => {
  return (
    <section id="connect" className="connect-section">
      <Container className="connect-content-container">
      <div className="contact-hero">
          <h1>Contact Us</h1>
      </div>
      <h1 className="contact-text"> ────── Have a Project in Mind?</h1>
        <Row>
          <Col md={6} className="get-in-touch">
            <h2>Get in Touch with ConnectNinja </h2>
            <p>
              Feel free to connect with us for any of your needs regarding our services. Our support team is ready to solve any of your issues.
              Just push a text to us and we will get back to you immediately.Your satisfaction is our priority, and we're here to assist you anytime, anywhere.
            </p>
            <div className="contact-info">
              <div className="info-item-vertical">
                <i className="fas fa-map-marker-alt"></i>
                <p>MadhyaPradesh, India</p>
              </div>
              <div className="info-item-vertical">
                 <i className="fas fa-envelope"></i>
                <p>rajuldwivedi@gurukulres.com</p>
              </div>
              <div className="info-item-vertical">
                 <i className="fas fa-envelope"></i>
                <p>connectninja0@gmail.com</p>
              </div>
              <div className="info-item-vertical">
                 <i className="fas fa-phone"></i>
                <p>+91 7806058987</p>
              </div>
            </div>
          </Col>
          <Col md={6} className="drop-message-col">
            <a href="#contact" className="message-button">
              <h3>Drop Us a Message</h3>
            </a>
          </Col>
        </Row>
        <Row className="social-media-row">
          <Col className="text-center">
            <div className="social-icons">
              <a href="https://www.linkedin.com/company/connectninjafoundation-cnf/posts/?feedView=all" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
              <a href="https://www.instagram.com/connectninja/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://www.facebook.com/profile.php?id=61576374431787" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
              <a href="https://www.youtube.com/@ConnectNinja" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="copyright">
        <Container>
          <h5>&copy; {new Date().getFullYear()} ConnectNinja. All rights reserved.</h5>
        </Container>
      </div>
    </section>
  );
};

export default Connect;