import { useNavigate } from 'react-router-dom';
import { register, reset } from '../../store/auth/authSlice';
import './register.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { X, AlertCircle, CheckCircle2 } from 'lucide-react';

function Register() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [notification, setNotification] = useState({ show: false, type: '', message: '' });
    const [previewImage, setPreviewImage] = useState(null);
    const [previewId, setPreviewId] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
  
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
    password: '',
    profileImage: null,
    idCard: null
  });

  useEffect(() => {
    if (isError) {
      setNotification({
        show: true,
        type: 'error',
        message: message
      });
    }

    if (isSuccess) {
      setNotification({
        show: true,
        type: 'success',
        message: 'Registration successful! Please login to continue.'
      });
      // Set a single timeout to navigate
      // const timer = setTimeout(() => {
      //   navigate('/login');
      // }, 2000);
      
      // Cleanup timeout on unmount
      // return () => clearTimeout(timer);
    }

    // Cleanup notification on unmount or when dependencies change
    return () => {
      if (notification.show) {
        setNotification({ show: false, type: '', message: '' });
      }
    };
  }, [isError, isSuccess, message, navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (e.target.name === 'profileImage') {
        setPreviewImage(URL.createObjectURL(file));
      } else {
        setPreviewId(URL.createObjectURL(file));
      }
      setFormData({
        ...formData,
        [e.target.name]: file
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields according to schema
    try {
      // Required fields check
      const requiredFields = [
        'firstName',
        'lastName',
        'gender',
        'address',
        'region',
        'zipCode',
        'email',
        'phoneNumber',
        'password'
      ];

      const emptyFields = requiredFields.filter(field => !formData[field]);
      if (emptyFields.length > 0) {
        throw new Error(`Please fill in all required fields: ${emptyFields.join(', ')}`);
      }

      // Email validation
      const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address');
      }

      // Phone number validation (10 digits)
      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(formData.phoneNumber)) {
        throw new Error('Please enter a valid 10-digit phone number');
      }

      // Password validation (6 digits minimum)
      if (!/^\d{6,}$/.test(formData.password)) {
        throw new Error('Password must be at least 6 digits long and contain only numbers');
      }

      // Gender validation
      if (!['male', 'female'].includes(formData.gender.toLowerCase())) {
        throw new Error('Gender must be either male or female');
      }

      // File validation
      if (!formData.profileImage) {
        throw new Error('Please upload a profile image');
      }

      if (!formData.idCard) {
        throw new Error('Please upload an ID card');
      }

      setIsSubmitting(true);

      // Create FormData
      const formDataToSend = new FormData();
      
      // Append all text fields
      Object.keys(formData).forEach(key => {
        if (key !== 'profileImage' && key !== 'idCard' && formData[key] !== null && formData[key] !== '') {
          formDataToSend.append(key, formData[key].trim()); // Trim strings
        }
      });

      // Append files with correct field names
      formDataToSend.append('avatar', formData.profileImage);
      formDataToSend.append('idCard', formData.idCard);

      const result = await dispatch(register(formDataToSend)).unwrap();
      
      if (result.success) {
        setNotification({
          show: true,
          type: 'success',
          message: 'Registration successful! Your account will be approved within 24-48 hours.'
        });
      }
    } catch (error) {
      console.error('Registration error:', error);
      setNotification({
        show: true,
        type: 'error',
        message: error.message || 'Registration failed. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Loading Spinner Component
  const LoadingSpinner = () => (
    <div className="loading-overlay">
      <div className="loading-container">
        <div className="spinner-wrapper">
          <div className="spinner"></div>
        </div>
        <div className="loading-text">
          <p>Processing Registration</p>
          <div className="loading-dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
        </div>
      </div>
    </div>
  );

  const closeNotification = () => {
    setNotification({ show: false, type: '', message: '' });
    if (notification.type === 'success') {
      navigate('/');
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className='register-main'>
      {isSubmitting && <LoadingSpinner />}
      <div className="register-overlay"></div>
      <div className="register-container">
        <div className="register-header">
          <h1>Register</h1>
          <p className="highlight">Create your account</p>
        </div>
        <form className="register-form" onSubmit={handleSubmit}>
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

          <div className="form-row file-inputs">
            <div className="form-group">
              <label htmlFor="profileImage">Profile Image:</label>
              <input
                id="profileImage"
                name="profileImage"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                required
              />
              {previewImage && (
                <div className="image-preview">
                  <img src={previewImage} alt="Profile preview" />
                </div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="idCard">ID Card:</label>
              <input
                id="idCard"
                name="idCard"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                required
              />
              {previewId && (
                <div className="image-preview">
                  <img src={previewId} alt="ID preview" />
                </div>
              )}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password (minimum 6 digits):</label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              pattern="\d{6,}"
              title="Password must be at least 6 digits long and contain only numbers"
            />
            <small className="password-hint">Password must contain only numbers and be at least 6 digits long</small>
          </div>

          <button 
            type="submit" 
            className="register-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Registering...' : 'Register'}
          </button>

          <div className="links">
            <p>Already have an account? <a href="/login" className="login-link">Login here</a></p>
          </div>
        </form>
      </div>

      {notification.show && (
        <div className="modal-overlay" onClick={closeNotification}>
          <div 
            className={`notification-modal ${notification.type}`} 
            onClick={e => e.stopPropagation()}
          >
            <div className="notification-icon">
              {notification.type === 'success' ? (
                <CheckCircle2 size={28} />
              ) : (
                <AlertCircle size={28} />
              )}
            </div>
            <div className="notification-content">
              <h4>{notification.type === 'success' ? 'Success' : 'Error'}</h4>
              <p>{notification.message}</p>
              {notification.type === 'success' && (
                <button 
                  className="modal-action-button"
                  onClick={() => navigate('/login')}
                >
                  Proceed to Login
                </button>
              )}
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

export default Register;