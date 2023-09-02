import { TPanel, TView } from "@/types/ui";
import { create } from "zustand";
import { initialBoard } from "./initialStates";

interface BoardState {
  bevel: number;
  setBevel: (panel: number) => void;
  resolution: number;
  setResolution: (panel: number) => void;
  thickness: number;
  setThickness: (panel: number) => void;
}

const useBoardStore = create<BoardState>()((set, get) => ({
  bevel: initialBoard.bevel,
  setBevel: (bevel) => set(() => ({ bevel })),
  resolution: initialBoard.resolution,
  setResolution: (resolution) => set(() => ({ resolution })),
  thickness: initialBoard.thickness,
  setThickness: (thickness) => set(() => ({ thickness })),
}));

export default useBoardStore;
