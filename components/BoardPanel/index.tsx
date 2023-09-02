import useBoardStore from "@/stores/useBoardStore";
import Panel from "../Panel";
import RangeInput from "../inputs/RangeInput";
import s from "./style.module.scss";
import useSplinesStore from "@/stores/useSplines";
import { Vector3 } from "three";
import RadioInput from "../inputs/RadioInput";
import Button from "../Button";
import PointsSubpanel from "./PointsSubpanel";

const BoardPanel = () => {
  const { resolution, setResolution } = useBoardStore();
  const { splines, setSplines } = useSplinesStore();

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

        <RadioInput title="THICKNESS" />
        <RadioInput title="Bezel" />
      </Panel>
      <PointsSubpanel />
    </div>
  );
};

export default BoardPanel;
