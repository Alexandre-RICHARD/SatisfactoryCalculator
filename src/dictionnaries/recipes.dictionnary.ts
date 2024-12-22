import { GameItemsEnum } from "../enums/gameItems.enum";
import { RecipesEnum } from "../enums/recipes.enum";
import type { RecipeDictionnaryType } from "../types/satisfactory/recipeDictionnary.type";
import { gameItemsDictionnary } from "./gameItems.dictionary";

export const recipes: RecipeDictionnaryType = {
  // ====== Raw resources items =======
  // Iron_Ore
  [RecipesEnum.Iron_Ore_Limestone]: {
    recipeName: RecipesEnum.Iron_Ore_Limestone,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Copper_Ore
  [RecipesEnum.Copper_Ore_Quartz]: {
    recipeName: RecipesEnum.Copper_Ore_Quartz,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Copper_Ore_Sulfur]: {
    recipeName: RecipesEnum.Copper_Ore_Sulfur,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Limestone
  [RecipesEnum.Limestone_Sulfur]: {
    recipeName: RecipesEnum.Limestone_Sulfur,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Coal
  [RecipesEnum.Alternate_Charcoal]: {
    recipeName: RecipesEnum.Alternate_Charcoal,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Biocoal]: {
    recipeName: RecipesEnum.Alternate_Biocoal,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Coal_Iron]: {
    recipeName: RecipesEnum.Coal_Iron,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Coal_Limestone]: {
    recipeName: RecipesEnum.Coal_Limestone,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Water
  [RecipesEnum.Unpackage_Water]: {
    recipeName: RecipesEnum.Unpackage_Water,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Packaged_Water
  [RecipesEnum.Packaged_Water]: {
    recipeName: RecipesEnum.Packaged_Water,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Crude_Oil
  [RecipesEnum.Unpackage_Oil]: {
    recipeName: RecipesEnum.Unpackage_Oil,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Packaged_Oil
  [RecipesEnum.Packaged_Oil]: {
    recipeName: RecipesEnum.Packaged_Oil,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Caterium_Ore
  [RecipesEnum.Caterium_Ore_Copper]: {
    recipeName: RecipesEnum.Caterium_Ore_Copper,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Caterium_Ore_Quartz]: {
    recipeName: RecipesEnum.Caterium_Ore_Quartz,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Bauxite
  [RecipesEnum.Bauxite_Caterium]: {
    recipeName: RecipesEnum.Bauxite_Caterium,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Bauxite_Copper]: {
    recipeName: RecipesEnum.Bauxite_Copper,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Raw_Quartz
  [RecipesEnum.Raw_Quartz_Bauxite]: {
    recipeName: RecipesEnum.Raw_Quartz_Bauxite,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Raw_Quartz_Coal]: {
    recipeName: RecipesEnum.Raw_Quartz_Coal,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Sulfur
  [RecipesEnum.Sulfur_Coal]: {
    recipeName: RecipesEnum.Sulfur_Coal,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Sulfur_Iron]: {
    recipeName: RecipesEnum.Sulfur_Iron,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Uranium
  [RecipesEnum.Uranium_Ore_Bauxite]: {
    recipeName: RecipesEnum.Uranium_Ore_Bauxite,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Nitrogen_Gas
  [RecipesEnum.Unpackage_Nitrogen_Gas]: {
    recipeName: RecipesEnum.Unpackage_Nitrogen_Gas,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Nitrogen_Gas_Bauxite]: {
    recipeName: RecipesEnum.Nitrogen_Gas_Bauxite,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Nitrogen_Gas_Caterium]: {
    recipeName: RecipesEnum.Nitrogen_Gas_Caterium,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Packaged_Nitrogen_Gas
  [RecipesEnum.Packaged_Nitrogen_Gas]: {
    recipeName: RecipesEnum.Packaged_Nitrogen_Gas,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },

  // ========== Tier 1 items ==========
  // Iron_Ingot
  [RecipesEnum.Iron_Ingot]: {
    recipeName: RecipesEnum.Iron_Ingot,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Basic_Iron_Ingot]: {
    recipeName: RecipesEnum.Alternate_Basic_Iron_Ingot,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Pure_Iron_Ingot]: {
    recipeName: RecipesEnum.Alternate_Pure_Iron_Ingot,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Iron_Alloy_Ingot]: {
    recipeName: RecipesEnum.Alternate_Iron_Alloy_Ingot,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Leached_Iron_Ingot]: {
    recipeName: RecipesEnum.Alternate_Leached_Iron_Ingot,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Iron_Plate
  [RecipesEnum.Iron_Plate]: {
    recipeName: RecipesEnum.Iron_Plate,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Coated_Iron_Plate]: {
    recipeName: RecipesEnum.Alternate_Coated_Iron_Plate,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Steel_Cast_Plate]: {
    recipeName: RecipesEnum.Alternate_Steel_Cast_Plate,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Iron_Rod
  [RecipesEnum.Iron_Rod]: {
    recipeName: RecipesEnum.Iron_Rod,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Steel_Rod]: {
    recipeName: RecipesEnum.Alternate_Steel_Rod,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Aluminum_Rod]: {
    recipeName: RecipesEnum.Alternate_Aluminum_Rod,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Copper_Ingot
  [RecipesEnum.Copper_Ingot]: {
    recipeName: RecipesEnum.Copper_Ingot,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Tempered_Copper_Ingot]: {
    recipeName: RecipesEnum.Alternate_Tempered_Copper_Ingot,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Pure_Copper_Ingot]: {
    recipeName: RecipesEnum.Alternate_Pure_Copper_Ingot,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Copper_Alloy_Ingot]: {
    recipeName: RecipesEnum.Alternate_Copper_Alloy_Ingot,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Leached_Copper_Ingot]: {
    recipeName: RecipesEnum.Alternate_Leached_Copper_Ingot,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Wire
  [RecipesEnum.Wire]: {
    recipeName: RecipesEnum.Wire,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Iron_Wire]: {
    recipeName: RecipesEnum.Alternate_Iron_Wire,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Caterium_Wire]: {
    recipeName: RecipesEnum.Alternate_Caterium_Wire,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Fused_Wire]: {
    recipeName: RecipesEnum.Alternate_Fused_Wire,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Cable
  [RecipesEnum.Cable]: {
    recipeName: RecipesEnum.Cable,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Coated_Cable]: {
    recipeName: RecipesEnum.Alternate_Coated_Cable,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Insulated_Cable]: {
    recipeName: RecipesEnum.Alternate_Insulated_Cable,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Quickwire_Cable]: {
    recipeName: RecipesEnum.Alternate_Quickwire_Cable,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Concrete
  [RecipesEnum.Concrete]: {
    recipeName: RecipesEnum.Concrete,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Wet_Concrete]: {
    recipeName: RecipesEnum.Alternate_Wet_Concrete,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Rubber_Concrete]: {
    recipeName: RecipesEnum.Alternate_Rubber_Concrete,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Fine_Concrete]: {
    recipeName: RecipesEnum.Alternate_Fine_Concrete,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Screw
  [RecipesEnum.Screw]: {
    recipeName: RecipesEnum.Screw,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Cast_Screw]: {
    recipeName: RecipesEnum.Alternate_Cast_Screw,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Steel_Screw]: {
    recipeName: RecipesEnum.Alternate_Steel_Screw,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Reinforced_Iron_Plate
  [RecipesEnum.Reinforced_Iron_Plate]: {
    recipeName: RecipesEnum.Reinforced_Iron_Plate,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Stitched_Iron_Plate]: {
    recipeName: RecipesEnum.Alternate_Stitched_Iron_Plate,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Bolted_Iron_Plate]: {
    recipeName: RecipesEnum.Alternate_Bolted_Iron_Plate,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Adhered_Iron_Plate]: {
    recipeName: RecipesEnum.Alternate_Adhered_Iron_Plate,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Biomass
  [RecipesEnum.Biomass_Wood]: {
    recipeName: RecipesEnum.Biomass_Wood,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Biomass_Leaves]: {
    recipeName: RecipesEnum.Biomass_Leaves,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Biomass_Alien_Protein]: {
    recipeName: RecipesEnum.Biomass_Alien_Protein,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Biomass_Mycelia]: {
    recipeName: RecipesEnum.Biomass_Mycelia,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },

  // ========== Tier 2 items ==========
  // Copper_Sheet
  [RecipesEnum.Copper_Sheet]: {
    recipeName: RecipesEnum.Copper_Sheet,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Steamed_Copper_Sheet]: {
    recipeName: RecipesEnum.Alternate_Steamed_Copper_Sheet,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Rotor
  [RecipesEnum.Rotor]: {
    recipeName: RecipesEnum.Rotor,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Copper_Rotor]: {
    recipeName: RecipesEnum.Alternate_Copper_Rotor,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Steel_Rotor]: {
    recipeName: RecipesEnum.Alternate_Steel_Rotor,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Modular_Frame
  [RecipesEnum.Modular_Frame]: {
    recipeName: RecipesEnum.Modular_Frame,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Steeled_Frame]: {
    recipeName: RecipesEnum.Alternate_Steeled_Frame,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Bolted_Frame]: {
    recipeName: RecipesEnum.Alternate_Bolted_Frame,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Smart_Plating
  [RecipesEnum.Smart_Plating]: {
    recipeName: RecipesEnum.Smart_Plating,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Plastic_Smart_Plating]: {
    recipeName: RecipesEnum.Alternate_Plastic_Smart_Plating,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Solid_Biofuel
  [RecipesEnum.Solid_Biofuel]: {
    recipeName: RecipesEnum.Solid_Biofuel,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },

  // ========== Tier 3 items ==========
  // Steel_Ingot
  [RecipesEnum.Steel_Ingot]: {
    recipeName: RecipesEnum.Steel_Ingot,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Solid_Steel_Ingot]: {
    recipeName: RecipesEnum.Alternate_Solid_Steel_Ingot,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Coke_Steel_Ingot]: {
    recipeName: RecipesEnum.Alternate_Coke_Steel_Ingot,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Compacted_Steel_Ingot]: {
    recipeName: RecipesEnum.Alternate_Compacted_Steel_Ingot,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Steel_Beam
  [RecipesEnum.Steel_Beam]: {
    recipeName: RecipesEnum.Steel_Beam,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Molded_Beam]: {
    recipeName: RecipesEnum.Alternate_Molded_Beam,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Aluminum_Beam]: {
    recipeName: RecipesEnum.Alternate_Aluminum_Beam,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Steel_Pipe
  [RecipesEnum.Steel_Pipe]: {
    recipeName: RecipesEnum.Steel_Pipe,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Iron_Pipe]: {
    recipeName: RecipesEnum.Alternate_Iron_Pipe,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Molded_Steel_Pipe]: {
    recipeName: RecipesEnum.Alternate_Molded_Steel_Pipe,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Versatile_Framework
  [RecipesEnum.Versatile_Framework]: {
    recipeName: RecipesEnum.Versatile_Framework,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Flexible_Framework]: {
    recipeName: RecipesEnum.Alternate_Flexible_Framework,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },

  // ========== Tier 4 items ==========
  // Encased_Industrial_Beam
  [RecipesEnum.Encased_Industrial_Beam]: {
    recipeName: RecipesEnum.Encased_Industrial_Beam,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Encased_Industrial_Pipe]: {
    recipeName: RecipesEnum.Alternate_Encased_Industrial_Pipe,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Stator
  [RecipesEnum.Stator]: {
    recipeName: RecipesEnum.Stator,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Quickwire_Stator]: {
    recipeName: RecipesEnum.Alternate_Quickwire_Stator,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Motor
  [RecipesEnum.Motor]: {
    recipeName: RecipesEnum.Motor,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Rigor_Motor]: {
    recipeName: RecipesEnum.Alternate_Rigor_Motor,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Electric_Motor]: {
    recipeName: RecipesEnum.Alternate_Electric_Motor,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Automated_Wiring
  [RecipesEnum.Automated_Wiring]: {
    recipeName: RecipesEnum.Automated_Wiring,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Automated_Speed_Wiring]: {
    recipeName: RecipesEnum.Alternate_Automated_Speed_Wiring,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },

  // ========== Tier 5 items ==========
  // Plastic
  [RecipesEnum.Residual_Plastic]: {
    recipeName: RecipesEnum.Residual_Plastic,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Plastic]: {
    recipeName: RecipesEnum.Plastic,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Recycled_Plastic]: {
    recipeName: RecipesEnum.Alternate_Recycled_Plastic,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Rubber
  [RecipesEnum.Residual_Rubber]: {
    recipeName: RecipesEnum.Residual_Rubber,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Rubber]: {
    recipeName: RecipesEnum.Rubber,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Recycled_Rubber]: {
    recipeName: RecipesEnum.Alternate_Recycled_Rubber,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Polymer_Resin
  [RecipesEnum.Alternate_Polymer_Resin]: {
    recipeName: RecipesEnum.Alternate_Polymer_Resin,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Petroleum_Coke
  [RecipesEnum.Petroleum_Coke]: {
    recipeName: RecipesEnum.Petroleum_Coke,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Circuit_Board
  [RecipesEnum.Circuit_Board]: {
    recipeName: RecipesEnum.Circuit_Board,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Electrode_Circuit_Board]: {
    recipeName: RecipesEnum.Alternate_Electrode_Circuit_Board,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Caterium_Circuit_Board]: {
    recipeName: RecipesEnum.Alternate_Caterium_Circuit_Board,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Silicon_Circuit_Board]: {
    recipeName: RecipesEnum.Alternate_Silicon_Circuit_Board,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Fuel
  [RecipesEnum.Residual_Fuel]: {
    recipeName: RecipesEnum.Residual_Fuel,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Fuel]: {
    recipeName: RecipesEnum.Fuel,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Unpackage_Fuel]: {
    recipeName: RecipesEnum.Unpackage_Fuel,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Diluted_Fuel]: {
    recipeName: RecipesEnum.Alternate_Diluted_Fuel,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Packaged_Fuel
  [RecipesEnum.Packaged_Fuel]: {
    recipeName: RecipesEnum.Packaged_Fuel,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Diluted_Packaged_Fuel]: {
    recipeName: RecipesEnum.Alternate_Diluted_Packaged_Fuel,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Heavy_Oil_Residue
  [RecipesEnum.Alternate_Heavy_Oil_Residue]: {
    recipeName: RecipesEnum.Alternate_Heavy_Oil_Residue,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Unpackage_Heavy_Oil_Residue]: {
    recipeName: RecipesEnum.Unpackage_Heavy_Oil_Residue,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Packaged_Heavy_Oil_Residue
  [RecipesEnum.Packaged_Heavy_Oil_Residue]: {
    recipeName: RecipesEnum.Packaged_Heavy_Oil_Residue,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Liquid_Biofuel
  [RecipesEnum.Liquid_Biofuel]: {
    recipeName: RecipesEnum.Liquid_Biofuel,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Unpackage_Liquid_Biofuel]: {
    recipeName: RecipesEnum.Unpackage_Liquid_Biofuel,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Packaged_Liquid_Biofuel
  [RecipesEnum.Packaged_Liquid_Biofuel]: {
    recipeName: RecipesEnum.Packaged_Liquid_Biofuel,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Empty_Canister
  [RecipesEnum.Empty_Canister]: {
    recipeName: RecipesEnum.Empty_Canister,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Steel_Canister]: {
    recipeName: RecipesEnum.Alternate_Steel_Canister,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Coated_Iron_Canister]: {
    recipeName: RecipesEnum.Alternate_Coated_Iron_Canister,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },

  // ========== Tier 6 items ==========
  // Computer
  [RecipesEnum.Computer]: {
    recipeName: RecipesEnum.Computer,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Crystal_Computer]: {
    recipeName: RecipesEnum.Alternate_Crystal_Computer,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Caterium_Computer]: {
    recipeName: RecipesEnum.Alternate_Caterium_Computer,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Heavy_Modular_Frame
  [RecipesEnum.Heavy_Modular_Frame]: {
    recipeName: RecipesEnum.Heavy_Modular_Frame,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Heavy_Encased_Frame]: {
    recipeName: RecipesEnum.Alternate_Heavy_Encased_Frame,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Heavy_Flexible_Frame]: {
    recipeName: RecipesEnum.Alternate_Heavy_Flexible_Frame,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Modular_Engine
  [RecipesEnum.Modular_Engine]: {
    recipeName: RecipesEnum.Modular_Engine,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Adaptive_Control_Unit
  [RecipesEnum.Adaptive_Control_Unit]: {
    recipeName: RecipesEnum.Adaptive_Control_Unit,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },

  // ========== Tier 7 items ==========
  // Alumina_Solution
  [RecipesEnum.Alumina_Solution]: {
    recipeName: RecipesEnum.Alumina_Solution,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Unpackage_Alumina_Solution]: {
    recipeName: RecipesEnum.Unpackage_Alumina_Solution,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Sloppy_Alumina]: {
    recipeName: RecipesEnum.Alternate_Sloppy_Alumina,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Packaged_Alumina_Solution
  [RecipesEnum.Packaged_Alumina_Solution]: {
    recipeName: RecipesEnum.Packaged_Alumina_Solution,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Aluminum_Scrap
  [RecipesEnum.Aluminum_Scrap]: {
    recipeName: RecipesEnum.Aluminum_Scrap,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Instant_Scrap]: {
    recipeName: RecipesEnum.Alternate_Instant_Scrap,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Electrode_Aluminum_Scrap]: {
    recipeName: RecipesEnum.Alternate_Electrode_Aluminum_Scrap,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Aluminum_Ingot
  [RecipesEnum.Aluminum_Ingot]: {
    recipeName: RecipesEnum.Aluminum_Ingot,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Pure_Aluminum_Ingot]: {
    recipeName: RecipesEnum.Alternate_Pure_Aluminum_Ingot,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Alclad_Aluminum_Sheet
  [RecipesEnum.Alclad_Aluminum_Sheet]: {
    recipeName: RecipesEnum.Alclad_Aluminum_Sheet,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Aluminum_Casing
  [RecipesEnum.Aluminum_Casing]: {
    recipeName: RecipesEnum.Aluminum_Casing,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Alclad_Casing]: {
    recipeName: RecipesEnum.Alternate_Alclad_Casing,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Radio_Control_Unit
  [RecipesEnum.Radio_Control_Unit]: {
    recipeName: RecipesEnum.Radio_Control_Unit,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Radio_Connection_Unit]: {
    recipeName: RecipesEnum.Alternate_Radio_Connection_Unit,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Radio_Control_System]: {
    recipeName: RecipesEnum.Alternate_Radio_Control_System,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Sulfuric_Acid
  [RecipesEnum.Sulfuric_Acid]: {
    recipeName: RecipesEnum.Sulfuric_Acid,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Unpackage_Sulfuric_Acid]: {
    recipeName: RecipesEnum.Unpackage_Sulfuric_Acid,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Packaged_Sulfuric_Acid
  [RecipesEnum.Packaged_Sulfuric_Acid]: {
    recipeName: RecipesEnum.Packaged_Sulfuric_Acid,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Battery
  [RecipesEnum.Battery]: {
    recipeName: RecipesEnum.Battery,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Classic_Battery]: {
    recipeName: RecipesEnum.Alternate_Classic_Battery,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Supercomputer
  [RecipesEnum.Supercomputer]: {
    recipeName: RecipesEnum.Supercomputer,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_OC_Supercomputer]: {
    recipeName: RecipesEnum.Alternate_OC_Supercomputer,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Super_State_Computer]: {
    recipeName: RecipesEnum.Alternate_Super_State_Computer,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Assembly_Director_System
  [RecipesEnum.Assembly_Director_System]: {
    recipeName: RecipesEnum.Assembly_Director_System,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },

  // ========== Tier 8 items ==========
  // Encased_Uranium_Cell
  [RecipesEnum.Encased_Uranium_Cell]: {
    recipeName: RecipesEnum.Encased_Uranium_Cell,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Infused_Uranium_Cell]: {
    recipeName: RecipesEnum.Alternate_Infused_Uranium_Cell,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Electromagnetic_Control_Rod
  [RecipesEnum.Electromagnetic_Control_Rod]: {
    recipeName: RecipesEnum.Electromagnetic_Control_Rod,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Electromagnetic_Connection_Rod]: {
    recipeName: RecipesEnum.Alternate_Electromagnetic_Connection_Rod,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Uranium_Fuel_Rod
  [RecipesEnum.Uranium_Fuel_Rod]: {
    recipeName: RecipesEnum.Uranium_Fuel_Rod,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Uranium_Fuel_Unit]: {
    recipeName: RecipesEnum.Alternate_Uranium_Fuel_Unit,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Magnetic_Field_Generator
  [RecipesEnum.Magnetic_Field_Generator]: {
    recipeName: RecipesEnum.Magnetic_Field_Generator,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Empty_Fluid_Tank
  [RecipesEnum.Empty_Fluid_Tank]: {
    recipeName: RecipesEnum.Empty_Fluid_Tank,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Heat_Sink
  [RecipesEnum.Alternate_Heat_Exchanger]: {
    recipeName: RecipesEnum.Alternate_Heat_Exchanger,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Heat_Sink]: {
    recipeName: RecipesEnum.Heat_Sink,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Cooling_System
  [RecipesEnum.Cooling_System]: {
    recipeName: RecipesEnum.Cooling_System,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Cooling_Device]: {
    recipeName: RecipesEnum.Alternate_Cooling_Device,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Fused_Modular_Frame
  [RecipesEnum.Fused_Modular_Frame]: {
    recipeName: RecipesEnum.Fused_Modular_Frame,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Heat_Fused_Frame]: {
    recipeName: RecipesEnum.Alternate_Heat_Fused_Frame,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Turbo_Motor
  [RecipesEnum.Turbo_Motor]: {
    recipeName: RecipesEnum.Turbo_Motor,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Turbo_Pressure_Motor]: {
    recipeName: RecipesEnum.Alternate_Turbo_Pressure_Motor,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Turbo_Electric_Motor]: {
    recipeName: RecipesEnum.Alternate_Turbo_Electric_Motor,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Thermal_Propulsion_Rocket
  [RecipesEnum.Thermal_Propulsion_Rocket]: {
    recipeName: RecipesEnum.Thermal_Propulsion_Rocket,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Nitric_Acid
  [RecipesEnum.Nitric_Acid]: {
    recipeName: RecipesEnum.Nitric_Acid,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Unpackage_Nitric_Acid]: {
    recipeName: RecipesEnum.Unpackage_Nitric_Acid,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Packaged_Nitric_Acid
  [RecipesEnum.Packaged_Nitric_Acid]: {
    recipeName: RecipesEnum.Packaged_Nitric_Acid,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Non_Fissile_Uranium
  [RecipesEnum.Non_Fissile_Uranium]: {
    recipeName: RecipesEnum.Non_Fissile_Uranium,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Fertile_Uranium]: {
    recipeName: RecipesEnum.Alternate_Fertile_Uranium,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Plutonium_Pellet
  [RecipesEnum.Plutonium_Pellet]: {
    recipeName: RecipesEnum.Plutonium_Pellet,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Encased_Plutonium_Cell
  [RecipesEnum.Encased_Plutonium_Cell]: {
    recipeName: RecipesEnum.Encased_Plutonium_Cell,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Instant_Plutonium_Cell]: {
    recipeName: RecipesEnum.Alternate_Instant_Plutonium_Cell,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Plutonium_Fuel_Rod
  [RecipesEnum.Plutonium_Fuel_Rod]: {
    recipeName: RecipesEnum.Plutonium_Fuel_Rod,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Plutonium_Fuel_Unit]: {
    recipeName: RecipesEnum.Alternate_Plutonium_Fuel_Unit,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Copper_Powder
  [RecipesEnum.Copper_Powder]: {
    recipeName: RecipesEnum.Copper_Powder,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Pressure_Conversion_Cube
  [RecipesEnum.Pressure_Conversion_Cube]: {
    recipeName: RecipesEnum.Pressure_Conversion_Cube,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Nuclear_Pasta
  [RecipesEnum.Nuclear_Pasta]: {
    recipeName: RecipesEnum.Nuclear_Pasta,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },

  // ========== Tier 9 items ==========
  // Diamonds
  [RecipesEnum.Diamonds]: {
    recipeName: RecipesEnum.Diamonds,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Petroleum_Diamonds]: {
    recipeName: RecipesEnum.Alternate_Petroleum_Diamonds,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Oil_Based_Diamonds]: {
    recipeName: RecipesEnum.Alternate_Oil_Based_Diamonds,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Pink_Diamonds]: {
    recipeName: RecipesEnum.Alternate_Pink_Diamonds,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Cloudy_Diamonds]: {
    recipeName: RecipesEnum.Alternate_Cloudy_Diamonds,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Turbo_Diamonds]: {
    recipeName: RecipesEnum.Alternate_Turbo_Diamonds,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Time_Crystal
  [RecipesEnum.Time_Crystal]: {
    recipeName: RecipesEnum.Time_Crystal,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Ficsite_Ingot
  [RecipesEnum.Ficsite_Ingot_Iron]: {
    recipeName: RecipesEnum.Ficsite_Ingot_Iron,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Ficsite_Ingot_Aluminum]: {
    recipeName: RecipesEnum.Ficsite_Ingot_Aluminum,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Ficsite_Ingot_Caterium]: {
    recipeName: RecipesEnum.Ficsite_Ingot_Caterium,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Ficsite_Trigon
  [RecipesEnum.Ficsite_Trigon]: {
    recipeName: RecipesEnum.Ficsite_Trigon,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Biochemical_Sculptor
  [RecipesEnum.Biochemical_Sculptor]: {
    recipeName: RecipesEnum.Biochemical_Sculptor,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Excited_Photonic_Matter
  [RecipesEnum.Excited_Photonic_Matter]: {
    recipeName: RecipesEnum.Excited_Photonic_Matter,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Dark_Matter_Residue
  [RecipesEnum.Dark_Matter_Residue]: {
    recipeName: RecipesEnum.Dark_Matter_Residue,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Dark_Matter_Crystal
  [RecipesEnum.Dark_Matter_Crystal]: {
    recipeName: RecipesEnum.Dark_Matter_Crystal,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Dark_Matter_Crystallization]: {
    recipeName: RecipesEnum.Alternate_Dark_Matter_Crystallization,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Dark_Matter_Trap]: {
    recipeName: RecipesEnum.Alternate_Dark_Matter_Trap,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Superposition_Oscillator
  [RecipesEnum.Superposition_Oscillator]: {
    recipeName: RecipesEnum.Superposition_Oscillator,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Neural_Quantum_Processor
  [RecipesEnum.Neural_Quantum_Processor]: {
    recipeName: RecipesEnum.Neural_Quantum_Processor,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // AI_Expansion_Server
  [RecipesEnum.AI_Expansion_Server]: {
    recipeName: RecipesEnum.AI_Expansion_Server,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Singularity_Cell
  [RecipesEnum.Singularity_Cell]: {
    recipeName: RecipesEnum.Singularity_Cell,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Ballistic_Warp_Drive
  [RecipesEnum.Ballistic_Warp_Drive]: {
    recipeName: RecipesEnum.Ballistic_Warp_Drive,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Ficsonium
  [RecipesEnum.Ficsonium]: {
    recipeName: RecipesEnum.Ficsonium,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Ficsonium_Fuel_Rod
  [RecipesEnum.Ficsonium_Fuel_Rod]: {
    recipeName: RecipesEnum.Ficsonium_Fuel_Rod,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },

  // =========== MAM items ============
  // Power_Shard
  [RecipesEnum.Power_Shard_Blue_Power_Slug]: {
    recipeName: RecipesEnum.Power_Shard_Blue_Power_Slug,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Power_Shard_Yellow_Power_Slug]: {
    recipeName: RecipesEnum.Power_Shard_Yellow_Power_Slug,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Power_Shard_Purple_Power_Slug]: {
    recipeName: RecipesEnum.Power_Shard_Purple_Power_Slug,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Synthetic_Power_Shard]: {
    recipeName: RecipesEnum.Synthetic_Power_Shard,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Alien_Protein
  [RecipesEnum.Alien_Protein_Spitter]: {
    recipeName: RecipesEnum.Alien_Protein_Spitter,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alien_Protein_Hog]: {
    recipeName: RecipesEnum.Alien_Protein_Hog,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alien_Protein_Stinger]: {
    recipeName: RecipesEnum.Alien_Protein_Stinger,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alien_Protein_Hatcher]: {
    recipeName: RecipesEnum.Alien_Protein_Hatcher,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Alien_DNA_Capsule
  [RecipesEnum.Alien_DNA_Capsule]: {
    recipeName: RecipesEnum.Alien_DNA_Capsule,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Fabric
  [RecipesEnum.Fabric]: {
    recipeName: RecipesEnum.Fabric,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Polyester_Fabric]: {
    recipeName: RecipesEnum.Alternate_Polyester_Fabric,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Caterium_Ingot
  [RecipesEnum.Caterium_Ingot]: {
    recipeName: RecipesEnum.Caterium_Ingot,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Pure_Caterium_Ingot]: {
    recipeName: RecipesEnum.Alternate_Pure_Caterium_Ingot,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Tempered_Caterium_Ingot]: {
    recipeName: RecipesEnum.Alternate_Tempered_Caterium_Ingot,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Leached_Caterium_Ingot]: {
    recipeName: RecipesEnum.Alternate_Leached_Caterium_Ingot,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Quickwire
  [RecipesEnum.Quickwire]: {
    recipeName: RecipesEnum.Quickwire,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Fused_Quickwire]: {
    recipeName: RecipesEnum.Alternate_Fused_Quickwire,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // AI_Limiter
  [RecipesEnum.AI_Limiter]: {
    recipeName: RecipesEnum.AI_Limiter,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Plastic_AI_Limiter]: {
    recipeName: RecipesEnum.Alternate_Plastic_AI_Limiter,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // High_Speed_Connector
  [RecipesEnum.High_Speed_Connector]: {
    recipeName: RecipesEnum.High_Speed_Connector,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Silicon_High_Speed_Connector]: {
    recipeName: RecipesEnum.Alternate_Silicon_High_Speed_Connector,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Quartz_Crystal
  [RecipesEnum.Quartz_Crystal]: {
    recipeName: RecipesEnum.Quartz_Crystal,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Pure_Quartz_Crystal]: {
    recipeName: RecipesEnum.Alternate_Pure_Quartz_Crystal,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Fused_Quartz_Crystal]: {
    recipeName: RecipesEnum.Alternate_Fused_Quartz_Crystal,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Silica
  [RecipesEnum.Silica]: {
    recipeName: RecipesEnum.Silica,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Cheap_Silica]: {
    recipeName: RecipesEnum.Alternate_Cheap_Silica,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Distilled_Silica]: {
    recipeName: RecipesEnum.Alternate_Distilled_Silica,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Crystal_Oscillator
  [RecipesEnum.Crystal_Oscillator]: {
    recipeName: RecipesEnum.Crystal_Oscillator,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Insulated_Crystal_Oscillator]: {
    recipeName: RecipesEnum.Alternate_Insulated_Crystal_Oscillator,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Dissolved_Silica
  [RecipesEnum.Alternate_Quartz_Purification]: {
    recipeName: RecipesEnum.Alternate_Quartz_Purification,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Black_Powder
  [RecipesEnum.Black_Powder]: {
    recipeName: RecipesEnum.Black_Powder,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Fine_Black_Powder]: {
    recipeName: RecipesEnum.Alternate_Fine_Black_Powder,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Compacted_Coal
  [RecipesEnum.Alternate_Compacted_Coal]: {
    recipeName: RecipesEnum.Alternate_Compacted_Coal,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Turbofuel
  [RecipesEnum.Turbofuel]: {
    recipeName: RecipesEnum.Turbofuel,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Unpackage_Turbofuel]: {
    recipeName: RecipesEnum.Unpackage_Turbofuel,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Turbo_Heavy_Fuel]: {
    recipeName: RecipesEnum.Alternate_Turbo_Heavy_Fuel,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Turbo_Blend_Fuel]: {
    recipeName: RecipesEnum.Alternate_Turbo_Blend_Fuel,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Packaged_Turbofuel
  [RecipesEnum.Packaged_Turbofuel]: {
    recipeName: RecipesEnum.Packaged_Turbofuel,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Smokeless_Powder
  [RecipesEnum.Smokeless_Powder]: {
    recipeName: RecipesEnum.Smokeless_Powder,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Rocket_Fuel
  [RecipesEnum.Rocket_Fuel]: {
    recipeName: RecipesEnum.Rocket_Fuel,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Unpackage_Rocket_Fuel]: {
    recipeName: RecipesEnum.Unpackage_Rocket_Fuel,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Nitro_Rocket_Fuel]: {
    recipeName: RecipesEnum.Alternate_Nitro_Rocket_Fuel,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Packaged_Rocket_Fuel
  [RecipesEnum.Packaged_Rocket_Fuel]: {
    recipeName: RecipesEnum.Packaged_Rocket_Fuel,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Ionized_Fuel
  [RecipesEnum.Ionized_Fuel]: {
    recipeName: RecipesEnum.Ionized_Fuel,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Unpackage_Ionized_Fuel]: {
    recipeName: RecipesEnum.Unpackage_Ionized_Fuel,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Alternate_Dark_Ion_Fuel]: {
    recipeName: RecipesEnum.Alternate_Dark_Ion_Fuel,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Packaged_Ionized_Fuel
  [RecipesEnum.Packaged_Ionized_Fuel]: {
    recipeName: RecipesEnum.Packaged_Ionized_Fuel,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Reanimated_SAM
  [RecipesEnum.Reanimated_SAM]: {
    recipeName: RecipesEnum.Reanimated_SAM,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // SAM_Fluctuator
  [RecipesEnum.SAM_Fluctuator]: {
    recipeName: RecipesEnum.SAM_Fluctuator,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Alien_Power_Matrix
  [RecipesEnum.Alien_Power_Matrix]: {
    recipeName: RecipesEnum.Alien_Power_Matrix,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },

  // = Classic Automatable equipments =
  // Portable_Miner
  [RecipesEnum.Alternate_Automated_Miner]: {
    recipeName: RecipesEnum.Alternate_Automated_Miner,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Gas_Filter
  [RecipesEnum.Gas_Filter]: {
    recipeName: RecipesEnum.Gas_Filter,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Iodine_Infused_Filter
  [RecipesEnum.Iodine_Infused_Filter]: {
    recipeName: RecipesEnum.Iodine_Infused_Filter,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },

  // === MAM Automatable equipments ===
  // Iron_Rebar
  [RecipesEnum.Iron_Rebar]: {
    recipeName: RecipesEnum.Iron_Rebar,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Stun_Rebar
  [RecipesEnum.Stun_Rebar]: {
    recipeName: RecipesEnum.Stun_Rebar,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Shatter_Rebar
  [RecipesEnum.Shatter_Rebar]: {
    recipeName: RecipesEnum.Shatter_Rebar,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Explosive_Rebar
  [RecipesEnum.Explosive_Rebar]: {
    recipeName: RecipesEnum.Explosive_Rebar,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Nobelisk
  [RecipesEnum.Nobelisk]: {
    recipeName: RecipesEnum.Nobelisk,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Gas_Nobelisk
  [RecipesEnum.Gas_Nobelisk]: {
    recipeName: RecipesEnum.Gas_Nobelisk,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Pulse_Nobelisk
  [RecipesEnum.Pulse_Nobelisk]: {
    recipeName: RecipesEnum.Pulse_Nobelisk,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Cluster_Nobelisk
  [RecipesEnum.Cluster_Nobelisk]: {
    recipeName: RecipesEnum.Cluster_Nobelisk,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Nuke_Nobelisk
  [RecipesEnum.Nuke_Nobelisk]: {
    recipeName: RecipesEnum.Nuke_Nobelisk,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Rifle_Ammo
  [RecipesEnum.Rifle_Ammo]: {
    recipeName: RecipesEnum.Rifle_Ammo,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Homing_Rifle_Ammo
  [RecipesEnum.Homing_Rifle_Ammo]: {
    recipeName: RecipesEnum.Homing_Rifle_Ammo,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Turbo_Rifle_Ammo
  [RecipesEnum.Turbo_Rifle_Ammo]: {
    recipeName: RecipesEnum.Turbo_Rifle_Ammo,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Packaged_Turbo_Rifle_Ammo]: {
    recipeName: RecipesEnum.Packaged_Turbo_Rifle_Ammo,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },

  // ======= Generators recipes =======
  // Biomass_Burner 30 Mw
  [RecipesEnum.Biomass_Burner_Leaves]: {
    recipeName: RecipesEnum.Biomass_Burner_Leaves,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Biomass_Burner_Mycelia]: {
    recipeName: RecipesEnum.Biomass_Burner_Mycelia,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Biomass_Burner_Wood]: {
    recipeName: RecipesEnum.Biomass_Burner_Wood,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Biomass_Burner_Biomass]: {
    recipeName: RecipesEnum.Biomass_Burner_Biomass,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Biomass_Burner_Solid_Biofuel]: {
    recipeName: RecipesEnum.Biomass_Burner_Solid_Biofuel,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Biomass_Burner_Packaged_Liquid_Biofuel]: {
    recipeName: RecipesEnum.Biomass_Burner_Packaged_Liquid_Biofuel,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Coal_Powered_Generator 75 Mw
  [RecipesEnum.Coal_Powered_Generator_Coal]: {
    recipeName: RecipesEnum.Coal_Powered_Generator_Coal,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Coal_Powered_Generator_Compacted_Coal]: {
    recipeName: RecipesEnum.Coal_Powered_Generator_Compacted_Coal,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Coal_Powered_Generator_Petroleum_Coke]: {
    recipeName: RecipesEnum.Coal_Powered_Generator_Petroleum_Coke,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Fuel_Powered_Generator 250 Mw
  [RecipesEnum.Fuel_Powered_Generator_Fuel]: {
    recipeName: RecipesEnum.Fuel_Powered_Generator_Fuel,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Fuel_Powered_Generator_Liquid_Biofuel]: {
    recipeName: RecipesEnum.Fuel_Powered_Generator_Liquid_Biofuel,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Fuel_Powered_Generator_Turbofuel]: {
    recipeName: RecipesEnum.Fuel_Powered_Generator_Turbofuel,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Fuel_Powered_Generator_Rocket_Fuel]: {
    recipeName: RecipesEnum.Fuel_Powered_Generator_Rocket_Fuel,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Fuel_Powered_Generator_Ionized_Fuel]: {
    recipeName: RecipesEnum.Fuel_Powered_Generator_Ionized_Fuel,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Nuclear_Power_Plant 2 500 Mw
  [RecipesEnum.Nuclear_Power_Plant_Uranium_Fuel_Rod]: {
    recipeName: RecipesEnum.Nuclear_Power_Plant_Uranium_Fuel_Rod,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Nuclear_Power_Plant_Plutonium_Fuel_Rod]: {
    recipeName: RecipesEnum.Nuclear_Power_Plant_Plutonium_Fuel_Rod,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  [RecipesEnum.Nuclear_Power_Plant_Ficsonium_Fuel_Rod]: {
    recipeName: RecipesEnum.Nuclear_Power_Plant_Ficsonium_Fuel_Rod,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },

  // ========= FICSMAS items ==========
  // FICSMAS_Tree_Branch
  [RecipesEnum.FICSMAS_Tree_Branch]: {
    recipeName: RecipesEnum.FICSMAS_Tree_Branch,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Red_FICSMAS_Ornament
  [RecipesEnum.Red_FICSMAS_Ornament]: {
    recipeName: RecipesEnum.Red_FICSMAS_Ornament,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Blue_FICSMAS_Ornament
  [RecipesEnum.Blue_FICSMAS_Ornament]: {
    recipeName: RecipesEnum.Blue_FICSMAS_Ornament,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Copper_FICSMAS_Ornament
  [RecipesEnum.Copper_FICSMAS_Ornament]: {
    recipeName: RecipesEnum.Copper_FICSMAS_Ornament,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Iron_FICSMAS_Ornament
  [RecipesEnum.Iron_FICSMAS_Ornament]: {
    recipeName: RecipesEnum.Iron_FICSMAS_Ornament,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // FICSMAS_Wreath
  [RecipesEnum.FICSMAS_Wreath]: {
    recipeName: RecipesEnum.FICSMAS_Wreath,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // FICSMAS_Ornament_Bundle
  [RecipesEnum.FICSMAS_Ornament_Bundle]: {
    recipeName: RecipesEnum.FICSMAS_Ornament_Bundle,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Candy_Cane
  [RecipesEnum.Candy_Cane]: {
    recipeName: RecipesEnum.Candy_Cane,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // FICSMAS_Bow
  [RecipesEnum.FICSMAS_Bow]: {
    recipeName: RecipesEnum.FICSMAS_Bow,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // FICSMAS_Actual_Snow
  [RecipesEnum.FICSMAS_Actual_Snow]: {
    recipeName: RecipesEnum.FICSMAS_Actual_Snow,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // FICSMAS_Wonder_Star
  [RecipesEnum.FICSMAS_Wonder_Star]: {
    recipeName: RecipesEnum.FICSMAS_Wonder_Star,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // Snowball
  [RecipesEnum.Snowball]: {
    recipeName: RecipesEnum.Snowball,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
};
