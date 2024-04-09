import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

function Header() {
  return (
    <header>
      <img src="/images/LogoAT.png" alt="AT DIGITAL Logo" className="company-logo" />
      <nav>
        <ul>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/careers">Careers</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
