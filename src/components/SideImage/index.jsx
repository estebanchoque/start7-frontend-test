import React from "react";
import { Link } from "react-router-dom";
import imgPlaceholder from "../../assets/image-placeholder.png";
import SAlogo from "../../assets/SA-logo.png";
import ProjetolistLogo from "../../assets/Projetolist-logo.png";
import "./SideImage.css";

export default function SideImage() {
  return (
    <div className="side-image-container">
      <div className="wrapper">
        <header>
          <div className="d-flex justify-content-between">
            <div>
              <img src={ProjetolistLogo} alt="Projetolist Logo" />
            </div>
            <div className="help-link">
              <Link to="/help">
                <p>Ajuda</p>
              </Link>
            </div>
          </div>
        </header>
        <div className="image-placeholder">
          <img src={imgPlaceholder} alt="Placeholder" />
        </div>
        <footer>
          <div className="footer d-flex justify-content-between">
            <div>
              <p>&#169; 2021, Projetolist</p>
            </div>
            <div>
              <p>
                UI/UX Design and Front-end by:
                <img src={SAlogo} alt="SA Logo" />
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
