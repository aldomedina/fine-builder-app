import { Object3D, Vector3 } from "three";
import { create } from "zustand";
import { initiaSplines } from "./initialStates";

interface SplinesState {
  target: Object3D | null;
  setTarget: (obj: Object3D) => void;
  splines: Vector3[];
  setSplines: (splines: Vector3[]) => void;
}

const useSplinesStore = create<SplinesState>()((set, get) => ({
  target: null,
  setTarget: (target: Object3D) => set((state) => ({ target })),
  splines: initiaSplines,
  setSplines: (splines: Vector3[]) => set((state) => ({ splines })),
}));

export default useSplinesStore;
