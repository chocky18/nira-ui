import React, { useEffect, useState } from "react";
import "./RelatedProducts.css";

const RelatedProducts = ({ category = "Skin" }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const fetchRelated = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_FAKE_API}/products01`);


        const data = await res.json();
        console.log("✅ Related products:", data);
        setRelatedProducts(data);
      } catch (err) {
        console.error("❌ Error fetching related products:", err);
      }
    };

    fetchRelated();
  }, [category]);

  return (
    <div className="related-container01">
      <h2 className="related-title01">You may also like</h2>
      <div className="related-grid01">
        {relatedProducts.map((prod) => (
          <div className="related-card01" key={prod._id}>
            <img
              src={prod.imageUrl}
              alt={prod.title}
              className="related-image01"
            />
            <h4 className="related-title">{prod.title}</h4>
            <p className="related-price">
              ₹{prod.price}{" "}
              <span className="related-original">₹{prod.originalPrice}</span>
            </p>
            <p className="related-rating">⭐ {prod.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
