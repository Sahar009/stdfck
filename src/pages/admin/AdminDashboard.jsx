import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  Users, CreditCard, BarChart2, Settings, LogOut, 
  CheckCircle, AlertCircle, FileCheck 
} from 'lucide-react';
import { 
  getPendingApprovals, getAllTransactions, getTransactionStats,
  getUnverifiedIds, approveUser, verifyUserId, creditUser, logout 
} from '../../store/admin/adminSlice';
import "./adminDashboard.css";

export default function AdminDashboard() {
  const dispatch = useDispatch();
  const { 
    pendingApprovals, transactions, transactionStats, 
    unverifiedIds, isLoading 
  } = useSelector(state => state.admin);

  const [activeTab, setActiveTab] = useState('dashboard');
  const [creditData, setCreditData] = useState({
    accountNumber: '',
    amount: '',
    description: ''
  });

  useEffect(() => {
    dispatch(getTransactionStats());
    dispatch(getPendingApprovals());
    dispatch(getAllTransactions());
    dispatch(getUnverifiedIds());
  }, [dispatch]);

  const handleCredit = async (e) => {
    e.preventDefault();
    await dispatch(creditUser(creditData));
    setCreditData({ accountNumber: '', amount: '', description: '' });
  };

  const handleApproveUser = async (userId) => {
    await dispatch(approveUser(userId));
    dispatch(getPendingApprovals());
  };

  const handleVerifyId = async (userId) => {
    await dispatch(verifyUserId(userId));
    dispatch(getUnverifiedIds());
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="admin-container">
      {/* Sidebar Navigation */}
      <nav className="admin-sidebar">
        <div className="sidebar-header">
          <h1 className="admin-logo">Admin Panel</h1>
        </div>
        
        <div className="sidebar-menu">
          <button 
            className={`menu-item ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <BarChart2 size={20} />
            <span>Dashboard</span>
          </button>

          <button 
            className={`menu-item ${activeTab === 'approvals' ? 'active' : ''}`}
            onClick={() => setActiveTab('approvals')}
          >
            <CheckCircle size={20} />
            <span>Approvals</span>
            {pendingApprovals.length > 0 && (
              <span className="badge">{pendingApprovals.length}</span>
            )}
          </button>
          
          <button 
            className={`menu-item ${activeTab === 'verifications' ? 'active' : ''}`}
            onClick={() => setActiveTab('verifications')}
          >
            <FileCheck size={20} />
            <span>ID Verifications</span>
            {unverifiedIds.length > 0 && (
              <span className="badge">{unverifiedIds.length}</span>
            )}
          </button>

          <button 
            className={`menu-item ${activeTab === 'credit' ? 'active' : ''}`}
            onClick={() => setActiveTab('credit')}
          >
            <CreditCard size={20} />
            <span>Credit User</span>
          </button>
          
          <button 
            className={`menu-item ${activeTab === 'transactions' ? 'active' : ''}`}
            onClick={() => setActiveTab('transactions')}
          >
            <Users size={20} />
            <span>Transactions</span>
          </button>
        </div>

        <div className="sidebar-footer">
          <button className="menu-item logout" onClick={handleLogout}>
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="admin-main">
        {activeTab === 'dashboard' && (
          <div className="dashboard-stats">
            <div className="stats-grid">
              <div className="stat-card">
                <h3>Total Transactions</h3>
                <p className="stat-value">{transactionStats?.totalTransactions || 0}</p>
              </div>
              <div className="stat-card">
                <h3>Total Amount</h3>
                <p className="stat-value">${transactionStats?.totalAmount?.toLocaleString() || 0}</p>
              </div>
              <div className="stat-card">
                <h3>Success Rate</h3>
                <p className="stat-value">{transactionStats?.successRate || 0}%</p>
              </div>
              <div className="stat-card">
                <h3>Pending Approvals</h3>
                <p className="stat-value">{pendingApprovals.length}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'approvals' && (
          <div className="content-section">
            <h2 className="section-title">Pending Approvals</h2>
            <div className="table-container">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Account Number</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {pendingApprovals.map((user) => (
                    <tr key={user._id}>
                      <td>{`${user.firstName} ${user.lastName}`}</td>
                      <td>{user.email}</td>
                      <td>{user.accountNumber}</td>
                      <td>
                        <button 
                          className="action-button approve"
                          onClick={() => handleApproveUser(user._id)}
                        >
                          Approve
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'credit' && (
          <div className="content-section">
            <h2 className="section-title">Credit User</h2>
            <div className="credit-form-container">
              <form onSubmit={handleCredit} className="credit-form">
                <div className="form-group">
                  <label>Account Number</label>
                  <input
                    type="text"
                    value={creditData.accountNumber}
                    onChange={(e) => setCreditData({
                      ...creditData,
                      accountNumber: e.target.value
                    })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label>Amount</label>
                  <div className="amount-input-wrapper">
                    <span className="currency-symbol">$</span>
                    <input
                      type="number"
                      value={creditData.amount}
                      onChange={(e) => setCreditData({
                        ...creditData,
                        amount: e.target.value
                      })}
                      className="form-input with-currency"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    value={creditData.description}
                    onChange={(e) => setCreditData({
                      ...creditData,
                      description: e.target.value
                    })}
                    className="form-input"
                    rows="3"
                  />
                </div>

                <button type="submit" className="credit-button">
                  Credit User
                </button>
              </form>
            </div>
          </div>
        )}

        {activeTab === 'verifications' && (
          <div className="content-section">
            <h2 className="section-title">ID Verifications</h2>
            <div className="table-container">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>ID Card</th>
                    <th>Submitted Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {unverifiedIds.map((user) => (
                    <tr key={user._id}>
                      <td>{`${user.firstName} ${user.lastName}`}</td>
                      <td>{user.email}</td>
                      <td>
                        <a 
                          href={user.idCard.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="view-document"
                        >
                          View ID
                        </a>
                      </td>
                      <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                      <td>
                        <button 
                          className="action-button verify"
                          onClick={() => handleVerifyId(user._id)}
                        >
                          Verify ID
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'transactions' && (
          <div className="content-section">
            <h2 className="section-title">All Transactions</h2>
            <div className="table-container">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Reference</th>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction) => (
                    <tr key={transaction._id}>
                      <td>{transaction._id.slice(-8).toUpperCase()}</td>
                      <td>
                        <span className={`transaction-type ${transaction.type}`}>
                          {transaction.type}
                        </span>
                      </td>
                      <td>${transaction.amount.toLocaleString()}</td>
                      <td>
                        <span className={`status-badge ${transaction.status}`}>
                          {transaction.status}
                        </span>
                      </td>
                      <td>{new Date(transaction.timestamp).toLocaleDateString()}</td>
                      <td>
                        <button 
                          className="action-button view"
                          onClick={() => {
                            // Add transaction details view logic
                          }}
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
} 