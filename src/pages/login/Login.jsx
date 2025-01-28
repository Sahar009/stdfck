import './login.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login, reset } from '../../store/auth/authSlice';
import { X, AlertCircle, CheckCircle2, AlertTriangle } from 'lucide-react';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [notification, setNotification] = useState({ show: false, type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user) {
      navigate('/dashboard', { replace: true });
      return;
    }

    if (isError) {
      setNotification({
        show: true,
        type: 'error',
        message: message
      });
    }

    if (isSuccess && user) {
      setNotification({
        show: true,
        type: 'success',
        message: 'Login successful! Redirecting to dashboard...'
      });
      
      const timer = setTimeout(() => {
        navigate('/dashboard', { replace: true });
      }, 1500);

      return () => clearTimeout(timer);
    }

    return () => {
      if (notification.show) {
        setNotification({ show: false, type: '', message: '' });
      }
    };
  }, [user, isError, isSuccess, message, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setIsSubmitting(true);
      const result = await dispatch(login(formData)).unwrap();
      
      if (result.isApproved === false) {
        setNotification({
          show: true,
          type: 'warning',
          message: 'Your account is pending approval. Please wait for admin confirmation.'
        });
      } else {
        setNotification({
          show: true,
          type: 'success',
          message: 'Login successful! Redirecting to dashboard...'
        });
        
        // Navigate after a short delay
        setTimeout(() => {
          navigate('/dashboard', { replace: true });
        }, 1500);
      }
    } catch (error) {
      setNotification({
        show: true,
        type: 'error',
        message: error.message
      });
    } finally {
      setIsSubmitting(false);
    }
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

  const closeNotification = () => {
    setNotification({ show: false, type: '', message: '' });
    if (notification.type === 'warning') {
      navigate('/');
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className='login-main'>
      <div className="login-overlay"></div>
      <div className="login-container">
        {(isSubmitting || isLoading) && <LoadingSpinner />}
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
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Loading...' : 'Login'}
          </button>

          <div className="links">
            <div className="help-links">
              <a href="/forgot-password">Forgot your password?</a>
              <a href="/forgot-secret">Forgot your secret question?</a>
            </div>
          </div>
        </form>
      </div>

      {/* Notification Modal */}
      {notification.show && (
        <div className="modal-overlay" onClick={closeNotification}>
          <div 
            className={`notification-modal ${notification.type}`}
            onClick={e => e.stopPropagation()}
          >
            <div className="notification-icon">
              {notification.type === 'success' ? (
                <CheckCircle2 size={28} />
              ) : notification.type === 'warning' ? (
                <AlertTriangle size={28} />
              ) : (
                <AlertCircle size={28} />
              )}
            </div>
            <div className="notification-content">
              <h4>
                {notification.type === 'success' 
                  ? 'Success' 
                  : notification.type === 'warning'
                  ? 'Account Pending'
                  : 'Error'}
              </h4>
              <p>{notification.message}</p>
            </div>
            <button 
              className="close-button"
              onClick={closeNotification}
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;