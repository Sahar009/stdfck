import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import { CiBank } from 'react-icons/ci';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="logo-container">
        <Link to="/" className="logo">
            <CiBank size={40} color='#4dbf14' className='bank-icon'/>
            <span className='bank-name'>Unity </span>
          </Link>        </div>
      </div>
      
      <div className="footer-content">
        <div className="footer-column">
          <h3>Product</h3>
          <ul>
            <li><a href="/coverage">Coverage</a></li>
            <li><a href="/benefits">Benefits</a></li>
            <li><a href="/methods">Methods</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Company</h3>
          <ul>
          
            <li><Link href="/contact">Contact us</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Legal</h3>
          <ul>
            <li><Link href="/privacy-policy">Privacy policy</Link></li>
            <li><Link href="/terms-and-conditions">Terms and conditions</Link></li>
            <li><Link href="/anti-laundring">Anti Money Laundering policy</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Support</h3>
          <div className="support-content">
            <div className="support-item">
              <p>Technical Issues</p>
              <a href="mailto:technical@unityfinance.finance">technical@unityfinance.finance</a>
            </div>
            <div className="support-item">
              <p>Any Issues</p>

              <a href="mailto:support@unityfinance.finance">support@unityfinance.finance</a>
            </div>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 Unity Finance</p>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;