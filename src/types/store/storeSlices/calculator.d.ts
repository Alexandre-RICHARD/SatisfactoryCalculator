export type CalculatorSliceType = {
  minuteCalculation: boolean;
  setMinuteCalculation: (newValue: boolean) => void;
  overclocking: number;
  setOverclocking: (newValue: number) => void;
};
