import type { CraftBuildingsEnum } from "../../enums/craftBuildings.enum";
import type { ItemsEnum } from "../../enums/items.enum";
import type { PowerBuildingsEnum } from "../../enums/powerBuildings.enum";
import type { RecipesEnum } from "../../enums/recipes.enum";

type ItemsInOutType = {
  itemName: ItemsEnum;
  quantityPerCycle: number;
};

export type RecipesType = {
  recipeName: RecipesEnum;
  craftBuildings: CraftBuildingsEnum | PowerBuildingsEnum;
  itemsIn: ItemsInOutType[];
  itemsOut: ItemsInOutType[];
  initCycleDuration: number;
  isDuplicate?: true;
  isAlternate?: true;
};
