import React, { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import "../styles/Navbar.css";

const Navbar = ({ cartCount }) => {
    const { searchQuery, setSearchQuery } = useContext(SearchContext);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm sticky-top">
            <div className="container-fluid px-3">
                <a className="navbar-brand fw-bold fs-4" href="#">Auréla</a>

                <div className="d-flex align-items-center ms-auto gap-2 order-lg-2">
                    <form className="search-form d-lg-flex" role="search" onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input
                                type="search"
                                className="form-control"
                                placeholder="Search"
                                value={searchQuery}
                                onChange={handleSearchChange}
                                aria-label="Search"
                            />
                            <button className="btn btn-outline-secondary search-btn" type="submit">
                                <i className="bi bi-search"></i>
                            </button>
                        </div>
                    </form>

                    <button className="btn btn-outline-dark position-relative cart-btn" type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#cartCanvas"
                    aria-controls="cartCanvas">
                        <i className="bi bi-cart-fill"></i>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {cartCount}
                        </span>
                    </button>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#products">Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#aboutUs">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
