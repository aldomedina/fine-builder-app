import useSplines from "@/stores/useSplines";
import React from "react";
import Spline from "./Spline";

const Splines = () => {
  const splines = useSplines((s) => s.splines);

  return (
    <>
      {splines.map((el, i) => (
        <Spline key={i + "-spline"} position={el} id={i} />
      ))}
    </>
  );
};

export default Splines;
