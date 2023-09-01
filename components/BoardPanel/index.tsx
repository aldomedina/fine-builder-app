import useBoardStore from "@/stores/useBoardStore";
import Panel from "../Panel";
import RangeInput from "../inputs/RangeInput";
import s from "./style.module.scss";
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

const BoardPanel = () => {
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
    <div className={s.boardPanel}>
      <Panel>
        <RangeInput
          key={"res"}
          title={"RESOLUTION"}
          min={3}
          max={100}
          values={[resolution]}
          onChange={(res) => setResolution(res[0])}
          icons={["low-res", "high-res"]}
        />
        <div>input 2</div>
        <div>input 3</div>
      </Panel>
      <Panel>
        <div>point 1</div>
        <div>point 2</div>
        <button onClick={handleAddPoint}>ADD POINT</button>
      </Panel>
    </div>
  );
};

export default BoardPanel;
