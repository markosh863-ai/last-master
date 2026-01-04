import React from 'react';
import Hero from './Hero';
import MyButton from '../../components/UI/MyButton'; // Путь к твоей кнопке
import './home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* 1. Главный баннер (фон уже настроен в hero.css через /images/) */}
      <Hero />

      {/* 2. Блок "О нас" */}
      <section className="about-section">
        <div className="container about-flex">
          {/* Добавляем блок с картинкой, который мы стилизовали */}
          <div className="about-image">
            <img 
              src="/images/Photo (2).jpg" 
              alt="Наше производство" 
            />
          </div>

          <div className="about-text-content">
            <span className="section-subtitle">О нас</span>
            <h2 className="section-title">Мы работаем только с качественным сырьем</h2>
            <p className="section-description">
              Belatea — это производство натуральных продуктов.
              Мы контролируем каждый этап: от выбора зерна до помола муки и холодного отжима масла.
            </p>
            
            {/* Используем твою кнопку вместо обычной ссылки */}
            <a href="https://belatea.by/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <MyButton variant="primary">
                Подробнее
              </MyButton>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;