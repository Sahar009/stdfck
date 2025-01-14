import React from 'react';
import emvChip from '../assets/emvchip.webp';
import smartphone from '../assets/smartphone.webp';
import creditStore from '../assets/creditstore.svg';
import moneyIcon from '../assets/money.svg';

const Features = () => {
  const features = [
    {
      image: emvChip,
      imageWidth: '80px',
      title: 'EMV Chip Cards',
      titleColor: '#6a3433',
      description: "We've transitioned all our cards to the more secure EMV chip cards. This helps us keep our members' money more secure.",
      buttonClass: 'blood-button-solid'
    },
    {
      image: creditStore,
      imageWidth: 'auto',
      title: "Looking to improve your company's credit?",
      titleColor: '#DC1431',
      description: "Learn how you can improve your company's credit score and grow your business.",
      buttonClass: 'red-button-solid'
    },
    {
      image: smartphone,
      imageWidth: '80px',
      title: 'Secure Mobile Banking',
      titleColor: '#6a3433',
      description: 'Staying on top of your bank accounts is easier than ever with mobile banking. Perfect for business owners or busy people!',
      buttonClass: 'blood-button-solid'
    },
    {
      image: moneyIcon,
      imageWidth: 'auto',
      title: 'Discover Standard Unity Finance Bank for business',
      titleColor: '#DC1431',
      description: 'Explore small business banking solutions plus investment options from Standard Unity Finance Bank.',
      buttonClass: 'red-button-solid'
    }
  ];

  return (
    <div 
      className="row" 
      style={{ 
        backgroundColor: '#d1c9c0',
        padding: '5%'
      }}
    >
      {features.map((feature, index) => (
        <div key={index} className="col-md-3" id="info-div">
          <div style={{ padding: '5%' }}>
            <div>
              <img 
                style={{ width: feature.imageWidth }} 
                src={feature.image} 
                alt={feature.title.toLowerCase()}
              />
            </div>
            <big 
              style={{ 
                color: feature.titleColor,
                fontFamily: 'Roboto Slab, sans-serif',
                fontWeight: 'lighter'
              }}
            >
              {feature.title}
            </big>
            <p 
              style={{ 
                color: '#000',
                fontFamily: 'Roboto Condensed, sans-serif'
              }}
            >
              <small>{feature.description}</small>
            </p>
            <a 
              href="#"
              onClick={(e) => e.preventDefault()}
              className={feature.buttonClass}
              id="learnmore"
            >
              Learn More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features; 