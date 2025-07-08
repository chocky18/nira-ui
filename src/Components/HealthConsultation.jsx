import React from "react";
import "./HealthConsultation.css";
import clinicImg1 from '../assets/acne.jpg';
import clinicImg2 from '../assets/darkspots1.jpg';
import clinicImg3 from '../assets/dryness1.jpg';
import clinicImg4 from '../assets/clinic3.jpg';
import clinicImg5 from '../assets/clinic1.jpg';
import clinicImg6 from '../assets/doctor1.jpg';


const consultationData = [
  {
    title: "Acne, Pimples & Breakouts",
    icon: clinicImg1
  },
  {
    title: "Pigmentation & Dark Spots",
    icon: clinicImg2
  },
  {
    title: "Skin Dryness & Itching",
    icon: clinicImg3
  },
  {
    title: "Anti-Aging & Wrinkles",
    icon: clinicImg4
  },
  {
    title: "Sensitive Skin Reactions",
    icon: clinicImg5
  },
  {
    title: "Book a Derma Consultation",
    icon: clinicImg6
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
