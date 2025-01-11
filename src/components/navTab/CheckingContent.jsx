
import './checkingContent.css';
import { FaCaretRight } from 'react-icons/fa';
import './navtab.css';
const CheckingContent = () => {
  const benefits = [
    'Free Official CU checks',
    'Unlimited ATM refunds nationwide',
    'Free Instant Issue Debit Card (upon opening a checking account for all qualifying owners)',
    '0.30% added to qualifying certificates'
  ];

  return (
    <div 
      id="checking2" 
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
            From working for your money to making your money work for you! 
            With Performance Checking at Standard Unity Finance Bank you get 
            to experience the full benefit of credit union membership. What 
            do you have to do to qualify? Simply have a recurring direct 
            deposit of $500 or more monthly. Business owners that do not 
            have direct deposit can qualify by having their business account 
            at Standard Unity Finance Bank.
          </big>
          <br /><br />
          <button className=" blue-button">
            Explore checking solutions
          </button>
        </div>

        {/* Benefits Column */}
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
              {benefits.map((benefit, index) => (
                <li key={index}>
                  <FaCaretRight className="me-2" /> {benefit}
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
              PERFORMANCE CHECKING<sup>®</sup>
            </small>
            <br />
            <div>
              <img 
                // src={oldiesImage} 
                alt="Performance Checking"
                style={{ width: '100%' }}
              />
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckingContent;