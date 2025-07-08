import React, { useState } from "react";
import "./SkinProfile.css";
import SkinAnalysis from "./SkinAnalysis";

const imageMap = {
  Acne: [
    "https://abclinic.com.my/wp-content/uploads/2023/09/How-do-you-know-if-acne-is-caused-by-hormones.jpg",
    "https://skindoc.com.au/wp-content/uploads/2017/10/acne1.jpg",
  ],
  Pigmentation: [
    "https://vjcosmetologyclinics.com/wp-content/uploads/2021/12/Skin-Pigmentation-Treatment.jpg",
    "https://tse2.mm.bing.net/th/id/OIP.ty2zmpvbbkHU2vmr66J2XgHaEK?pid=Api&P=0&h=220",
  ],
  Uniformness: [
    "https://tse4.mm.bing.net/th/id/OIP.BQQwAJV7VuZa6RenMXViBAHaEx?pid=Api&P=0&h=220",
    "https://tse3.mm.bing.net/th/id/OIP.4LaOwc1udGWDFtZvAcoIBAHaEK?pid=Api&P=0&h=220",
  ],
  Pores: [
    "https://tse1.mm.bing.net/th/id/OIP.tuLzVa4Jug80ArUhvdMrYQHaFj?pid=Api&P=0&h=220",
    "https://tse1.mm.bing.net/th/id/OIP.tuLzVa4Jug80ArUhvdMrYQHaFj?pid=Api&P=0&h=220",
  ],
  "Dark Circles": [
    "https://tse1.mm.bing.net/th/id/OIP.Xhe6okxYE2dWPqXkSHXvFQHaFI?pid=Api&P=0&h=220",
    "https://photoshopdesire.com/wp-content/uploads/2017/08/Before-Fix-Dark-Circles-with-Curves-in-Photoshop.jpg",
  ],
  Redness: [
    "https://tse1.mm.bing.net/th/id/OIP.g0EYOp-oLDM6b3ubalWhoAHaEc?pid=Api&P=0&h=220",
    "https://tse1.mm.bing.net/th/id/OIP.B43bcoSzh_TUYGeHS3qAWAHaDt?pid=Api&P=0&h=220",
  ],
  "Skin tone": [
    "https://thumbs.dreamstime.com/b/african-american-happy-smiling-healthy-woman-looking-mirror-reflection-enjoy-perfect-skin-tone-facial-mask-cream-girl-321709740.jpg",
    "https://thumbs.dreamstime.com/z/african-american-happy-smiling-healthy-woman-looking-mirror-reflection-enjoy-perfect-skin-tone-facial-mask-cream-girl-348452086.jpg?w=992",
  ],
  Lines: [
    "https://www.flawlessaestheticcenter.com/gallery/fillers/smile-lines-and-nasolabial-fold-fillers/11/01.jpg",
    "https://drkormeilidermatology.com/wp-content/uploads/sites/150/2024/06/lines_wrinkles_patient_48_A_1.jpg",
  ],
  Hydration: [
    "https://img.freepik.com/premium-photo/comparison-womans-skin-before-after-biorevitalization-treatment-antiaging-hydration_416256-42346.jpg",
    "https://c8.alamy.com/comp/2K2C7DC/hydration-is-key-an-attractive-and-athletic-young-woman-drinking-water-after-a-run-2K2C7DC.jpg",
  ],
};

const SkinProfile = () => {
  const [selected, setSelected] = useState("Hydration");

  return (
    <>
      <div className="skin-profile-wrapper">
        <div className="skin-profile-header">
          <h1>How AI works</h1>
          <p className="subtitle">A COMPLETE SKIN PROFILE</p>
          <p className="description">
            Detect and analyze your skin strengths and areas of focus across 9
            different skin concerns, such as
          </p>
        </div>

        <div className="skin-profile-buttons">
          {Object.keys(imageMap).map((item) => (
            <button
              key={item}
              className={`skin-btn ${selected === item ? "active" : ""}`}
              onClick={() => setSelected(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="skin-profile-image-section">
          <div className="label01 before">Before</div>
          <img
            src={imageMap[selected][0]}
            alt="Before"
            className="skin-profile-image"
          />
          <img
            src={imageMap[selected][1]}
            alt="After"
            className="skin-profile-image"
          />
          <div className="label01 after">After</div>
        </div>
      </div>
      <SkinAnalysis />
    </>
  );
};

export default SkinProfile;
