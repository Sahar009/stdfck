import React, { useState } from 'react';
import './login.css';
import backgroundImage from '../../assets/67240.jpg'; 

function Login() {
  const [password, setPassword] = useState('');
  const [userId, setUserId] = useState('');

  const handleNumberClick = (num) => {
    setPassword(prev => prev + num);
  };

  const handleClear = () => {
    setPassword('');
  };

  const handleDelete = () => {
    setPassword(prev => prev.slice(0, -1));
  };

  return (
    <div className='login-main'>
      <div className="login-overlay"></div>
      <div className="login-container">
        <div className="login-header">
          <h1>Login</h1>
          <p className="highlight">Welcome back!</p>
        </div>
        <div className="login-form">
          <div className="form-group">
            <label htmlFor="userId">UserId:</label>
            <input
              id="userId"
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              value={password}
              readOnly
            />
          </div>

          <div className="keypad">
            {/* Keypad buttons */}
            <button onClick={() => handleNumberClick('1')}>1</button>
            <button onClick={() => handleNumberClick('0')}>0</button>
            <button onClick={() => handleNumberClick('4')}>4</button>
            <button className="clear" onClick={handleClear}>CLR</button>
            <button onClick={() => handleNumberClick('3')}>3</button>
            <button onClick={() => handleNumberClick('6')}>6</button>
            <button onClick={() => handleNumberClick('5')}>5</button>
            <button className="delete" onClick={handleDelete}>DEL</button>
            <button onClick={() => handleNumberClick('8')}>8</button>
            <button onClick={() => handleNumberClick('2')}>2</button>
            <button onClick={() => handleNumberClick('9')}>9</button>
            <button onClick={() => handleNumberClick('7')}>7</button>
          </div>

          <button 
            className="login-button"
            onClick={() => console.log('Login clicked')}
          >
            Login
          </button>

          <div className="links">
            <a href="/forgot-password">Forgot your password/UserID?</a>
            <a href="/forgot-secret">Forgot your secret question?</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;