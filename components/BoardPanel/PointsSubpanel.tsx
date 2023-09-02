import useBoardStore from "@/stores/useBoardStore";
import Button from "../Button";
import Panel from "../Panel";
import useSplinesStore from "@/stores/useSplines";
import { Vector3 } from "three";

function getPointInBetweenByPerc(
  pointA: Vector3,
  pointB: Vector3,
  percentage: number
): Vector3 {
  var dir = pointB.clone().sub(pointA);
  var len = dir.length();
  dir = dir.normalize().multiplyScalar(len * percentage);
  return pointA.clone().add(dir);
}

const PointsSubpanel = () => {
  const { resolution, setResolution } = useBoardStore();
  const { splines, setSplines } = useSplinesStore();
  const handleAddPoint = () => {
    const firstSpline = splines[0];
    const lastSpline = splines[splines.length - 1];
    const newSpline = getPointInBetweenByPerc(firstSpline, lastSpline, 0.5);
    const copy = [...splines];
    copy.push(newSpline);
    setSplines(copy);
  };
  return (
    <Panel>
      <div>point 1</div>
      <Button onClick={handleAddPoint} variant="contained" fullWidth>
        ADD POINT
      </Button>
    </Panel>
  );
};

export default PointsSubpanel;
