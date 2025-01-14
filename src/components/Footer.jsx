import React from 'react';
import { Link } from 'react-router-dom';
import foot1 from '../assets/foot1.png';
import foot2 from '../assets/foot2.jpg';
import foot3 from '../assets/foot3.png';
import foot4 from '../assets/foot4.png';
import './Footer.css'

const Footer = () => {
  const footerLinks = [
    { path: '/', text: 'Home' },
    { path: '/contact', text: 'Contact Us' },
    { path: '/help', text: 'Help' },
    { path: '/privacy', text: 'Privacy & Security' }
  ];

  const footerImages = [
    { src: foot1, alt: 'Footer Logo 1' },
    { src: foot2, alt: 'Footer Logo 2' },
    { src: foot3, alt: 'Footer Logo 3' },
    { src: foot4, alt: 'Footer Logo 4' }
  ];

  return (
    <footer 
      id="footer" 
      className="bg-one" 
      style={{
        backgroundColor: '#f2f2f2',
        marginTop: '-5%'
      }}
    >
      <div 
        className="footer-bottom" 
        style={{
          paddingLeft: '10%',
          paddingRight: '10%',
          backgroundColor: '#f2f2f2',
          border: 'none'
        }}
      >
        <p style={{
          fontSize: '12px',
          fontFamily: 'Roboto Condensed, sans-serif',
          color: '#e2e2e2'
        }}>
          <ul style={{ color: '#c7c7c7' }}>
            <small>
            {footerLinks.map((link, index) => (
              <React.Fragment key={index}>
                <li className="footer-li">
                  <Link to={link.path}>{link.text}</Link>
                </li>
                {index < footerLinks.length - 1 && <span className="separator">|</span>}
              </React.Fragment>
            ))}
            </small>
          </ul>
        </p>

        <br />
        
        <div>
          {footerImages.map((image, index) => (
            <img 
              key={index}
              src={image.src}
              alt={image.alt}
              style={{ maxWidth: '100%' }}
            />
          ))}
        </div>

        <p style={{ fontFamily: 'Roboto Slab, sans-serif' }}>
          <small><small>
            Standard Unity Finance Bank is committed to providing a website that is 
            accessible to the widest possible audience in accordance with ADA standards 
            and guidelines. If you are using a screen reader or other auxiliary aid and 
            are having problems using this website, email us for assistance. You can also 
            visit any of our physical branches where we can assist you further, since all 
            products and services available on this website are also available at all 
            Standard Unity Finance Bank branches. Standard call center and branch hours 
            are Monday, Tuesday and Thursday from 9:00 AM to 5:00 PM, Wednesday from 
            9:00 AM to 5:00 PM and Friday from 9:00 AM to 6:00 PM excluding holidays. 
            Some branch locations also offer Saturday hours from 9:00 AM to 1:00 PM. 
            If you have questions, feedback or suggestions, you may also send an email to{' '}
            <a href="mailto:support@stnduntyfncbk.com">
              support@stnduntyfncbk.com
            </a>
            <br />
            <b>© 2025 Standard Unity Finance Bank. All rights reserved.</b>
          </small></small>
        </p>
      </div>
    </footer>
  );
};

export default Footer; 