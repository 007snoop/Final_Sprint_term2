import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ShoppingCartProvider } from './components/khoa/ShoppingCartContext';
import Home from './components/cody/Home'; // Import the Home component
import ProductList from './components/khoa/ProductList';
import ProductDetails from './components/khoa/ProductDetails';
import ShoppingCart from './components/khoa/ShoppingCart';
import './App.css';

const App = () => {
  return (
    <ShoppingCartProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} /> {/* Home route */}
            <Route path="/products" element={<ProductList />} /> {/* Product List route */}
            <Route path="/products/:id" element={<ProductDetails />} /> {/* Product Details route */}
            <Route path="/cart" element={<ShoppingCart />} /> {/* Shopping Cart route */}
          </Routes>
        </div>
      </Router>
    </ShoppingCartProvider>
  );
};

export default App;
