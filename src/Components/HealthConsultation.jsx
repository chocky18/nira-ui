import React from "react";
import "./HealthConsultation.css";

const consultationData = [
  {
    title: "Acne, Pimples & Breakouts",
    icon: "/images/acne.jpg"
  },
  {
    title: "Pigmentation & Dark Spots",
    icon: "/images/darkspots1.jpg"
  },
  {
    title: "Skin Dryness & Itching",
    icon: "/images/dryness1.jpg"
  },
  {
    title: "Anti-Aging & Wrinkles",
    icon: "/images/clinic3.jpg"
  },
  {
    title: "Sensitive Skin Reactions",
    icon: "/images/clinic1.jpg"
  },
  {
    title: "Book a Derma Consultation",
    icon: "/images/doctor1.jpg"
  },
];

const HealthConsultation = () => {
  return (
    <div className="consultation-section01">
      <div className="consultation-header01">
        <div>
          <h2>Get Personalized Skin Consultations From Certified Experts</h2>
          <p>
            Instant online consultations for acne, pigmentation, aging, dryness, and more.
          </p>
        </div>
        <button className="view-all-btn01">View All Specialities</button>
      </div>

      <div className="consultation-grid01">
        {consultationData.map((item, index) => (
          <div className="consultation-card01" key={index}>
            <img src={item.icon} alt={item.title} className="icon01" />
            <p className="card-title01">{item.title}</p>
            <a href="#" className="consult-link01">
              CONSULT NOW
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthConsultation;
