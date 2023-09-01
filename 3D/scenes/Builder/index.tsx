"use client";

import {
  GizmoHelper,
  GizmoViewport,
  Grid,
  OrbitControls,
  TransformControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Lights from "./Lights";
import CustomBoard from "@/3D/components/CustomBoard";
import { useState } from "react";
import { DoubleSide, MathUtils } from "three";
import useSplinesStore from "@/stores/useSplines";
import Splines from "@/3D/components/Splines";

const Builder = () => {
  const { target, setSplines, splines } = useSplinesStore();
  const resolution = 100;
  const gridRot = MathUtils.degToRad(90);
  return (
    <Canvas orthographic camera={{ position: [0, 0, 10], zoom: 60 }}>
      <OrbitControls enableDamping={false} enableZoom enableRotate={false} />
      <Grid
        infiniteGrid
        cellThickness={1}
        cellSize={0.5}
        cellColor={"#888"}
        sectionSize={5}
        sectionColor={"#000"}
        rotation={[gridRot, 0, 0]}
        side={DoubleSide}
      />
      <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
        <GizmoViewport
          axisColors={["#000", "#000", "#000"]}
          labelColor="white"
        />
      </GizmoHelper>
      <Lights />
      <CustomBoard />
      <Splines />
      {target && (
        <TransformControls
          object={target}
          mode={"translate"}
          onObjectChange={(e) => {
            if (!e) return;
            const { name, position } = e.target.object;
            const i = Number(name);
            const copy = [...splines];
            copy[i] = position;
            setSplines(copy);
          }}
        />
      )}
    </Canvas>
  );
};

export default Builder;
