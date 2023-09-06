import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Donate from './pages/Donate';
import Product from './pages/Product';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/donate" element={<Donate />} />
    <Route path="/product" element={<Product />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
