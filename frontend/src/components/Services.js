import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/Services.css';

const Services = () => {
  const services = [
    {
      title: "Social Media Management",
      description: "We handle your brand's social presence like pros—planning, posting, and engaging daily.",
      icon: "📱"
    },
    {
      title: "Content Creation",
      description: "Scroll-stopping posts, reels, and visuals designed to go viral.",
      icon: "🎨"
    },
    {
      title: "Paid Advertising",
      description: "Ad campaigns with razor-sharp targeting to bring real ROI.",
      icon: "💰"
    },
    {
      title: "Influencer Marketing",
      description: "Collaborate with creators who influence your audience's decisions.",
      icon: "🌟"
    },
    {
      title: "Analytics & Reporting",
      description: "Track growth with clear, real-time data reports and insights.",
      icon: "📊"
    }
  ];

  return (
    <section id="services" className="services-section">
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col lg={8}>
            <h2 className="section-title">What We Do Best</h2>
            <p className="section-intro" style={{fontSize: '1.25rem', color: '#444', fontWeight: 500, marginBottom: '2.2rem'}}> We Make your identity stand out with pro visuals and content strategy.</p>
          </Col>
        </Row>

        <Row className="g-4">
          {services.map((service, index) => (
            <Col lg={4} md={6} key={index}>
              <Card className="service-card h-100">
                <Card.Body className="text-center">
                  <div className="service-icon mb-4">
                    {service.icon}
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services; 