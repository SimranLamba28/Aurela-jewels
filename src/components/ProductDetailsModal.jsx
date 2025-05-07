import React,{useContext} from "react";
import "../styles/ProductModal.css";
import { CartContext } from '../context/CartContext'; 


const ProductDetailsModal = ({ product, onClose }) => {
  const { addToCart } = useContext(CartContext);
  if (!product) return null;

  return (
    <div className="modal fade show d-block" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div className="modal-content p-4 rounded-4 border-0 shadow-lg product-details-modal">
          <div className="row g-5">
            <div className="col-md-6 text-center">
              <img
                src={product.image}
                alt={product.name}
                className="img-fluid rounded-3 shadow"
              />
            </div>

            <div className="col-md-6">
              <h2 className="fw-bold mb-3">{product.name}</h2>
              <div className="text-warning mb-3">
                {Array.from({ length: 5 }, (_, i) => (
                  <i
                    key={i}
                    className={`bi ${i < product.rating ? "bi-star-fill" : "bi-star"}`}
                  ></i>
                ))}
              </div>
              <p className="text-muted">{product.description}</p>
              <hr />
              <p><strong>Category:</strong> {product.category}</p>
              <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
              <p><strong>Material:</strong> {product.material}</p> 
              <p><strong>Availability:</strong> {product.availability}</p>

              <div className="d-flex gap-3 mt-4">
                <button className="btn btn-dark w-100" onClick={() => addToCart(product)}>
                  <i className="bi bi-bag-plus"></i> Add to Cart
                </button>
                <button className="btn btn-outline-secondary w-100" onClick={onClose}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsModal;
