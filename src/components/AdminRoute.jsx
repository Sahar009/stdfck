import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AdminRoute = ({ children }) => {
  const { admin } = useSelector((state) => state.admin);

  if (!admin) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default AdminRoute; 