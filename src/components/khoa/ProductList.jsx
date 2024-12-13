import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useShoppingCart } from './ShoppingCartContext';
import useApiFetch from './useApiFetch';
import './ProductList.css';


const ProductList = () => {
  const { categoryName } = useParams();
  const { addToCart } = useShoppingCart();
  const [searchTerm, setSearchTerm] = useState('');
  const { data: products, loading, error } = useApiFetch('/products');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const filteredProducts = products.filter((product) => {
    const matchesCategory = !categoryName || product.category === categoryName;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (product, quantity) => {
    addToCart({ ...product, quantity });
  };


  return (
    <div className="products-container">
      <header className="header">
        <div className="logo">JCCK</div>
        
        <nav className="nav">
          <Link to="/" className="navLink">Home</Link>
        <Link to="/products" className="navLink">Products</Link>

          <a href="#about" className="navLink">About</a>
          <a href="#contact" className="navLink">Contact</a>
        </nav>
        
      </header>
      
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img className="product-image" src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="product-price">${product.price}</p>
            <Link className="product-link" to={`/products/${product.id}`}>
              View Details
            </Link>
            <button
              className="add-to-cart-button"
              onClick={() => handleAddToCart(product, 1)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <footer className="footer">
        <div>
          <a href="#!" className="footerLink">
            Facebook
          </a>{" "}
          |
          <a href="#!" className="footerLink">
            Instagram
          </a>{" "}
          |
          <a href="#!" className="footerLink">
            LinkedIn
          </a>
        </div>
        <div>Email: jcck@gmail.com | Phone: (709) 123-5555</div>
      </footer>
    </div>
  );
};

export default ProductList;