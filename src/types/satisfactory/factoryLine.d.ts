import type { RecipeType } from "./recipe";

export type FactoryLine = {
  recipe: RecipeType;
  quantityPerMinute: number;
  buildingNumber: number;
  overclocking: number;
  powerRequired: number;
  energyRequired: number;
  isStartingStep: boolean;
  parents: FactoryLine[];
};
