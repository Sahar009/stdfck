import { useState } from 'react';
import "./contact.css";
import ContactForm from "../../components/contact/ContactForm";
import { MapPin, Mail } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic
  };

  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>We&apos;re here to help and answer any questions you might have</p>
      </header>


      <div className="contact-content">
        <div className="contact-info">
          <div className="info-card">
            <h3>Get in Touch</h3>
            <div className="contact-details">
              <div className="contact-item">
                <MapPin size={20} color='#4dbf14' className="icon" />
                <div>
                  <h4>Address</h4>
                  <p>San Francisco, California, United States</p>
                </div>
              </div>
             
              <div className="contact-item">
                <Mail size={20} color='#4dbf14' className="icon" />
                <div>
                  <h4>Email</h4>
                  <p>support@unityfinance.finance</p>
                </div>
              </div>
            </div>
          </div>

        <ContactForm/>
        </div>
      </div>
    </div>
  );
} 