import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../../store/auth/authSlice';
import './header.css';
import { CiBank } from "react-icons/ci";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    // { path: '/funds', label: 'Fund Management' },
    { path: '/business', label: 'Businesses & Institutions' },
    { path: '/contact', label: 'Help Desk' },
    // { path: '/contact', label: 'Contact' }
  ];

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <section className="main-header" >
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
            {user ? (
              <>
                <button className="login-btn">
                  <Link to="/dashboard">Dashboard</Link>
                </button>
                <button className="login-btn" onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <button className="login-btn">
                <Link to="/login">Login</Link>
              </button>
            )}
            {/* <button className="signup-btn">Sign Up</button> */}
            <button 
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <FaBars size={20} color='#4dbf14'/>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
