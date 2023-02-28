import React, { useState } from "react";
import "./header.css";

const Header = () => {
  // =========== Toggle Menu =========
  const [Toggle, toggleMenu] = useState(false);
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav-logo">
          Anna
        </a>
        <div className={Toggle ? "nav-menu show-menu" : "nav-menu"}>
          <ul className="nav-list grid">
            <li className="nav-item">
              <a href="" className="nav-link active-link">
                <i className="uil uil-estate nav-icon"></i>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                <i className="uil uil-user nav-icon"></i>
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                <i className="uil uil-file-alt nav-icon"></i>
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                <i className="uil uil-briefcase-alt nav-icon"></i>
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                <i className="uil uil-scenery nav-icon"></i>
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                <i className="uil uil-message nav-icon"></i>
                Contact me
              </a>
            </li>
          </ul>
          <i
            className="uil uil-times nav-close"
            onClick={() => toggleMenu(!Toggle)}
          ></i>
        </div>
        <div className="nav-toggle" onClick={() => toggleMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
