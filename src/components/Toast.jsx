import React from "react";
import "../styles/Toast.css";

const Toast = ({message}) => {
    return (
        <div
           className="toast-container position-fixed bottom-0 end-0 p-3">
            <div className="toast show align-items-center">
                <div className="d-flex">
                    <div className="toast-body">{message}</div>
                    <button
                       type="button"
                       className="btn-close btn-close-white me-2 m-auto"
                       data-bs-dismiss="toast"
                    ></button>
                </div>
            </div>
        </div>
    );
};

export default Toast;