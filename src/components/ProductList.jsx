import React from "react";
import ProductCard from "./ProductCard";
import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import "../styles/Product.css";

const ProductList = ({ products, addToCart }) => {
    const { searchQuery } = useContext(SearchContext);

  
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
        <div className="container my-5" id="products">
            <h2 className="product-heading text-center mb-5">Shop Our Collection</h2>
            <div className="row row-cols-2 row-cols-md-3 g-4 justify-content-center">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            addToCart={addToCart}
                        />
                    ))
                ) : (
                    <div className="text-center text-muted">No products found.</div>
                )}
            </div>
        </div>
      </>
        
    );
};

export default ProductList;
