import type { InitialRawResource } from "./initialRawResource";

export type FactoryLineData = {
  rawResources?: InitialRawResource[];
  totalPowerRequired: number;
  totalEnergyRequired: number;
};
