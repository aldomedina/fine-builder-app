import React from "react";

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight
        intensity={1}
        castShadow
        position={[0, 3, 3]}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      ></directionalLight>
    </>
  );
};

export default Lights;
