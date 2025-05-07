import React from "react";
import "../styles/Hero.css";

const HeroSection = () => {
    return (
        <section className="hero-section d-flex lign-items-center justify-content-center text-center">
            <div className="hero-content">    
                <p className="subheading text-uppercase">The New Collection</p>
                <h1 className="hero-title">Elegant jewelry for Every Moment</h1>
                <p className="hero-text">
                Discover timeless pieces crafted to inspire your beauty and confidence.
                </p>
                <a href="#products" className="btn btn-outline-light hero-btn">Shop Now</a>
            </div>
        </section>
    );
};

export default HeroSection;
