
import './App.css'
import Header from './components/layout/header/Header'
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
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

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);
  return (
    <HelmetProvider>
 <Header/>
 <main>
 <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/login" element={<Login/>} />
   <Route path="/register" element={<Register/>} />
   <Route path="/dashboard" element={<Dashboard/>} />
   <Route path="/transfer" element={<Transfer/>} />
 <Route path="/admin" element={<AdminDashboard/>} />
   <Route path="/admin/dashboard" element={<AdminDashboard/>} />
   <Route path="/about" element={<About/>} />
   <Route path="/business" element={<Business/>} />
   <Route path="/contact" element={<Contact/>} />
   {/* Add more routes as needed */}
 </Routes>
</main>
<Footer/>
</HelmetProvider>
  )
}

export default App
