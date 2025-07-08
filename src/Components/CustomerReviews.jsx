import React from "react";
import "./CustomerReviews.css";
import { FaStar, FaCheckCircle } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Preetha D.",
    verified: true,
    date: "06/02/25",
    rating: 5,
    title: "This is my 2 nd purchase",
    comment:
      "I love this hair mask as it prevents breakage and makes my hair more manageable till my next wash. I usually use it like a conditioner. Good product!",
    product: "Maleic Bond Repair Complex 5% Hair Mask",
    productImg: "https://theradishingreview.com/wp-content/uploads/2020/03/SkinCare_RR.jpg",
  },
  {
    id: 2,
    name: "Vinaya R.",
    verified: true,
    date: "06/02/25",
    rating: 5,
    title: "Best ever",
    comment: "Good. Makes face better.",
    product: "SPF 50 Sunscreen",
    productImg: "https://theradishingreview.com/wp-content/uploads/2020/03/SkinCare_RR.jpg",
  },
  {
    id: 3,
    name: "Vinaya R.",
    verified: true,
    date: "06/02/25",
    rating: 5,
    title: "Best one fr 🙆‍♀️",
    comment: "No words to say, it was just amazing 💖",
    product: "Vitamin C 10% Face Serum",
    productImg: "https://theradishingreview.com/wp-content/uploads/2020/03/SkinCare_RR.jpg",
  },
  {
    id: 4,
    name: "Preetha D.",
    verified: true,
    date: "06/02/25",
    rating: 5,
    title: "Repeat buyer!",
    comment: "Works well every time I use it. Will buy again.",
    product: "Hair Mask",
    productImg: "https://theradishingreview.com/wp-content/uploads/2020/03/SkinCare_RR.jpg",
  },
];

const CustomerReviews = () => {
  return (
    <section className="reviews-section">
      <h2 className="reviews-heading">What Our Customers Say</h2>
      <div className="reviews-scroll-wrapper">
        <div className="reviews-scroll-track">
          {[...reviews, ...reviews].map((review, i) => (
            <div key={i} className="review-card">
              <div className="review-header">
                <div>
                  <strong>{review.name}</strong>{" "}
                  {review.verified && (
                    <span className="verified">
                      <FaCheckCircle /> Verified Buyer
                    </span>
                  )}
                </div>
                <span className="review-date">{review.date}</span>
              </div>
              <div className="review-stars">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <h4>{review.title}</h4>
              <p>{review.comment}</p>
              <div className="review-product">
                <img src={review.productImg} alt={review.product} />
                <span>{review.product}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
