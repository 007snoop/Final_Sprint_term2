import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/cody/Home.jsx";
import ProductList from "./components/khoa/ProductList.jsx";
import { ShoppingCartProvider } from './components/khoa/ShoppingCartContext.jsx'; // Adjust the path if needed


const App = () => {
  return (
    <Router>
      <ShoppingCartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
        </Routes>
      </ShoppingCartProvider>
    </Router>
  );
};

export default App;