import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <span className="contact-title">Become a Client &amp; Get Discount</span>
        <div className="contact-subtitle">New Clients will get 20% discount</div>
        <div className="contact-button-container">
          <a href="mailto:dolapofadipe@highpark.in" className="contact-button">Contact Us</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
