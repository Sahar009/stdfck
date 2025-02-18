import { Bell } from "lucide-react";
import './DashboardHeader.css';
import { Link } from "react-router-dom";

const DashboardHeader = ({ user }) => {
  return (
    <header className="header">
     <Link to="/"> <h1 className="logo">UNITY FINANCE</h1></Link>

      <div className="welcome-section">
        <span className="welcome-text">Welcome, {user?.firstName}</span>
        {user?.isApproved && (
          <span className="verified-badge">✓ Verified</span>
        )}
      </div>

      <div className="header-icons">
        <Bell className="notification-icon" />
        <div className="avatar">
          {user?.avatar?.url ? (
            <img 
              src={user.avatar.url} 
              alt={`${user.firstName}'s avatar`}
              className="avatar-image"
            />
          ) : (
            <div className="avatar-fallback">
              {user?.firstName?.[0]}{user?.lastName?.[0]}
            </div>
          )}
          {!user?.isApproved && (
            <span className="pending-approval">
              Pending Approval
            </span>
          )}
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader; 