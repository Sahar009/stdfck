import { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { CiBank } from "react-icons/ci";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/funds', label: 'Fund Management' },
    { path: '/businesses', label: 'Businesses & Institutions' },
    { path: '/help', label: 'Help Desk' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header className="main-header" >
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <CiBank size={40} color='#4dbf14' className='bank-icon'/>
            <span className='bank-name'>Unity </span>
          </Link>

          <nav className={`main-nav ${isMenuOpen ? 'active' : ''}`}>
            <ul>
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-actions">
            <button className="login-btn"><Link to="/login">Login</Link></button>
            {/* <button className="signup-btn">Sign Up</button> */}
            <button 
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
