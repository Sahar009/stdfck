import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getUserProfile } from '../../store/auth/authSlice';
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import { Bell } from "lucide-react";
import "./dashboard.css";
import { getUserTransactions } from '../../store/transactions/transactionSlice';

// Approval Modal Component
const ApprovalModal = () => (
  <div className="approval-modal">
    <div className="modal-content">
      <h2>Account Pending Approval</h2>
      <p>Your account is currently under review. Please wait for admin approval.</p>
      <p>This usually takes 24-48 hours.</p>
    </div>
  </div>
);

export default function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state) => state.auth);
  const { transactions, stats, isLoading: transactionsLoading } = useSelector(
    (state) => state.transactions
  );
  const [profileLoaded, setProfileLoaded] = useState(false);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        // Check if user exists and has token
        if (!user || !user.token) {
          navigate('/login');
          return;
        }

        await dispatch(getUserProfile()).unwrap();
        setProfileLoaded(true);
      } catch (error) {
        console.error('Profile fetch error:', error);
        if (error?.response?.status === 401) {
          navigate('/login');
        }
      }
    };

    if (!profileLoaded) {
      loadProfile();
    }
  }, [user, navigate, dispatch, profileLoaded]);

  useEffect(() => {
    if (user && user.token) {
      dispatch(getUserTransactions());
    }
  }, [user, dispatch]);

  // Show loading state only during initial profile fetch
  if (!profileLoaded && isLoading) {
    return <div>Loading...</div>;
  }

  // If we have user data but not approved
  if (user && !user.isApproved) {
    return <ApprovalModal />;
  }

  // If no user, redirect to login
  if (!user) {
    navigate('/login');
    return null;
  }

  // Update the transactions section in your dashboard
  const renderTransactions = () => (
    <div className="info-card">
      <h3 className="card-title">Recent Transactions</h3>
      {stats && (
        <div className="transaction-stats">
          <div className="stat-item">
            <span>Total Transactions:</span>
            <span>{stats.totalTransactions}</span>
          </div>
          <div className="stat-item">
            <span>Total Sent:</span>
            <span>${stats.totalSent.toFixed(2)}</span>
          </div>
          <div className="stat-item">
            <span>Total Received:</span>
            <span>${stats.totalReceived.toFixed(2)}</span>
          </div>
        </div>
      )}
      <div className="transactions-list">
        {transactions.length > 0 ? (
          transactions.map((transaction) => {
            // Determine transaction type and display text
            const isReceived = transaction.receiver._id === user._id;
            const transactionType = transaction.type === 'admin-credit' 
              ? 'Admin Credit'
              : isReceived ? 'Received' : 'Sent';

            // Get the other party's details
            const otherParty = isReceived
              ? (transaction.sender 
                  ? `From: ${transaction.sender.firstName} ${transaction.sender.lastName}`
                  : 'From: System')
              : `To: ${transaction.receiver.firstName} ${transaction.receiver.lastName}`;

            return (
              <div key={transaction._id} className="transaction-item">
                <div className="transaction-type">
                  {transactionType}
                </div>
                <div className="transaction-amount">
                  ${transaction.amount.toFixed(2)}
                </div>
                <div className="transaction-party">
                  {otherParty}
                </div>
                <div className="transaction-status">
                  {transaction.status}
                </div>
                <div className="transaction-date">
                  {new Date(transaction.timestamp).toLocaleDateString()}
                </div>
                {transaction.description && (
                  <div className="transaction-description">
                    {transaction.description}
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <p>No transactions yet</p>
        )}
      </div>
    </div>
  );

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="header">
        {/* Logo */}
        <h1 className="logo">UNITY</h1>

        {/* Welcome message and badge */}
        <div className="welcome-section">
          <span className="welcome-text">Welcome, {user?.firstName}</span>
          <span className="verified-badge">✓ Verified</span>
        </div>

        {/* Icons */}
        <div className="header-icons">
          <Bell className="notification-icon" />
          <div className="avatar">
            <div className="avatar-fallback">
              {user?.firstName?.[0]}{user?.lastName?.[0]}
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="navigation">
        <button className="nav-button active">Overview</button>
        <button className="nav-button"><Link to="/transfer">Transfer</Link></button>
        <button className="nav-button">Loan History</button>
        <button className="nav-button">Transactions</button>
        <button className="nav-button">Settings</button>
      </nav>

      {/* Stats Overview */}
      <div className="stats-grid">
        <div className="stat-card">
          <p className="stat-label">Balance</p>
          <p className="stat-value">${user?.balance?.toFixed(2)}</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">Account Number</p>
          <p className="stat-value">{user?.accountNumber}</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">Total Transactions</p>
          <p className="stat-value">{user?.transactions?.length || 0}</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="main-container">
        {/* Account Overview */}
        <div className="overview-grid">
          {/* Account Information */}
          <div className="info-card">
            <h3 className="card-title">Account Information</h3>
            <div className="info-list">
              <div className="info-item">
                <label>Account Number</label>
                <p>{user?.accountNumber}</p>
              </div>
              <div className="info-item">
                <label>Account Name</label>
                <p>{`${user?.firstName} ${user?.middleName || ''} ${user?.lastName}`}</p>
              </div>
              <div className="info-item">
                <label>Email</label>
                <p>{user?.email}</p>
              </div>
            </div>
          </div>

          {/* Profile Information */}
          <div className="info-card">
            <h3 className="card-title">Profile Information</h3>
            <div className="info-list">
              <div className="info-item">
                <label>Address</label>
                <p>{user?.address}</p>
              </div>
              <div className="info-item">
                <label>Region</label>
                <p>{user?.region}</p>
              </div>
              <div className="info-item">
                <label>Phone Number</label>
                <p>{user?.phoneNumber}</p>
              </div>
              <div className="info-item">
                <label>Gender</label>
                <p>{user?.gender}</p>
              </div>
              <div className="info-item">
                <label>Zip Code</label>
                <p>{user?.zipCode}</p>
              </div>
            </div>
          </div>

          {renderTransactions()}
        </div>
      </main>
    </div>
  );
}