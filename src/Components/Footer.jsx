import React from "react";
import "./Footer.css";

import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h4>About Us</h4>
          <ul>
            <li>Our values</li>
            <li>Privacy policy</li>
            <li>Terms & conditions</li>
            <li>Disclaimer</li>
            <li>Corporate Information</li>
            <li>Media Outreach</li>
            <li>Distributor Queries</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li>Knowledge</li>
            <li>FAQs</li>
            <li>Return & refund policy</li>
            <li>Track order</li>
            <li>Help Center</li>
            <li>Download App</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact Us</h4>
          <p>
            Need help fast? Fill out our form or email <br />
            <a href="o">help@nira-ai.co</a>
          </p>
          <div className="social-icons">
            <HiOutlineMail />
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>

        <div className="footer-image-container">
          <img
            src="https://png.pngtree.com/png-vector/20220525/ourmid/pngtree-smile-icon-logo-vector-design-png-image_4733706.png"
            alt="Smiley waving"
          />
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2025 Nira AI.</p>
      </div>
    </footer>
  );
};

export default Footer;
