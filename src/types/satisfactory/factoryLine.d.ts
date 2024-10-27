import type { InitialRawResource } from "./initialRawResource";
import type { RecipeType } from "./recipe";

export type FactoryLine = {
  id: string;
  recipe: RecipeType;
  quantityPerMinute: number;
  buildingNumber: number;
  overclocking: number;
  powerRequired: number;
  energyRequired: number;
  isStartingStep: boolean;
  parents: FactoryLine[];
  rawResources?: InitialRawResource[];
};
