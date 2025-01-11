import React from 'react';
import { FaCaretRight, FaChevronRight } from 'react-icons/fa';
import creditCardImage from '../../assets/toggler2.jpg';
import './navtab.css';
const CreditCardsContent = () => {
  const creditCardFeatures = [
    'Advantage Visa as low as 9.95%* APR',
    'No Annual Fee',
    'ATM Access',
    'Low Annual Rate'
  ];

  return (
    <div 
      id="credit-card2" 
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
            Find the perfect credit card <br />
            from among our most<br />
            popular options
          </big>
          <br /><br />
          <button className="blue-button">
            Shop all credit cards
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
            <ul 
              style={{ 
                listStyle: 'none',
                fontFamily: 'Roboto Slab' 
              }}
            >
              {creditCardFeatures.map((feature, index) => (
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
            <small>FIND A CREDIT CARD QUICKLY</small>
            <br />
            <div>
              <img 
                src={creditCardImage} 
                alt="Credit Card Options"
                style={{ width: '100%' }}
              />
            </div>
            <br />
            <big>
              <button className="btn-sm blue-button-solid">
                Don't wait to apply <small><FaChevronRight /></small>
              </button>
            </big>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCardsContent;