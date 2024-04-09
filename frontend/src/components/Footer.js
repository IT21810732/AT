import React from 'react';
import './Footer.css'; 


function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-left">
        <img src="/images/LogoAT.png" alt="AT DIGITAL Logo" className="company-logo-footer" />
          <p>Your goal is our target. Not anything in between. We use</p> 
          <p>online marketing platforms and tools to achieve a single </p>
          <p>objective - your business results.</p>
        </div>
        <div className="footer-right">
          <div className="footer-column">
            <h3>Our Technologies</h3>
            <p>ReactJS</p>
            <p>Gatsby</p>
            <p>NextJS</p>
            <p>NodeJS</p>
          </div>
          <div className="footer-column">
            <h3>Our Services</h3>
            <p>Social Media Marketing</p>
            <p>Web & Mobile App Development</p>
            <p>Data & Analytics</p>
          </div>
        </div>
      </div>
      <hr className="divider" />
      <div className="footer-bottom">
        <div className="footer-links">
          <a href="/">Privacy Policy</a>
          <span>|</span>
          <a href="/">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
