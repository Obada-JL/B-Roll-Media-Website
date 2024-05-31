import { useEffect, useState } from "react";
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
    <div className="mt-5 mb-5" style={{ padding: "0 100px" }}>
      <h2 className="reviewsHeader d-flex justify-content-center mb-5">
        Clients Feedback
      </h2>
      <div class="scroll-parent">
        <div class="scroll-element primary pe-3">
          <p>
            1Abusrea has the advantageous ability to understand a problem and
            implement code to a high standard within the deadline. Each project
            we have worked on, I know I can completely trust Abusrea to own his
            tasks and complete what is needed when asked of him.
          </p>
          <p>
            2Mohamed will patiently listen to you and give you his own Ideas as
            well, and in the end, he comes up with something completely
            different from what you’re expecting, but the good news is, you’ll
            always love it.
          </p>
          <p>
            3Abusrea has the advantageous ability to understand a problem and
            implement code to a high standard within the deadline. Each project
            we have worked on, I know I can completely trust Abusrea to own his
            tasks and complete what is needed when asked of him.aaaaaaaaa
          </p>
          <p>
            4Mohamed will patiently listen to you and give you his own Ideas as
            well, and in the end, he comes up with something completely
            different from what you’re expecting, but the good news is, you’ll
            always love it. aaaaaaaaaa
          </p>
        </div>
        <div class="scroll-element secondary">
          <p>
            1Abusrea has the advantageous ability to understand a problem and
            implement code to a high standard within the deadline. Each project
            we have worked on, I know I can completely trust Abusrea to own his
            tasks and complete what is needed when asked of him.
          </p>
          <p>
            2Mohamed will patiently listen to you and give you his own Ideas as
            well, and in the end, he comes up with something completely
            different from what you’re expecting, but the good news is, you’ll
            always love it.
          </p>
          <p>
            3Abusrea has the advantageous ability to understand a problem and
            implement code to a high standard within the deadline. Each project
            we have worked on, I know I can completely trust Abusrea to own his
            tasks and complete what is needed when asked of him.aaaaaaaaa
          </p>
          <p>
            4Mohamed will patiently listen to you and give you his own Ideas as
            well, and in the end, he comes up with something completely
            different from what you’re expecting, but the good news is, you’ll
            always love it. aaaaaaaaaa
          </p>
        </div>
      </div>

      <div className="d-flex justify-content-around mb-5">{experience}</div>
    </div>
  );
}
export default Reviews;
