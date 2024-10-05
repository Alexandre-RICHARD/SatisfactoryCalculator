import type {
  CraftBuildingsEnum,
  ItemsEnum,
  PowerBuildingsEnum,
} from "../../enums/items.enum";

type ItemsInOutType = {
  itemName: ItemsEnum;
  quantityPerCycle: number;
};

export type RecipesType = {
  recipeName: string;
  recipeType: "standard" | "alternate";
  duplicate?: true;
  craftBuildings: CraftBuildingsEnum | PowerBuildingsEnum;
  itemsIn: ItemsInOutType[];
  itemsOut: ItemsInOutType[];
  initCycleDuration: number;
};
