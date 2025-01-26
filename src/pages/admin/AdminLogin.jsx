import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginAdmin, reset } from '../../store/admin/adminSlice';
import { Lock } from 'lucide-react';
import './adminLogin.css';

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { admin, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.admin
  );

  useEffect(() => {
    if (isError) {
      setTimeout(() => {
        dispatch(reset());
      }, 3000);
    }

    // If logged in, redirect to admin dashboard
    if (isSuccess || admin) {
      navigate('/admin/dashboard');
    }

    return () => {
      dispatch(reset());
    };
  }, [admin, isError, isSuccess, navigate, dispatch]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginAdmin(formData));
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-card">
        <div className="admin-login-header">
          <Lock className="lock-icon" />
          <h1>Admin Login</h1>
          <p>Access the administrative dashboard</p>
        </div>

        {isError && (
          <div className="error-message">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="admin-login-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <button 
            type="submit" 
            className="admin-login-button"
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin; 