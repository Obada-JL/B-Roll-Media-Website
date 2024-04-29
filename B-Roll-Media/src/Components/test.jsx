import React from "react";
import { useInView } from "react-intersection-observer";

const Component = () => {
  const { ref, entry } = useInView({ trackVisibility: true, delay: 100 });
  return (
    <div style={{ marginTop: "100vh" }} ref={ref}>
      {entry}
    </div>
  );
};
export default Component;
