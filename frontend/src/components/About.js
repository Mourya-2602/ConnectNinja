import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/About.css';

const About = () => {
  const coFounders = [
    {
      name: "Yatharth Deheriya",
      role: "Co-Founder & CEO",
      bio: "Leads brand strategy and business growth.",
      linkedin: "https://linkedin.com/in/yatharth-deheriya",
      img: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Rajul Dwivedi",
      role: "Co-Founder",
      bio: "Heads content direction and creative campaigns.",
      linkedin: "https://linkedin.com/in/rajul-dew",
      img: "https://randomuser.me/api/portraits/men/76.jpg"
    }
  ];

  const teamMembers = [
    { name: "Web Developer", role: "Web Developer", img: "https://randomuser.me/api/portraits/men/45.jpg", linkedin: "https://linkedin.com/in/webdev" },
    { name: "Social Media Manager", role: "Social Media Manager", img: "https://randomuser.me/api/portraits/women/65.jpg", linkedin: "https://linkedin.com/in/smm" },
    { name: "Video Editor", role: "Video Editor", img: "https://randomuser.me/api/portraits/men/85.jpg", linkedin: "https://linkedin.com/in/videoeditor" },
    { name: "Graphic Designer", role: "Graphic Designer", img: "https://randomuser.me/api/portraits/women/25.jpg", linkedin: "https://linkedin.com/in/graphicdesigner" }
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
            <h3 className="cofounders-heading">Co Founders</h3>
          </Col>
        </Row>
        <Row className="co-founders-section">
          {coFounders.map((founder, index) => (
            <Col lg={6} key={index} className="mb-4">
              <Card className="founder-card">
                <Card.Body className="text-center">
                  <div className="founder-image mb-3">
                    <img src={founder.img} alt={founder.name} className="founder-avatar" />
                  </div>
                  <h3 className="founder-name">{founder.name}</h3>
                  <p className="founder-role">{founder.role}</p>
                  <p className="founder-bio">{founder.bio}</p>
                  <a 
                    href={founder.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="linkedin-button"
                  >
                    LinkedIn
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Team Members Section */}
        <Row className="justify-content-center mb-4">
          <Col lg={12} className="text-center">
            <h3 className="coreteam-heading">Core Team</h3>
          </Col>
        </Row>
        <Row className="team-members-section">
          <Col>
            <div className="team-slider-horizontal">
              {teamMembers.map((member, index) => (
                <Card key={index} className="team-card-small">
                  <Card.Body className="text-center p-3">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <img src={member.img} alt={member.name} className="team-avatar mb-2" />
                    </a>
                    <h4 className="team-name mb-1">{member.name}</h4>
                    <p className="team-role mb-0">{member.role}</p>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About; 