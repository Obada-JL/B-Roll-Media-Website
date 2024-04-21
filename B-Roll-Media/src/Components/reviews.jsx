import { useEffect, useState } from "react";
import "./reviews.css";
function Reviews() {
  const Experiences = [
    {
      number: "15+",
      text: "Years of Experience",
    },
    {
      number: "44+",
      text: "Satisfied Clients",
    },
    {
      number: "54+",
      text: "Projects Delivered",
    },
    {
      number: "26+",
      text: "MVP Designed",
    },
  ];
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    const ourExperiences = Experiences.map((field, index) => (
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h6 className="reviewCounter">{field.number}</h6>
        <div className="reviewField">{field.text}</div>
      </div>
    ));

    setExperience(ourExperiences);
  }, []);
  return (
    <div className="mt-5 mb-5" style={{ padding: "0 100px" }}>
      <h2 className="reviewsHeader d-flex justify-content-center">
        Happy Customers
      </h2>
      <div>reviews</div>
      <div className="d-flex justify-content-between mb-5">{experience}</div>
    </div>
  );
}
export default Reviews;
