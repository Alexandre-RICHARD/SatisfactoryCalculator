import type { CraftBuildingsEnum, ItemsEnum } from "../../enums/items.enum";

type ItemsInOutTypes = {
  itemName: ItemsEnum;
  quantityPerCycle: number;
};

export type RecipesTypes = {
  recipeType: "standard" | "alternate";
  craftBuildings: CraftBuildingsEnum;
  itemsIn: ItemsInOutTypes[];
  itemsOut: ItemsInOutTypes[];
  initCycleDuration: number;
};
