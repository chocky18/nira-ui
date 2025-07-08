import React from "react";
import "./SkinAnalysis.css";
import AIPowered from "./AIPowered";

const SkinAnalysis = () => {
  return (
    <>
      <div className="skin-analysis-wrapper">
        {/* Top Header Block */}
        <div className="skin-analysis-header">
          <h1>Advanced & Accurate Skin Analysis</h1>
          <h3>3-step analysis</h3>
          <p>
            Unlock your skin's true potential with our diagnostic process:
            <br />
            <strong>Assess, Capture & Get Routine.</strong>
          </p>
          <button className="btn-primary">Start Now</button>
        </div>

        {/* Step Cards (below text) */}
        <div className="skin-analysis-image-box">
          {/* Step 1 */}
          <div className="step-card">
            <img
              src="https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_1000,h_667/https://aventusclinic.com/wp-content/uploads/2024/04/Dermatology-assessment.webp"
              alt="Step 1"
            />
            <div className="step-content">
              <p className="step-label">STEP 1</p>
              <h4>Take a short Assessment</h4>
              <p>To understand your skin type, age, concerns and goals.</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="step-card">
            <img
              src="https://imgv3.fotor.com/images/blog-richtext-image/half-face-lady-mirror-selfie.jpg"
              alt="Step 2"
            />
            <div className="step-content">
              <p className="step-label">STEP 2</p>
              <h4>Upload a Selfie</h4>
              <p>
                To let our AI analyze your skin in detail for more accurate
                results.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="step-card">
            <img
              src="https://blendtw.com/wp-content/uploads/2025/02/night-routine-Canva-Pro-pic-edited.png"
              alt="Step 3"
            />
            <div className="step-content">
              <p className="step-label">STEP 3</p>
              <h4>Get your Routine</h4>
              <p>Get a personalized skincare routine based on your results.</p>
            </div>
          </div>
        </div>
      </div>
      <AIPowered />
    </>
  );
};

export default SkinAnalysis;
