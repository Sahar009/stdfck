import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserTransactions } from '../../store/transactions/transactionSlice';
import { PieChart, Wallet, ArrowUpRight, ArrowDownRight, Clock } from 'lucide-react';
import './Overview.css';

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
  

const Overview = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { transactions, stats, isLoading } = useSelector((state) => state.transactions);

  useEffect(() => {
    if (user && user.token) {
      dispatch(getUserTransactions());
    }
  }, [dispatch, user]);

  if (!user?.isApproved) {
    return <ApprovalModal />;
  }
  // Get recent transactions (last 5)
  const recentTransactions = transactions?.slice(0, 5) || [];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const getTransactionIcon = (type, isReceived) => {
    if (type === 'admin-credit') return <PieChart className="transaction-icon admin" />;
    return isReceived ? 
      <ArrowDownRight className="transaction-icon received" /> : 
      <ArrowUpRight className="transaction-icon sent" />;
  };

  return (
    <div className="overview-container">
      {/* Balance Card */}
      <div className="balance-card">
        <div className="balance-header">
          <h2>Current Balance</h2>
          <Wallet className="wallet-icon" />
        </div>
        <div className="balance-amount">
          {formatCurrency(user?.balance || 0)}
        </div>
        <div className="account-number">
          Account: {user?.accountNumber}
        </div>
      </div>

      {/* Transaction Stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Sent</h3>
          <div className="stat-amount sent">
            {formatCurrency(stats?.totalSent || 0)}
          </div>
        </div>
        <div className="stat-card">
          <h3>Total Received</h3>
          <div className="stat-amount received">
            {formatCurrency(stats?.totalReceived || 0)}
          </div>
        </div>
        <div className="stat-card">
          <h3>Total Transactions</h3>
          <div className="stat-amount">
            {stats?.totalTransactions || 0}
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="recent-transactions">
        <div className="section-header">
          <h2>Recent Transactions</h2>
          <Clock className="clock-icon" />
        </div>
        
        {isLoading ? (
          <div className="loading">Loading transactions...</div>
        ) : recentTransactions.length > 0 ? (
          <div className="transactions-list">
            {recentTransactions.map((transaction) => {
              const isReceived = transaction.receiver._id === user._id;
              const transactionType = transaction.type === 'admin-credit' 
                ? 'Admin Credit'
                : isReceived ? 'Received' : 'Sent';
              
              const otherParty = isReceived
                ? (transaction.sender 
                    ? `From: ${transaction.sender.firstName} ${transaction.sender.lastName}`
                    : 'From: System')
                : `To: ${transaction.receiver.firstName} ${transaction.receiver.lastName}`;

              return (
                <div key={transaction._id} className="transaction-item">
                  {getTransactionIcon(transaction.type, isReceived)}
                  <div className="transaction-details">
                    <div className="transaction-type">
                      {transactionType}
                    </div>
                    <div className="transaction-party">
                      {otherParty}
                    </div>
                  </div>
                  <div className="transaction-amount-container">
                    <div className={`transaction-amount ${isReceived ? 'received' : 'sent'}`}>
                      {isReceived ? '+' : '-'}{formatCurrency(transaction.amount)}
                    </div>
                    <div className="transaction-date">
                      {new Date(transaction.timestamp).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="no-transactions">
            No recent transactions found
          </div>
        )}
      </div>
    </div>
  );
};

export default Overview; 