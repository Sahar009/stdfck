import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
// import investingImage from '../../assets/oldies.png';
import './navtab.css';
const InvestingContent = () => {
  const investmentLinks = [
    'Retirement Planning',
    'IRAs and 504(k) Rollovers',
    '754 College Savings Plans',
    'Investment Choices'
  ];

  return (
    <div 
      id="investing2" 
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
            Enjoy an outstanding investing <br />
            experience with Standard Unity Finance Bank®
          </big>
          <br /><br />
          <button className="btn blue-button">
            See how
          </button>
        </div>

        {/* Links Column */}
        <div 
          className="col-md-4" 
          style={{ 
            fontFamily: 'Roboto Condensed, sans-serif',
            paddingBottom: '2px' 
          }}
        >
          {investmentLinks.map((link, index) => (
            <React.Fragment key={index}>
              <big>
                <a 
                  href="#" 
                  onClick={(e) => e.preventDefault()}
                  className="investment-link"
                >
                  {link}
                </a>
              </big>
              <br /><br />
            </React.Fragment>
          ))}
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
              Investing<sup>®</sup>
            </small>
            <br />
            <div>
              <img 
                // src={investingImage} 
                alt="Investing Options"
                style={{ width: '100%' }}
              />
            </div>
            <br />
            <big>
              <button className="btn btn-sm blue-button-solid">
                Don't wait to apply <small><FaChevronRight /></small>
              </button>
            </big>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestingContent;