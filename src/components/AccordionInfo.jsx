import React from "react";
import "../styles/Accordion.css";

const AccordionInfo = () => {
    return (
        <div className="container">
            <div className="accordion my-4" id="productAccordion">
                <div className="accordion-item border-0">
                    <h2 className="accordion-header">
                        <button className="accordion-button fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                            Jewelry Care Tips
                        </button>
                     </h2>
                     <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#productAccordion">
                        <div className="accordion-body">
                        Store your jewelry in a cool, dry place and avoid contact with
                        water or harsh chemicals to maintain its shine.
                        </div>
                     </div>
                </div>
                <div className="accordion-item border-0">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                            Shopping & Delivery
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#productAccordion">
                        <div className="accordion-body">
                        Free standard delivery for orders above $50. Express options
                        available at checkout.
                        </div>
                    </div>
                </div>
                <div className="accordion-item border-0">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                            Returns & Exchanges
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#productAccordion">
                        <div className="accordion-body">
                        You can return or exchange items within 14 days of delivery. Make
                        sure the item is unused and in original packaging.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccordionInfo;