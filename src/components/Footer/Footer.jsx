import React from "react";
import "./Footer.scss";
import logo from "../../assets/images/logo.png";
import facebookIcon from "../../assets/images/facebook.png";
import twitterIcon from "../../assets/images/twitter.png";
import instagramIcon from "../../assets/images/instagram.png";
import linkedInIcon from "../../assets/images/linkedIn.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__links-container">
        <img className="footer__logo" src={logo} alt="Swap-All-Logo" />
        <ul className="footer__links">
          <li className="footer__link pointer">Contact Us</li>
          <li className="footer__link pointer">Terms of Use</li>
          <li className="footer__link pointer">Privacy Policy</li>
        </ul>
      </div>
      <ul className="footer__icons">
        <li className="footer__icon pointer">
          <img
            className="footer__icon--facebook"
            src={facebookIcon}
            alt="facebook-icon"
          />
        </li>
        <li className="footer__icon pointer">
          <img
            className="footer__icon--twitter"
            src={twitterIcon}
            alt="twitter-icon"
          />
        </li>
        <li className="footer__icon pointer">
          <img
            className="footer__icon--instagram"
            src={instagramIcon}
            alt="instagram-icon"
          />
        </li>
        <li className="footer__icon pointer">
          <img
            className="footer__icon--linkedIn"
            src={linkedInIcon}
            alt="linkedIn-icon"
          />
        </li>
      </ul>
    </div>
  );
}

export default Footer;
