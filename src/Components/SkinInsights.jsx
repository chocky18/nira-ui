import React from "react";
import "./SkinInsights.css";
import { Link } from "react-router-dom";

const SkinInsights = () => {
  return (
    <div className="skin-insights-container">
      <div className="image-section">
        <img
          src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1lgq1o.img?w=1200&h=800&m=4&q=60"
          alt="Face"
          className="face-img"
        />

        <div className="label pigmentation">
          <div className="circle"></div>
          <div className="line"></div>
          Pigmentation
        </div>

        <div className="label acne">
          <div className="circle"></div>
          <div className="line"></div>
          Acne
        </div>
      </div>

      <div className="text-section">
        <h1>
          Skin<span>Insights</span>
        </h1>
        <h3>Know Your Skin Health, Using AI</h3>
        <p>
          Discover personalized care, identify concerns, and build a tailored
          routine. Take the first step to healthier skin today.
        </p>
        <Link to="/try-now">
          <button className="try-now-btn">Try Now</button>
        </Link>
      </div>
    </div>
  );
};

export default SkinInsights;
