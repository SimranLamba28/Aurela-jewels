import React, {useContext} from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Toast from "./components/Toast";
import CartModal from "./components/CartModal";
import products from "./data/products";
import { CartContext } from "./context/CartContext";
import AboutSection from "./components/AboutSection";
import NewsletterSignup from "./components/NewsletterSignup";
import HeroSection from "./components/HeroSection";
import FeaturedCarousel from "./components/FeaturedCarousel";
import AccordionInfo from "./components/AccordionInfo";
import CustomerTestimonials from "./components/CustomerTestimonials";
import Footer from "./components/Footer";

const App = () => {
    const { cart, addToCart, removeFromCart, updateQyt, showToast, toastMessage } = useContext(CartContext);

    return (
        <>
            <Navbar cartCount={cart.length} />
            <HeroSection />
            <ProductList products={products} addToCart={addToCart} />
            <CartModal cart={cart} removeFromCart={removeFromCart} updateQyt={updateQyt} />
            {showToast && <Toast message={toastMessage} />}
            <FeaturedCarousel />
            <AboutSection />
            <CustomerTestimonials />
            <AccordionInfo />
            <NewsletterSignup />
            <Footer />
        
        </>
    );
};

export default App;