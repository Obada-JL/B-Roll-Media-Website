import { useEffect, useState } from "react";
import AtaaReview from "../assets/ataa.png";
import AghaReview from "../assets/agha_group.png";
import HijazReview from "../assets/hijaz_road.png";
import DrRfiaiReview from "../assets/dr_rifai.png";
import "./reviews.css";
import Counter from "./Counter";
function Reviews() {
  const Experiences = [
    {
      number: <Counter target={15} duration={2} />,
      text: "Years of Experience",
    },
    {
      number: <Counter target={110} duration={2} />,
      text: "Satisfied Clients",
    },
    {
      number: <Counter target={167} duration={2} />,
      text: "Projects Delivered",
    },
  ];
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    const ourExperiences = Experiences.map((field, index) => (
      <div className="d-flex flex-column justify-content-center align-items-center">
        {field.number}
        <div className="reviewField">{field.text}</div>
      </div>
    ));

    setExperience(ourExperiences);
  }, []);
  return (
    <div
      className="mt-5 mb-5 reviewsContainer"
      id="reviewsContainer"
      style={{ padding: "0 100px" }}
    >
      <h2 className="reviewsHeader d-flex justify-content-center mb-5">
        Clients Feedback
      </h2>
      <div class="scroll-parent">
        <div class="scroll-element primary">
          <img src={AtaaReview} />
          <img src={AghaReview} />
          <img src={HijazReview} />
          <img src={DrRfiaiReview} />
        </div>
        <div class="scroll-element secondary">
          <img src={AtaaReview} />
          <img src={AghaReview} />
          <img src={HijazReview} />
          <img src={DrRfiaiReview} />
        </div>
      </div>

      <div className="d-flex flex-wrap justify-content-around mb-5">
        {experience}
      </div>
    </div>
  );
}
export default Reviews;
