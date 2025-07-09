import { IoPersonOutline } from "react-icons/io5";
import { FaStar, FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import logo from "../assets/log(2).png";
// import logo from "../assets/logo (2).png";

const Navbar = () => {
  return (
    <div className="header-wrapper">
      <div className="navbar">
        <div className="logo">
          <img src="/images/logo.png" alt="Logo" />
        </div>
        <ul className="nav-links">
          <li>Shop</li>
          <li>Best Sellers</li>
          <li>Skin & Body Care</li>
          <li>Baby Care</li>

          <li>Skin Insights</li>
          <li>Track Order</li>
        </ul>
        <div className="nav-icons">
          <FaStar className="icon" />
          <FaSearch className="icon" />
          <Link to="/login">
            <IoPersonOutline className="icon" />
          </Link>
          <div className="cart-icon">
            <FaShoppingCart className="icon" />
            <span className="cart-count">0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
