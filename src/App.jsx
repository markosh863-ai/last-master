import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'; // Добавил Link
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog/Catalog';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Cart from './pages/Cart/Cart';
import Contact from './pages/Contact/Contact';
import MyButton from './Ui Kit/Button';
import './App.css';
import './index.css';

function App() {
  return (
    <div className="app-wrapper">
      <Header />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Страница 404 */}
          <Route path="*" element={
            <div className="page-404">
              <div className="page-404__content">
                <h1>404</h1>
                <h2>Страница не найдена</h2>
                <p>Похоже, этот продукт еще не вырос или был съеден!</p>
                
                {/* Используем Link вместо <a> */}
                <Link to="/">
                  <MyButton variant="primary">Вернуться на главную</MyButton>
                </Link>
              </div>
            </div>
          } />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;