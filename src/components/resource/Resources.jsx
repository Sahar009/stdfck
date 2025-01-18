import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css'; 
import './Resources.css';
import image1 from '../../assets/acct.jpg'
import image2 from '../../assets/acct2.jpg'
import image3 from '../../assets/acct3.jpg'
import image4 from '../../assets/acct4.jpg'
import image5 from '../../assets/acct5.jpg'
import image6 from '../../assets/acct6.jpg'
import image7 from '../../assets/acct7.jpeg'
import image8 from '../../assets/acct8.jpeg'
import image9 from '../../assets/acct9.jpg'
import image10 from '../../assets/acct10.jpg'
import image11 from '../../assets/acct11.jpg'
import image12 from '../../assets/acc11.jpg'
const Resources = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'account-management', label: 'Account Management' }, 
     { id: 'guides', label: 'Guides' },
    { id: 'loans-mortgages', label: 'Loans & Mortgages' },
    { id: 'credit-cards', label: 'Credit Cards' },
    { id: 'savings-investments', label: 'Savings & Investments' },
    { id: 'security-fraud', label: 'Security & Fraud Prevention' }
  ];

  const resources = [
    {
      id: 1,
      title: 'How to Open a Bank Account',
      category: 'account-management',
      image:image1,
      description: 'Step-by-step guide on how to open a bank account, including required documents and tips for choosing the right account.'
    },
    {
      id: 2,
      title: 'Managing Your Bank Account',
      category: 'account-management',
      image: image2,
      description: 'Learn how to effectively manage your bank account, avoid fees, and maximize benefits.'
    },
    {
      id: 3,
      title: 'Understanding Mortgages',
      category: 'guides',
      image: image3,
      description: 'A comprehensive guide to understanding mortgages, including types, terms, and the application process.'
    },
    {
      id: 4,
      title: 'Credit Score Basics',
      category: 'guides',
      image: image4,
      description: 'Everything you need to know about credit scores, how they are calculated, and tips for improving yours.'
    },
    {
      id: 5,
      title: 'Personal Loan Options',
      category: 'loans-mortgages',
      image: image3,
      description: 'Explore different personal loan options available to you and how to choose the best one for your needs.'
    },
    {
      id: 6,
      title: 'Home Buying Process',
      category: 'loans-mortgages',
      image: image6,
      description: 'A step-by-step guide to the home buying process, from pre-approval to closing.'
    },
    {
      id: 7,
      title: 'Market Trends Report',
      category: 'research',
      image:  image8,
      description: 'An in-depth report on current market trends affecting the banking and finance industry.'
    },
    {
      id: 8,
      title: 'Financial Literacy Study',
      category: 'research',
      image:  image7 ,
      description: 'Research findings on financial literacy levels among different demographics and its impact on financial decision-making.'
    },
    {
      id: 9,
      title: 'Choosing the Right Credit Card',
      category: 'credit-cards',
      image: image5,
      description: 'A guide to help you choose the right credit card based on your spending habits and financial goals.'
    },
    {
      id: 10,
      title: 'Managing Credit Card Debt',
      category: 'credit-cards',
      image: image9,
      description: 'Tips and strategies for managing and paying off credit card debt effectively.'
    },
    {
      id: 11,
      title: 'Savings Account Options',
      category: 'savings-investments',
      image: image4,
      description: 'Explore different types of savings accounts and how to choose the best one for your financial goals.'
    },
    {
      id: 12,
      title: 'Investing for Beginners',
      category: 'savings-investments',
      image: image10 ,
      description: 'A beginner’s guide to investing, including types of investments and how to get started.'
    },
    {
      id: 13,
      title: 'Protecting Your Personal Information',
      category: 'security-fraud',
      image: image11,
      description: 'Learn how to protect your personal and financial information from fraud and identity theft.'
    },
    {
      id: 14,
      title: 'Recognizing Fraudulent Activities',
      category: 'security-fraud',
      image: image12,
      description: 'Tips for recognizing and reporting fraudulent activities to keep your accounts safe.'
    }
    // Add more resources
  ];

  const filteredResources = activeCategory === 'all' 
    ? resources 
    : resources.filter(resource => resource.category === activeCategory);

  return (
    <section className="resources">
      <div className="container">
        <h2>Empower Your Financial Journey</h2>
        
<p>Explore our comprehensive resources designed to help you navigate the world of finance. From understanding loans and mortgages to managing your credit cards, our guides and tools are here to support you every step of the way.</p>
<p>Whether you're a first-time homebuyer, looking to improve your credit score, or seeking tips on budgeting, we have the information you need to make confident financial decisions.</p>
<p>Check out our latest articles, calculators, and tools to enhance your financial knowledge and achieve your goals.</p>


        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
        <Swiper
          spaceBetween={30}
          slidesPerView={2}
          // navigation
          pagination={{ clickable: true }}
          autoplay={{ 
            delay: 3000,
            disableOnInteraction: false 
          }}
          modules={[Autoplay]}
          className="resources-grid"
          style={{ overflow: 'hidden' }} // Prevent overflow
        >
          {filteredResources.map(resource => (
            <SwiperSlide key={resource.id} className="resource-card">
              <img src={resource.image} alt={resource.title} />
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Resources; 