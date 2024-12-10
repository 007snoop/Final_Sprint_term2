import React from "react";
import "./styles/Home.css";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="container">
      
      <header className="header">
        <div className="logo">JCCK</div>
        <input className="searchBar" type="text" placeholder="Search" />
        <nav className="nav">
        <Link to="/products" className="navLink">Products</Link>

          <a href="#about" className="navLink">About</a>
          <a href="#contact" className="navLink">Contact</a>
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
        <div className="productHighlight">
          <img
            src="https://via.placeholder.com/150"
            alt="Sale Product"
            className="image"
          />
          <div>
            <h2>Product Name</h2>
            <p>$Price</p>
            <p>Description of the product goes here.</p>
          </div>
        </div>
      </div>
      
      <div className="carousel">
        {["Product 1", "Product 2", "Product 3", "Product 4"].map(
          (product, index) => (
            <div key={index} className="productCard">
              {product}
            </div>
          )
        )}
      </div>
  
      <footer className="footer">
        <div>
          <a href="#!" className="footerLink">Facebook</a> | 
          <a href="#!" className="footerLink">Instagram</a> | 
          <a href="#!" className="footerLink">LinkedIn</a>
        </div>
        <div>Email: jcck@gmail.com | Phone: (709) 123-5555</div>
      </footer>
    </div>
  );
};

export default Home; 