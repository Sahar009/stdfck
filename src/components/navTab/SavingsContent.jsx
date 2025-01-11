import { FaCaretRight, FaChevronRight } from 'react-icons/fa';
import togglerImage from '../../assets/toggler1.jpeg';
// import './savingsContent.css';
import './navtab.css';
const SavingsContent = () => {
  const savingsOptions = [
    'Money Market',
    'Child Savings',
    'iSAVES',
    'IRAs'
  ];

  return (
    <div 
      id="savings2" 
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
            A credit union savings account can help you make the most of 
            your savings. Once you have established your savings account, 
            you are then eligible for any other service the credit union offers.
          </big>
          <br /><br />
        </div>

        {/* Options Column */}
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
              {savingsOptions.map((option, index) => (
                <li key={index}>
                  <FaCaretRight className="me-2" /> {option}
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
              SAVINGS<sup>®</sup>
            </small>
            <br />
            <div>
              <img 
                src={togglerImage} 
                alt="Savings Options"
                style={{ width: '100%' }}
              />
            </div>
            <br />
            <big>
              <button className=" btn-sm blue-button-solid">
                Don't wait to apply <small><FaChevronRight /></small>
              </button>
            </big>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavingsContent;