import React from 'react';
import Logo from '../../ui/Logo/Logo';
import SocialLinks from './SocialLinks';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__wrapper">
        
        {/* Левая колонка: Контакты */}
        <div className="footer__column footer__column--left">
          <h3 className="footer__title">Contact Us</h3>
          <div className="footer__contact-item">
            <span className="footer__contact-label">Email</span>
            <p className="footer__contact-value">needhelp@Organick.com</p>
          </div>
          <div className="footer__contact-item">
            <span className="footer__contact-label">Phone</span>
            <p className="footer__contact-value">666 888 888</p>
          </div>
          <div className="footer__contact-item">
            <span className="footer__contact-label">Address</span>
            <p className="footer__contact-value">88 road, borklyn street, USA</p>
          </div>
        </div>

        {/* Центральная колонка: Лого и Описание */}
        <div className="footer__column footer__column--center">
          <Logo />
          <p className="footer__description">
            Simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
          <SocialLinks />
        </div>

        {/* Правая колонка: Utility Pages */}
        <div className="footer__column footer__column--right">
          <h3 className="footer__title">Utility Pages</h3>
          <ul className="footer__list">
            <li><a href="#">Style Guide</a></li>
            <li><a href="#">404 Not Found</a></li>
            <li><a href="#">Password Protected</a></li>
            <li><a href="#">Licences</a></li>
            <li><a href="#">Changelog</a></li>
          </ul>
        </div>

      </div>
      
      {/* Нижняя полоска с копирайтом */}
      <div className="footer__bottom">
        <p>Copyright © <b>Organick</b> | Designed by <b>VictorFlow</b> Templates - Powered by <b>Webflow</b></p>
      </div>
    </footer>
  );
};

export default Footer;