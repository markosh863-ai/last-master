import React from 'react';
import SectionTitle from '../../Ui Kit/SectionTitle';
import './RelatedProducts.css';

const RelatedProducts = ({ children }) => {
  return (
    <div className="related-products">
      <div className="related-header">
        <SectionTitle subtitle="Relevant" title="Related Products" />
      </div>
      <div className="related-grid">
        {children}
      </div>
    </div>
  );
};

export default RelatedProducts;