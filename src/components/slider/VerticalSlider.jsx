import React, { useState, useEffect } from 'react';
import './VerticalSlider.css';

// Import your images
import slide1 from '../../assets/001.jpg';
import slide2 from '../../assets/002.jpg';
import slide3 from '../../assets/003.jpg';
import slide4 from '../../assets/004.jpg';
import slide5 from '../../assets/005.jpg';

const VerticalSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    { id: 1, image: slide1 },
    { id: 2, image: slide2 },
    { id: 3, image: slide3 },
    { id: 4, image: slide4 },
    { id: 5, image: slide5 }
  ];

  // Auto slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => 
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const handleBulletClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div 
      id="jssor_1" 
      style={{
        position: 'relative',
        margin: '0 auto',
        top: 0,
        left: 0,
        width: '640px',
        height: '248.163px',
        overflow: 'hidden',
        visibility: 'visible'
      }}
    >
      <div 
        className="slides-container"
        style={{
          position: 'absolute',
          display: 'block',
          top: 0,
          left: 0,
          width: '640px',
          height: '248.163px'
        }}
      >
        <div 
          className="slides-wrapper"
          style={{
            position: 'absolute',
            display: 'block',
            top: '-65.9184px',
            left: '-170px',
            width: '980px',
            height: '380px',
            transform: 'scale(0.653714)'
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="slide"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '980px',
                height: '380px',
                opacity: currentSlide === index ? 1 : 0,
                transition: 'opacity 0.5s ease-in-out'
              }}
            >
              <img
                src={slide.image}
                alt={`Slide ${slide.id}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bullet Navigator */}
      <div className="bullet-navigator">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`bullet ${currentSlide === index ? 'active' : ''}`}
            onClick={() => handleBulletClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          >
            <svg viewBox="0 0 16000 16000">
              <circle className="b" cx="8000" cy="8000" r="5800" />
            </svg>
          </button>
        ))}
      </div>
    </div>
  );
};

export default VerticalSlider; 