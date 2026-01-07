import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-flex">
          <div className="contact-image">
            <img
              src={`${import.meta.env.BASE_URL}photo-0.jpg`} alt="Наши поля"
              onError={(e) => console.log("Ошибка: файл /contact-photo.jpg не найден в public")}
            />
          </div>

          <div className="contact-info">
            <span className="section-subtitle">Contact Us</span>
            <h2 className="section-title">Мы всегда на связи, чтобы помочь вам</h2>

            <div className="contact-methods">
              <div className="method-item">
                <div className="method-icon">✉</div>
                <div className="method-text">
                  <h4>Message</h4>
                  <p>info@belatea.com</p>
                </div>
              </div>

              <div className="method-item">
                <div className="method-icon">📞</div>
                <div className="method-text">
                  <h4>Contact Us</h4>
                  <p>+7 771 123 45 67</p>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <a href="#" className="social-circle">IG</a>
              <a href="#" className="social-circle">FB</a>
              <a href="#" className="social-circle">TW</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;