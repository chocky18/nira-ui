import React from "react";
import "./AIPowered.css";
import PictureInstructions from "./PictureInstructions";

const AIPowered = () => {
  return (
    <>
      <div className="ai-powered-wrapper">
        <div className="ai-powered-header">
          <div className="ai-powered-text">
            <h1>AI Powered</h1>
            <h2>Skin Analysis</h2>
            <ul>
              <li>15 years of skin research.</li>
              <li>Matches dermatologist accuracy 95% of the time.</li>
              <li>A skin strength database with 10,000 graded pictures.</li>
              <li>Powered by Artificial Intelligence.</li>
            </ul>
            <button className="ai-powered-btn">See How It Works</button>
          </div>

          <div className="ai-powered-visual">
            <img
              src="https://www.orbo.ai/assets/skinWorking.webp"
              alt="AI Skin Analysis"
            />
            <div className="tooltip pigmentation">
              <span className="dot red"></span>
              <div className="label">Pigmentation</div>
            </div>
            <div className="tooltip dryness">
              <span className="dot black"></span>
              <div className="label">Dryness</div>
            </div>
          </div>
        </div>
      </div>
      <PictureInstructions />
    </>
  );
};

export default AIPowered;
