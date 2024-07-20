import type { CraftBuildingsEnum, ItemsEnum } from "../../enums/items.enum";

type ItemsInOutType = {
  itemName: ItemsEnum;
  quantityPerCycle: number;
};

export type RecipesType = {
  recipeType: "standard" | "alternate";
  craftBuildings: CraftBuildingsEnum;
  itemsIn: ItemsInOutType[];
  itemsOut: ItemsInOutType[];
  initCycleDuration: number;
};
