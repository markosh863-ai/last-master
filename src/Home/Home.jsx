const products = [
  { id: 1, category: 'Vegetable', name: 'Calabrese Broccoli', oldPrice: '20.00', price: '13.00', image: '/broccoli.png', rating: 5 },
  { id: 2, category: 'Fresh', name: 'Fresh Banana', oldPrice: '20.00', price: '14.00', image: '/banana.png', rating: 5 },
];

// Внутри компонента Home:
<div className="product-grid">
  {products.map(item => <ProductCard key={item.id} {...item} />)}
</div>