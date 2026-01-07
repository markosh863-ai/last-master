import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <p className="hero-subtitle">100% натурально</p>
          <h1 className="hero-title">Масла и мука из фермерского сыра</h1>
          <Link to="/catalog" className="hero-btn">
            В КАТАЛОГ
          </Link>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <h2 className="section-title">О нас</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>
                Мы производим натуральные продукты питания, сохраняя всю пользу, 
                заложенную природой. Наше производство основано на принципах 
                честности и качества.
              </p>
              <p>
                Используем только проверенное фермерское сырье и традиционные 
                методы обработки, чтобы вы получали продукт высшего качества.
              </p>

              <div className="about-features">
                <div className="feature-card">
                  <div className="feature-icon">🌿</div>
                  <div className="feature-info">
                    <h4>Эко-стандарты</h4>
                    <p>Никаких пестицидов и ГМО в нашем сырье.</p>
                  </div>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">🛡️</div>
                  <div className="feature-info">
                    <h4>Контроль качества</h4>
                    <p>Проверяем каждую партию в лаборатории.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-stats">
              <div className="stat-item">
                <h3>10+</h3>
                <p>Лет опыта</p>
              </div>
              <div className="stat-item">
                <h3>100%</h3>
                <p>Натурально</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;