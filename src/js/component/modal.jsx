import React, { useState } from "react";
import "../../styles/modal.css";

const Modal = ({ title, body, img }) => {
  const [isVis, setIsVis] = useState(true);
  
  const handleClick = () => {
    setIsVis(!isVis);
  }

  return (
    <div
      className="modal-bg"
      style={{ display: isVis ? "flex" : "none" }}
      onClick={handleClick}
    >
      <div className="card bg-dark text-white">
        <img src={img} className="card-img" alt="..." />
        <div className="card-img-overlay">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{body}</p>
          <p className="card-text">Last updated 3 mins ago</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
