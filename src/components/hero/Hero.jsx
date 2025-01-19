import { Link } from 'react-router-dom';
import './hero.css';
import backgroundImage from '../../assets/67240.jpg'; 
import { CiBank } from "react-icons/ci";
import { useEffect, useState } from 'react';

const Hero = () => {
  const [color, setColor] = useState('#000'); // Initial color

  useEffect(() => {
    const colors = ['#de245c','#000', '#FEC12F', '#FF5733', '#33FF57', '#3357FF']; 
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % colors.length; 
      setColor(colors[index]);
    }, 1000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <section className="hero">
      <div className="hero-background"  style={{ backgroundImage: `url(${backgroundImage})` }}>
       
      </div>
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
        <CiBank className="animated-icon" style={{ color: color, fontSize: '4rem' }}/>

        <h1>Empower Your Financial Future with Unity Finance</h1>
<p>Your trusted partner for banking, credit cards, loans, mortgages, and more. Discover tailored solutions that fit your financial needs.</p>
<div className="hero-actions">
  <Link to="/services" className="cta-button">
    Explore Our Services
  </Link>
  <Link to="/apply" className="secondary-button">
    Apply Now
  </Link>
</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;