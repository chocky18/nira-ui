import React from "react";
import "./HealthArticles.css";

const articles = [
  {
    category: "ACNE PIMPLE",
    title:
      "Chat about Skin Rashes Treatment with a Verified Doctor 1-on-1 Online Right Now. Ask a Skin Specialist Doctor for Help and Get Answers in 1-on-1 Online Chat Right Now.",
    author: "Dr. Diana Borgio",
    image:
      "https://img.freepik.com/premium-photo/doctor-check-acne-pimple-scar-skin-face-disorders-sebaceous-glands-teenage-girl-skincare-beauty-problem_1263944-80.jpg", // Replace with your actual image path
  },
  {
    category: "VITAMINS AND SUPPLEMENTS",
    title: "Eating Right to Build Immunity Against Cold and Viral Infections",
    author: "Dr. Diana Borgio",
    image:
      "https://cdn.nhathuoclongchau.com.vn/unsafe/800x0/https://cms-prod.s3-sgn09.fptcloud.com/cac_loai_trai_cay_tot_cho_suc_khoe_ma_ban_nen_biet_1_c44988cfcf.jpg", // Replace with your actual image path
  },
];

const HealthArticles = () => {
  return (
    <div className="health-articles-section">
      <div className="health-articles-content">
        <h2>Read top articles from health experts</h2>
        <p>
          Health articles that keep you informed about good health practices and
          achieve your goals.
        </p>
        <button className="see-all-btn">See all articles</button>
      </div>

      <div className="articles-cards">
        {articles.map((article, index) => (
          <div className="article-card" key={index}>
            <img src={article.image} alt={article.title} />
            <p className="category">{article.category}</p>
            <h4>{article.title}</h4>
            <p className="author">{article.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthArticles;
