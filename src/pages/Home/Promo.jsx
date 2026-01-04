import React from 'react';
import './promo.css';

const Promo = () => {
  return (
    <section className="promo">
      <div className="container promo__grid"> 
        {/* Розовая карточка — фон берется из /images/promo-pink.jpg */}
        <div className="promo__item promo__item--pink">
          <div className="promo__content">
            <span className="sub-title sub-title--white">Натурально!</span>
            <h3 className="promo__title">Свежайшее сафлоровое масло</h3>
          </div>
        </div>

        {/* Голубая карточка — фон берется из /images/promo-blue.jpg */}
        <div className="promo__item promo__item--blue">
          <div className="promo__content">
            {/* Добавил класс sub-title--green, чтобы скидка была зеленой */}
            <span className="sub-title sub-title--green">Скидка!</span>
            <h3 className="promo__title">Скидка 20% за подписку</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;