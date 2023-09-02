import useSplinesStore from "@/stores/useSplines";
import { Text } from "@react-three/drei";
import { MeshProps, useThree } from "@react-three/fiber";
import { useDrag } from "@use-gesture/react";
import { forwardRef, useEffect, useMemo, useState } from "react";
import { Mesh, Vector3 } from "three";

interface CircleProps extends MeshProps {
  opacity: number;
  radius: number;
  color: string;
}

const Circle = forwardRef<Mesh, CircleProps>(
  (
    { children, opacity = 1, radius = 0.05, color = "#ff1050", ...props },
    ref
  ) => (
    <mesh ref={ref} {...props}>
      <circleGeometry args={[radius, 32]} />
      <meshBasicMaterial
        transparent={opacity < 1}
        opacity={opacity}
        color={color}
      />
      {children}
    </mesh>
  )
);

Circle.displayName = "Circle";

interface SplineProps {
  position: Vector3;
  id: string | number;
}

const Spline = forwardRef<Mesh, SplineProps>(({ position, id }, ref) => {
  const { size, camera, gl } = useThree();
  const { splines, setSplines } = useSplinesStore();
  const [pos, setPos] = useState(() => position);
  const name = useMemo(() => String.fromCharCode(65 + Number(id)), [id]);
  const [hovered, setHovered] = useState(false);
  const bind = useDrag(({ down, xy: [x, y] }) => {
    console.log(size);
    document.body.style.cursor = down ? "grabbing" : "grab";
    const newPos = new Vector3(
      (x / size.width) * 2 - 1,
      -(y / size.height) * 2 + 1,
      0
    )
      .unproject(camera)
      .multiply(new Vector3(1, 1, 0))
      .clone();
    setPos(newPos);
  });

  useEffect(() => {
    const i = Number(id);
    const copy = [...splines];
    copy[i] = pos;
    setSplines(copy);
  }, [pos]);

  useEffect(
    () => void (document.body.style.cursor = hovered ? "grab" : "auto"),
    [hovered]
  );

  return (
    // @ts-ignore
    <Circle
      ref={ref}
      {...bind()}
      opacity={0.2}
      radius={0.5}
      color={"black"}
      position={[pos.x, pos.y, 1]}
    >
      {/* @ts-ignore */}
      <Circle
        radius={0.25}
        position={[0, 0, 0.1]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        color={hovered ? "#F8F389" : "black"}
        renderOrder={1}
      >
        <Text
          position={[0, 0, 1]}
          fontSize={0.25}
          color={hovered ? "black" : "white"}
          font={"/proto-mono-regular.woff"}
        >
          {name}
        </Text>
      </Circle>
    </Circle>
  );
});

Spline.displayName = "Spline";

export default Spline;
