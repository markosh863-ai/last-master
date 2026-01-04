import React from "react";
import { Link } from "react-router-dom";
import MyButton from "../../components/UI/MyButton"; // Твоя универсальная кнопка
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__content">
          <span className="sub-title">100% Natural Food</span>
          <h1>Choose the best healthier way of life</h1>
          
          <Link to="/catalog" style={{ textDecoration: 'none' }}>
            {/* Используем MyButton с вариантом success или primary */}
            <MyButton variant="success">
              Explore Now <span style={{ marginLeft: '10px' }}>→</span>
            </MyButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;