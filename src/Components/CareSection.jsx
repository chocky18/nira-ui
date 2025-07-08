import { Link } from "react-router-dom";
import "./CareSection.css";

const CareSection = () => {
  return (
    <section className="care-section">
      <h2 className="care-heading">The future of personal care is here</h2>
      <p className="care-subtext">
        Embrace Minimalist, where each element is chosen for its scientific
        merit, offering you authentic, effective skincare solutions.
      </p>

      <div className="care-icons">
        <Link to="/transparency" className="care-item">
          <img
            src="https://static.vecteezy.com/system/resources/previews/010/829/986/large_2x/phone-icon-in-trendy-flat-style-free-png.png"
            alt="Transparency"
          />
          <h4>Transparency</h4>
          <p>Full disclosure of ingredients used & their concentration</p>
        </Link>

        <Link to="/efficacy" className="care-item">
          <img
            src="https://cdn4.iconfinder.com/data/icons/business-outline-the-capitalism/64/High_efficacy-1024.png"
            alt="Efficacy"
          />
          <h4>Efficacy</h4>
          <p>Formulations developed in our in-house laboratories</p>
        </Link>

        <Link to="/affordable" className="care-item">
          <img
            src="https://vectorified.com/images/affordable-icon-29.png"
            alt="Affordable"
          />
          <h4>Affordable</h4>
          <p>Skincare, accessible to all</p>
        </Link>

        <Link to="/only-the-best" className="care-item">
          <img
            src="https://www.freepnglogos.com/uploads/logo-website-png/logo-website-world-wide-web-icon-icons-and-png-backgrounds-18.png"
            alt="Only the best"
          />
          <h4>Only the best</h4>
          <p>Ingredients sourced from across the world</p>
        </Link>
      </div>
    </section>
  );
};

export default CareSection;
