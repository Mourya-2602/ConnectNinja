import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/About.css';

const About = () => {
  const coFounders = [
    {
      name: "Yatharth Deheriya",
      role: "Founder ",
      bio: "Leads brand strategy and business growth.",
      linkedin: "https://www.linkedin.com/in/yatharth-daheriya-37358927b/",
      img: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Rajul Dwivedi",
      role: "Co-Founder",
      bio: "Heads content direction and creative campaigns.",
      linkedin: "https://www.linkedin.com/in/er-rajul-dwivedi-9a3387267/",
      img: "https://randomuser.me/api/portraits/men/76.jpg"
    },
    {
      name: "Siddarth Belwanshi",
      role: "Co-Founder & CEO",
      bio: "Leads innovation and strategic growth at ConnectNinja",
      linkedin: "https://linkedin.com/in/yatharth-deheriya",
      img: "https://randomuser.me/api/portraits/men/32.jpg"
    }
  ];

  return (
    <section id="about" className="about-section">
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col lg={8}>
            <h2 className="section-title">Meet the Ninja Crew</h2>
            <p className="section-intro large-intro">
              ConnectNinja is powered by a passionate team of marketing minds, designers, and developers 
              from IITs and NITs, each playing a key role in helping brands grow fast and smart.
            </p>
          </Col>
        </Row>

        {/* Co-Founders Section */}
        <Row className="justify-content-center mb-4">
          <Col lg={12} className="text-center">
            <h3 className="cofounders-heading"> Our Founder and Co Founders</h3>
          </Col>
        </Row>
        <Row className="co-founders-section">
          {coFounders.map((founder, index) => (
            <Col lg={4} key={index} className="mb-4">
              <Card className="founder-card h-100">
                <Card.Body className="text-center">
                  <div className="founder-image mb-2">
                    <img src={founder.img} alt={founder.name} className="founder-avatar" style={{ width: '100px', height: '100px' }} />
                  </div>
                  <h3 className="founder-name h5">{founder.name}</h3>
                  <p className="founder-role small">{founder.role}</p>
                  <p className="founder-bio small">{founder.bio}</p>
                  <a 
                    href={founder.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="linkedin-button btn btn-sm btn-outline-primary"
                  >
                    LinkedIn
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default About;