import { Vector3 } from "three";

export const initiaSplines = [
  [2, 2, 0],
  [2, 0, 0],
  [-2, 0, 0],
].map((el) => new Vector3(el[0], el[1], el[2]));

export const initialBoard = {
  resolution: 100,
  thickness: 0.05,
  bevel: 0.1,
};
