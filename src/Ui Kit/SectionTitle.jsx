import React from 'react';
import './sectiontitle.css';

const SectionTitle = ({ subtitle, title }) => {
  return (
    <div className="section-title">
      <span className="subtitle">{subtitle}</span>
      <h2 className="title">{title}</h2>
    </div>
  );
};

export default SectionTitle;