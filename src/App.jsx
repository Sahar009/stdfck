import './App.css'
import Header from './components/layout/header/Header'
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import { Routes, Route, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Login from './pages/login/Login';
import Footer from './components/layout/footer/Footer';
import Register from './pages/register/Register';
import Dashboard from './pages/dashboard/Dashboard';
import Transfer from './pages/transfer/Transfer';
import AdminDashboard from './pages/admin/AdminDashboard';
import About from './pages/about/About';
import Business from './pages/business/Business';
import Contact from './pages/contact/Contact';
import PrivacyPolicy from './pages/policies/PrivacyPolicy';
import AntiLaundering from './pages/policies/AntiLaundering';
import TermsConditions from './pages/policies/TermsConditions';
import NotFound from './pages/NotFound';
import AdminLogin from './pages/admin/AdminLogin';
import AdminRoute from './components/AdminRoute';

function App() {
  const location = useLocation();
  
  // Define routes where header and footer should be hidden
  const noHeaderFooterRoutes = [
    '/dashboard',
    '/admin/dashboard',
    '/admin',
    
  ];

  // Check if current path starts with any of the routes where header/footer should be hidden
  const shouldHideHeaderFooter = noHeaderFooterRoutes.some(route => 
    location.pathname.startsWith(route)
  );

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <HelmetProvider>
      {!shouldHideHeaderFooter && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/dashboard/*" element={<Dashboard/>} />
          <Route path="/transfer" element={<Transfer/>} />
          <Route path="/admin" element={<AdminDashboard/>} />
          <Route path="/admin/dashboard" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/about" element={<About/>} />
          <Route path="/business" element={<Business/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path='/private-policy' element={<PrivacyPolicy/>} />
          <Route path='/terms-and-conditions' element={<TermsConditions/>} />
          <Route path='/anti-laundring' element={<AntiLaundering/>} />
          {/* Add catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!shouldHideHeaderFooter && <Footer />}
    </HelmetProvider>
  )
}

export default App
