import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './navtab.css';
import CheckingContent from './CheckingContent';
import SavingsContent from './SavingsContent';
import CreditCardsContent from './CreditCardsContent';
import BusinessLoansContent from './BusinessLoansContent';
import AutoLoansContent from './AutoLoansContent';
import InvestingContent from './InvestingContent';

const NavTabs = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tabs = [
    { id: 'checking', label: 'Checking' },
    { id: 'savings', label: 'Savings' },
    { id: 'credit-card', label: 'Credit Cards' },
    { id: 'home-loan', label: 'Business Loans' },
    { id: 'auto-loan', label: 'Auto Loans' },
    { id: 'investing', label: 'Investing' }
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setIsMenuOpen(false);
  };

  // Function to render content based on active tab
  const renderContent = () => {
    // Only render content if a tab is selected
    if (!activeTab) return null;

    switch(activeTab) {
      case 'checking':
        return <CheckingContent />;
      case 'savings':
        return <SavingsContent />;
      case 'credit-card':
        return <CreditCardsContent />;
      case 'home-loan':
        return <BusinessLoansContent />;
      case 'auto-loan':
        return <AutoLoansContent />;
      case 'investing':
        return <InvestingContent />;
      default:
        return null;
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <div 
        className="row togs d-none d-md-flex" 
        style={{
          paddingLeft: '3%',
          backgroundSize: 'contain',
          backgroundAttachment: 'fixed'
        }}
      >
        {tabs.map(tab => (
          <div key={tab.id} className="col-md-2 mini-nav-div">
            <button
              className={`mini-nav ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => handleTabClick(tab.id)}
            >
              <span className={`mini-nav-span ${tab.id}`}>
                <big>{tab.label}</big>
              </span>
            </button>
          </div>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="d-md-none mobile-nav">
        <button 
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaBars /> Menu
        </button>
        
        {isMenuOpen && (
          <div className="mobile-menu">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`mobile-menu-item ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="tab-content">
        {renderContent()}
      </div>
    </>
  );
};

export default NavTabs;