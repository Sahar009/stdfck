import './features.css';
import { CiBank } from "react-icons/ci";
import { FaHandsHelping } from 'react-icons/fa';
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaHouseCircleCheck } from "react-icons/fa6";


const Features = () => {
  const features = [
    {
      icon: <CiBank color="#c01e4e"/>,
      title: 'Secure Banking',
      description: 'Experience peace of mind with our state-of-the-art security measures, ensuring your financial transactions are safe and protected at all times.'
    },
    {
      icon:<FaMoneyCheckDollar color="#c01e4e"/>,
      title: 'Personalized Loan Options',
      description: 'Discover tailored loan solutions designed to meet your unique financial needs, with competitive rates and flexible terms to empower your goals.'
    },
    {
      icon: < FaHouseCircleCheck color="#c01e4e"/>,
      title: 'Mortgage Solutions',
      description: 'Navigate the home-buying process with confidence through our comprehensive mortgage solutions, offering expert guidance and competitive rates.'
    },
    {
      icon: <FaHandsHelping color="#c01e4e"/>,
      title: '24/7 Customer Support',
      description: 'Our dedicated support team is available around the clock to assist you with any inquiries or issues, ensuring you receive the help you need, whenever you need it.'
    }
  ];

  return (
    <section className="features">
      <div className="container">
        <h2>Why Choose unity</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 