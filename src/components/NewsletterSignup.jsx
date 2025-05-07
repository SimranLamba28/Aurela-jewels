import React from "react";
import "../styles/Newsletter.css";

const NewsletterSignup = () => {
    return (
        <section className="news-Section text-center" id="contact">
            <div className="container">
                <h2 className="news-section-title">Get the Latest from Auréla</h2>
                <p>Sign up to receive 10% off your next purchase + hear about new arrivals!</p>
                <form className="d-flex justify-content-center mt-3 newsForm">
                    <input type="email"
                    placeholder="Enter Your Email"
                    className="form-control w-50 me-2 rounded-pill email-input" />
                    <button type="submit" className="btn btn-primary rounded-pill news-btn">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default NewsletterSignup;