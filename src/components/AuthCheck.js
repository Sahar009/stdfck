import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../store/auth/authSlice';
import { isTokenExpired } from '../utils/auth';

const AuthCheck = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = () => {
      if (user?.token && isTokenExpired(user.token)) {
        dispatch(logout());
        navigate('/login');
      }
    };

    // Check immediately
    checkAuth();
    
    // Check every minute
    const interval = setInterval(checkAuth, 60000);
    
    return () => clearInterval(interval);
  }, [user, dispatch, navigate]);

  return null;
};

export default AuthCheck;