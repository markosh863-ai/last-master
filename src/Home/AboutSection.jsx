import React from 'react';
import SectionTitle from '../Ui Kit/SectionTitle';
import BenefitCard from './BenefitCard';
import Button from '../Ui Kit/Button';
import './AboutSection.css';
import aboutImg from '../../public/photo-18.png'; 
import icon1 from '../../public/Natural-Food.png'; 
import icon2 from '../../public/Phone-Time.png'; 

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container about-section__wrapper">
        <div className="about-section__img">
          <img src={aboutImg} alt="About Organick" />
        </div>
        
        <div className="about-section__content">
          <SectionTitle 
            subtitle="About Us" 
            title="We Believe in Working Accredited Farmers" 
          />
          <p className="about-section__desc">
            Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
            the industry's standard dummy text ever since the 1500s, when an unknown printer 
            took a galley.
          </p>

          <div className="about-section__benefits">
            <BenefitCard 
              icon={icon1}
              title="Organic Foods Only"
              text="Simply dummy text of the printing and typesetting industry. Lorem Ipsum"
            />
            <BenefitCard 
              icon={icon2}
              title="Quality Standards"
              text="Simply dummy text of the printing and typesetting industry. Lorem Ipsum"
            />
          </div>

          <Button text="Shop Now" theme="dark" showArrow={true} />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;