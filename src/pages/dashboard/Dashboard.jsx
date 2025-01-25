import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import { Bell } from "lucide-react";
import "./dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();
//   const { user } = useSelector((state) => state.auth);

//   useEffect(() => {
//     if (!user) {
//       navigate('/login');
//     }
//   }, [user, navigate]);

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="header">
        {/* Logo */}
        <h1 className="logo">UNITY</h1>

        {/* Welcome message and badge */}
        <div className="welcome-section">
          <span className="welcome-text">Welcome, Kolawole</span>
          <span className="verified-badge">✓ Verified</span>
        </div>

        {/* Icons */}
        <div className="header-icons">
          <Bell className="notification-icon" />
          <div className="avatar">
            <img 
              src="https://github.com/shadcn.png" 
              alt="User avatar"
            />
            <div className="avatar-fallback">
              KA
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
          <p className="stat-value">$20,000</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">Total Product</p>
          <p className="stat-value">4</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">Total transactions</p>
          <p className="stat-value">4</p>
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
                <p>1234567890</p>
              </div>
              <div className="info-item">
                <label>Account Name</label>
                <p>kunle afolayan</p>
              </div>
              <div className="info-item">
                <label>Email</label>
                <p>kunle@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="info-card">
            <h3 className="card-title">Quick Actions</h3>
            <div className="quick-actions-grid">
              <button className="action-button transfer">
                <span className="action-icon">💸</span>
                <span className="action-text">Transfer</span>
              </button>
              <button className="action-button transactions">
                <span className="action-icon">📊</span>
                <span className="action-text">Transactions</span>
              </button>
              <button className="action-button security">
                <span className="action-icon">🔒</span>
                <span className="action-text">Security</span>
              </button>
              <button className="action-button settings">
                <span className="action-icon">⚙️</span>
                <span className="action-text">Settings</span>
              </button>
            </div>
          </div>

          {/* Profile Information */}
          <div className="info-card">
            <h3 className="card-title">Profile Information</h3>
            <div className="info-list">
              <div className="info-item">
                <label>Address</label>
                <p>1234567890</p>
              </div>
              <div className="info-item">
                <label>Region</label>
                <p>Lagos</p>
              </div>
              <div className="info-item">
                <label>Phone Number</label>
                <p>08012345678</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="transactions-section">
          <div className="info-card">
            <div className="transactions-header">
              <h3 className="card-title">Recent Transactions</h3>
              <button className="view-all-button">View All</button>
            </div>
            <div className="table-container">
              <table className="transactions-table">
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Transfer</td>
                    <td>$20,000.00</td>
                    <td>
                      <Badge variant="success">Completed</Badge>
                    </td>
                    <td>2024-03-20</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>


    </div>
  );
}