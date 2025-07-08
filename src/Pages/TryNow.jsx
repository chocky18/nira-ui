import React from "react";
import "./TryNow.css";
import SkinProfile from "./SkinProfile";
import { Link } from "react-router-dom";
 

const TryNow = () => {
  return (
    <>
      <div className="try-now-container">
        <div className="try-skin-section">
          <h1>
            Skin<span>Insights</span>
          </h1>
        </div>

        <div className="try-skin-left">
          <img
            src="https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/files/Skin_Insights.jpg?v=1732188383&width=1080"
            alt="Skin Scan"
            className="try-face-image"
          />
          <div className="scan-pulse"></div>
        </div>

        <div className="try-skin-right">
          <h1>
            Understand your skin better <br />
            <span>with AI</span>
          </h1>
          <p>Take a skin analysis to get your personalized skin care routine</p>  
        <Link to={"/chatbot"}><button className="start-button">Start Now</button></Link>
          <p className="try-terms-text">
            By clicking on Start now button, you agree to our terms & conditions
            us your consent to store your information.
          </p>
        </div>
      </div>
      <SkinProfile />
    </>
  );
};

export default TryNow;
