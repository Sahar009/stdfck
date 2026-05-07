import React from 'react';
import './benefits.css';
import { Link } from 'react-router-dom';
import { CiBank } from 'react-icons/ci';
import { ArrowLeft, TrendingUp, Shield, Clock, DollarSign, Smartphone } from 'lucide-react';

function Benefits() {
  return (
    <div className='benefits-main'>
      <div className="benefits-overlay"></div>
      <div className="benefits-container">
        <div className="benefits-header">
          <Link to="/" className="back-link">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <div className="logo-section">
            <CiBank size={60} color='#4dbf14' className='bank-icon'/>
            <h1>Our Benefits</h1>
          </div>
          <p className="subtitle">Why choose Unity Finance for your banking needs</p>
        </div>

        <div className="benefits-content">
          <div className="benefits-grid">
            <div className="benefit-card">
              <TrendingUp size={40} color='#4dbf14' />
              <h3>Competitive Rates</h3>
              <p>Enjoy some of the best interest rates in the market with our transparent pricing structure.</p>
              <ul>
                <li>High-yield savings accounts</li>
                <li>Low loan interest rates</li>
                <li>No hidden fees</li>
              </ul>
            </div>

            <div className="benefit-card">
              <Shield size={40} color='#4dbf14' />
              <h3>Advanced Security</h3>
              <p>Your money and data are protected with state-of-the-art security measures.</p>
              <ul>
                <li>Bank-level encryption</li>
                <li>Fraud monitoring</li>
                <li>Secure authentication</li>
              </ul>
            </div>

            <div className="benefit-card">
              <Clock size={40} color='#4dbf14' />
              <h3>24/7 Access</h3>
              <p>Manage your finances anytime, anywhere with our always-available banking services.</p>
              <ul>
                <li>Round-the-clock support</li>
                <li>Mobile banking app</li>
                <li>Online account management</li>
              </ul>
            </div>

            <div className="benefit-card">
              <DollarSign size={40} color='#4dbf14' />
              <h3>No Monthly Fees</h3>
              <p>Enjoy banking without the burden of monthly maintenance fees.</p>
              <ul>
                <li>Free checking accounts</li>
                <li>No minimum balance</li>
                <li>Free online transfers</li>
              </ul>
            </div>

            <div className="benefit-card">
              <Smartphone size={40} color='#4dbf14' />
              <h3>Mobile Banking</h3>
              <p>Complete banking solutions right at your fingertips with our mobile app.</p>
              <ul>
                <li>Check balances instantly</li>
                <li>Transfer money easily</li>
                <li>Pay bills on the go</li>
              </ul>
            </div>

            <div className="benefit-card featured">
              <div className="featured-badge">Most Popular</div>
              <Shield size={40} color='#4dbf14' />
              <h3>FDIC Insured</h3>
              <p>Your deposits are protected up to $250,000 by FDIC insurance.</p>
              <ul>
                <li>Government protection</li>
                <li>Peace of mind</li>
                <li>Secure deposits</li>
              </ul>
            </div>
          </div>

          <div className="benefits-cta">
            <h2>Ready to experience these benefits?</h2>
            <p>Join thousands of satisfied customers who trust Unity Finance.</p>
            <div className="cta-buttons">
              <Link to="/register" className="cta-button primary">Open Account</Link>
              <Link to="/contact" className="cta-button secondary">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
