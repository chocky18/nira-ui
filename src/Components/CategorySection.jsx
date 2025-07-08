import React from 'react';
import { Link } from 'react-router-dom';
import './CategorySection.css'
// import './CategorySection.css';
// import skincareImage from '../assets/skincare.jpg';
// import makeupImage from '../assets/makeup.jpg';

const CategorySection = () => {
  return (
    <div className="category-container">
      <div className="category-block">
        <h3 className="category-title">SKIN FIRST</h3>
        <img src="http://www.totalbodycare.ca/wp-content/uploads/2019/07/Picture1-e1562705178733.jpg" alt="Skincare" className="category-image" />
           <Link to="/skincare" className="category-button">
          Shop Skincare
        </Link>
      </div>
      <div className="category-block">
        <h3 className="category-title">MAKEUP SECOND</h3>
        <img src= "https://i.ytimg.com/vi/4Q_F57KIjGI/maxresdefault.jpg" alt="Makeup" className="category-image" />
          <Link to="/skincare" className="category-button">
          Shop Skincare
        </Link>
      </div>
    </div>
  );
};

export default CategorySection;
