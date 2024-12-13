import React, { useState, useEffect } from "react";
import "./styles/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [highlightedProduct, setHighlightedProduct] = useState(null);  
  const toggleDescription = () => {
    setShowFullDescription((prev) => !prev);
  };

  // Fetch products from the JSON API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3001/products"); 
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      };
    
      if (products.length > 0) {
        const randomIndex = Math.floor(Math.random() * products.length);
        setHighlightedProduct(products[randomIndex]);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="container">
      <header className="header">
        <div className="header-left">
          <div className="logo">JCCK</div>
          <input className="searchBar" type="text" placeholder="Search" />
        </div>
        <nav className="nav">
          <Link to="/products" className="navLink">
            Products
          </Link>

          <a href="#about" className="navLink">
            About
          </a>
          <a href="#contact" className="navLink">
            Contact
          </a>
        </nav>
        <div className="userIcons">
          <i className="fas fa-user"></i>
          <i className="fas fa-shopping-cart"></i>
        </div>
      </header>

      <div className="featureContainer">
        <div className="banner">
          <h1>Big Sale</h1>
          <p>Up to 50% Off</p>
          <p>Happening Now</p>
        </div>
        {highlightedProduct && (
          <div className="productHighlight">
            <img
              src={highlightedProduct.image}
              alt={highlightedProduct.name}
              className="image"
            />
            <div>
              <h2>{highlightedProduct.name}</h2>
              <p>${highlightedProduct.price}</p>
              <p>
                {showFullDescription
                  ? highlightedProduct.description
                  : `${highlightedProduct.description.slice(0, 100)}...`}
                {highlightedProduct.description.length > 100 && (
                  <button onClick={toggleDescription} className="readMoreBtn">
                    {showFullDescription ? "Read Less" : "Read More"}
                  </button>
                )}
              </p>
              <Link to={`/products/${highlightedProduct.id}`}>
                View Product
              </Link>
            </div>
          </div>
        )}
      </div>

      <div className="carousel">
        {products.slice(0, 6).map((product) => (
          <div key={product.id} className="productCard">
            <Link to={`/products/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="productImage"
              />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </Link>
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

export default Home;
