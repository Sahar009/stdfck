import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { User, Lock, Trash2, AlertCircle, Upload, Camera } from 'lucide-react';
import { changePassword, updateContactInfo, deleteAccount, reset, uploadImage } from '../../store/settings/settingsSlice';
import { logout } from '../../store/auth/authSlice';
import './Settings.css';

const Settings = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { isLoading, isSuccess, isError, message } = useSelector((state) => state.settings);

  const [activeTab, setActiveTab] = useState('profile');
  const [formData, setFormData] = useState({
    phoneNumber: user?.phoneNumber || '',
    address: user?.address || '',
    region: user?.region || '',
    zipCode: user?.zipCode || '',
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deletePassword, setDeletePassword] = useState('');
  const [notification, setNotification] = useState({ type: '', message: '' });

  const [imagePreview, setImagePreview] = useState({
    avatar: null,
    idCard: null
  });

  useEffect(() => {
    if (isError) {
      setNotification({ type: 'error', message });
    }

    if (isSuccess) {
      setNotification({ type: 'success', message });
      if (message === 'Account deleted successfully') {
        dispatch(logout());
        navigate('/login');
      }
    }

    return () => {
      dispatch(reset());
    };
  }, [isSuccess, isError, message, dispatch, navigate]);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    dispatch(updateContactInfo(formData));
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setNotification({ type: 'error', message: 'Passwords do not match' });
      return;
    }
    dispatch(changePassword({
      currentPassword: passwordData.currentPassword,
      newPassword: passwordData.newPassword
    }));
  };

  const handleDeleteAccount = async () => {
    dispatch(deleteAccount(deletePassword));
  };

  const handleImageChange = async (e, type) => {
    const file = e.target.files[0];
    if (file) {
      // Preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(prev => ({
          ...prev,
          [type]: reader.result
        }));
      };
      reader.readAsDataURL(file);

      // Upload
      const formData = new FormData();
      formData.append(type === 'avatar' ? 'avatar' : 'idCard', file);
      
      dispatch(uploadImage({ type, formData }));
    }
  };

  return (
    <div className="settings-container">
      {notification.message && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}

      <div className="settings-sidebar">
        <button 
          className={`settings-tab ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          <User size={20} />
          Profile & Documents
        </button>
        <button 
          className={`settings-tab ${activeTab === 'security' ? 'active' : ''}`}
          onClick={() => setActiveTab('security')}
        >
          <Lock size={20} />
          Security
        </button>
        <button 
          className={`settings-tab ${activeTab === 'delete' ? 'active' : ''}`}
          onClick={() => setActiveTab('delete')}
        >
          <Trash2 size={20} />
          Delete Account
        </button>
      </div>
      
      <div className="settings-content">
        {activeTab === 'profile' && (
          <>
            <div className="profile-images">
              <div className="image-section">
                <h3>Profile Picture</h3>
                <div className="image-container">
                  {user?.avatar?.url ? (
                    <img 
                      src={imagePreview.avatar || user.avatar.url} 
                      alt="Profile" 
                      className="profile-image"
                    />
                  ) : (
                    <div className="image-placeholder">
                      <Camera size={40} />
                    </div>
                  )}
                  <div className="image-overlay">
                    <label className="upload-button">
                      <Upload size={20} />
                      Update
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageChange(e, 'avatar')}
                        hidden
                      />
                    </label>
                  </div>
                </div>
                <p className="image-help-text">Recommended: Square image, max 5MB</p>
              </div>

              <div className="image-section">
                <h3>ID Card</h3>
                <div className="image-container id-card">
                  {user?.idCard?.url ? (
                    <img 
                      src={imagePreview.idCard || user.idCard.url} 
                      alt="ID Card" 
                      className="id-card-image"
                    />
                  ) : (
                    <div className="image-placeholder">
                      <Upload size={40} />
                    </div>
                  )}
                  <div className="image-overlay">
                    <label className="upload-button">
                      <Upload size={20} />
                      Update ID
                      <input
                        type="file"
                        accept="image/*,.pdf"
                        onChange={(e) => handleImageChange(e, 'idCard')}
                        hidden
                      />
                    </label>
                  </div>
                </div>
                <div className="verification-status">
                  {user?.idCard?.verified ? (
                    <span className="verified">✓ Verified</span>
                  ) : (
                    <span className="pending">Pending Verification</span>
                  )}
                </div>
                <p className="image-help-text">Accepted formats: JPG, PNG, PDF. Max 10MB</p>
              </div>
            </div>

            <form onSubmit={handleContactSubmit} className="settings-form">
              <h3>Contact Information</h3>
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  placeholder="Enter phone number"
                />
              </div>
              <div className="form-group">
                <label>Address</label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="Enter address"
                />
              </div>
              <div className="form-group">
                <label>Region</label>
                <input
                  type="text"
                  value={formData.region}
                  onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                  placeholder="Enter region"
                />
              </div>
              <div className="form-group">
                <label>ZIP Code</label>
                <input
                  type="text"
                  value={formData.zipCode}
                  onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                  placeholder="Enter ZIP code"
                />
              </div>
              <button type="submit" className="save-btn" disabled={isLoading}>
                {isLoading ? 'Saving...' : 'Save Changes'}
              </button>
            </form>
          </>
        )}

        {activeTab === 'security' && (
          <form onSubmit={handlePasswordSubmit} className="settings-form">
            <h3>Change Password</h3>
            <div className="form-group">
              <label>Current Password</label>
              <input
                type="password"
                value={passwordData.currentPassword}
                onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                placeholder="Enter current password"
              />
            </div>
            <div className="form-group">
              <label>New Password</label>
              <input
                type="password"
                value={passwordData.newPassword}
                onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                placeholder="Enter new password"
              />
            </div>
            <div className="form-group">
              <label>Confirm New Password</label>
              <input
                type="password"
                value={passwordData.confirmPassword}
                onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                placeholder="Confirm new password"
              />
            </div>
            <button type="submit" className="save-btn" disabled={isLoading}>
              {isLoading ? 'Updating...' : 'Update Password'}
            </button>
          </form>
        )}

        {activeTab === 'delete' && (
          <div className="delete-account-section">
            <div className="warning-box">
              <AlertCircle className="warning-icon" />
              <h3>Delete Account</h3>
              <p>This action cannot be undone. Please be certain.</p>
              <ul className="warning-list">
                <li>All your transaction history will be deleted</li>
                <li>You must have a zero balance</li>
                <li>Any pending transactions must be completed</li>
              </ul>
            </div>
            {!deleteModalOpen ? (
              <button 
                className="delete-btn"
                onClick={() => setDeleteModalOpen(true)}
              >
                Delete Account
              </button>
            ) : (
              <div className="confirm-delete">
                <input
                  type="password"
                  value={deletePassword}
                  onChange={(e) => setDeletePassword(e.target.value)}
                  placeholder="Enter your password to confirm"
                />
                <div className="confirm-actions">
                  <button 
                    className="cancel-btn"
                    onClick={() => {
                      setDeleteModalOpen(false);
                      setDeletePassword('');
                    }}
                  >
                    Cancel
                  </button>
                  <button 
                    className="confirm-delete-btn"
                    onClick={handleDeleteAccount}
                    disabled={isLoading}
                  >
                    {isLoading ? 'Deleting...' : 'Confirm Delete'}
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings; 