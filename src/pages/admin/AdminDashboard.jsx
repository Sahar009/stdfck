import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, CreditCard, BarChart2, Settings, LogOut, 
  CheckCircle, AlertCircle, FileCheck, XCircle, Search, Users as UsersIcon, X, Trash2, CheckCircle2
} from 'lucide-react';
import { 
  getPendingApprovals, getAllTransactions, getTransactionStats,
  getUnverifiedIds, approveUser, verifyUserId, creditUser, logout, verifyAccount, getAllUsers, getUserById, clearSelectedUser, deleteUser
} from '../../store/admin/adminSlice';
import "./adminDashboard.css";

export default function AdminDashboard() {
  const dispatch = useDispatch();
  const { 
    pendingApprovals = [],
    transactions: transactionData = { transactions: [] },
    transactionStats = null,
    unverifiedIds = [],
    isLoading,
    users,
    selectedUser
  } = useSelector(state => state.admin);
  console.log("transactions",transactionData);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showTransactionModal, setShowTransactionModal] = useState(false);
  const [isCrediting, setIsCrediting] = useState(false);
  const [modalContent, setModalContent] = useState({
    isSuccess: false,
    message: ''
  });
  const [creditData, setCreditData] = useState({
    accountNumber: '',
    amount: '',
    description: ''
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showUserModal, setShowUserModal] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState({ show: false, userId: null });
  const [notification, setNotification] = useState({ show: false, type: '', message: '' });

  // Animation variants
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3
      }
    }
  };

  useEffect(() => {
    dispatch(getTransactionStats());
    dispatch(getPendingApprovals());
    dispatch(getAllTransactions());
    dispatch(getUnverifiedIds());
  }, [dispatch]);

  useEffect(() => {
    if (activeTab === 'users') {
      dispatch(getAllUsers({ page: currentPage, search: searchTerm, limit: 10 }));
    }
  }, [dispatch, activeTab, currentPage, searchTerm]);

  // Add debounced search
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      dispatch(getAllUsers({ page: currentPage, search: searchTerm, limit: 10 }));
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, currentPage, dispatch]);

  const handleCredit = async (e) => {
    e.preventDefault();
    setIsCrediting(true);

    try {
      await dispatch(creditUser({
        userAccountNumber: creditData.accountNumber,
        amount: Number(creditData.amount),
        description: creditData.description
      })).unwrap();

      setModalContent({
        isSuccess: true,
        message: `Successfully credited $${creditData.amount} to account ${creditData.accountNumber}`
      });
      
      // Reset form and refresh data
      setCreditData({ accountNumber: '', amount: '', description: '' });
      dispatch(getAllTransactions());
      dispatch(getTransactionStats());
      
    } catch (error) {
      setModalContent({
        isSuccess: false,
        message: error?.message || 'Failed to process credit'
      });
    } finally {
      setIsCrediting(false);
      setShowTransactionModal(true);
    }
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

  const handleUserClick = async (userId) => {
    await dispatch(getUserById(userId));
    setShowUserModal(true);
  };

  const handleDeleteClick = (userId) => {
    setDeleteConfirm({ show: true, userId });
  };

  const handleDeleteConfirm = async () => {
    try {
      const result = await dispatch(deleteUser(deleteConfirm.userId)).unwrap();
      if (result.success) {
        setNotification({
          show: true,
          type: 'success',
          message: 'User has been successfully deleted'
        });
        setDeleteConfirm({ show: false, userId: null });
      }
    } catch (error) {
      setNotification({
        show: true,
        type: 'error',
        message: error || 'Failed to delete user'
      });
    }
  };

  // Pagination handlers
  const handleNextPage = () => {
    if (currentPage < users.totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
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

          <button
            className={`menu-item ${activeTab === 'users' ? 'active' : ''}`}
            onClick={() => setActiveTab('users')}
          >
            <UsersIcon size={20} />
            Users
          </button>
        </div>

        <div className="sidebar-footer">
          <button className="menu-item logout" onClick={handleLogout}>
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </nav>

      {/* Main Content with Animations */}
      <main className="admin-main">
        <AnimatePresence mode="wait">
          {activeTab === 'dashboard' && (
            <motion.div
              key="dashboard"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="dashboard-stats"
            >
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
            </motion.div>
          )}

          {activeTab === 'approvals' && (
            <motion.div
              key="approvals"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="content-section"
            >
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
            </motion.div>
          )}

          {activeTab === 'verifications' && (
            <motion.div
              key="verifications"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="content-section"
            >
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
                    {unverifiedIds && unverifiedIds.length > 0 ? (
                      unverifiedIds.map((user) => (
                        <tr key={user._id}>
                          <td>{`${user.firstName} ${user.lastName}`}</td>
                          <td>{user.email}</td>
                          <td>
                            {user.idCard?.url ? (
                              <a 
                                href={user.idCard.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="view-document"
                              >
                                View ID
                              </a>
                            ) : (
                              <span className="no-document">No ID Uploaded</span>
                            )}
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
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5" className="no-data">
                          {isLoading ? 'Loading verifications...' : 'No pending ID verifications'}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {activeTab === 'credit' && (
            <motion.div
              key="credit"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="content-section"
            >
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
                      disabled={isCrediting}
                      required
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
                        disabled={isCrediting}
                        required
                        min="0"
                        step="0.01"
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
                      disabled={isCrediting}
                      required
                    />
                  </div>

                  <button 
                    type="submit" 
                    className={`credit-button ${isCrediting ? 'loading' : ''}`}
                    disabled={isCrediting || !creditData.accountNumber || !creditData.amount || !creditData.description}
                  >
                    {isCrediting ? (
                      <div className="button-content">
                        <span className="loader"></span>
                        <span>Processing...</span>
                      </div>
                    ) : (
                      'Credit User'
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          )}

          {activeTab === 'transactions' && (
            <motion.div
              key="transactions"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="content-section"
            >
              <h2 className="section-title">All Transactions</h2>
              <div className="table-container">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Reference</th>
                      <th>Type</th>
                      <th>From</th>
                      <th>To</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th>Date</th>
                      <th>Bank Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactionData.transactions && transactionData.transactions.length > 0 ? (
                      transactionData.transactions.map((transaction) => (
                        <tr key={transaction._id}>
                          <td>{transaction.reference}</td>
                          <td>
                            <span className={`transaction-type ${transaction.type}`}>
                              {transaction.type}
                            </span>
                          </td>
                          <td>
                            {transaction.sender ? 
                              `${transaction.sender.firstName} ${transaction.sender.lastName}` : 
                              'System'
                            }
                          </td>
                          <td>
                            {`${transaction.receiver.firstName} ${transaction.receiver.lastName}`}
                          </td>
                          <td>${transaction.amount.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                          })}</td>
                          <td>
                            <span className={`status-badge ${transaction.status}`}>
                              {transaction.status}
                            </span>
                          </td>
                          <td>{new Date(transaction.timestamp).toLocaleDateString()}</td>
                          <td>
                            {transaction.type === 'external-transfer' && transaction.externalBankDetails ? (
                              <div className="bank-details">
                                <span>{transaction.externalBankDetails.bankName}</span>
                                {transaction.externalBankDetails.accountNumber && (
                                  <span> • {transaction.externalBankDetails.accountNumber}</span>
                                )}
                              </div>
                            ) : '-'}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="8" className="no-data">
                          {isLoading ? 'Loading transactions...' : 'No transactions found'}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
                
                {transactionData.totalPages > 0 && (
                  <div className="pagination-info">
                    Page {transactionData.currentPage} of {transactionData.totalPages} 
                    ({transactionData.totalTransactions} total transactions)
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {activeTab === 'users' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="users-section"
            >
              <div className="section-header">
                <h2>Users Management</h2>
                <div className="search-container">
                  <Search size={20} />
                  <input
                    type="text"
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                  />
                </div>
              </div>

              {isLoading ? (
                <div className="loading-spinner">Loading...</div>
              ) : (
                <>
                  <div className="users-table-container">
                    <table className="users-table">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Account Number</th>
                          <th>Balance</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.list.map((user) => (
                          <tr key={user._id}>
                            <td>
                              <div className="user-name-cell">
                                <div className="user-avatar">
                                  {user.profileImage ? (
                                    <img src={user.profileImage} alt={user.firstName} />
                                  ) : (
                                    <span>{user.firstName[0]}{user.lastName[0]}</span>
                                  )}
                                </div>
                                <span>{user.firstName} {user.lastName}</span>
                              </div>
                            </td>
                            <td>{user.email}</td>
                            <td>{user.accountNumber}</td>
                            <td>${user.balance?.toFixed(2)}</td>
                            <td>
                              <span className={`status-badge ${user.isVerified ? 'success' : 'pending'}`}>
                                {user.isVerified ? 'Verified' : 'Pending'}
                              </span>
                            </td>
                            <td>
                              <div className="action-buttons">
                                <button
                                  className="action-button view"
                                  onClick={() => handleUserClick(user._id)}
                                >
                                  View
                                </button>
                                <button
                                  className="action-button delete"
                                  onClick={() => handleDeleteClick(user._id)}
                                >
                                  <Trash2 size={18} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="pagination">
                    <button
                      className="pagination-button"
                      onClick={handlePrevPage}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </button>
                    <span className="page-info">
                      Page {currentPage} of {users.totalPages}
                    </span>
                    <button
                      className="pagination-button"
                      onClick={handleNextPage}
                      disabled={currentPage === users.totalPages}
                    >
                      Next
                    </button>
                  </div>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Transaction Modal */}
        <AnimatePresence>
          {showTransactionModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="modal-overlay"
              onClick={() => setShowTransactionModal(false)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="transaction-modal"
                onClick={e => e.stopPropagation()}
              >
                <div className={`status-icon ${modalContent.isSuccess ? 'success' : 'error'}`}>
                  {modalContent.isSuccess ? (
                    <CheckCircle size={48} />
                  ) : (
                    <XCircle size={48} />
                  )}
                </div>
                <h2>{modalContent.isSuccess ? 'Success!' : 'Error'}</h2>
                <p>{modalContent.message}</p>
                <button 
                  className="close-button"
                  onClick={() => setShowTransactionModal(false)}
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* User Details Modal */}
        <AnimatePresence>
          {showUserModal && selectedUser && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="modal-overlay"
              onClick={() => {
                setShowUserModal(false);
                dispatch(clearSelectedUser());
              }}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={e => e.stopPropagation()}
                className="user-modal"
              >
                <div className="modal-header">
                  <h2>User Details</h2>
                  <button 
                    className="close-button"
                    onClick={() => {
                      setShowUserModal(false);
                      dispatch(clearSelectedUser());
                    }}
                  >
                    <X size={20} />
                  </button>
                </div>
                
                <div className="user-profile">
                  <div className="profile-image">
                    {selectedUser.avatar ? (
                      <img 
                        src={selectedUser.avatar.url} 
                        alt={`${selectedUser.firstName}'s profile`} 
                      />
                    ) : (
                      <div className="profile-placeholder">
                        {selectedUser.firstName[0]}
                        {selectedUser.lastName[0]}
                      </div>
                    )}
                  </div>
                  <div className="profile-info">
                    <h3>{`${selectedUser.firstName} ${selectedUser.lastName}`}</h3>
                    <span className={`status-badge ${selectedUser.isVerified ? 'success' : 'pending'}`}>
                      {selectedUser.isVerified ? 'Verified' : 'Pending'}
                    </span>
                  </div>
                </div>

                <div className="user-details">
                  <div className="detail-group">
                    <label>Email</label>
                    <p>{selectedUser.email}</p>
                  </div>
                  <div className="detail-group">
                    <label>Account Number</label>
                    <p>{selectedUser.accountNumber}</p>
                  </div>
                  <div className="detail-group">
                    <label>Balance</label>
                    <p>${selectedUser.balance?.toFixed(2)}</p>
                  </div>
                  <div className="detail-group">
                    <label>Phone</label>
                    <p>{selectedUser.phoneNumber || 'Not provided'}</p>
                  </div>
                  <div className="detail-group">
                    <label>Address</label>
                    <p>{selectedUser.address || 'Not provided'}</p>
                  </div>
                  <div className="detail-group">
                    <label>ID Verification</label>
                    <div className="id-verification">
                      {selectedUser.idCard ? (
                        <a 
                          href={selectedUser.idCard.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="view-id-button"
                        >
                          View ID Document
                        </a>
                      ) : (
                        <span className="no-id">No ID uploaded</span>
                      )}
                    </div>
                  </div>
                  <div className="detail-group">
                    <label>Joined Date</label>
                    <p>{new Date(selectedUser.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Delete Confirmation Modal */}
        {deleteConfirm.show && (
          <div className="modal-overlay" onClick={() => setDeleteConfirm({ show: false, userId: null })}>
            <div className="confirm-modal" onClick={e => e.stopPropagation()}>
              <div className="modal-header">
                <h3>Delete User</h3>
                <button 
                  className="close-button"
                  onClick={() => setDeleteConfirm({ show: false, userId: null })}
                >
                  <X size={20} />
                </button>
              </div>
              <div className="modal-content">
                <AlertCircle size={48} className="warning-icon" />
                <p>Are you sure you want to delete this user? This action cannot be undone.</p>
              </div>
              <div className="confirm-actions">
                <button 
                  className="cancel-button"
                  onClick={() => setDeleteConfirm({ show: false, userId: null })}
                >
                  Cancel
                </button>
                <button 
                  className="delete-button"
                  onClick={handleDeleteConfirm}
                >
                  Delete User
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Notification Modal */}
        {notification.show && (
          <div className="modal-overlay" onClick={() => setNotification({ show: false, type: '', message: '' })}>
            <div className={`notification-modal ${notification.type}`} onClick={e => e.stopPropagation()}>
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
              </div>
              <button 
                className="close-button"
                onClick={() => setNotification({ show: false, type: '', message: '' })}
              >
                <X size={20} />
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
} 