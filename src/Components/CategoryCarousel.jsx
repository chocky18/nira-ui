import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link for navigation
import "./CategoryCarousel.css";

const categories = [
  {
    title: "Skin Care",
    subtitle: "Skin",
    image:
      "https://adewunmi.ca/cdn/shop/articles/Skincare_Without_Hyaluronic_Acid_1200x1200.png?v=1692246940",
    link: "/category/skin-care",
  },
  {
    title: "Hair Care",
    subtitle: "Hair",
    image:
      "https://www.glam.com/img/gallery/how-to-handle-and-treat-female-hair-loss/intro-1668457360.jpg",
    link: "/category/hair-care",
  },
  {
    title: "Body Care",
    subtitle: "Bath & Body",
    image:
      "https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/03/11174516/bodycare-story-806x454.jpg",
    link: "/category/body-care",
  },
  {
    title: "Lip Care",
    subtitle: "Lip",
    image:
      "https://www.hhealthcare.net/wp-content/uploads/2022/02/Lip-care.jpg",
    link: "/category/lip-care",
  },

];

const CategoryCarousel = () => {
  return (
    <section className="category-section">
      <h2 className="section-title">Shop by Category</h2>
      <div className="category-grid">
        {categories.map((cat, idx) => (
          <Link to={cat.link} className="category-card" key={idx}>
            <div
              className="category-image01"
              style={{ backgroundImage: `url(${cat.image})` }}
            >
              <div className="category-overlay">
                <h3>{cat.title}</h3>
              </div>
            </div>
            <p className="category-subtitle">{cat.subtitle}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryCarousel;
