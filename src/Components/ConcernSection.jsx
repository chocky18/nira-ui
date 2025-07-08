import "./ConcernSection.css";

const concerns = [
  {
    title: "Uneven Tone",
    image: "https://media6.ppl-media.com/mediafiles/blogs/shutterstock_1520011988_fa263ade0f.jpg",
    link: "/concerns/uneven-tone",
  },
  {
    title: "Acne control",
    image: "https://images.squarespace-cdn.com/content/v1/5a7b2e05bff2001bc750b07d/1520530782818-CACX8H1BE0EJZK5CCW2Z/close+up+of+a+patient's+face+with+acne",
    link: "/concerns/acne-control",
  },
  {
    title: "Oiliness",
    image: "https://i2.wp.com/dermcollective.com/wp-content/uploads/2019/05/Whiteheads-on-Nose.jpg?fit=1000%2C667&ssl=1",
    link: "/concerns/oiliness",
  },
  {
    title: "Hair Fall",
    image: "https://www.glam.com/img/gallery/how-to-handle-and-treat-female-hair-loss/intro-1668457360.jpg",
    link: "/concerns/hair-fall",
  },
  {
    title: "Fine Lines / Wrinkles",
    image: "https://apexmedicalspa.com/wp-content/uploads/fine-lines-and-wrinkle-reduction.jpg",
    link: "/concerns/fine-lines-wrinkles",
  },
  {
    title: "Anti-Dandruff",
    image: "https://www.revalid.com/fileadmin/user_upload/content/dandruff_zuschnitt.png",
    link: "/concerns/anti-dandruff",
  },
];

const ConcernSection = () => {
  const repeatedConcerns = [...concerns, ...concerns];

  return (
    <section className="concern-section">
      <h2 className="section-title">Shop by Concerns</h2>
      <div className="slider-wrapper">
        <div className="slider-track">
          {repeatedConcerns.map((concern, idx) => (
            <a href={concern.link} className="concern-card" key={idx}>
              <img
                src={concern.image}
                alt={concern.title}
                className="concern-img"
              />
              <p className="concern-title">{concern.title}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConcernSection;
