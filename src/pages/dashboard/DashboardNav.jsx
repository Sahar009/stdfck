import { Link, useLocation } from 'react-router-dom';
import './DashboardNav.css';

const DashboardNav = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { path: '/dashboard', label: 'Overview' },
    { path: '/dashboard/transfer', label: 'Transfer' },
    // { path: '/dashboard/loans', label: 'Loan History' },
    { path: '/dashboard/transactions', label: 'Transactions' },
    { path: '/dashboard/settings', label: 'Settings' },
  ];

  return (
    <nav className="navigation">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`nav-button ${currentPath === item.path ? 'active' : ''}`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default DashboardNav; 