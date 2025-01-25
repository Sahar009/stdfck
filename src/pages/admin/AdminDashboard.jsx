import { useState } from 'react';
import { Users, CreditCard, BarChart2, Settings, LogOut } from 'lucide-react';
import "./adminDashboard.css";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('users');
  const [creditData, setCreditData] = useState({
    userAccountNumber: '',
    amount: '',
    description: ''
  });

  const handleCredit = async (e) => {
    e.preventDefault();
    // Add credit logic here
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
            className={`menu-item ${activeTab === 'users' ? 'active' : ''}`}
            onClick={() => setActiveTab('users')}
          >
            <Users size={20} />
            <span>Users</span>
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
            <BarChart2 size={20} />
            <span>Transactions</span>
          </button>
        </div>

        <div className="sidebar-footer">
          <button className="menu-item">
            <Settings size={20} />
            <span>Settings</span>
          </button>
          <button className="menu-item logout">
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="admin-main">
        {activeTab === 'users' && (
          <div className="content-section">
            <h2 className="section-title">All Users</h2>
            <div className="table-container">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Account Number</th>
                    <th>Balance</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Add user rows here */}
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
                    value={creditData.userAccountNumber}
                    onChange={(e) => setCreditData({
                      ...creditData,
                      userAccountNumber: e.target.value
                    })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label>Amount</label>
                  <div className="amount-input-wrapper">
                    <span className="currency-symbol">₦</span>
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
                    <th>Sender</th>
                    <th>Receiver</th>
                    <th>Status</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Add transaction rows here */}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
} 