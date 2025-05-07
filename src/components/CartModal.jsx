import React from "react";
import "../styles/Cart.css";

const CartModal = ({cart, removeFromCart, updateQyt }) => {
    
    const total = cart.reduce((acc,item) => acc + item.price * item.qyt, 0);

    return (
        <div 
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="cartCanvas"
            aria-labelledby="cartLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="cartLabel">Your Cart</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas"> </button> 
            </div>
            <div className="offcanvas-body">
                {cart.length===0 ? (
                    <p className="text-muted cart-empty-text">Your Cart is empty!</p>
                ) : (
                    cart.map((item) => (
                        <div key={item.id} className="d-flex justify-content-between mb-3 border-bottom pb-2">
                            <div>
                                <strong>{item.name}</strong>
                                <br />
                                <span>${item.price.toFixed(2)} x {item.qyt}</span>
                            </div>
                            <div className="btn-group">
                                <button className="btn btn-sm btn-outline-dark" onClick={() => updateQyt(item.id, -1)}>-</button>
                                <button className="btn btn-sm btn-outline-dark" onClick={() => updateQyt(item.id, 1)}>+</button>
                                <button className="btn btn-sm btn-danger" onClick={() => removeFromCart(item.id)}>x</button>
                            </div>
                        </div>
                    ))
                )}
                <hr />
                <h5>Total: ${total.toFixed(2)}</h5>
                <button className="btn btn-success w-100 mt-3">Checkout</button>
            </div>
        </div>
    );
};

export default CartModal;