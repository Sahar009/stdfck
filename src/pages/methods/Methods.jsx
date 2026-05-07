import React from 'react';
import './methods.css';
import { Link } from 'react-router-dom';
import { CiBank } from 'react-icons/ci';
import { ArrowLeft, CreditCard, Smartphone, Globe, Shield, Clock } from 'lucide-react';

function Methods() {
  return (
    <div className='methods-main'>
      <div className="methods-overlay"></div>
      <div className="methods-container">
        <div className="methods-header">
          <Link to="/" className="back-link">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <div className="logo-section">
            <CiBank size={60} color='#4dbf14' className='bank-icon'/>
            <h1>Banking Methods</h1>
          </div>
          <p className="subtitle">Multiple ways to manage your finances</p>
        </div>

        <div className="methods-content">
          <div className="methods-grid">
            <div className="method-card">
              <CreditCard size={40} color='#4dbf14' />
              <h3>Online Banking</h3>
              <p>Access your accounts 24/7 through our secure online platform.</p>
              <ul>
                <li>Account management</li>
                <li>Bill payments</li>
                <li>Transfer funds</li>
                <li>Transaction history</li>
              </ul>
              <button className="method-button">Learn More</button>
            </div>

            <div className="method-card">
              <Smartphone size={40} color='#4dbf14' />
              <h3>Mobile Banking</h3>
              <p>Bank on the go with our feature-rich mobile application.</p>
              <ul>
                <li>Push notifications</li>
                <li>Mobile deposits</li>
                <li>Biometric login</li>
                <li>Real-time alerts</li>
              </ul>
              <button className="method-button">Download App</button>
            </div>

            <div className="method-card">
              <Globe size={40} color='#4dbf14' />
              <h3>International Transfers</h3>
              <p>Send money worldwide with competitive exchange rates.</p>
              <ul>
                <li>150+ countries</li>
                <li>Low transfer fees</li>
                <li>Fast processing</li>
                <li>Currency conversion</li>
              </ul>
              <button className="method-button">Send Money</button>
            </div>

            <div className="method-card">
              <Shield size={40} color='#4dbf14' />
              <h3>ATM Services</h3>
              <p>Access cash and banking services at thousands of ATMs.</p>
              <ul>
                <li>Free withdrawals</li>
                <li>Balance inquiries</li>
                <li>Deposit checks</li>
                <li>Card management</li>
              </ul>
              <button className="method-button">Find ATM</button>
            </div>

            <div className="method-card featured">
              <div className="featured-badge">Recommended</div>
              <Clock size={40} color='#4dbf14' />
              <h3>Instant Transfers</h3>
              <p>Send money instantly to other Unity Finance users.</p>
              <ul>
                <li>Real-time processing</li>
                <li>No transfer fees</li>
                <li>Available 24/7</li>
                <li>Instant notifications</li>
              </ul>
              <button className="method-button">Start Transfer</button>
            </div>
          </div>

          <div className="methods-steps">
            <h2>How to Get Started</h2>
            <div className="steps-grid">
              <div className="step-item">
                <div className="step-number">1</div>
                <h4>Open Account</h4>
                <p>Register online in minutes with our simple application process.</p>
              </div>
              <div className="step-item">
                <div className="step-number">2</div>
                <h4>Verify Identity</h4>
                <p>Complete quick verification to secure your account.</p>
              </div>
              <div className="step-item">
                <div className="step-number">3</div>
                <h4>Start Banking</h4>
                <p>Access all our banking methods immediately after approval.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Methods;
