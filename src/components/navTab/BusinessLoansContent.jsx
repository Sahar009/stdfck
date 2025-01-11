import React from 'react';
import { FaCaretRight, FaChevronRight } from 'react-icons/fa';
import businessImage from '../../assets/toggler3.png';
import './navtab.css';
const BusinessLoansContent = () => {
  const loanTypes = [
    'Collateral Loans (Equipment and Vehicles)',
    'Rental Investment Properties (Non-Owner Occupied)',
    'Commercial Real Estate Loans'
  ];

  return (
    <div 
      id="home-loan2" 
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
            There are many reasons for our business members to get a commercial loan. 
            Whether it's purchasing new equipment, purchasing a new building or 
            expanding your current business location through construction of a new 
            building, we are here to help our business members in any way that we can. 
            That's why our loan program is designed to be flexible enough to suit any 
            of our member's business needs
          </big>
          <br /><br />
        </div>

        {/* Loan Types Column */}
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
              {loanTypes.map((loanType, index) => (
                <li key={index}>
                  <FaCaretRight className="me-2" /> {loanType}
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
              BUSINESS LOANS<sup>®</sup>
            </small>
            <br />
            <div>
              <img 
                src={businessImage} 
                alt="Business Loans"
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

export default BusinessLoansContent;