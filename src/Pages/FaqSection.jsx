import React, { useEffect, useState } from 'react';
import './FaqSection.css';

const FaqSection = () => {
  const [faqs, setFaqs] = useState([]);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_FAKE_API}/faqs`)
      .then((res) => res.json())
      .then((data) => setFaqs(data));
  }, []);

  const toggle = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="faq-wrapper">
      <h2 className="faq-title">FAQ’S</h2>
      {faqs.map((faq) => (
        <div
          className={`faq-item ${activeId === faq.id ? 'active' : ''}`}
          key={faq.id}
          onClick={() => toggle(faq.id)}
        >
          <div className="faq-question">
            <h4>{faq.question}</h4>
            <span>{activeId === faq.id ? '−' : '+'}</span>
          </div>
          {activeId === faq.id && <p className="faq-answer">{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FaqSection;
