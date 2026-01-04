import React from 'react';
import Hero from '../Home/Hero';
import Catalog from '../Catalog/Catalog'; // Можно вывести каталог прямо на главной

const Home = () => {
  return (
    <main>
      <Hero />
      <section className="featured-products">
        <Catalog />
      </section>
    </main>
  );
};

export default Home;