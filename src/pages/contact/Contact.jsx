import { useState } from 'react';
import "./contact.css";
import ContactForm from "../../components/contact/ContactForm";

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
                <span className="icon">📍</span>
                <div>
                  <h4>Address</h4>
                  <p>San Francisco, California, United States</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="icon">📞</span>
                <div>
                  <h4>Phone</h4>
                  <p>+1 123 456 7890</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="icon">✉️</span>
                <div>
                  <h4>Email</h4>
                  <p>support@unityfinance.online</p>
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