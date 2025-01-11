import React from 'react';
import { FaCaretRight, FaChevronRight } from 'react-icons/fa';
// import autoImage from '../../assets/oldies.png';
import './navtab.css';
const AutoLoansContent = () => {
  const autoLoanFeatures = [
    'Low Auto Loan Rates- Call Us For Rates',
    'Automatic Payment Options',
    'Free online account access',
    'Refinance your current auto loan from another financial institution'
  ];

  return (
    <div 
      id="auto-loan2" 
      style={{ 
        paddingBottom: '2px', 
        backgroundColor: 'rgb(242, 242, 242)' 
      }}
    >
      <div 
        className="row" 
        style={{ 
          fontFamily: 'Roboto Condensed, sans-serif',
          paddingLeft: '4%',
          paddingTop: '2%'
        }}
      >
        {/* Description Column */}
        <div 
          className="col-md-4" 
          style={{ paddingBottom: '2px' }}
        >
          <big>
            Selecting the right auto loan is as important as finding 
            just what you want in a car or truck.
          </big>
          <br /><br />
          <button className=" blue-button">
            Learn More
          </button>
        </div>

        {/* Features Column */}
        <div 
          className="col-md-4" 
          style={{ 
            fontFamily: 'Roboto Condensed, sans-serif',
            paddingBottom: '2px' 
          }}
        >
          <big>
            <a 
              href="#" 
              onClick={(e) => e.preventDefault()}
              className="apply-link"
            >
              Apply now
            </a>
          </big>
          <br /><br />
          <big>
            <ul 
              style={{ 
                listStyle: 'none',
                fontFamily: 'Roboto Slab' 
              }}
            >
              {autoLoanFeatures.map((feature, index) => (
                <li key={index}>
                  <FaCaretRight className="me-2" /> {feature}
                </li>
              ))}
            </ul>
          </big>
        </div>

        {/* Image Column */}
        <div 
          className="col-md-4" 
          style={{ 
            fontFamily: 'Roboto Condensed, sans-serif',
            paddingRight: '10%',
            paddingBottom: '2px' 
          }}
        >
          <div 
            style={{ 
              backgroundColor: '#fff',
              padding: '5%' 
            }}
          >
            <small>
              AUTO LOANS<sup>®</sup>
            </small>
            <br />
            <div>
              <img 
                // src={autoImage} 
                alt="Auto Loans"
                style={{ width: '100%' }}
              />
            </div>
            <br />
            <big>
              <button className=" btn-sm blue-button-solid">
                Don't wait to apply <small><FaChevronRight /></small>
              </button>
            </big>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoLoansContent; 