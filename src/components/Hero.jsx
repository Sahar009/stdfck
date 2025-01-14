import React, { useState } from 'react';
import './hero.css'
import { Link } from 'react-router-dom';
import { FaCaretRight, FaStar, FaStarHalf, FaRegStar } from 'react-icons/fa';
import logo from '../assets/logo.png';
import emvChip from '../assets/emvchip.webp';
import smartphone from '../assets/smartphone.webp';
import creditStore from '../assets/creditstore.svg';
import moneyIcon from '../assets/money.svg';
import rewardCard from '../assets/reward.png';
import masterCard from '../assets/master.png';
import platinumCard from '../assets/platinum.png';
import allianceCredited from '../assets/alliancecredited.png';
import Login from './login/Login';
import NavTabs from './navTab/NavTabs';
import CheckingContent from './navTab/CheckingContent';
import VerticalSlider from './slider/VerticalSlider';
import CreditCards from './CreditCards';
import Features from './Features';
import image1 from '../assets/ud1.png';
import image2 from '../assets/ud2.png';
import image3 from '../assets/ud3.png';
import image4 from '../assets/ud4.png';
import allianceLogo from '../assets/alliancecredited.png';
import appImage from '../assets/newapp2.png';
import { FaSpaceShuttle } from 'react-icons/fa';





const Hero = () => {
  const [activeTab, setActiveTab] = useState('checking');

  // Function to handle tab switching
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  const securityTips = [
    "Giving away your Internet Banking login, card details, PIN and codes from your token device, gives anyone total access to your account. Standard Unity Finance Bank will never ask for any of these details via any form of communications",
    "Seeing a phone number or email address you recognize does not mean it is genuine. Always give cold-callers a cold reception",
    "Create strong passwords for your Internet Banking login and card details. Change them often.",
    "Check your bank account statements and card transactions regularly to make sure these only reflect transactions you have made. If you see a transaction you cannot explain, report it to the bank.",
    "Always log-out after using Online Banking."
  ];

  const interestRates = [
    [
      { rate: '2.22%', description: '48 MONTH CERTIFICATE' },
      { rate: '0.30%', description: 'SAVINGS ACCOUNT' }
    ],
    [
      { rate: '0.35%', description: 'MONEY MARKET' },
      { rate: '0.49%', description: 'IRA' }
    ]
  ];

  return (
    <section>
      <div className="container-fluid">
        {/* Navigation Tabs */}
        <NavTabs/>

        {/* Tab Content */}
        <div 
          id="checking2" 
          style={{ 
            paddingBottom: '2px', 
            backgroundColor: '#f2f2f2', 
            display: activeTab === 'checking' ? 'block' : 'none' 
          }}
        >
          {/* Checking content */}
         
        </div>

        {/* Login Section */}
        <div 
      className="row"
      style={{
        paddingLeft: '3.5%',
        paddingRight: '3%',
        marginTop: '2%',
        paddingBottom: '3%',
        // backgroundImage: `url(${backgroundImage})`,
      
      }}
    >
        
        <Login/>
      
        <div className='col-md-9'>
        <VerticalSlider />
        </div>
       

      </div>

        {/* Credit Card Comparison Section */}
        <div className="row">
          <div className="col-md-12" style={{ backgroundColor: '#f2f2f2' }}>
            <div style={{ padding: '5%' }}>
              <h2 className="text-center" style={{
                color: '#DC1431',
                fontFamily: 'Roboto Slab, sans-serif',
                fontWeight: 'lighter'
              }}>
                Which Credit Card is best for you?
              </h2>
             <CreditCards/>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="row" style={{
          backgroundColor: '#d1c9c0',
          padding: '5%'
        }}>
        <Features/>
        </div>
        <div 
      style={{
        textAlign: 'center',
        color: '#000',
        padding: '5% 5% 1% 5%'
      }}
    >
      <h1 
        id="heas" 
        style={{
          color: '#000',
          fontFamily: 'Roboto Slab, sans-serif',
          fontWeight: 'lighter'
        }}
      >
        Making your money work for your financial life
      </h1>
      <span 
        style={{
          fontFamily: 'Roboto Slab, sans-serif'
        }}
      >
        Explore priorities below to get started
      </span>
    </div>
    
    <div 
      className="row" 
      style={{ 
        paddingLeft: '3%', 
        paddingRight: '3%' 
      }}
    >
      <div 
        className="col-md-3" 
        style={{ 
          paddingBottom: '2%', 
          paddingTop: '5%' 
        }}
      >
        <img 
          src={image1} 
          alt="image" 
          style={{ maxWidth: '100%' }}
        />
      </div>

      <div 
        className="col-md-3" 
        style={{ 
          paddingBottom: '2%', 
          paddingTop: '5%' 
        }}
      >
        <img 
          src={image2} 
          alt="image" 
          style={{ maxWidth: '100%' }}
        />
      </div>

      <div 
        className="col-md-3" 
        style={{ 
          paddingBottom: '2%', 
          paddingTop: '5%' 
        }}
      >
        <img 
          src={image3} 
          alt="image" 
          style={{ maxWidth: '100%' }}
        />
      </div>

      <div 
        className="col-md-3" 
        style={{ 
          paddingBottom: '2%', 
          paddingTop: '5%' 
        }}
      >
        <img 
          src={image4} 
          alt="image" 
          style={{ maxWidth: '100%' }}
        />
      </div>
    </div>
    <div 
      style={{
        textAlign: 'center',
        color: '#000',
        padding: '5% 5% 1% 5%'
      }}
    >
      <p>See Our Financial Center Locations</p>
      <button 
      style={{
        width:'200px',
        padding:'7px'
      }}
        className="btn btn-primary red-button-solid"
        onClick={(e) => e.preventDefault()}
      >
        More About Us<sup>®</sup>
      </button>
      <h1 
  id="heas" 
  style={{
    color: '#DC1431',
    fontFamily: 'Roboto Condensed, sans-serif',
    fontWeight: 'lighter'
  }}
>
  We Strive to Provide the Best Service
</h1>    </div>

    <div 
      className="container" 
      style={{ paddingBottom: '3%' }}
    >
      <div className="row">
        <div 
          className="col-md-7" 
          style={{ paddingBottom: '10px' }}
        >
          <div>
            <h1 
              id="heas" 
              style={{
                color: '#016696',
                fontFamily: 'Roboto Condensed, sans-serif',
                fontWeight: 'lighter'
              }}
            >
              Our Online Banking is Secured!
            </h1>
            <hr 
              style={{
                border: '2px solid #e2e2e2',
                width: '20%',
                float: 'left'
              }}
            />
            <p 
              style={{
                clear: 'both',
                fontFamily: 'Roboto Slab, sans-serif'
              }}
            >
              <big>Both are certified for providing</big>
              <br />
              <big 
                style={{
                  color: 'grey',
                  fontWeight: 'bold',
                  fontFamily: 'Roboto Condensed, sans-serif',
                  fontStyle: 'italic'
                }}
              >
                <i>"An Excellent User Experience"</i>
              </big>
            </p>
            <button className="blue-button">
              Check it out
            </button>
          </div>
        </div>

        <div 
          className="col-md-5" 
          style={{ 
            padding: '7% 5% 100px 5%' 
          }}
        >
          <img 
            src={allianceLogo} 
            alt="Alliance Credited"
            style={{ maxWidth: '100%' }}
          />
        </div>
      </div>
    </div>
 
    <section 
      className="call-to-action section-sm" 
      style={{ backgroundColor: '#6a3433' }}
    >
      <div className="container">
        <div className="row">
          <div 
            className="col-md-6" 
            style={{ paddingBottom: '10px' }}
          >
            <div>
              <h1 
                id="heas" 
                style={{
                  color: '#fff',
                  fontFamily: 'Roboto Condensed, sans-serif',
                  fontWeight: 'lighter'
                }}
              >
                Online Banking
              </h1>

              <p 
                style={{
                  fontFamily: 'Roboto Condensed, sans-serif',
                  textAlign: 'justify',
                  color:"#fff",
                }}
              >
                Standard Unity Finance Bank Online allows you direct access to your accounts. 
                You can check your balances, transfer money, make loan payments and print 
                copies of checks that have cleared your account. All of this from the comfort 
                of your own home. Standard Unity Finance Bank offers outstanding online 
                banking for all of your accounts!
              </p>

              <button className="red-button-solid">
                Explore our app
              </button>
            </div>
          </div>

          <div 
            className="col-md-6" 
            style={{ padding: '5%' }}
          >
            <img 
              src={appImage} 
              alt="Banking App Interface"
              style={{ maxWidth: '100%' }}
            />
          </div>
        </div>
      </div>
    </section>

    <section style={{ backgroundColor: '#f9f7f3', padding: '3%' }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div id="securitytips">
              <h5 
                style={{
                  textDecoration: 'none',
                  color: '#6a3433',
                  fontFamily: 'Roboto Condensed, sans-serif'
                }}
              >
                Standard Unity Finance Bank Online Banking Security Tips:
              </h5>

              {securityTips.map((tip, index) => (
                <p 
                  key={index}
                  style={{
                    color: '#000',
                    fontWeight: 'lighter',
                    fontSize: '14px'
                  }}
                >
                  <FaSpaceShuttle /> {tip}
                </p>
              ))}

              <br />

              <h6 
                style={{
                  fontFamily: 'Roboto Slab, sans-serif',
                  fontWeight: 'bold',
                  color: '#250858'
                }}
              >
                Standard Unity Finance Bank CURRENT INTEREST RATES:
              </h6>

              <div className="single-table">
                <div className="table-responsive">
                  <table 
                    className="table text-center" 
                    style={{
                      border: '1px solid #250858',
                      fontFamily: 'Slabo 13px, sans-serif'
                    }}
                  >
                    <tbody>
                      {interestRates.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                          {row.map((item, colIndex) => (
                            <th 
                              key={colIndex}
                              style={{ border: '1px solid #250858' }}
                            >
                              <big>
                                <span style={{ color: '#A94D91' }}>
                                  {item.rate}
                                </span>{' '}
                                {item.description}
                              </big>
                            </th>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <hr style={{ border: '1px solid #e2e2e2' }} />
            </div>
          </div>
        </div>
      </div>
    </section>

      </div>
    </section>
  );
};

export default Hero;