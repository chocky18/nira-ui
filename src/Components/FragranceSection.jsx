import React from 'react';
import './FragranceSection.css'

const FragranceSection = () => {
  return (
    <div className="fragrance-container">
      <div className="fragrance-content">
        <p className="fragrance-subtitle">OUR FRAGRANCES</p>
        <h2 className="fragrance-heading">
          Personalized skincare treatments that grow with you—wherever you are in your skin journey.
          Start your consultation now.
        </h2>
        <button className="shop-button">Try now</button>

        <div className="review">
          <div className="stars">★★★★★</div>
          <p className="review-text">
            “Such a thoughtful system! This is my favorite feature so far (besides the tone analyzer). The acne & hydration suggestions are spot-on. It feels like having a skin expert in my pocket—gentle, science-backed, and tailored just for me.”
          </p>
          <p className="review-author">
            Jessica, gifted Glossier You Fleur in exchange for an honest review.
          </p>
        </div>
      </div>

      <div className="fragrance-video">
        <video autoPlay loop muted playsInline>
          <source src="/video/fragrance.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default FragranceSection;
