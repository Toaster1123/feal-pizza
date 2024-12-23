import { create } from 'zustand';
interface State {
  activedId: number;
  setActivedId: (activedId: number) => void;
}

export const useCategoryStore = create<State>()((set) => ({
  activedId: 1,
  setActivedId: (activedId: number) => set({ activedId }),
}));
