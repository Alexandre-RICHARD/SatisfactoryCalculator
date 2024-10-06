import type { StateCreator } from "zustand";

import type { CalculatorSliceType } from "../../types/store/storeSlices/calculator";

export const useCalculatorStore: StateCreator<CalculatorSliceType> = (set) => ({
  minuteCalculation: false,
  setMinuteCalculation: (newValue) => {
    set(() => ({ minuteCalculation: newValue }));
  },
});
