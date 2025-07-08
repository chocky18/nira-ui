import React, { useEffect, useState } from "react";
import "./TopBar.css";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight, FaPause, FaPlay } from "react-icons/fa";

const TopBar = () => {
  const Messages = [
    "Free express shipping on orders ₹11,230 or more. For more information on shipping rates and timelines, please visit our international page",
    "Summer is here! Enjoy 20% off on sun protection essentials.",
    "Glossier Gifts: Perfect sets curated for you and your loved ones.",
  ];

  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    let timer;

    if (isPlaying) {
      timer = setInterval(() => {
        setCurrent((prev) => (prev + 1) % Messages.length);
      }, 5000);
    }

    return () => clearInterval(timer);
  }, [isPlaying]);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % Messages.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + Messages.length) % Messages.length);
  };

  return (
    <div className="topbar-slider">
      <p className="slider-text">
        {Messages[current]}
        {current === 0 && (
          <Link to="/" className="highlight-link">
            Invisible Shield Duo!
          </Link>
        )}
      </p>
      <div className="slider-controls">
        <button onClick={handlePrev}>
          <FaChevronLeft size={14} />
        </button>
        <button onClick={handleNext}>
          <FaChevronRight size={14} />
        </button>
        <button onClick={() => setIsPlaying((prev) => !prev)}>
          {isPlaying ? <FaPause size={14} /> : <FaPlay size={14} />}
        </button>
      </div>
    </div>
  );
};

export default TopBar;
