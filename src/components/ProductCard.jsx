import React, { useState } from "react";
import ProductDetailsModal from "./ProductDetailsModal";

const ProductCard = ({product, addToCart}) => {

    const [showModal, setShowModal] = useState(false);

    const stars = Array.from({ length: 5 }, (_, i) => (
        <i 
           key={i}
           className={`bi ${i < product.rating ? "bi-star-fill" : "bi-star"}`}
        ></i>
    ));

    return (
        <>
        <div className="col">
            <div className="card h-100 border-0 shadow-sm">
                <img 
                   src={product.image}
                   className="card-img-top"
                   alt={product.name}
                />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="text-warning">{stars}</div>
                        <strong>${product.price.toFixed(2)}</strong>
                    </div>
                    <button className="btn btn-dark w-100 mt-3" onClick={() => addToCart(product)}>
                        <i className="bi bi-bag-plus"></i>Add to Cart
                    </button>
                    <button className="btn btn-outline-secondary w-100 mt-2" onClick={() => setShowModal(true)}>
                    <i className="bi bi-eye"></i> View Details
                    </button>
                </div>
            </div>
        </div>

        {showModal && (
            <ProductDetailsModal product={product} onClose={() => setShowModal(false)}
            />
        )}
        </>
    );
};

export default ProductCard;
