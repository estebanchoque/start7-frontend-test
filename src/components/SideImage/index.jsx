import React from "react";
import imgPlaceholder from "../../assets/image-placeholder.png";
import SAlogo from "../../assets/SA-logo.png";
import "./SideImage.css";

export default function SideImage() {
  return (
    <div className="side-image-container">
      <header></header>
      <div className="image-placeholder">
        <img src={imgPlaceholder} alt="Placeholder" />
      </div>
      <footer className="d-flex justify-content-around">
        <div>
          <p>&#169; 2021, Projetolist</p>
        </div>
        <div>
          UI/UX Design and Front-end by:
          <span className="mx-3">
            <img src={SAlogo} alt="SA Logo" />
          </span>
        </div>
      </footer>
    </div>
  );
}
