import React from "react";
import "./PictureInstructions.css";
import FaqSection from "./FaqSection";
import { Link } from 'react-router-dom';

const PictureInstructions = () => {
  return (
    <>
      <div className="picture-instructions-wrapper">
        <h2 className="instructions-title">
          How to take your picture for skin analysis?
        </h2>

        <div className="steps-container">
          <div className="step">
            <div className="step-image">
              <img src="https://thumbs.dreamstime.com/b/caucasian-woman-beauty-blogger-vlogger-model-influencer-selfie-photo-mobile-phone-social-media-skincare-blog-vlog-home-bathroom-349749555.jpg" alt="Step 1" />
              <span className="step-number">1</span>
            </div>
            <h3>Take a natural picture</h3>
            <p>
              Remove make-up. Take-off your glasses. Pull your hair back & tie
              it.
            </p>
          </div>

          <div className="step">
            <div className="step-image">
              <img src="https://thumbs.dreamstime.com/b/young-man-smiling-facial-recognition-technology-scans-his-face-advanced-identification-method-shown-modern-well-356022906.jpg" alt="Step 2" />
              <span className="step-number">2</span>
            </div>
            <h3>Ensure it's a well-lit face</h3>
            <p>
              Enhance the accuracy of results by clicking the picture in natural
              light or well-lit space
            </p>
          </div>

          <div className="step">
            <div className="step-image">
              <img src="https://mewing.coach/blog/wp-content/uploads/2023/03/exercises-for-face-symmetry.jpg" alt="Step 3" />
              <span className="step-number">3</span>
            </div>
            <h3>Align your face</h3>
            <p>Place your face inside the outline</p>
          </div>
        </div>

        <Link to="/chatbot">
          <button className="try-now-btn">Try Now</button>
        </Link>
      </div>
      <FaqSection />
    </>
  );
};

export default PictureInstructions;
