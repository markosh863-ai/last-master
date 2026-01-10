import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          
          <div className="footer__column footer__contacts">
            <h3 className="footer__title">Contact Us</h3>
            <p><b>Email:</b> needhelp@Bebalea.com</p>
            <p><b>Phone:</b> 666 888 888</p>
            <p><b>Address:</b> 88 road, borklyn street, USA</p>
          </div>

          <div className="footer__column footer__main">
            <div className="footer__brand">
              <h2 className="footer__logo-text">Bebalea</h2>
            </div>
            <p className="footer__desc">
              Simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text.
            </p>
          </div>

          <div className="footer__column footer__nav">
            <h3 className="footer__title">Utility Pages</h3>
            <ul className="footer__list">
              <li>Style Guide</li>
              <li>404 Not Found</li>
              <li>Licences</li>
              <li>Changelog</li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;