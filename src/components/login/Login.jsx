import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="col-md-3">
      <div style={{
        backgroundColor: '#016696',
        padding: '4% 4% 4px 4%'
      }}>
        <h5 style={{
          color: '#fff',
          fontFamily: 'Roboto Condensed, sans-serif',
          padding: '5px'
        }}>
          ONLINE BANKING LOGIN
        </h5>
        <form onSubmit={handleSubmit} className="form">
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              style={{
                borderRadius: '0px',
                fontFamily: 'Roboto Condensed, sans-serif',
                fontWeight: 'bold'
              }}
            />
          </div>
          <br />
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="form-control"
              value={formData.password}
              onChange={handleChange}
              style={{
                borderRadius: '0px',
                fontFamily: 'Roboto Condensed, sans-serif',
                fontWeight: 'bold'
              }}
            />
          </div>
          <br />
          <label className="fancy-checkbox">
            <input
              type="checkbox"
              name="remember"
              checked={formData.remember}
              onChange={handleChange}
            />
            <span style={{
              fontFamily: 'Roboto Condensed, sans-serif',
              color: '#fff'
            }}>
              <small>Remember Me</small>
            </span>
          </label>
          <br />
          <button
            type="submit"
            className=" btn-remember red-button-solid"
          >
            Sign In
          </button>
          <br />
          <Link
            to="/forget-password"
            style={{
              color: '#fff',
              fontWeight: 'lighter',
              letterSpacing: '1px'
            }}
          >
            <small>Forgot Password?</small>
          </Link>
          <br />
          <Link
            to="/help"
            style={{
              color: '#fff',
              fontWeight: 'lighter',
              letterSpacing: '1px'
            }}
          >
            <small>Need Help?</small>
          </Link>
        </form>
      </div>
      <div style={{
        backgroundColor: '#4682B4',
        textAlign: 'center',
        fontWeight: 'lighter',
        padding: '2%',
        color: '#fff'
      }}>
        <Link
          to="/open-account"
          style={{
            color: '#fff',
            textDecoration: 'underline',
            fontFamily: 'Roboto Slab, sans-serif'
          }}
        >
          Online Enrollment
        </Link>
      </div>
    </div>
  );
};

export default Login;