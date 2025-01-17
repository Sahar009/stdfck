
import './App.css'
import Header from './components/layout/header/Header'
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

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
   {/* Add more routes as needed */}
 </Routes>
</main>
</HelmetProvider>
  )
}

export default App
