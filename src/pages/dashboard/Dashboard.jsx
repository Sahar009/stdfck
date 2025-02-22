import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate, Routes, Route } from 'react-router-dom';
import { getUserProfile, logout } from '../../store/auth/authSlice';
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import { Bell } from "lucide-react";
import "./dashboard.css";
import { getUserTransactions } from '../../store/transactions/transactionSlice';
import DashboardHeader from './DashboardHeader';
import DashboardNav from './DashboardNav';
import Transfer from './Transfer';
import Loans from './Loans';
import Settings from './Settings';
import Transactions from './Transactions';
import Overview from './Overview';
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner';
// import Overview from './Overview';

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
  const { user, isLoading, isError, message } = useSelector((state) => state.auth);
  const { transactions, stats, isLoading: transactionsLoading } = useSelector(
    (state) => state.transactions
  );
  const [profileLoaded, setProfileLoaded] = useState(false);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        // Check if user exists and has token
        if (!user || !user.token) {
          dispatch(logout());
          navigate('/login');
          return;
        }

        await dispatch(getUserProfile()).unwrap();
        setProfileLoaded(true);
      } catch (error) {
        console.error('Profile fetch error:', error);
        // Check for specific auth errors
        if (error === 'Token  expired' || 
            error === 'Not authorized' || 
            error?.response?.status === 401) {
          dispatch(logout());
          navigate('/login');
        }
      }
    };

    if (!profileLoaded) {
      loadProfile();
    }
  }, [user, navigate, dispatch, profileLoaded]);

  // Add error effect to handle auth errors
  useEffect(() => {
    if (isError) {
      if (message === 'Token expired' || message === 'Not authorized') {
        dispatch(logout());
        navigate('/login');
      }
    }
  }, [isError, message, dispatch, navigate]);

  useEffect(() => {
    if (user && user.token) {
      dispatch(getUserTransactions());
    }
  }, [user, dispatch]);

  // Show loading state only during initial profile fetch
  if (!profileLoaded && isLoading) {
    return <div><LoadingSpinner /></div>;
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
      <DashboardHeader user={user} />
      <DashboardNav />
      
      <main className="main-container">
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
  );
}