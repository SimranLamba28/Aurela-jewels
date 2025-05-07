import React from "react";
import "../styles/About.css"; 

const AboutSection = () => {
  return (
    <section className="about-section text-center py-5" id="aboutUs">
      <div className="container">
        <h2 className="section-title mb-4"> About Us</h2>
        <p className="about-text mx-auto mb-5">
          Auréla is a modern jewelry store built to empower your style and shine.
          Each piece is crafted with love, quality, and timeless design.
        </p>
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5 className="about-feature-title">Free Shipping</h5>
            <p className="about-feature-text">On all orders over $50 worldwide</p>
          </div>
          <div className="col-md-4 mb-4">
            <h5 className="about-feature-title">Premium Quality</h5>
            <p className="about-feature-text">Hand-selected materials and tested for excellence</p>
          </div>
          <div className="col-md-4 mb-4">
            <h5 className="about-feature-title">100% Secure Checkout</h5>
            <p className="about-feature-text">Protected with SSL encryption and trusted partners</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
