import useSplinesStore from "@/stores/useSplines";
import { Box, useCursor } from "@react-three/drei";
import React, { useEffect, useRef, useState } from "react";
import {
  BoxGeometry,
  Mesh,
  MeshStandardMaterial,
  SphereGeometry,
  Vector3,
} from "three";

interface SplineProps {
  position: Vector3;
  id: string | number;
}

const Spline = ({ position, id }: SplineProps) => {
  const setTarget = useSplinesStore((s) => s.setTarget);
  const ref = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);

  return (
    <mesh
      name={id.toString()}
      ref={ref}
      position={position}
      scale={0.3}
      material={new MeshStandardMaterial({ color: "#666" })}
      geometry={new SphereGeometry(0.5, 32, 64)}
      onClick={() => ref.current && setTarget(ref.current)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    />
  );
};

export default Spline;
