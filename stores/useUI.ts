import { TPanel, TView } from "@/types/ui";
import { create } from "zustand";

interface UIState {
  activePanel: TPanel | null;
  setActivePanel: (panel: TPanel) => void;
  activeView: TView;
  setActiveView: (splines: TView) => void;
}

const useUIStore = create<UIState>()((set, get) => ({
  activePanel: "board",
  setActivePanel: (activePanel) => set(() => ({ activePanel })),
  activeView: "builder",
  setActiveView: (activeView) => set(() => ({ activeView })),
}));

export default useUIStore;
