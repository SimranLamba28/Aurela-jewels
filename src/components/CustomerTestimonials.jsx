import React, {useEffect, useState }from "react";
import testimonials from "../data/testimonials";
import "../styles/Testimonials.css";

const getChunckSize = () => {
    const width = window.innerWidth;
    if (width >= 992) return 3;
    if (width >= 600) return 2;
    return 1;
};

const chunk = (arr, size) => {
    const chunked = [];
    for (let i = 0; i < arr.length; i += size) {
        chunked.push(arr.slice(i, i+size));
    }
    return chunked;
};

const CustomerTestimonials = () => {
    const [slides, setSlides] = useState(chunk(testimonials, getChunckSize()));

    useEffect(() => {
        const handleResize = () => {
            setSlides(chunk(testimonials, getChunckSize()));
        };

        window.addEventListener("resize", handleResize);
    }, []);

    return (
        <section className="testimonials-section py-5">
            <div className="container">
                <h2 className="text-center mb-5">Customer Testimonials</h2>
                <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner testimonial-carousel-inner">
                        {slides.map((group, i) => (
                            <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
                                <div className="testimonial-row row justify-content-center">
                                    {group.map((testimonial) => (
                                        <div className="testimonial-col col-12 col-sm-6 col-md-4 mb-4" key={testimonial.id}>
                                            <div className="testimonial-card text-center p-4 shadow-sm bg-white rounded-4">
                                                <p className="testimonial-quote">"{testimonial.quote}"</p>
                                                <p className="testimonial-name fw-semibold mt-3">{testimonial.name}</p>
                                                <div className="testimonial-stars text-warning">
                                                    {[...Array(testimonial.stars)].map((_, i) => (
                                                        <span key={i} className="star">&#9733;</span>
                                                    ))}
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
                        data-bs-target="#testimonialCarousel"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon"></span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#testimonialCarousel"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon"></span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CustomerTestimonials;
