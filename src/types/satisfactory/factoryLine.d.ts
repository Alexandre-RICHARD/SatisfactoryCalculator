import type { ItemsEnum } from "../../enums/items.enum";
import type { RecipeType } from "./recipe";

type InitialRawResource = {
  itemName: ItemsEnum;
  quantityPerMinute: number;
};

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
