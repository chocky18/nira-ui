import React from "react";
import "./BookAppointment.css";
// import clinicImg from '../assets/clinic1.jpg';
// import clinicImg2 from '../assets/clinic_consultation3.jpg';
// import clinicImg3 from '../assets/clinic4.jpg';
// import clinicImg4 from '../assets/under eye.jpg';


const appointments = [
  {
    title: "Acne & Redness Relief",
    desc: "Personalized diagnosis and treatment for acne, pimples, and redness from certified dermatologists and AI.",
    image: "/images/clinic1.jpg"
  },
  {
    title: "Skin Tone & Pigmentation Care",
    desc: "Reduce uneven tone, hyperpigmentation, and dull skin. Track tone improvement with visual reports.",
    image: "/images/clinic_consultation3.jpg"
  },
  {
    title: "Hydration & Oil Balance",
    desc: "Address oily zones or dry patches with AI-recommended hydration plans and dermatologist support.",
    image: "/images/clinic4.jpg"
  },
  {
    title: "Dark Circles & Under-Eye Recovery",
    desc: "Reduce dark circles, fine lines, and puffiness with specialized under-eye care routines and checkups.",
    image: "/images/under%20eye.jpg"
  },
];

const BookAppointment = () => {
  return (
    <div className="bookappointment-container">
      <div className="appointment-header">
        <h2>Book an appointment for an in-clinic consultation</h2>
        <p>Find experienced doctors across all specialties</p>
      </div>

      <div className="appointment-cards">
        {appointments.map((item, index) => (
          <div className="appointment-card" key={index}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookAppointment;



