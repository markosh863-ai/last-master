import React, { useState } from 'react';
import './footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() !== '') {
      setIsSubscribed(true);
      setEmail(''); 
      
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="subscribe-banner">
          <h2>Узнайте первыми о новых акциях!</h2>
          <form className="subscribe-form" onSubmit={handleSubscribe}>
            <input 
              type="email" 
              placeholder="Ваш e-mail адрес" 
              required 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
            <button 
              type="submit" 
              className={`btn-dark ${isSubscribed ? 'subscribed' : ''}`}
            >
              {isSubscribed ? 'Подписано! ✓' : 'Подписаться'}
            </button>
          </form>
        </div>

        <div className="footer__content">
          <div className="footer__col footer__contact">
            <h4>Contact Us</h4>
            <div className="contact-item">
              <strong>Email</strong>
              <p>info@belatea.com</p>
            </div>
            <div className="contact-item">
              <strong>Phone</strong>
              <p>+7 771 123 45 67</p>
            </div>
            <div className="contact-item">
              <strong>Address</strong>
              <p>г. Алматы, ул. Абая 10</p>
            </div>
          </div>

          <div className="footer__col footer__center">
            <div className="footer__logo">
              <img
                src={`${import.meta.env.BASE_URL}Group.png`}
                alt="Belatea"
              />
              <span>Belatea</span>
            </div>
            <p className="footer__motto">Мы предлагаем только то, что едим сами. Натурально, честно, полезно.</p>
            <div className="social-links">
              <a href="#" className="social-circle">IG</a>
              <a href="#" className="social-circle">FB</a>
              <a href="#" className="social-circle">TW</a>
            </div>
          </div>

          <div className="footer__col footer__utility">
            <h4>Utility Pages</h4>
            <ul>
              <li><a href="#">Style Guide</a></li>
              <li><a href="#">404 Not Found</a></li>
              <li><a href="#">Password Protected</a></li>
              <li><a href="#">Licences</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© <strong>Belatea</strong> 2026. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;