import React from "react";
import "./Header.scss";
import logo from "../../assets/images/logo.png";

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="Swap-All-Logo" />
      <ul className="header__nav-links">
        <li className="header__nav-link pointer">Products</li>
        <li className="header__nav-link pointer">Developers</li>
        <li className="header__nav-link pointer">Governance</li>
        <li className="header__nav-link pointer">Community</li>
        <li className="header__nav-link pointer">Get Started</li>
      </ul>
    </div>
  );
}

export default Header;
