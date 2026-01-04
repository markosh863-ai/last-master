import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog/Catalog';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Cart from './pages/Cart/Cart';
import Contact from './pages/Contact/Contact';
import MyButton from './components/UI/MyButton';
import './App.css';
import './index.css';

function App() {
  return (
    <div className="app-wrapper">
      {/* Хедер подтянет group.png и cart-icon.png из корня public */}
      <Header />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          
          {/* Маршрут для детальной страницы — данные возьмем из productSlice */}
          <Route path="/product/:id" element={<ProductDetail />} />
          
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Страница 404 с твоим новым фоном */}
          <Route path="*" element={
            <div className="page-404" style={{ 
              textAlign: 'center', 
              padding: '100px 20px', 
              // ИСПРАВЛЕНО: используем photo-25.png вместо hero-bg.jpg
              background: '#fff url("/photo-25.png") no-repeat center',
              backgroundSize: 'cover',
              minHeight: '80vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <h1 style={{ fontSize: '150px', color: '#274C5B', margin: 0, lineHeight: 1 }}>404</h1>
              <h2 style={{ color: '#274C5B', marginBottom: '20px', fontSize: '40px' }}>Страница не найдена</h2>
              <p style={{ color: '#525C60', marginBottom: '30px', fontSize: '18px' }}>
                Похоже, этот продукт еще не вырос или был съеден!
              </p>
              
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