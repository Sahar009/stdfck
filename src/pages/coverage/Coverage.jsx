import React from 'react';
import './coverage.css';
import { Link } from 'react-router-dom';
import { CiBank } from 'react-icons/ci';
import { ArrowLeft, Globe, Shield, Users } from 'lucide-react';

function Coverage() {
  return (
    <div className='coverage-main'>
      <div className="coverage-overlay"></div>
      <div className="coverage-container">
        <div className="coverage-header">
          <Link to="/" className="back-link">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <div className="logo-section">
            <CiBank size={60} color='#4dbf14' className='bank-icon'/>
            <h1>Our Coverage</h1>
          </div>
          <p className="subtitle">Banking services available worldwide</p>
        </div>

        <div className="coverage-content">
          <div className="coverage-grid">
            <div className="coverage-card">
              <Globe size={40} color='#4dbf14' />
              <h3>Global Reach</h3>
              <p>Access your accounts from anywhere in the world with our secure online banking platform.</p>
              <ul>
                <li>150+ countries supported</li>
                <li>Multi-currency accounts</li>
                <li>24/7 online access</li>
              </ul>
            </div>

            <div className="coverage-card">
              <Shield size={40} color='#4dbf14' />
              <h3>Secure Transactions</h3>
              <p>Bank with confidence knowing your transactions are protected by industry-leading security.</p>
              <ul>
                <li>256-bit encryption</li>
                <li>Fraud protection</li>
                <li>Two-factor authentication</li>
              </ul>
            </div>

            <div className="coverage-card">
              <Users size={40} color='#4dbf14' />
              <h3>Customer Support</h3>
              <p>Get help when you need it with our dedicated customer service team.</p>
              <ul>
                <li>24/7 phone support</li>
                <li>Live chat available</li>
                <li>Email support</li>
              </ul>
            </div>
          </div>

          <div className="coverage-regions">
            <h2>Served Regions</h2>
            <div className="regions-grid">
              <div className="region-item">
                <h4>North America</h4>
                <p>USA, Canada, Mexico</p>
              </div>
              <div className="region-item">
                <h4>Europe</h4>
                <p>UK, Germany, France, Spain, Italy</p>
              </div>
              <div className="region-item">
                <h4>Asia Pacific</h4>
                <p>Japan, Australia, Singapore, India</p>
              </div>
              <div className="region-item">
                <h4>Africa</h4>
                <p>South Africa, Nigeria, Kenya, Egypt</p>
              </div>
            </div>
          </div>
        </div>

        <div className="coverage-footer">
          <p>Questions about our coverage? <Link to="/contact">Contact our support team</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Coverage;
