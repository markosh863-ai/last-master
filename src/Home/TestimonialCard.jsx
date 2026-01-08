import React from 'react';
import SectionTitle from '../../Ui Kit/SectionTitle';
import TestimonialCard from './TestimonialCard';
import './Testimonials.css';

const Testimonials = () => (
  <section className="testimonials">
    <div className="container">
      <SectionTitle subtitle="Testimonial" title="What Our Customer Saying?" />
      <TestimonialCard 
        text="Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry."
        name="Sara Taylor"
        role="Consumer"
      />
    </div>
  </section>
);

export default Testimonials;