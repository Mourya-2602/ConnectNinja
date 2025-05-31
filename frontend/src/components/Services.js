import React from 'react';
import '../styles/Services.css';
import socialMediaManagement from '../assets/SocialMediaManagement.jpg';
import analyticsReporting from '../assets/Analytics_Reporting.jpg';
import influencerMarketing from '../assets/InfluencerMarketing.jpg';
import paidAdvertising from '../assets/PaidAdvertising.jpg';
import websiteBuilding from '../assets/WebsiteBuilding.jpg';
import contentCreation from '../assets/ContentCreation.jpg';

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="services" className="services-container">
      <h2 className="services-title">Our Services</h2>
      <p className="services-subtext">A full-stack suite of digital services to help your brand grow faster, smarter and stronger online</p>
      <div className="service-item full-width social-media" onClick={scrollToContact} style={{ cursor: 'pointer' }}>
        <img src={socialMediaManagement} alt="Social Media Management" />
        <div className="service-content">
          <h3>Social Media Management</h3>
          <p>Transform your social media presence with our comprehensive management services. We handle everything from content creation to community engagement, ensuring your brand maintains a strong and consistent voice across all platforms.</p>
        </div>
      </div>
      <div className="service-row">
        <div className="service-item analytics" onClick={scrollToContact} style={{ cursor: 'pointer' }}>
          <img src={analyticsReporting} alt="Analytics & Reporting" />
          <div className="service-content">
            <h3>Analytics & Reporting</h3>
            <p>Gain valuable insights into your digital performance with our detailed analytics and reporting services. We track key metrics and provide actionable recommendations to optimize your strategy.</p>
          </div>
        </div>
        <div className="service-item influencer" onClick={scrollToContact} style={{ cursor: 'pointer' }}>
          <img src={influencerMarketing} alt="Influencer Marketing" />
          <div className="service-content">
            <h3>Influencer Marketing</h3>
            <p>Connect with the right influencers to amplify your brand message. Our strategic approach helps you build authentic partnerships that drive engagement and conversions.</p>
          </div>
        </div>
      </div>
      <div className="service-row">
        <div className="service-item advertising" onClick={scrollToContact} style={{ cursor: 'pointer' }}>
          <img src={paidAdvertising} alt="Paid Advertising" />
          <div className="service-content">
            <h3>Paid Advertising</h3>
            <p>Maximize your ROI with our targeted paid advertising campaigns. We create and optimize ads across multiple platforms to reach your ideal audience and achieve your business goals.</p>
          </div>
        </div>
        <div className="service-item website" onClick={scrollToContact} style={{ cursor: 'pointer' }}>
          <img src={websiteBuilding} alt="Website Building" />
          <div className="service-content">
            <h3>Website Building</h3>
            <p>Create a stunning online presence with our custom website development services. We build responsive, user-friendly websites that convert visitors into customers.</p>
          </div>
        </div>
      </div>
      <div className="service-item full-width content" onClick={scrollToContact} style={{ cursor: 'pointer' }}>
        <img src={contentCreation} alt="Content Creation" />
        <div className="service-content">
          <h3>Content Creation</h3>
          <p>Engage your audience with compelling content that tells your brand story. From blog posts to social media content, we create materials that resonate with your target audience and drive engagement.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;