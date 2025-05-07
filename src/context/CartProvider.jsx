import React, {useState, useEffect} from "react";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const saved = localStorage.getItem("jewelbox-cart");
        return saved ? JSON.parse(saved) : [];
    });
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");

    useEffect(() => {
        localStorage.setItem("jewelbox-cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        const existing = cart.find((item) => item.id===product.id);
        if (existing) {
            setCart(
                cart.map((item) =>
                item.id===product.id ? {...item, qyt: item.qyt + 1} : item)
            );
        } else {
            setCart([...cart, {...product, qyt: 1}]);
        }

        setToastMessage(`${product.name} added to the cart!`);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2000);
    };

    const removeFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    const updateQyt = (id, amount) => {
        setCart(
            cart.map((item) => item.id===id ? {...item, qyt: Math.max(1, item.qyt + amount)} : item)
        );
    };

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            updateQyt,
            showToast,
            toastMessage,
        }} >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
