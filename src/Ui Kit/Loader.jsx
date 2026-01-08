import React from 'react';
import './loader.css';

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="ui-loader"></div>
      <p className="loader-text">Loading...</p>
    </div>
  );
};

export default Loader;