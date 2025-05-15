import React, { useRef, useEffect } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import '../styles/Hero.css';

const socialPlatforms = [
  {
    name: 'YouTube',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="8" fill="#fff"/><path d="M25.6 12.2C25.6 12.2 25.4 10.8 24.7 10.1C23.8 9.2 22.8 9.2 22.3 9.1C19.6 8.9 16 8.9 16 8.9H16C16 8.9 12.4 8.9 9.7 9.1C9.2 9.2 8.2 9.2 7.3 10.1C6.6 10.8 6.4 12.2 6.4 12.2C6.4 12.2 6.2 13.7 6.2 15.2V16.8C6.2 18.3 6.4 19.8 6.4 19.8C6.4 19.8 6.6 21.2 7.3 21.9C8.2 22.8 9.3 22.7 9.8 22.8C12.5 23.1 16 23.1 16 23.1C16 23.1 19.6 23.1 22.3 22.8C22.8 22.7 23.8 22.8 24.7 21.9C25.4 21.2 25.6 19.8 25.6 19.8C25.6 19.8 25.8 18.3 25.8 16.8V15.2C25.8 13.7 25.6 12.2 25.6 12.2ZM14.4 19.1V13.1L19.7 16.1L14.4 19.1Z" fill="#FF0000"/></svg>
    )
  },
  {
    name: 'Bluesky',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="8" fill="#fff"/><path d="M16 23c-2.5-2.2-7.5-6.2-7.5-9.2C8.5 10.7 11.2 9 13.5 9c1.2 0 2.2.6 2.5 1.7C16.3 9.6 17.3 9 18.5 9c2.3 0 5 1.7 5 4.8 0 3-5 7-7.5 9.2z" fill="#0072E6"/></svg>
    )
  },
  {
    name: 'Facebook',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="8" fill="#fff"/><path d="M20.5 16H18V24H15V16H13.5V13.5H15V12.2C15 10.8 15.8 10 17.2 10H20V12.5H18.7C18.3 12.5 18 12.8 18 13.2V13.5H20.5V16Z" fill="#1877F3"/></svg>
    )
  },
  {
    name: 'LinkedIn',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="8" fill="#fff"/><path d="M12.5 13.5H10V24H13.5V13.5H12.5ZM11.2 12.2C12 12.2 12.7 11.5 12.7 10.7C12.7 9.9 12 9.2 11.2 9.2C10.4 9.2 9.7 9.9 9.7 10.7C9.7 11.5 10.4 12.2 11.2 12.2ZM22 16.5C22 14.6 20.7 13.5 18.9 13.5C17.7 13.5 17 14.2 16.7 14.7V13.5H13.5V24H17V18.2C17 17.2 17.2 16.3 18.3 16.3C19.3 16.3 19.5 17.1 19.5 18.3V24H22V16.5Z" fill="#0077B5"/></svg>
    )
  },
  {
    name: 'Instagram',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="8" fill="#fff"/><path d="M20.5 10H11.5C10.1 10 9 11.1 9 12.5V19.5C9 20.9 10.1 22 11.5 22H20.5C21.9 22 23 20.9 23 19.5V12.5C23 11.1 21.9 10 20.5 10ZM16 19C14.1 19 12.5 17.4 12.5 15.5C12.5 13.6 14.1 12 16 12C17.9 12 19.5 13.6 19.5 15.5C19.5 17.4 17.9 19 16 19ZM21 12.5C21.3 12.5 21.5 12.7 21.5 13C21.5 13.3 21.3 13.5 21 13.5C20.7 13.5 20.5 13.3 20.5 13C20.5 12.7 20.7 12.5 21 12.5Z" fill="#E1306C"/><circle cx="16" cy="15.5" r="2.5" fill="#E1306C"/></svg>
    )
  },
  {
    name: 'Twitter',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="8" fill="#fff"/><path d="M24 12.1C23.4 12.4 22.8 12.6 22.2 12.7C22.8 12.3 23.2 11.7 23.4 11C22.8 11.4 22.1 11.7 21.3 11.8C20.7 11.2 19.8 10.8 18.8 10.8C16.9 10.8 15.4 12.3 15.4 14.2C15.4 14.4 15.4 14.6 15.5 14.8C12.7 14.7 10.2 13.4 8.5 11.4C8.2 11.9 8 12.5 8 13.1C8 14.2 8.6 15.2 9.5 15.8C9 15.8 8.5 15.7 8 15.5C8 15.5 8 15.5 8 15.6C8 17.2 9.2 18.5 10.8 18.8C10.5 18.9 10.2 18.9 9.9 18.9C9.7 18.9 9.5 18.9 9.3 18.8C9.7 20.1 10.9 21 12.3 21C11.1 21.8 9.6 22.3 8 22.3C7.7 22.3 7.3 22.3 7 22.2C8.4 23.1 10.1 23.7 12 23.7C18.8 23.7 22.7 18.9 22.7 14.6C22.7 14.5 22.7 14.4 22.7 14.3C23.3 13.8 23.8 13.3 24 12.7V12.1Z" fill="#1DA1F2"/></svg>
    )
  }
];

const Hero = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop += 2;
        if (
          scrollRef.current.scrollTop >=
          scrollRef.current.scrollHeight - scrollRef.current.clientHeight
        ) {
          scrollRef.current.scrollTop = 0;
        }
      }
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section-light mt-navbar-gap">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col lg={7} className="text-center">
            <h1 className="hero-headline">Turn Clicks into Customers with ConnectNinja</h1>
            <div className="hero-email-form">
              <Form className="d-flex flex-column flex-md-row align-items-center justify-content-center mt-4">
                <Form.Control
                  type="email"
                  placeholder="Enter your email..."
                  className="hero-email-input"
                />
                <Button type="submit" className="get-started-btn ms-md-3 mt-3 mt-md-0">
                  Get started now →
                </Button>
              </Form>
            </div>
            <p className="hero-subheadline">
              Struggling to get real results from social media? At ConnectNinja, we blend creativity with
              proven strategy to help your brand stand out, attract the right audience, and turn casual
              scrollers into loyal customers. Whether you're just starting out or ready to scale, we'll craft
              campaigns that actually work without the fluff.
            </p>
            <Button
              variant="danger"
              size="lg"
              className="cta-button"
              onClick={() => window.location.href = '#contact'}
            >
              Book a Free Strategy Call
            </Button>
          </Col>
          <Col lg={5} className="d-none d-lg-flex align-items-center justify-content-center">
            <div className="social-scroll-container wide" ref={scrollRef}>
              {socialPlatforms.concat(socialPlatforms).map((platform, idx) => (
                <div className="social-scroll-item" key={idx}>
                  <span className="social-icon">{platform.icon}</span>
                  <span className="social-name">{platform.name}</span>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero; 