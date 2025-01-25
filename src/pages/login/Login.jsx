import './login.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login, reset } from '../../store/auth/authSlice';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      alert(message);
    }

    if (isSuccess || user) {
      navigate('/dashboard');
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };

  const handleNumberClick = (e, num) => {
    e.preventDefault();
    setFormData(prev => ({
      ...prev,
      password: prev.password + num
    }));
  };

  const handleClear = (e) => {
    e.preventDefault();
    setFormData(prev => ({
      ...prev,
      password: ''
    }));
  };

  const handleDelete = (e) => {
    e.preventDefault();
    setFormData(prev => ({
      ...prev,
      password: prev.password.slice(0, -1)
    }));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='login-main'>
      <div className="login-overlay"></div>
      <div className="login-container">
        <div className="login-header">
          <h1>Login</h1>
          <p className="highlight">Welcome back!</p>
        </div>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              value={formData.password}
              readOnly
              required
            />
          </div>

          <div className="keypad">
            <button type="button" onClick={(e) => handleNumberClick(e, '1')}>1</button>
            <button type="button" onClick={(e) => handleNumberClick(e, '0')}>0</button>
            <button type="button" onClick={(e) => handleNumberClick(e, '4')}>4</button>
            <button type="button" className="clear" onClick={handleClear}>CLR</button>
            <button type="button" onClick={(e) => handleNumberClick(e, '3')}>3</button>
            <button type="button" onClick={(e) => handleNumberClick(e, '6')}>6</button>
            <button type="button" onClick={(e) => handleNumberClick(e, '5')}>5</button>
            <button type="button" className="delete" onClick={handleDelete}>DEL</button>
            <button type="button" onClick={(e) => handleNumberClick(e, '8')}>8</button>
            <button type="button" onClick={(e) => handleNumberClick(e, '2')}>2</button>
            <button type="button" onClick={(e) => handleNumberClick(e, '9')}>9</button>
            <button type="button" onClick={(e) => handleNumberClick(e, '7')}>7</button>
          </div>

          <button 
            type="submit"
            className="login-button"
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Login'}
          </button>

          <div className="links">
            <a href="/forgot-password">Forgot your password/UserID?</a>
            <a href="/forgot-secret">Forgot your secret question?</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;