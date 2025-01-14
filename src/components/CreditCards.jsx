import React from 'react';
import { FaStar, FaStarHalf, FaRegStar } from 'react-icons/fa';
import rewardCard from '../assets/reward.png';
import masterCard from '../assets/master.png';
import platinumCard from '../assets/platinum.png';

const CreditCards = () => {
  const cardData = [
    {
      title: "Rewards Card",
      image: rewardCard,
      apr: "10.59% - 16.59% APR*",
      subtext: "on all purchases>",
      rating: 4.0,
      reviews: "16,524",
      stars: [1, 1, 1, 1, 0], // 1 for full, 0.5 for half, 0 for empty
      features: [
        "No annual fees",
        "Card fraud protection app",
        "Only a small foreign transaction fee"
      ]
    },
    {
      title: "Classic Card",
      image: masterCard,
      apr: "9.20% APR*",
      subtext: "on all purchases>",
      rating: 4.5,
      reviews: "12,585",
      stars: [1, 1, 1, 1, 0.5],
      features: [
        "No annual fees",
        "Card fraud protection app",
        "Only a small foreign transaction fee"
      ]
    },
    {
      title: "Platinum Card",
      image: platinumCard,
      apr: "18.59% APR",
      subtext: "on all purchases >",
      rating: 5.0,
      reviews: "1,140",
      stars: [1, 1, 1, 1, 1],
      features: [
        "Low $85 annual fee",
        "Card fraud protection app",
        "Only a small foreign transaction fee"
      ]
    }
  ];

  const renderStars = (stars) => {
    return stars.map((star, index) => {
      if (star === 1) return <FaStar key={index} size={24} />;
      if (star === 0.5) return <FaStarHalf key={index} size={24} />;
      return <FaRegStar key={index} size={24} />;
    });
  };

  return (
    <div className="row">
      {cardData.map((card, index) => (
        <div key={index} className="col-md-4">
          <div style={{ textAlign: 'center' }}>
            <h4 style={{
              color: '#50748a',
              lineHeight: '1.25em',
              fontWeight: 400,
              fontFamily: 'Slabo 13px, serif'
            }}>
              {card.title}
            </h4>
            <div>
              <div>
                <img 
                  src={card.image} 
                  alt={card.title.toLowerCase()} 
                  style={{ width: '220px' }}
                />
              </div>
              <span>
                <a 
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  style={{ 
                    fontFamily: 'Roboto Slab, sans-serif',
                    textDecoration: 'none'
                  }}
                >
                  <big>
                    {card.apr}<br/>
                    {card.subtext}
                  </big>
                </a>
              </span>
              <p style={{ color: '#FFD700' }}>
                {renderStars(card.stars)}
              </p>
              {card.rating}/5.0 ({card.reviews})
              <br />
              <ul 
                style={{
                  fontSize: '16px',
                  fontFamily: 'Roboto Slab, sans-serif',
                  color: '#000',
                  listStyle: 'none',
                  padding: 0,
                  marginTop: '15px'
                }}
              >
                {card.features.map((feature, idx) => (
                  <li key={idx}>
                    <b>*</b> {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CreditCards; 