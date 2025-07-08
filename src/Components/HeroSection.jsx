import React, { useState, useEffect } from "react";
import "./HeroSection.css";
import PromoBanner from "./PromoBanner";

const images = [
  "https://wallpapercave.com/wp/wp6836215.jpg",
  "https://img.freepik.com/premium-photo/bodycare-hd-8k-wallpaper-stock-photographic-image_890746-17209.jpg?w=996",
  "http://www.diva-in-me.com/wp-content/uploads/2017/10/5-Best-Lip-Balms.jpg",
];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-section">
      <PromoBanner />
      <img
        src={images[currentImage]}
        alt="Invisible Shield Duo"
        className="hero-bg"
      />
      {/* <h1 className="glossier-text">Glossier</h1> */}
    </div>
  );
};

export default HeroSection;
