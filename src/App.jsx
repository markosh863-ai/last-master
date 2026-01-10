import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Hero from './Home/Hero';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <main className="main-content">
        <Routes>
          {/* Если в поиске /last, перекидываем на главную, чтобы не было 404 */}
          <Route path="/last" element={<Navigate to="/" replace />} />
          
          {/* ГЛАВНАЯ */}
          <Route path="/" element={<Hero />} />
          
          {/* МАГАЗИН */}
          <Route path="/shop" element={
            <div style={{ padding: '150px 20px', textAlign: 'center' }}>
              <h1 style={{ color: "red", fontSize: "60px" }}>ЭТО МАГАЗИН!</h1>
            </div>
          } />
          
          {/* О НАС */}
          <Route path="/about" element={
            <div style={{ padding: '150px 20px', textAlign: 'center' }}>
              <h1>About Bebalea Page</h1>
            </div>
          } />

          {/* Вместо 404 всегда показываем Hero, чтобы сайт не падал */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;