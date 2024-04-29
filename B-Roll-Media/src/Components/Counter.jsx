import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import "./reviews.css";
const Counter = ({ target, title, duration }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <h6 className="reviewCounter" ref={ref}>
      <CountUp
        start={0}
        end={inView ? target : 0}
        duration={duration}
        separator="."
        useEasing={true}
      >
        {({ countUpRef }) => <span ref={countUpRef} />}
      </CountUp>
      +
    </h6>
  );
};

export default Counter;
