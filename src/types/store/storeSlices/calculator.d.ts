import type { FactoryLine } from "../../satisfactory/factoryLine";
import type { FactoryLineData } from "../../satisfactory/factoryLineData";
import type { SelectedFactoryLineData } from "../../satisfactory/selectedFactoryLineData";

export type CalculatorSliceType = {
  minuteCalculation: boolean;
  setMinuteCalculation: (newValue: boolean) => void;
  overclocking: number;
  setOverclocking: (newValue: number) => void;
  nameFilter: string;
  setNameFilter: (newValue: string) => void;
  selectedFactoryLineData?: SelectedFactoryLineData;
  setSelectedFactoryLineData: (newValue?: SelectedFactoryLineData) => void;
  factoryLine: FactoryLine | null;
  setFactoryLine: (newValue?: FactoryLine) => void;
  factoryLineData: FactoryLineData | null;
  setFactoryLineData: (newValue?: FactoryLineData) => void;
};
