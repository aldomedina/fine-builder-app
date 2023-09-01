import { Direction } from "react-range";

export type TView = "render" | "builder";
export type TPanel = "board" | "legs" | "texture";
export type TRangeProps = {
  values: number[];
  min: number;
  max: number;
  step?: number;
  direction?: Direction;
  allowOverlap?: boolean;
  draggableTrack?: boolean;
  disabled?: boolean;
  rtl?: boolean;
  onChange: (values: number[]) => void;
  onFinalChange?: (values: number[]) => void;
};
