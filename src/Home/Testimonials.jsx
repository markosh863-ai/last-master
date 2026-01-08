import React from 'react';
import SectionTitle from '../../Ui Kit/SectionTitle';
import TestimonialCard from './TestimonialCard';
import './Testimonials.css';
import userAvatar from '../../assets/user-avatar.png'; // Путь к фото клиента

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials__header">
          <SectionTitle subtitle="Testimonial" title="What Our Customer Saying?" />
        </div>

        <TestimonialCard 
          avatar={userAvatar}
          rating={5}
          text="Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been."
          name="Sara Taylor"
          role="Consumer"
        />

        <div className="testimonials__divider"></div>

        <div className="testimonials__stats">
          <div className="stat-item">
            <div className="stat-item__circle">100%</div>
            <p>Organic</p>
          </div>
          <div className="stat-item">
            <div className="stat-item__circle">285</div>
            <p>Active Product</p>
          </div>
          <div className="stat-item">
            <div className="stat-item__circle">350+</div>
            <p>Organic Orchads</p>
          </div>
          <div className="stat-item">
            <div className="stat-item__circle">25+</div>
            <p>Years of Farming</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;