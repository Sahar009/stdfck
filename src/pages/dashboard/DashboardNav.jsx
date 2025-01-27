import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/auth/authSlice';
import './DashboardNav.css';

const DashboardNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentPath = location.pathname;

  const navItems = [
    { path: '/dashboard', label: 'Overview' },
    { path: '/dashboard/transfer', label: 'Transfer' },
    // { path: '/dashboard/loans', label: 'Loan History' },
    { path: '/dashboard/transactions', label: 'Transactions' },
    { path: '/dashboard/settings', label: 'Settings' },
  ];

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <nav className="navigation">
      <div className="nav-links">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-button ${currentPath === item.path ? 'active' : ''}`}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <button className="logout-button" onClick={handleLogout}>
        <LogOut size={18} />
        <span>Logout</span>
      </button>
    </nav>
  );
};

export default DashboardNav; 