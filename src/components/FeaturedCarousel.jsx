import React, { useContext, useEffect, useState } from "react";
import featured from "../data/featuredProducts";
import { CartContext } from "../context/CartContext";
import "../styles/Featured.css";

const getChunckSize = () => {
    const width= window.innerWidth;
    if(width >= 768) return 4;
    if(width >= 600) return 3;
    return 2;
};

const chunk = (arr,size) => {
    const chunked = [];
    for (let i= 0; i<arr.length; i+= size) {
        chunked.push(arr.slice(i, i+size));
    }
    return chunked;
};

const FeaturedCarousel = () => {
    const { addToCart } = useContext(CartContext);
    const [slides, setSlides] = useState(chunk(featured, getChunckSize()));

    useEffect(() => {
        const handleResize = () =>{
            setSlides(chunk(featured, getChunckSize()));
        };

        window.addEventListener("resize", handleResize);
        return() => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className="featured-section py-5">
            <div className="container">
                <h2 className="featured-heading text-center mb-5">Featured Collection</h2>
                <div id="multiItemCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {slides.map((group, i) => (
                            <div className={`carousel-item ${i === 0 ? "active" : ""}`} key={i}>
                                <div className="row justify-content-center">
                                    {group.map((product) => (
                                        <div
                                            className="col-6 col-sm-4 col-md-3 d-flex justify-content-center mb-4"
                                            key={product.id}
                                        >
                                            <div className="featured-card position-relative">
                                                {product.badge && <span className="product-badge">{product.badge}</span>}
                                                <img src={product.image} alt={product.name} className="featured-img" />
                                                <div className="featured-info">
                                                    <h5>{product.name}</h5>
                                                    <p>${product.price.toFixed(2)}</p>
                                                    <button
                                                        className="add-to-bag-btn"
                                                        onClick={() => addToCart(product)}
                                                    >
                                                        <i className="bi bi-bag-plus me-1"></i> Add to Bag
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#multiItemCarousel"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon"></span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#multiItemCarousel"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon"></span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedCarousel;
