import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaArrowRight } from "react-icons/fa";
import "./LoginPage.css";

const LoginPage = () => {
  const [method, setMethod] = useState("phone");
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="login-wrapper">
      <h3>Introducing</h3>
      <h2 className="login-heading">TrustCircle.</h2>
      <p className="subheading">
        We value your loyalty to skincare. <br />
        Now get rewards at every step.
      </p>

      <img
        className="bottle-img"
        src=""
        alt="bottle"
      />

      <h3 className="login-heading">Login with OTP</h3>
      <p className="instruction">Enter your log in details</p>

      <div className="input-group">
        {method === "phone" ? (
          <div className="phone-input">
            <span className="country-code">🇮🇳</span>
            <input
              type="tel"
              placeholder="Phone number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
        ) : (
          <div className="email-input">
            <input
              type="email"
              placeholder="Email address"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
        )}
      </div>

      <button className="otp-btn">
        Request OTP <FaArrowRight style={{ marginLeft: "10px" }} />
      </button>

      <div className="captcha-box">
        <div>
          <input type="checkbox" /> I'm not a robot
        </div>
        <div className="captcha-img">reCAPTCHA</div>
      </div>

      <div className="divider">
        <span></span>
        Or Login Using
        <span></span>
      </div>

      <div className="toggle-buttons">
        <button
          className={method === "phone" ? "active" : ""}
          onClick={() => {
            setMethod("phone");
            setInputValue("");
          }}
        >
          <FaPhoneAlt style={{ marginRight: "6px" }} /> Phone
        </button>
        <button
          className={method === "email" ? "active" : ""}
          onClick={() => {
            setMethod("email");
            setInputValue("");
          }}
        >
          <FaEnvelope style={{ marginRight: "6px" }} /> Email
        </button>
      </div>

      <p className="policy-text">
        I accept that I have read & understood <br />
        <a href="/">Privacy Policy</a> and <a href="/">T&Cs</a>.
      </p>
    </div>
  );
};

export default LoginPage;
