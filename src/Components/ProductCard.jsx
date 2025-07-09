import React, { useEffect, useState } from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [imageIndex, setImageIndex] = useState({});

  useEffect(() => {
    fetch("https://nira-db.duckdns.org/products01")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        const initialIndex = {};
        data.forEach((_, idx) => {
          initialIndex[idx] = 0;
        });
        setImageIndex(initialIndex);
      })
      .catch((err) => console.error("Failed to load products", err));
  }, []);

  const handleAddToCart = (id) => {
    if (!cart.includes(id)) {
      setCart((prev) => [...prev, id]);
    }
  };

  const handleNext = (e, idx, total) => {
    e.preventDefault();
    setImageIndex((prev) => ({
      ...prev,
      [idx]: (prev[idx] + 1) % total,
    }));
  };

  const handlePrev = (e, idx, total) => {
    e.preventDefault();
    setImageIndex((prev) => ({
      ...prev,
      [idx]: (prev[idx] - 1 + total) % total,
    }));
  };

  return (
    <div className="recommended-container">
      <h2>Recommended For You</h2>

      <div className="product-scroll-wrapper">
        <div className="product-list">
          {products.map((product, idx) => {
            const currentIndex = imageIndex[idx] || 0;
            const totalImages = 3; // You can customize based on how many images each product has

            const imagePath = `/images/product-${product.id}-${currentIndex}.jpg`;

            return (
              <div className="product-card" key={product.id}>
                <Link to={`/product/${product.id}`} className="product-link">
                  <div className="image-carousel">
                    {totalImages > 1 && (
                      <button
                        className="arrow left-arrow"
                        onClick={(e) => handlePrev(e, idx, totalImages)}
                      >
                        ◀
                      </button>
                    )}

                    <img
                      src={imagePath}
                      alt={product.title}
                      className="product-image"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/images/img19.jpg";
                      }}
                    />

                    {totalImages > 1 && (
                      <button
                        className="arrow right-arrow"
                        onClick={(e) => handleNext(e, idx, totalImages)}
                      >
                        ▶
                      </button>
                    )}

                    <div className="dots">
                      {Array.from({ length: totalImages }).map((_, index) => (
                        <span
                          key={index}
                          className={`dot ${index === currentIndex ? "active" : ""}`}
                        ></span>
                      ))}
                    </div>
                  </div>

                  <div className="product-info">
                    <h3>{product.title}</h3>
                    <p className="desc">{product.description}</p>
                    <div className="rating">
                      {"★".repeat(Math.floor(product.rating))}
                      {product.rating % 1 !== 0 ? "½" : ""}
                      {"☆".repeat(5 - Math.ceil(product.rating))}
                    </div>
                    <div className="price">
                      ₹ {product.discountedPrice}
                      {product.price !== product.discountedPrice && (
                        <span className="strike">₹ {product.price}</span>
                      )}
                    </div>
                  </div>
                </Link>

                <button
                  className="add-btn"
                  onClick={() => handleAddToCart(product.id)}
                >
                  {cart.includes(product.id) ? "Added to cart" : "Add to cart"}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="button-wrapper">
        <Link to="/products">
          <button className="view-all-btn">View All Products</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
