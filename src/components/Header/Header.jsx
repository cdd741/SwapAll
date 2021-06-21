import React from "react";
import "./Header.scss";
import logo from "../../assets/images/logo.png";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Swap-All-Logo" />
      <ul className="header__nav-links">
        <a href="#" className="header__nav-link">
          <li>Products</li>
        </a>
        <a href="#" className="header__nav-link">
          <li>Developers</li>
        </a>
        <a href="#" className="header__nav-link">
          <li>Governance</li>
        </a>
        <a href="#" className="header__nav-link">
          <li>Community</li>
        </a>
        <a href="#" className="header__nav-link">
          <li>Get Started</li>
        </a>
      </ul>
    </div>
  );
}

export default Header;
