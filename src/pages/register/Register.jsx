import { useNavigate } from 'react-router-dom';
import { register, reset } from '../../store/auth/authSlice';
import './register.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux"; 

function Register() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    const { user, isLoading, isError, isSuccess, message } = useSelector(
      (state) => state.auth
    );
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    gender: '',
    address: '',
    region: '',
    zipCode: '',
    email: '',
    phoneNumber: '',
    password: ''
  });

  useEffect(() => {
    if (isError) {
      alert(message);
    }

    // Redirect to dashboard when registration is successful
    if (isSuccess || user) {
      navigate('/dashboard');
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password.length < 6) {
      alert('Password must be at least 6 characters long');
      return;
    }

    dispatch(register(formData));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='login-main'>
      <div className="login-overlay"></div>
      <div className="register-container">
        <div className="login-header">
          <h1>Register</h1>
          <p className="highlight">Create your account</p>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="middleName">Middle Name:</label>
              <input
                id="middleName"
                name="middleName"
                type="text"
                value={formData.middleName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender:</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              id="address"
              name="address"
              type="text"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="region">Region:</label>
              <input
                id="region"
                name="region"
                type="text"
                value={formData.region}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="zipCode">Zip Code:</label>
              <input
                id="zipCode"
                name="zipCode"
                type="text"
                value={formData.zipCode}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength="6"
            />
          </div>

          <button 
            type="submit" 
            className="login-button"
            disabled={isLoading}
          >
            {isLoading ? 'Registering...' : 'Register'}
          </button>

          <div className="links">
            <p>Already have an account? <a href="/login" className="register-link">Login here</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;