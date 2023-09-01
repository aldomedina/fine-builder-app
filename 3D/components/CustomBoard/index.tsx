import useBoardStore from "@/stores/useBoardStore";
import useSplinesStore from "@/stores/useSplines";
import React, { useMemo } from "react";
import {
  CatmullRomCurve3,
  DoubleSide,
  ExtrudeGeometry,
  Shape,
  Vector3,
} from "three";

const extrudeSettings = {
  steps: 1,
  depth: 0.05,
  bevelEnabled: true,
  bevelThickness: 0.2,
  bevelSize: 0.1,
  bevelOffset: 0,
  bevelSegments: 10,
};

const CustomBoard = () => {
  const { splines } = useSplinesStore();
  const { resolution } = useBoardStore();
  const geometry = useMemo(() => {
    const curve = new CatmullRomCurve3(splines);
    curve.closed = true;
    const curvedPoints = curve.getPoints(resolution + 1);
    // @ts-ignore
    const shape = new Shape(curvedPoints);
    return new ExtrudeGeometry(shape, extrudeSettings);
  }, [splines, resolution]);

  return (
    <mesh geometry={geometry}>
      <meshStandardMaterial color={"white"} side={DoubleSide} />
    </mesh>
  );
};

export default CustomBoard;
