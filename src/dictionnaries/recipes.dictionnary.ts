import { GameItemsEnum } from "../enums/gameItems.enum";
import { RecipesEnum } from "../enums/recipes.enum";
import type { RecipeType } from "../types/satisfactory/recipe.type";
import { gameItemsDictionnary } from "./gameItems.dictionary";

// TODO A => POur trouver les doublons, on va attendre de finir le jeu pour voir ça
// const doubleOutputRecipes = recipes
//   .filter((recipe) => {
//     return recipe.itemsOut.length >= 2;
//   })
//   .sort((a, b) =>
//     a.itemsOut[1].itemName.localeCompare(b.itemsOut[1].itemName),
//   )
//   .sort((a, b) =>
//     a.itemsOut[0].itemName.localeCompare(b.itemsOut[0].itemName),
//   );

export const recipes: RecipeType[] = [
  //! Iron_Ingot
  {
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
    initCycleDuration: 2,
  },
  //! Iron_Plate
  {
    recipeName: RecipesEnum.Iron_Plate,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Constructor],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 3,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Plate],
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 6,
  },
  //! Iron_Rod
  {
    recipeName: RecipesEnum.Iron_Rod,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Constructor],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ingot],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Rod],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 4,
  },
  //! Reinforced_Iron_Plate
  {
    recipeName: RecipesEnum.Reinforced_Iron_Plate,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Assembler],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Plate],
        quantityPerCycle: 6,
      },
      {
        item: gameItemsDictionnary[GameItemsEnum.Screw],
        quantityPerCycle: 12,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Reinforced_Iron_Plate],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 12,
  },
  //! Cable
  {
    recipeName: RecipesEnum.Cable,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Constructor],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Wire],
        quantityPerCycle: 2,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Cable],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 2,
  },
  //! Wire
  {
    recipeName: RecipesEnum.Wire,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Constructor],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Copper_Ingot],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Wire],
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 4,
  },
  //! Copper_Ingot
  {
    recipeName: RecipesEnum.Copper_Ingot,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Copper_Ore],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Copper_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 2,
  },
  //! Concrete
  {
    recipeName: RecipesEnum.Concrete,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Constructor],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Limestone],
        quantityPerCycle: 3,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Concrete],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 4,
  },
  //! Screw
  {
    recipeName: RecipesEnum.Screw,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Constructor],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Rod],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Screw],
        quantityPerCycle: 4,
      },
    ],
    initCycleDuration: 6,
  },
  //! Biomass_Wood
  {
    recipeName: RecipesEnum.Biomass_Wood,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Constructor],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Wood],
        quantityPerCycle: 4,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Biomass],
        quantityPerCycle: 20,
      },
    ],
    initCycleDuration: 4,
  },
  //! Biomass_Leaves
  {
    recipeName: RecipesEnum.Biomass_Leaves,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Constructor],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Leaves],
        quantityPerCycle: 10,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Biomass],
        quantityPerCycle: 5,
      },
    ],
    initCycleDuration: 5,
  },
  //! Biomass_Alien_Protein
  {
    recipeName: RecipesEnum.Biomass_Alien_Protein,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Constructor],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Alien_Protein],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Biomass],
        quantityPerCycle: 100,
      },
    ],
    initCycleDuration: 4,
  },
  //! Rotor
  {
    recipeName: RecipesEnum.Rotor,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Assembler],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Rod],
        quantityPerCycle: 5,
      },
      {
        item: gameItemsDictionnary[GameItemsEnum.Screw],
        quantityPerCycle: 25,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Rotor],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 15,
  },
  //! Copper_Sheet
  {
    recipeName: RecipesEnum.Copper_Sheet,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Constructor],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Copper_Ingot],
        quantityPerCycle: 2,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Copper_Sheet],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 6,
  },
  //! Modular_Frame
  {
    recipeName: RecipesEnum.Modular_Frame,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Assembler],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Reinforced_Iron_Plate],
        quantityPerCycle: 3,
      },
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Rod],
        quantityPerCycle: 12,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Modular_Frame],
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 60,
  },
  //! Smart_Plating
  {
    recipeName: RecipesEnum.Smart_Plating,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Assembler],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Reinforced_Iron_Plate],
        quantityPerCycle: 1,
      },
      {
        item: gameItemsDictionnary[GameItemsEnum.Rotor],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Smart_Plating],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 30,
  },
  //! Alien_Protein_Hog
  {
    recipeName: RecipesEnum.Alien_Protein_Hog,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Constructor],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Hog_Remains],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Alien_Protein],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 3,
  },
  //! Alien_Protein_Hatcher
  {
    recipeName: RecipesEnum.Alien_Protein_Hatcher,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Constructor],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Hatcher_Remains],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Alien_Protein],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 3,
  },
  //! Alien_Protein_Spitter
  {
    recipeName: RecipesEnum.Alien_Protein_Spitter,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Constructor],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Spitter_Remains],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Alien_Protein],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 3,
  },
  //! Alien_Protein_Stinger
  {
    recipeName: RecipesEnum.Alien_Protein_Stinger,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Constructor],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Stinger_Remains],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Alien_Protein],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 3,
  },
  //! Alien_DNA_Capsule
  {
    recipeName: RecipesEnum.Alien_DNA_Capsule,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Constructor],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Alien_Protein],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Alien_DNA_Capsule],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 6,
  },
  //! Power_Shard_Blue_Power_Slug
  {
    recipeName: RecipesEnum.Power_Shard_Blue_Power_Slug,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Constructor],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Blue_Power_Slug],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Power_Shard],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 8,
  },
  //! Power_Shard_Yellow_Power_Slug
  {
    recipeName: RecipesEnum.Power_Shard_Yellow_Power_Slug,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Constructor],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Yellow_Power_Slug],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Power_Shard],
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 12,
  },
  //! Power_Shard_Purple_Power_Slug
  {
    recipeName: RecipesEnum.Power_Shard_Purple_Power_Slug,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Constructor],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Purple_Power_Slug],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Power_Shard],
        quantityPerCycle: 5,
      },
    ],
    initCycleDuration: 24,
  },
  //! Caterium_Ingot
  {
    recipeName: RecipesEnum.Caterium_Ingot,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Smelter],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Caterium_Ore],
        quantityPerCycle: 3,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Caterium_Ingot],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 4,
  },
  //! Quartz_Crystal
  {
    recipeName: RecipesEnum.Quartz_Crystal,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Constructor],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Raw_Quartz],
        quantityPerCycle: 5,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Quartz_Crystal],
        quantityPerCycle: 3,
      },
    ],
    initCycleDuration: 8,
  },
  //! Solid_Biofuel
  {
    recipeName: RecipesEnum.Solid_Biofuel,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Constructor],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Biomass],
        quantityPerCycle: 8,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Solid_Biofuel],
        quantityPerCycle: 4,
      },
    ],
    initCycleDuration: 4,
  },
  //! Iron_Rebar
  {
    recipeName: RecipesEnum.Iron_Rebar,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Constructor],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Rod],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Rebar],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 4,
  },
  //! Silica
  {
    recipeName: RecipesEnum.Silica,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Constructor],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Raw_Quartz],
        quantityPerCycle: 3,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Silica],
        quantityPerCycle: 5,
      },
    ],
    initCycleDuration: 8,
  },
  //! Shatter_Rebar
  {
    recipeName: RecipesEnum.Shatter_Rebar,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Assembler],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Rebar],
        quantityPerCycle: 2,
      },
      {
        item: gameItemsDictionnary[GameItemsEnum.Quartz_Crystal],
        quantityPerCycle: 3,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Shatter_Rebar],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 12,
  },
  //! Steel_Ingot
  {
    recipeName: RecipesEnum.Steel_Ingot,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Foundry],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Ore],
        quantityPerCycle: 3,
      },
      {
        item: gameItemsDictionnary[GameItemsEnum.Coal],
        quantityPerCycle: 3,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Steel_Ingot],
        quantityPerCycle: 3,
      },
    ],
    initCycleDuration: 4,
  },
  //! Steel_Beam
  {
    recipeName: RecipesEnum.Steel_Beam,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Constructor],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Steel_Ingot],
        quantityPerCycle: 4,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Steel_Beam],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 4,
  },
  //! Steel_Pipe
  {
    recipeName: RecipesEnum.Steel_Pipe,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Constructor],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Steel_Ingot],
        quantityPerCycle: 3,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Steel_Pipe],
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 6,
  },
  //! Versatile_Framework
  {
    recipeName: RecipesEnum.Versatile_Framework,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Assembler],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Modular_Frame],
        quantityPerCycle: 1,
      },
      {
        item: gameItemsDictionnary[GameItemsEnum.Steel_Beam],
        quantityPerCycle: 12,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Versatile_Framework],
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 24,
  },
  //! Quickwire
  {
    recipeName: RecipesEnum.Quickwire,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Constructor],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Caterium_Ingot],
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Quickwire],
        quantityPerCycle: 5,
      },
    ],
    initCycleDuration: 5,
  },
  //! Stun_Rebar
  {
    recipeName: RecipesEnum.Stun_Rebar,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Assembler],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Iron_Rebar],
        quantityPerCycle: 1,
      },
      {
        item: gameItemsDictionnary[GameItemsEnum.Quickwire],
        quantityPerCycle: 5,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Stun_Rebar],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 6,
  },
  //! AI_Limiter
  {
    recipeName: RecipesEnum.AI_Limiter,
    craftBuildings: gameItemsDictionnary[GameItemsEnum.Assembler],
    itemsIn: [
      {
        item: gameItemsDictionnary[GameItemsEnum.Copper_Sheet],
        quantityPerCycle: 5,
      },
      {
        item: gameItemsDictionnary[GameItemsEnum.Quickwire],
        quantityPerCycle: 20,
      },
    ],
    itemsOut: [
      {
        item: gameItemsDictionnary[GameItemsEnum.AI_Limiter],
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 12,
  },
];
