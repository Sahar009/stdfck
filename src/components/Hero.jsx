import React, { useState } from 'react';
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


const Hero = () => {
  const [activeTab, setActiveTab] = useState('checking');

  // Function to handle tab switching
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

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
              {/* Add credit card comparison cards */}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="row" style={{
          backgroundColor: '#d1c9c0',
          padding: '5%'
        }}>
          {/* Add feature boxes */}
        </div>

        {/* Final Sections */}
        {/* Add remaining sections */}
      </div>
    </section>
  );
};

export default Hero;