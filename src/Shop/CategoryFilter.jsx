import React from 'react';
import './CategoryFilter.css';

const categories = ['All', 'Vegetable', 'Fruit', 'Fresh', 'Nuts'];

const CategoryFilter = ({ active, onSelect }) => {
  return (
    <div className="category-filter">
      {categories.map(cat => (
        <button 
          key={cat}
          className={`filter-btn ${active === cat ? 'active' : ''}`}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;