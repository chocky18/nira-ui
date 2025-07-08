import React, { useEffect, useState } from "react";
import "./ViewAllProducts.css";

const ViewAllProducts = () => {
  const [selectedSort, setSelectedSort] = useState("Featured");
  const [products, setProducts] = useState([]);

  const categories = [
    { label: "Skin", count: 45 },
    { label: "Hair", count: 11 },
    { label: "Body", count: 7 },
    { label: "Eye", count: 1 },
    { label: "Baby", count: 4 },
  ];

  const steps = [
    { label: "Cleanse", count: 9 },
    { label: "Tone", count: 3 },
  ];

  const handleSortChange = (e) => {
    setSelectedSort(e.target.value);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_FAKE_API}/products01`);
        const data = await res.json();
        console.log("✅ Products from backend:", data);
        setProducts(data);
      } catch (err) {
        console.error("❌ Error fetching products:", err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="view-container01">
      <div className="view-header01">
        <h1 className="view-title01">Best Sellers</h1>
        <p className="view-description01">Top Selling products on Nira AI</p>
      </div>

      <div className="view-content01">
        <aside className="filter-sidebar01">
          <div className="filter-section01">
            <label htmlFor="sort01">Sort by:</label>
            <select
              id="sort01"
              value={selectedSort}
              onChange={handleSortChange}
            >
              <option value="Featured">Featured</option>
              <option value="BestSelling">Best Selling</option>
              <option value="PriceLowHigh">Price: Low to High</option>
              <option value="PriceHighLow">Price: High to Low</option>
            </select>
          </div>

          <div className="filter-section01">
            <h4>Category</h4>
            {categories.map((cat) => (
              <label key={cat.label} className="checkbox-label01">
                <input type="checkbox" />
                {cat.label} ({cat.count})
              </label>
            ))}
          </div>

          <div className="filter-section01">
            <h4>Step</h4>
            {steps.map((step) => (
              <label key={step.label} className="checkbox-label01">
                <input type="checkbox" />
                {step.label} ({step.count})
              </label>
            ))}
          </div>
        </aside>

        <main className="product-wrapper01">
          {products.length === 0 ? (
            <p className="no-products-msg">No products found or still loading...</p>
          ) : (
            <div className="product-grid01">
              {products.map((prod) => (
                <div className="product-card01" key={prod._id}>
                  <img
                    src={prod.imageUrl}
                    alt={prod.title}
                    className="product-image01"
                  />
                  <h3 className="product-title01">{prod.title}</h3>
                  <p className="product-price01">
                    ₹{prod.price}{" "}
                    <span className="original-price01">₹{prod.originalPrice}</span>
                  </p>
                  <p className="product-rating01">⭐ {prod.rating}</p>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ViewAllProducts;
