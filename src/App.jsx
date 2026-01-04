import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog/Catalog';
import ProductDetail from './pages/ProductDetail/ProductDetail'; // Не забудь импортировать!
import Cart from './pages/Cart/Cart';
import Contact from './pages/Contact/Contact';
import MyButton from './components/UI/MyButton';
import './App.css';
import './index.css';

function App() {
  return (
    <div className="app-wrapper">
      {/* Шапка на всех страницах — логотипы из /images/ подтянутся автоматически */}
      <Header />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          
          {/* Добавили маршрут для страницы товара */}
          <Route path="/product/:id" element={<ProductDetail />} />
          
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Стилизованная страница 404 */}
          <Route path="*" element={
            <div className="page-404" style={{ 
              textAlign: 'center', 
              padding: '100px 20px', 
              background: '#fff url("/images/hero-bg.jpg") no-repeat center',
              backgroundSize: 'cover',
              minHeight: '600px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <h1 style={{ fontSize: '120px', color: '#274C5B', margin: 0 }}>404</h1>
              <h2 style={{ color: '#274C5B', marginBottom: '20px' }}>Страница не найдена</h2>
              <p style={{ color: '#525C60', marginBottom: '30px' }}>Похоже, этот продукт еще не вырос или был съеден!</p>
              
              <a href="/">
                <MyButton variant="primary">Вернуться на главную</MyButton>
              </a>
            </div>
          } />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;