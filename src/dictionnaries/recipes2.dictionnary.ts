// import { CraftBuildingsEnum } from "../enums/craftBuildings.enum";
// import { ItemsEnum } from "../enums/items.enum";
// import type { RecipesType } from "../types/satisfactory/items";

// export const recipes: RecipesType[] = [
//   // ? Iron_Ingot
//   {
//     recipeName: "Iron_Ingot",
//     craftBuildings: CraftBuildingsEnum.Refinery,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Iron_Ore,
//         quantityPerCycle: 7,
//       },
//       {
//         itemName: ItemsEnum.Water,
//         quantityPerCycle: 4,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Iron_Ingot,
//         quantityPerCycle: 13,
//       },
//     ],
//     initCycleDuration: 12,
//   },
//   // ? Iron_Ingot
//   {
//     recipeName: "Iron_Ingot",
//     craftBuildings: CraftBuildingsEnum.Foundry,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Iron_Ore,
//         quantityPerCycle: 2,
//       },
//       {
//         itemName: ItemsEnum.Copper_Ore,
//         quantityPerCycle: 2,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Iron_Ingot,
//         quantityPerCycle: 5,
//       },
//     ],
//     initCycleDuration: 6,
//   },
//   // ? Iron_Plate
//   {
//     recipeName: "Iron_Plate",
//     craftBuildings: CraftBuildingsEnum.Assembler,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Iron_Ingot,
//         quantityPerCycle: 10,
//       },
//       {
//         itemName: ItemsEnum.Plastic,
//         quantityPerCycle: 2,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Iron_Plate,
//         quantityPerCycle: 15,
//       },
//     ],
//     initCycleDuration: 12,
//   },
//   // ? Iron_Plate
//   {
//     recipeName: "Iron_Plate",
//     craftBuildings: CraftBuildingsEnum.Assembler,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Steel_Ingot,
//         quantityPerCycle: 3,
//       },
//       {
//         itemName: ItemsEnum.Plastic,
//         quantityPerCycle: 2,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Iron_Plate,
//         quantityPerCycle: 18,
//       },
//     ],
//     initCycleDuration: 24,
//   },
//   // ? Iron_Rod-Alternate
//   {
//     recipeName: "Iron_Rod-Alternate",
//     craftBuildings: CraftBuildingsEnum.Constructor,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Steel_Ingot,
//         quantityPerCycle: 1,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Iron_Rod,
//         quantityPerCycle: 4,
//       },
//     ],
//     initCycleDuration: 5,
//   },
//   // ? Copper_Ingot
//   {
//     recipeName: "Copper_Ingot",
//     craftBuildings: CraftBuildingsEnum.Foundry,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Copper_Ore,
//         quantityPerCycle: 10,
//       },
//       {
//         itemName: ItemsEnum.Iron_Ore,
//         quantityPerCycle: 5,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Copper_Ingot,
//         quantityPerCycle: 20,
//       },
//     ],
//     initCycleDuration: 12,
//   },
//   // ? Copper_Ingot
//   {
//     recipeName: "Copper_Ingot",
//     craftBuildings: CraftBuildingsEnum.Refinery,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Copper_Ore,
//         quantityPerCycle: 6,
//       },
//       {
//         itemName: ItemsEnum.Water,
//         quantityPerCycle: 4,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Copper_Ingot,
//         quantityPerCycle: 15,
//       },
//     ],
//     initCycleDuration: 24,
//   },
//   // ? Wire
//   {
//     recipeName: "Wire",
//     craftBuildings: CraftBuildingsEnum.Assembler,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Copper_Ingot,
//         quantityPerCycle: 4,
//       },
//       {
//         itemName: ItemsEnum.Caterium_Ingot,
//         quantityPerCycle: 1,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Wire,
//         quantityPerCycle: 30,
//       },
//     ],
//     initCycleDuration: 20,
//   },
//   // ? Wire
//   {
//     recipeName: "Wire",
//     craftBuildings: CraftBuildingsEnum.Constructor,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Iron_Ingot,
//         quantityPerCycle: 5,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Wire,
//         quantityPerCycle: 9,
//       },
//     ],
//     initCycleDuration: 24,
//   },
//   // ? Wire
//   {
//     recipeName: "Wire",
//     craftBuildings: CraftBuildingsEnum.Constructor,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Caterium_Ingot,
//         quantityPerCycle: 1,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Wire,
//         quantityPerCycle: 8,
//       },
//     ],
//     initCycleDuration: 4,
//   },
//   // ? Cable
//   {
//     recipeName: "Cable",
//     craftBuildings: CraftBuildingsEnum.Refinery,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Wire,
//         quantityPerCycle: 5,
//       },
//       {
//         itemName: ItemsEnum.Heavy_Oil_Residue,
//         quantityPerCycle: 2,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Cable,
//         quantityPerCycle: 9,
//       },
//     ],
//     initCycleDuration: 8,
//   },
//   // ? Cable
//   {
//     recipeName: "Cable",
//     craftBuildings: CraftBuildingsEnum.Assembler,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Wire,
//         quantityPerCycle: 9,
//       },
//       {
//         itemName: ItemsEnum.Rubber,
//         quantityPerCycle: 6,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Cable,
//         quantityPerCycle: 20,
//       },
//     ],
//     initCycleDuration: 12,
//   },
//   // ? Cable
//   {
//     recipeName: "Cable",
//     craftBuildings: CraftBuildingsEnum.Assembler,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Quickwire,
//         quantityPerCycle: 3,
//       },
//       {
//         itemName: ItemsEnum.Rubber,
//         quantityPerCycle: 2,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Cable,
//         quantityPerCycle: 11,
//       },
//     ],
//     initCycleDuration: 24,
//   },
//   // ? Concrete
//   {
//     recipeName: "Concrete",
//     craftBuildings: CraftBuildingsEnum.Assembler,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Limestone,
//         quantityPerCycle: 10,
//       },
//       {
//         itemName: ItemsEnum.Rubber,
//         quantityPerCycle: 2,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Concrete,
//         quantityPerCycle: 9,
//       },
//     ],
//     initCycleDuration: 12,
//   },
//   // ? Concrete
//   {
//     recipeName: "Concrete",
//     craftBuildings: CraftBuildingsEnum.Refinery,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Limestone,
//         quantityPerCycle: 6,
//       },
//       {
//         itemName: ItemsEnum.Water,
//         quantityPerCycle: 5,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Concrete,
//         quantityPerCycle: 4,
//       },
//     ],
//     initCycleDuration: 3,
//   },
//   // ? Concrete
//   {
//     recipeName: "Concrete",
//     craftBuildings: CraftBuildingsEnum.Assembler,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Silica,
//         quantityPerCycle: 3,
//       },
//       {
//         itemName: ItemsEnum.Limestone,
//         quantityPerCycle: 12,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Concrete,
//         quantityPerCycle: 10,
//       },
//     ],
//     initCycleDuration: 24,
//   },
//   // ? Screw
//   {
//     recipeName: "Screw",
//     craftBuildings: CraftBuildingsEnum.Constructor,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Iron_Ingot,
//         quantityPerCycle: 5,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Screw,
//         quantityPerCycle: 20,
//       },
//     ],
//     initCycleDuration: 24,
//   },
//   // ? Screw
//   {
//     recipeName: "Screw",
//     craftBuildings: CraftBuildingsEnum.Constructor,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Steel_Beam,
//         quantityPerCycle: 1,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Screw,
//         quantityPerCycle: 52,
//       },
//     ],
//     initCycleDuration: 12,
//   },
//   // ? Reinforced_Iron_Plate
//   {
//     recipeName: "Reinforced_Iron_Plate",
//     craftBuildings: CraftBuildingsEnum.Assembler,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Iron_Plate,
//         quantityPerCycle: 3,
//       },
//       {
//         itemName: ItemsEnum.Rubber,
//         quantityPerCycle: 1,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Reinforced_Iron_Plate,
//         quantityPerCycle: 1,
//       },
//     ],
//     initCycleDuration: 16,
//   },
//   // ? Reinforced_Iron_Plate
//   {
//     recipeName: "Reinforced_Iron_Plate",
//     craftBuildings: CraftBuildingsEnum.Assembler,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Iron_Plate,
//         quantityPerCycle: 18,
//       },
//       {
//         itemName: ItemsEnum.Screw,
//         quantityPerCycle: 50,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Reinforced_Iron_Plate,
//         quantityPerCycle: 3,
//       },
//     ],
//     initCycleDuration: 12,
//   },
//   // ? Reinforced_Iron_Plate
//   {
//     recipeName: "Reinforced_Iron_Plate",
//     craftBuildings: CraftBuildingsEnum.Assembler,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Iron_Plate,
//         quantityPerCycle: 10,
//       },
//       {
//         itemName: ItemsEnum.Wire,
//         quantityPerCycle: 20,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Reinforced_Iron_Plate,
//         quantityPerCycle: 3,
//       },
//     ],
//     initCycleDuration: 32,
//   },
//   // ? Biomass
//   {
//     recipeName: "Biomass",
//     craftBuildings: CraftBuildingsEnum.Constructor,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Mycelia,
//         quantityPerCycle: 1,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Biomass,
//         quantityPerCycle: 10,
//       },
//     ],
//     initCycleDuration: 4,
//   },
//   // ? Caterium_Ingot
//   {
//     recipeName: "Caterium_Ingot",
//     craftBuildings: CraftBuildingsEnum.Refinery,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Caterium_Ore,
//         quantityPerCycle: 2,
//       },
//       {
//         itemName: ItemsEnum.Water,
//         quantityPerCycle: 2,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Caterium_Ingot,
//         quantityPerCycle: 1,
//       },
//     ],
//     initCycleDuration: 5,
//   },
//   // ? Quickwire
//   {
//     recipeName: "Quickwire",
//     craftBuildings: CraftBuildingsEnum.Assembler,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Caterium_Ingot,
//         quantityPerCycle: 1,
//       },
//       {
//         itemName: ItemsEnum.Copper_Ingot,
//         quantityPerCycle: 5,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Quickwire,
//         quantityPerCycle: 12,
//       },
//     ],
//     initCycleDuration: 8,
//   },
//   //! High_Speed_Connector
//   {
//     recipeName: "High_Speed_Connector",
//     craftBuildings: CraftBuildingsEnum.Manufacturer,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Quickwire,
//         quantityPerCycle: 56,
//       },
//       {
//         itemName: ItemsEnum.Cable,
//         quantityPerCycle: 10,
//       },
//       {
//         itemName: ItemsEnum.Circuit_Board,
//         quantityPerCycle: 1,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.High_Speed_Connector,
//         quantityPerCycle: 1,
//       },
//     ],
//     initCycleDuration: 16,
//   },
//   // ? High_Speed_Connector
//   {
//     recipeName: "High_Speed_Connector",
//     craftBuildings: CraftBuildingsEnum.Manufacturer,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Quickwire,
//         quantityPerCycle: 60,
//       },
//       {
//         itemName: ItemsEnum.Silica,
//         quantityPerCycle: 25,
//       },
//       {
//         itemName: ItemsEnum.Circuit_Board,
//         quantityPerCycle: 2,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.High_Speed_Connector,
//         quantityPerCycle: 2,
//       },
//     ],
//     initCycleDuration: 40,
//   },
//   //! Supercomputer
//   {
//     recipeName: "Supercomputer",
//     craftBuildings: CraftBuildingsEnum.Manufacturer,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Computer,
//         quantityPerCycle: 2,
//       },
//       {
//         itemName: ItemsEnum.AI_Limiter,
//         quantityPerCycle: 2,
//       },
//       {
//         itemName: ItemsEnum.High_Speed_Connector,
//         quantityPerCycle: 3,
//       },
//       {
//         itemName: ItemsEnum.Plastic,
//         quantityPerCycle: 28,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Supercomputer,
//         quantityPerCycle: 1,
//       },
//     ],
//     initCycleDuration: 32,
//   },
//   // ? Supercomputer
//   {
//     recipeName: "Supercomputer",
//     craftBuildings: CraftBuildingsEnum.Assembler,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Radio_Control_Unit,
//         quantityPerCycle: 3,
//       },
//       {
//         itemName: ItemsEnum.Cooling_System,
//         quantityPerCycle: 3,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Supercomputer,
//         quantityPerCycle: 1,
//       },
//     ],
//     initCycleDuration: 20,
//   },
//   // ? Supercomputer
//   {
//     recipeName: "Supercomputer",
//     craftBuildings: CraftBuildingsEnum.Manufacturer,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Computer,
//         quantityPerCycle: 3,
//       },
//       {
//         itemName: ItemsEnum.Electromagnetic_Control_Rod,
//         quantityPerCycle: 2,
//       },
//       {
//         itemName: ItemsEnum.Battery,
//         quantityPerCycle: 20,
//       },
//       {
//         itemName: ItemsEnum.Wire,
//         quantityPerCycle: 45,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Supercomputer,
//         quantityPerCycle: 2,
//       },
//     ],
//     initCycleDuration: 50,
//   },
//   //! Homing_Rifle_Ammo
//   {
//     recipeName: "Homing_Rifle_Ammo",
//     craftBuildings: CraftBuildingsEnum.Assembler,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Rifle_Ammo,
//         quantityPerCycle: 20,
//       },
//       {
//         itemName: ItemsEnum.High_Speed_Connector,
//         quantityPerCycle: 1,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Homing_Rifle_Ammo,
//         quantityPerCycle: 10,
//       },
//     ],
//     initCycleDuration: 24,
//   },
//   //! Color_Cartridge
//   {
//     recipeName: "Color_Cartridge",
//     craftBuildings: CraftBuildingsEnum.Constructor,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Flowers_Petals,
//         quantityPerCycle: 5,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Color_Cartridge,
//         quantityPerCycle: 10,
//       },
//     ],
//     initCycleDuration: 6,
//   },
//   //! Fabric
//   {
//     recipeName: "Fabric",
//     craftBuildings: CraftBuildingsEnum.Assembler,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Mycelia,
//         quantityPerCycle: 1,
//       },
//       {
//         itemName: ItemsEnum.Biomass,
//         quantityPerCycle: 5,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Fabric,
//         quantityPerCycle: 1,
//       },
//     ],
//     initCycleDuration: 4,
//   },
//   // ? Fabric
//   {
//     recipeName: "Fabric",
//     craftBuildings: CraftBuildingsEnum.Refinery,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Polymer_Resin,
//         quantityPerCycle: 1,
//       },
//       {
//         itemName: ItemsEnum.Water,
//         quantityPerCycle: 1,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Fabric,
//         quantityPerCycle: 1,
//       },
//     ],
//     initCycleDuration: 2,
//   },
//   //! Gas_Nobelisk
//   {
//     recipeName: "Gas_Nobelisk",
//     craftBuildings: CraftBuildingsEnum.Assembler,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Nobelisk,
//         quantityPerCycle: 1,
//       },
//       {
//         itemName: ItemsEnum.Biomass,
//         quantityPerCycle: 10,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Gas_Nobelisk,
//         quantityPerCycle: 1,
//       },
//     ],
//     initCycleDuration: 12,
//   },
//   //! Crystal_Oscillator
//   {
//     recipeName: "Crystal_Oscillator",
//     craftBuildings: CraftBuildingsEnum.Manufacturer,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Quartz_Crystal,
//         quantityPerCycle: 36,
//       },
//       {
//         itemName: ItemsEnum.Cable,
//         quantityPerCycle: 26,
//       },
//       {
//         itemName: ItemsEnum.Reinforced_Iron_Plate,
//         quantityPerCycle: 5,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Crystal_Oscillator,
//         quantityPerCycle: 2,
//       },
//     ],
//     initCycleDuration: 120,
//   },
//   // ? Crystal_Oscillator
//   {
//     recipeName: "Crystal_Oscillator",
//     craftBuildings: CraftBuildingsEnum.Manufacturer,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Quartz_Crystal,
//         quantityPerCycle: 10,
//       },
//       {
//         itemName: ItemsEnum.Rubber,
//         quantityPerCycle: 7,
//       },
//       {
//         itemName: ItemsEnum.AI_Limiter,
//         quantityPerCycle: 1,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Crystal_Oscillator,
//         quantityPerCycle: 1,
//       },
//     ],
//     initCycleDuration: 32,
//   },
//   // ? Quartz_Crystal
//   {
//     recipeName: "Quartz_Crystal",
//     craftBuildings: CraftBuildingsEnum.Refinery,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Raw_Quartz,
//         quantityPerCycle: 9,
//       },
//       {
//         itemName: ItemsEnum.Water,
//         quantityPerCycle: 5,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Quartz_Crystal,
//         quantityPerCycle: 7,
//       },
//     ],
//     initCycleDuration: 8,
//   },
//   // ? Silica
//   {
//     recipeName: "Silica",
//     craftBuildings: CraftBuildingsEnum.Refinery,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Bauxite,
//         quantityPerCycle: 12,
//       },
//       {
//         itemName: ItemsEnum.Water,
//         quantityPerCycle: 18,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Alumina_Solution,
//         quantityPerCycle: 12,
//       },
//       {
//         itemName: ItemsEnum.Silica,
//         quantityPerCycle: 5,
//       },
//     ],
//     initCycleDuration: 6,
//   },
//   // ? Silica
//   {
//     recipeName: "Silica",
//     craftBuildings: CraftBuildingsEnum.Assembler,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Raw_Quartz,
//         quantityPerCycle: 3,
//       },
//       {
//         itemName: ItemsEnum.Limestone,
//         quantityPerCycle: 5,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Silica,
//         quantityPerCycle: 7,
//       },
//     ],
//     initCycleDuration: 16,
//   },
//   //! Radio_Control_Unit
//   {
//     recipeName: "Radio_Control_Unit",
//     craftBuildings: CraftBuildingsEnum.Manufacturer,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Aluminum_Casing,
//         quantityPerCycle: 32,
//       },
//       {
//         itemName: ItemsEnum.Crystal_Oscillator,
//         quantityPerCycle: 1,
//       },
//       {
//         itemName: ItemsEnum.Computer,
//         quantityPerCycle: 1,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Radio_Control_Unit,
//         quantityPerCycle: 2,
//       },
//     ],
//     initCycleDuration: 48,
//   },
//   // ? Radio_Control_Unit
//   {
//     recipeName: "Radio_Control_Unit",
//     craftBuildings: CraftBuildingsEnum.Manufacturer,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Crystal_Oscillator,
//         quantityPerCycle: 1,
//       },
//       {
//         itemName: ItemsEnum.Circuit_Board,
//         quantityPerCycle: 10,
//       },
//       {
//         itemName: ItemsEnum.Aluminum_Casing,
//         quantityPerCycle: 60,
//       },
//       {
//         itemName: ItemsEnum.Rubber,
//         quantityPerCycle: 30,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Radio_Control_Unit,
//         quantityPerCycle: 3,
//       },
//     ],
//     initCycleDuration: 40,
//   },
//   // ? Radio_Control_Unit
//   {
//     recipeName: "Radio_Control_Unit",
//     craftBuildings: CraftBuildingsEnum.Manufacturer,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Heat_Sink,
//         quantityPerCycle: 4,
//       },
//       {
//         itemName: ItemsEnum.High_Speed_Connector,
//         quantityPerCycle: 2,
//       },
//       {
//         itemName: ItemsEnum.Quartz_Crystal,
//         quantityPerCycle: 12,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Radio_Control_Unit,
//         quantityPerCycle: 1,
//       },
//     ],
//     initCycleDuration: 16,
//   },
//   //! Pulse_Nobelisk
//   {
//     recipeName: "Pulse_Nobelisk",
//     craftBuildings: CraftBuildingsEnum.Assembler,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Nobelisk,
//         quantityPerCycle: 5,
//       },
//       {
//         itemName: ItemsEnum.Crystal_Oscillator,
//         quantityPerCycle: 1,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Pulse_Nobelisk,
//         quantityPerCycle: 5,
//       },
//     ],
//     initCycleDuration: 60,
//   },
//   //! Black_Powder
//   {
//     recipeName: "Black_Powder",
//     craftBuildings: CraftBuildingsEnum.Assembler,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Coal,
//         quantityPerCycle: 1,
//       },
//       {
//         itemName: ItemsEnum.Sulfur,
//         quantityPerCycle: 1,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Black_Powder,
//         quantityPerCycle: 2,
//       },
//     ],
//     initCycleDuration: 4,
//   },
//   // ? Black_Powder
//   {
//     recipeName: "Black_Powder",
//     craftBuildings: CraftBuildingsEnum.Assembler,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Sulfur,
//         quantityPerCycle: 2,
//       },
//       {
//         itemName: ItemsEnum.Compacted_Coal,
//         quantityPerCycle: 1,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Black_Powder,
//         quantityPerCycle: 4,
//       },
//     ],
//     initCycleDuration: 16,
//   },
//   //! Smokeless_Powder
//   {
//     recipeName: "Smokeless_Powder",
//     craftBuildings: CraftBuildingsEnum.Refinery,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Black_Powder,
//         quantityPerCycle: 2,
//       },
//       {
//         itemName: ItemsEnum.Heavy_Oil_Residue,
//         quantityPerCycle: 1,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Smokeless_Powder,
//         quantityPerCycle: 2,
//       },
//     ],
//     initCycleDuration: 6,
//   },
//   //! Cluster_Nobelisk
//   {
//     recipeName: "Cluster_Nobelisk",
//     craftBuildings: CraftBuildingsEnum.Assembler,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Nobelisk,
//         quantityPerCycle: 3,
//       },
//       {
//         itemName: ItemsEnum.Smokeless_Powder,
//         quantityPerCycle: 4,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Cluster_Nobelisk,
//         quantityPerCycle: 1,
//       },
//     ],
//     initCycleDuration: 24,
//   },
//   //! Nobelisk
//   {
//     recipeName: "Nobelisk",
//     craftBuildings: CraftBuildingsEnum.Assembler,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Black_Powder,
//         quantityPerCycle: 2,
//       },
//       {
//         itemName: ItemsEnum.Steel_Pipe,
//         quantityPerCycle: 2,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Nobelisk,
//         quantityPerCycle: 1,
//       },
//     ],
//     initCycleDuration: 6,
//   },
//   //! Rifle_Ammo
//   {
//     recipeName: "Rifle_Ammo",
//     craftBuildings: CraftBuildingsEnum.Assembler,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Copper_Sheet,
//         quantityPerCycle: 3,
//       },
//       {
//         itemName: ItemsEnum.Smokeless_Powder,
//         quantityPerCycle: 2,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Rifle_Ammo,
//         quantityPerCycle: 15,
//       },
//     ],
//     initCycleDuration: 12,
//   },
//   //! Explosive_Rebar
//   {
//     recipeName: "Explosive_Rebar",
//     craftBuildings: CraftBuildingsEnum.Manufacturer,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Iron_Rebar,
//         quantityPerCycle: 2,
//       },
//       {
//         itemName: ItemsEnum.Smokeless_Powder,
//         quantityPerCycle: 2,
//       },
//       {
//         itemName: ItemsEnum.Steel_Pipe,
//         quantityPerCycle: 2,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Explosive_Rebar,
//         quantityPerCycle: 1,
//       },
//     ],
//     initCycleDuration: 12,
//   },
//   //! Nuke_Nobelisk
//   {
//     recipeName: "Nuke_Nobelisk",
//     craftBuildings: CraftBuildingsEnum.Manufacturer,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Nobelisk,
//         quantityPerCycle: 5,
//       },
//       {
//         itemName: ItemsEnum.Encased_Uranium_Cell,
//         quantityPerCycle: 20,
//       },
//       {
//         itemName: ItemsEnum.Smokeless_Powder,
//         quantityPerCycle: 10,
//       },
//       {
//         itemName: ItemsEnum.AI_Limiter,
//         quantityPerCycle: 6,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Nuke_Nobelisk,
//         quantityPerCycle: 1,
//       },
//     ],
//     initCycleDuration: 120,
//   },
//   //! Turbo_Rifle_Ammo
//   {
//     recipeName: "Turbo_Rifle_Ammo",
//     craftBuildings: CraftBuildingsEnum.Blender,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Rifle_Ammo,
//         quantityPerCycle: 25,
//       },
//       {
//         itemName: ItemsEnum.Aluminum_Casing,
//         quantityPerCycle: 3,
//       },
//       {
//         itemName: ItemsEnum.Turbofuel,
//         quantityPerCycle: 3,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Turbo_Rifle_Ammo,
//         quantityPerCycle: 50,
//       },
//     ],
//     initCycleDuration: 12,
//   },
//   // ? Turbo_Rifle_Ammo
//   {
//     recipeName: "Turbo_Rifle_Ammo",
//     craftBuildings: CraftBuildingsEnum.Manufacturer,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Rifle_Ammo,
//         quantityPerCycle: 25,
//       },
//       {
//         itemName: ItemsEnum.Aluminum_Casing,
//         quantityPerCycle: 3,
//       },
//       {
//         itemName: ItemsEnum.Packaged_Turbofuel,
//         quantityPerCycle: 3,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Turbo_Rifle_Ammo,
//         quantityPerCycle: 50,
//       },
//     ],
//     initCycleDuration: 12,
//   },
//   //! Compacted_Coal
//   {
//     recipeName: "Compacted_Coal",
//     craftBuildings: CraftBuildingsEnum.Assembler,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Coal,
//         quantityPerCycle: 5,
//       },
//       {
//         itemName: ItemsEnum.Sulfur,
//         quantityPerCycle: 5,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Compacted_Coal,
//         quantityPerCycle: 5,
//       },
//     ],
//     initCycleDuration: 12,
//   },
//   //! Turbofuel
//   {
//     recipeName: "Turbofuel",
//     craftBuildings: CraftBuildingsEnum.Refinery,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Fuel,
//         quantityPerCycle: 6,
//       },
//       {
//         itemName: ItemsEnum.Compacted_Coal,
//         quantityPerCycle: 4,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Turbofuel,
//         quantityPerCycle: 5,
//       },
//     ],
//     initCycleDuration: 16,
//   },
//   // ? Turbofuel
//   {
//     recipeName: "Turbofuel",
//     craftBuildings: CraftBuildingsEnum.Packager,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Packaged_Turbofuel,
//         quantityPerCycle: 2,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Turbofuel,
//         quantityPerCycle: 2,
//       },
//       {
//         itemName: ItemsEnum.Empty_Canister,
//         quantityPerCycle: 2,
//       },
//     ],
//     initCycleDuration: 6,
//   },
//   // ? Turbofuel
//   {
//     recipeName: "Turbofuel",
//     craftBuildings: CraftBuildingsEnum.Refinery,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Heavy_Oil_Residue,
//         quantityPerCycle: 5,
//       },
//       {
//         itemName: ItemsEnum.Compacted_Coal,
//         quantityPerCycle: 4,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Turbofuel,
//         quantityPerCycle: 4,
//       },
//     ],
//     initCycleDuration: 8,
//   },
//   // ? Turbofuel
//   {
//     recipeName: "Turbofuel",
//     craftBuildings: CraftBuildingsEnum.Blender,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Fuel,
//         quantityPerCycle: 2,
//       },
//       {
//         itemName: ItemsEnum.Heavy_Oil_Residue,
//         quantityPerCycle: 4,
//       },
//       {
//         itemName: ItemsEnum.Sulfur,
//         quantityPerCycle: 3,
//       },
//       {
//         itemName: ItemsEnum.Petroleum_Coke,
//         quantityPerCycle: 3,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Turbofuel,
//         quantityPerCycle: 6,
//       },
//     ],
//     initCycleDuration: 8,
//   },
//   //! Packaged_Turbofuel
//   {
//     recipeName: "Packaged_Turbofuel",
//     craftBuildings: CraftBuildingsEnum.Packager,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Turbofuel,
//         quantityPerCycle: 2,
//       },
//       {
//         itemName: ItemsEnum.Empty_Canister,
//         quantityPerCycle: 2,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Packaged_Turbofuel,
//         quantityPerCycle: 2,
//       },
//     ],
//     initCycleDuration: 6,
//   },
//   //! Empty_Canister
//   {
//     recipeName: "Empty_Canister",
//     craftBuildings: CraftBuildingsEnum.Packager,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Packaged_Turbofuel,
//         quantityPerCycle: 2,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Turbofuel,
//         quantityPerCycle: 2,
//       },
//       {
//         itemName: ItemsEnum.Empty_Canister,
//         quantityPerCycle: 2,
//       },
//     ],
//     initCycleDuration: 6,
//   },
//   // ? Empty_Canister
//   {
//     recipeName: "Empty_Canister",
//     craftBuildings: CraftBuildingsEnum.Constructor,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Plastic,
//         quantityPerCycle: 2,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Empty_Canister,
//         quantityPerCycle: 4,
//       },
//     ],
//     initCycleDuration: 4,
//   },
//   // ? Empty_Canister
//   {
//     recipeName: "Empty_Canister",
//     craftBuildings: CraftBuildingsEnum.Packager,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Packaged_Water,
//         quantityPerCycle: 2,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Water,
//         quantityPerCycle: 2,
//       },
//       {
//         itemName: ItemsEnum.Empty_Canister,
//         quantityPerCycle: 2,
//       },
//     ],
//     initCycleDuration: 1,
//   },
//   // ? Empty_Canister
//   {
//     recipeName: "Empty_Canister",
//     craftBuildings: CraftBuildingsEnum.Packager,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Packaged_Oil,
//         quantityPerCycle: 2,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Crude_Oil,
//         quantityPerCycle: 2,
//       },
//       {
//         itemName: ItemsEnum.Empty_Canister,
//         quantityPerCycle: 2,
//       },
//     ],
//     initCycleDuration: 2,
//   },
//   // ? Empty_Canister
//   {
//     recipeName: "Empty_Canister",
//     craftBuildings: CraftBuildingsEnum.Packager,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Packaged_Fuel,
//         quantityPerCycle: 2,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Fuel,
//         quantityPerCycle: 2,
//       },
//       {
//         itemName: ItemsEnum.Empty_Canister,
//         quantityPerCycle: 2,
//       },
//     ],
//     initCycleDuration: 2,
//   },
//   // ? Empty_Canister
//   {
//     recipeName: "Empty_Canister",
//     craftBuildings: CraftBuildingsEnum.Packager,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Packaged_Heavy_Oil_Residue,
//         quantityPerCycle: 2,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Heavy_Oil_Residue,
//         quantityPerCycle: 2,
//       },
//       {
//         itemName: ItemsEnum.Empty_Canister,
//         quantityPerCycle: 2,
//       },
//     ],
//     initCycleDuration: 6,
//   },
//   // ? Empty_Canister
//   {
//     recipeName: "Empty_Canister",
//     craftBuildings: CraftBuildingsEnum.Packager,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Packaged_Liquid_Biofuel,
//         quantityPerCycle: 2,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Liquid_Biofuel,
//         quantityPerCycle: 2,
//       },
//       {
//         itemName: ItemsEnum.Empty_Canister,
//         quantityPerCycle: 2,
//       },
//     ],
//     initCycleDuration: 2,
//   },
//   // ? Empty_Canister
//   {
//     recipeName: "Empty_Canister",
//     duplicate: true,
//     craftBuildings: CraftBuildingsEnum.Packager,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Packaged_Alumina_Solution,
//         quantityPerCycle: 2,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Alumina_Solution,
//         quantityPerCycle: 2,
//       },
//       {
//         itemName: ItemsEnum.Empty_Canister,
//         quantityPerCycle: 2,
//       },
//     ],
//     initCycleDuration: 1,
//   },
//   // ? Empty_Canister
//   {
//     recipeName: "Empty_Canister",
//     craftBuildings: CraftBuildingsEnum.Packager,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Packaged_Sulfuric_Acid,
//         quantityPerCycle: 1,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Sulfuric_Acid,
//         quantityPerCycle: 1,
//       },
//       {
//         itemName: ItemsEnum.Empty_Canister,
//         quantityPerCycle: 1,
//       },
//     ],
//     initCycleDuration: 1,
//   },
//   // ? Empty_Canister
//   {
//     recipeName: "Empty_Canister",
//     craftBuildings: CraftBuildingsEnum.Assembler,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Iron_Plate,
//         quantityPerCycle: 2,
//       },
//       {
//         itemName: ItemsEnum.Copper_Sheet,
//         quantityPerCycle: 1,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Empty_Canister,
//         quantityPerCycle: 4,
//       },
//     ],
//     initCycleDuration: 4,
//   },
//   // ? Empty_Canister0
//   {
//     recipeName: "Empty_Canister0",
//     craftBuildings: CraftBuildingsEnum.Constructor,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Steel_Ingot,
//         quantityPerCycle: 3,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Empty_Canister,
//         quantityPerCycle: 2,
//       },
//     ],
//     initCycleDuration: 3,
//   },
//   // ? Copper_Sheet
//   {
//     recipeName: "Copper_Sheet",
//     craftBuildings: CraftBuildingsEnum.Refinery,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Copper_Ingot,
//         quantityPerCycle: 3,
//       },
//       {
//         itemName: ItemsEnum.Water,
//         quantityPerCycle: 3,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Copper_Sheet,
//         quantityPerCycle: 3,
//       },
//     ],
//     initCycleDuration: 8,
//   },
//   // ? Rotor
//   {
//     recipeName: "Rotor",
//     craftBuildings: CraftBuildingsEnum.Assembler,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Copper_Sheet,
//         quantityPerCycle: 6,
//       },
//       {
//         itemName: ItemsEnum.Screw,
//         quantityPerCycle: 52,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Rotor,
//         quantityPerCycle: 3,
//       },
//     ],
//     initCycleDuration: 16,
//   },
//   // ? Rotor
//   {
//     recipeName: "Rotor",
//     craftBuildings: CraftBuildingsEnum.Assembler,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Steel_Pipe,
//         quantityPerCycle: 2,
//       },
//       {
//         itemName: ItemsEnum.Wire,
//         quantityPerCycle: 6,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Rotor,
//         quantityPerCycle: 1,
//       },
//     ],
//     initCycleDuration: 12,
//   },
//   // ? Modular_Frame
//   {
//     recipeName: "Modular_Frame",
//     craftBuildings: CraftBuildingsEnum.Assembler,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Reinforced_Iron_Plate,
//         quantityPerCycle: 3,
//       },
//       {
//         itemName: ItemsEnum.Screw,
//         quantityPerCycle: 56,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Modular_Frame,
//         quantityPerCycle: 2,
//       },
//     ],
//     initCycleDuration: 24,
//   },
//   // ? Modular_Frame
//   {
//     recipeName: "Modular_Frame",
//     craftBuildings: CraftBuildingsEnum.Assembler,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Reinforced_Iron_Plate,
//         quantityPerCycle: 2,
//       },
//       {
//         itemName: ItemsEnum.Steel_Pipe,
//         quantityPerCycle: 10,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Modular_Frame,
//         quantityPerCycle: 3,
//       },
//     ],
//     initCycleDuration: 60,
//   },
//   // ? Smart_Plating
//   {
//     recipeName: "Smart_Plating",
//     craftBuildings: CraftBuildingsEnum.Manufacturer,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Reinforced_Iron_Plate,
//         quantityPerCycle: 1,
//       },
//       {
//         itemName: ItemsEnum.Rotor,
//         quantityPerCycle: 1,
//       },
//       {
//         itemName: ItemsEnum.Plastic,
//         quantityPerCycle: 3,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Smart_Plating,
//         quantityPerCycle: 2,
//       },
//     ],
//     initCycleDuration: 24,
//   },
//   // ? Steel_Ingot
//   {
//     recipeName: "Steel_Ingot",
//     craftBuildings: CraftBuildingsEnum.Foundry,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Iron_Ore,
//         quantityPerCycle: 15,
//       },
//       {
//         itemName: ItemsEnum.Petroleum_Coke,
//         quantityPerCycle: 15,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Steel_Ingot,
//         quantityPerCycle: 20,
//       },
//     ],
//     initCycleDuration: 12,
//   },
//   // ? Steel_Ingot
//   {
//     recipeName: "Steel_Ingot",
//     craftBuildings: CraftBuildingsEnum.Foundry,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Iron_Ingot,
//         quantityPerCycle: 2,
//       },
//       {
//         itemName: ItemsEnum.Coal,
//         quantityPerCycle: 2,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Steel_Ingot,
//         quantityPerCycle: 3,
//       },
//     ],
//     initCycleDuration: 3,
//   },
//   // ? Steel_Ingot
//   {
//     recipeName: "Steel_Ingot",
//     craftBuildings: CraftBuildingsEnum.Foundry,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Iron_Ore,
//         quantityPerCycle: 6,
//       },
//       {
//         itemName: ItemsEnum.Compacted_Coal,
//         quantityPerCycle: 3,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Steel_Ingot,
//         quantityPerCycle: 10,
//       },
//     ],
//     initCycleDuration: 16,
//   },
//   // ? Versatile_Framework
//   {
//     recipeName: "Versatile_Framework",
//     craftBuildings: CraftBuildingsEnum.Manufacturer,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Modular_Frame,
//         quantityPerCycle: 1,
//       },
//       {
//         itemName: ItemsEnum.Steel_Beam,
//         quantityPerCycle: 6,
//       },
//       {
//         itemName: ItemsEnum.Rubber,
//         quantityPerCycle: 8,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Versatile_Framework,
//         quantityPerCycle: 2,
//       },
//     ],
//     initCycleDuration: 16,
//   },
//   //! Encased_Industrial_Beam
//   {
//     recipeName: "Encased_Industrial_Beam",
//     craftBuildings: CraftBuildingsEnum.Assembler,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Steel_Beam,
//         quantityPerCycle: 4,
//       },
//       {
//         itemName: ItemsEnum.Concrete,
//         quantityPerCycle: 5,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Encased_Industrial_Beam,
//         quantityPerCycle: 1,
//       },
//     ],
//     initCycleDuration: 10,
//   },
//   // ? Encased_Industrial_Beam
//   {
//     recipeName: "Encased_Industrial_Beam",
//     craftBuildings: CraftBuildingsEnum.Assembler,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Steel_Pipe,
//         quantityPerCycle: 7,
//       },
//       {
//         itemName: ItemsEnum.Concrete,
//         quantityPerCycle: 5,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Encased_Industrial_Beam,
//         quantityPerCycle: 1,
//       },
//     ],
//     initCycleDuration: 15,
//   },
//   //! Stator
//   {
//     recipeName: "Stator",
//     craftBuildings: CraftBuildingsEnum.Assembler,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Steel_Pipe,
//         quantityPerCycle: 3,
//       },
//       {
//         itemName: ItemsEnum.Wire,
//         quantityPerCycle: 8,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Stator,
//         quantityPerCycle: 1,
//       },
//     ],
//     initCycleDuration: 12,
//   },
//   // ? Stator
//   {
//     recipeName: "Stator",
//     craftBuildings: CraftBuildingsEnum.Assembler,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Steel_Pipe,
//         quantityPerCycle: 4,
//       },
//       {
//         itemName: ItemsEnum.Quickwire,
//         quantityPerCycle: 15,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Stator,
//         quantityPerCycle: 2,
//       },
//     ],
//     initCycleDuration: 15,
//   },
//   //! Motor
//   {
//     recipeName: "Motor",
//     craftBuildings: CraftBuildingsEnum.Assembler,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Rotor,
//         quantityPerCycle: 2,
//       },
//       {
//         itemName: ItemsEnum.Stator,
//         quantityPerCycle: 2,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Motor,
//         quantityPerCycle: 1,
//       },
//     ],
//     initCycleDuration: 12,
//   },
//   // ? Motor
//   {
//     recipeName: "Motor",
//     craftBuildings: CraftBuildingsEnum.Assembler,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Electromagnetic_Control_Rod,
//         quantityPerCycle: 1,
//       },
//       {
//         itemName: ItemsEnum.Rotor,
//         quantityPerCycle: 2,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Motor,
//         quantityPerCycle: 2,
//       },
//     ],
//     initCycleDuration: 16,
//   },
//   // ? Motor
//   {
//     recipeName: "Motor",
//     craftBuildings: CraftBuildingsEnum.Manufacturer,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Rotor,
//         quantityPerCycle: 3,
//       },
//       {
//         itemName: ItemsEnum.Stator,
//         quantityPerCycle: 3,
//       },
//       {
//         itemName: ItemsEnum.Crystal_Oscillator,
//         quantityPerCycle: 1,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Motor,
//         quantityPerCycle: 6,
//       },
//     ],
//     initCycleDuration: 48,
//   },
//   //! Automated_Wiring
//   {
//     recipeName: "Automated_Wiring",
//     craftBuildings: CraftBuildingsEnum.Assembler,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Stator,
//         quantityPerCycle: 1,
//       },
//       {
//         itemName: ItemsEnum.Cable,
//         quantityPerCycle: 20,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Automated_Wiring,
//         quantityPerCycle: 1,
//       },
//     ],
//     initCycleDuration: 24,
//   },
//   // ? Automated_Wiring
//   {
//     recipeName: "Automated_Wiring",
//     craftBuildings: CraftBuildingsEnum.Manufacturer,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Stator,
//         quantityPerCycle: 2,
//       },
//       {
//         itemName: ItemsEnum.Wire,
//         quantityPerCycle: 40,
//       },
//       {
//         itemName: ItemsEnum.High_Speed_Connector,
//         quantityPerCycle: 1,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Automated_Wiring,
//         quantityPerCycle: 4,
//       },
//     ],
//     initCycleDuration: 32,
//   },
//   //! Heavy_Modular_Frame
//   {
//     recipeName: "Heavy_Modular_Frame",
//     craftBuildings: CraftBuildingsEnum.Manufacturer,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Modular_Frame,
//         quantityPerCycle: 5,
//       },
//       {
//         itemName: ItemsEnum.Steel_Pipe,
//         quantityPerCycle: 15,
//       },
//       {
//         itemName: ItemsEnum.Encased_Industrial_Beam,
//         quantityPerCycle: 5,
//       },
//       {
//         itemName: ItemsEnum.Screw,
//         quantityPerCycle: 100,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Heavy_Modular_Frame,
//         quantityPerCycle: 1,
//       },
//     ],
//     initCycleDuration: 30,
//   },
//   // ? Heavy_Modular_Frame
//   {
//     recipeName: "Heavy_Modular_Frame",
//     craftBuildings: CraftBuildingsEnum.Manufacturer,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Modular_Frame,
//         quantityPerCycle: 5,
//       },
//       {
//         itemName: ItemsEnum.Encased_Industrial_Beam,
//         quantityPerCycle: 3,
//       },
//       {
//         itemName: ItemsEnum.Rubber,
//         quantityPerCycle: 20,
//       },
//       {
//         itemName: ItemsEnum.Screw,
//         quantityPerCycle: 104,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Heavy_Modular_Frame,
//         quantityPerCycle: 1,
//       },
//     ],
//     initCycleDuration: 16,
//   },
//   // ? Heavy_Modular_Frame
//   {
//     recipeName: "Heavy_Modular_Frame",
//     craftBuildings: CraftBuildingsEnum.Manufacturer,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Modular_Frame,
//         quantityPerCycle: 8,
//       },
//       {
//         itemName: ItemsEnum.Encased_Industrial_Beam,
//         quantityPerCycle: 10,
//       },
//       {
//         itemName: ItemsEnum.Steel_Pipe,
//         quantityPerCycle: 36,
//       },
//       {
//         itemName: ItemsEnum.Concrete,
//         quantityPerCycle: 22,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Heavy_Modular_Frame,
//         quantityPerCycle: 3,
//       },
//     ],
//     initCycleDuration: 64,
//   },
//   //! Plastic
//   {
//     recipeName: "Plastic",
//     craftBuildings: CraftBuildingsEnum.Refinery,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Crude_Oil,
//         quantityPerCycle: 3,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Plastic,
//         quantityPerCycle: 2,
//       },
//       {
//         itemName: ItemsEnum.Heavy_Oil_Residue,
//         quantityPerCycle: 1,
//       },
//     ],
//     initCycleDuration: 6,
//   },
//   // ? Plastic
//   {
//     recipeName: "Plastic",
//     craftBuildings: CraftBuildingsEnum.Refinery,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Polymer_Resin,
//         quantityPerCycle: 6,
//       },
//       {
//         itemName: ItemsEnum.Water,
//         quantityPerCycle: 2,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Plastic,
//         quantityPerCycle: 2,
//       },
//     ],
//     initCycleDuration: 6,
//   },
//   // ? Plastic
//   {
//     recipeName: "Plastic",
//     craftBuildings: CraftBuildingsEnum.Refinery,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Rubber,
//         quantityPerCycle: 6,
//       },
//       {
//         itemName: ItemsEnum.Fuel,
//         quantityPerCycle: 6,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Plastic,
//         quantityPerCycle: 12,
//       },
//     ],
//     initCycleDuration: 12,
//   },
//   //! Heavy_Oil_Residue
//   {
//     recipeName: "Heavy_Oil_Residue",
//     craftBuildings: CraftBuildingsEnum.Refinery,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Crude_Oil,
//         quantityPerCycle: 3,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Plastic,
//         quantityPerCycle: 2,
//       },
//       {
//         itemName: ItemsEnum.Heavy_Oil_Residue,
//         quantityPerCycle: 1,
//       },
//     ],
//     initCycleDuration: 6,
//   },
//   // ? Heavy_Oil_Residue
//   {
//     recipeName: "Heavy_Oil_Residue",
//     craftBuildings: CraftBuildingsEnum.Refinery,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Crude_Oil,
//         quantityPerCycle: 3,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Rubber,
//         quantityPerCycle: 2,
//       },
//       {
//         itemName: ItemsEnum.Heavy_Oil_Residue,
//         quantityPerCycle: 2,
//       },
//     ],
//     initCycleDuration: 6,
//   },
//   // ? Heavy_Oil_Residue
//   {
//     recipeName: "Heavy_Oil_Residue",
//     craftBuildings: CraftBuildingsEnum.Packager,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Packaged_Heavy_Oil_Residue,
//         quantityPerCycle: 2,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Heavy_Oil_Residue,
//         quantityPerCycle: 2,
//       },
//       {
//         itemName: ItemsEnum.Empty_Canister,
//         quantityPerCycle: 2,
//       },
//     ],
//     initCycleDuration: 6,
//   },
//   // ? Heavy_Oil_Residue
//   {
//     recipeName: "Heavy_Oil_Residue",
//     craftBuildings: CraftBuildingsEnum.Refinery,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Crude_Oil,
//         quantityPerCycle: 3,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Heavy_Oil_Residue,
//         quantityPerCycle: 4,
//       },
//       {
//         itemName: ItemsEnum.Polymer_Resin,
//         quantityPerCycle: 2,
//       },
//     ],
//     initCycleDuration: 6,
//   },
//   // ? Heavy_Oil_Residue
//   {
//     recipeName: "Heavy_Oil_Residue",
//     craftBuildings: CraftBuildingsEnum.Refinery,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Crude_Oil,
//         quantityPerCycle: 6,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Polymer_Resin,
//         quantityPerCycle: 13,
//       },
//       {
//         itemName: ItemsEnum.Heavy_Oil_Residue,
//         quantityPerCycle: 2,
//       },
//     ],
//     initCycleDuration: 6,
//   },
//   //! Rubber
//   {
//     recipeName: "Rubber",
//     craftBuildings: CraftBuildingsEnum.Refinery,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Crude_Oil,
//         quantityPerCycle: 3,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Rubber,
//         quantityPerCycle: 2,
//       },
//       {
//         itemName: ItemsEnum.Heavy_Oil_Residue,
//         quantityPerCycle: 2,
//       },
//     ],
//     initCycleDuration: 6,
//   },
//   // ? Rubber
//   {
//     recipeName: "Rubber",
//     craftBuildings: CraftBuildingsEnum.Refinery,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Polymer_Resin,
//         quantityPerCycle: 4,
//       },
//       {
//         itemName: ItemsEnum.Water,
//         quantityPerCycle: 4,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Rubber,
//         quantityPerCycle: 2,
//       },
//     ],
//     initCycleDuration: 6,
//   },
//   // ? Rubber
//   {
//     recipeName: "Rubber",
//     craftBuildings: CraftBuildingsEnum.Refinery,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Plastic,
//         quantityPerCycle: 6,
//       },
//       {
//         itemName: ItemsEnum.Fuel,
//         quantityPerCycle: 6,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Rubber,
//         quantityPerCycle: 12,
//       },
//     ],
//     initCycleDuration: 12,
//   },
//   //! Fuel
//   {
//     recipeName: "Fuel",
//     craftBuildings: CraftBuildingsEnum.Refinery,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Crude_Oil,
//         quantityPerCycle: 6,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Fuel,
//         quantityPerCycle: 4,
//       },
//       {
//         itemName: ItemsEnum.Polymer_Resin,
//         quantityPerCycle: 3,
//       },
//     ],
//     initCycleDuration: 6,
//   },
//   // ? Fuel
//   {
//     recipeName: "Fuel",
//     craftBuildings: CraftBuildingsEnum.Refinery,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Heavy_Oil_Residue,
//         quantityPerCycle: 6,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Fuel,
//         quantityPerCycle: 4,
//       },
//     ],
//     initCycleDuration: 6,
//   },
//   // ? Fuel
//   {
//     recipeName: "Fuel",
//     craftBuildings: CraftBuildingsEnum.Packager,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Packaged_Fuel,
//         quantityPerCycle: 2,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Fuel,
//         quantityPerCycle: 2,
//       },
//       {
//         itemName: ItemsEnum.Empty_Canister,
//         quantityPerCycle: 2,
//       },
//     ],
//     initCycleDuration: 2,
//   },
//   // ? Fuel
//   {
//     recipeName: "Fuel",
//     craftBuildings: CraftBuildingsEnum.Blender,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Heavy_Oil_Residue,
//         quantityPerCycle: 5,
//       },
//       {
//         itemName: ItemsEnum.Water,
//         quantityPerCycle: 10,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Fuel,
//         quantityPerCycle: 10,
//       },
//     ],
//     initCycleDuration: 6,
//   },
//   //! Polymer_Resin
//   {
//     recipeName: "Polymer_Resin",
//     craftBuildings: CraftBuildingsEnum.Refinery,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Crude_Oil,
//         quantityPerCycle: 6,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Fuel,
//         quantityPerCycle: 4,
//       },
//       {
//         itemName: ItemsEnum.Polymer_Resin,
//         quantityPerCycle: 3,
//       },
//     ],
//     initCycleDuration: 6,
//   },
//   // ? Polymer_Resin
//   {
//     recipeName: "Polymer_Resin",
//     craftBuildings: CraftBuildingsEnum.Refinery,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Crude_Oil,
//         quantityPerCycle: 3,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Heavy_Oil_Residue,
//         quantityPerCycle: 4,
//       },
//       {
//         itemName: ItemsEnum.Polymer_Resin,
//         quantityPerCycle: 2,
//       },
//     ],
//     initCycleDuration: 6,
//   },
//   // ? Polymer_Resin
//   {
//     recipeName: "Polymer_Resin",
//     craftBuildings: CraftBuildingsEnum.Refinery,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Crude_Oil,
//         quantityPerCycle: 6,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Polymer_Resin,
//         quantityPerCycle: 13,
//       },
//       {
//         itemName: ItemsEnum.Heavy_Oil_Residue,
//         quantityPerCycle: 2,
//       },
//     ],
//     initCycleDuration: 6,
//   },
//   //! Petroleum_Coke
//   {
//     recipeName: "Petroleum_Coke",
//     craftBuildings: CraftBuildingsEnum.Refinery,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Heavy_Oil_Residue,
//         quantityPerCycle: 4,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Petroleum_Coke,
//         quantityPerCycle: 12,
//       },
//     ],
//     initCycleDuration: 6,
//   },
//   //! Circuit_Board
//   {
//     recipeName: "Circuit_Board",
//     craftBuildings: CraftBuildingsEnum.Assembler,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Copper_Sheet,
//         quantityPerCycle: 2,
//       },
//       {
//         itemName: ItemsEnum.Plastic,
//         quantityPerCycle: 4,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Circuit_Board,
//         quantityPerCycle: 1,
//       },
//     ],
//     initCycleDuration: 8,
//   },
//   // ? Circuit_Board
//   {
//     recipeName: "Circuit_Board",
//     craftBuildings: CraftBuildingsEnum.Assembler,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Rubber,
//         quantityPerCycle: 6,
//       },
//       {
//         itemName: ItemsEnum.Petroleum_Coke,
//         quantityPerCycle: 9,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Circuit_Board,
//         quantityPerCycle: 1,
//       },
//     ],
//     initCycleDuration: 12,
//   },
//   // ? Circuit_Board
//   {
//     recipeName: "Circuit_Board",
//     craftBuildings: CraftBuildingsEnum.Assembler,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Copper_Sheet,
//         quantityPerCycle: 11,
//       },
//       {
//         itemName: ItemsEnum.Silica,
//         quantityPerCycle: 11,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Circuit_Board,
//         quantityPerCycle: 5,
//       },
//     ],
//     initCycleDuration: 24,
//   },
//   // ? Circuit_Board
//   {
//     recipeName: "Circuit_Board",
//     craftBuildings: CraftBuildingsEnum.Assembler,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Plastic,
//         quantityPerCycle: 10,
//       },
//       {
//         itemName: ItemsEnum.Quickwire,
//         quantityPerCycle: 30,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Circuit_Board,
//         quantityPerCycle: 7,
//       },
//     ],
//     initCycleDuration: 48,
//   },
//   //! Computer
//   {
//     recipeName: "Computer",
//     craftBuildings: CraftBuildingsEnum.Manufacturer,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Circuit_Board,
//         quantityPerCycle: 10,
//       },
//       {
//         itemName: ItemsEnum.Cable,
//         quantityPerCycle: 9,
//       },
//       {
//         itemName: ItemsEnum.Plastic,
//         quantityPerCycle: 18,
//       },
//       {
//         itemName: ItemsEnum.Screw,
//         quantityPerCycle: 52,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Computer,
//         quantityPerCycle: 1,
//       },
//     ],
//     initCycleDuration: 24,
//   },
//   // ? Computer
//   {
//     recipeName: "Computer",
//     craftBuildings: CraftBuildingsEnum.Manufacturer,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Circuit_Board,
//         quantityPerCycle: 7,
//       },
//       {
//         itemName: ItemsEnum.Quickwire,
//         quantityPerCycle: 28,
//       },
//       {
//         itemName: ItemsEnum.Rubber,
//         quantityPerCycle: 12,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Computer,
//         quantityPerCycle: 1,
//       },
//     ],
//     initCycleDuration: 16,
//   },
//   // ? Computer
//   {
//     recipeName: "Computer",
//     craftBuildings: CraftBuildingsEnum.Assembler,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Circuit_Board,
//         quantityPerCycle: 8,
//       },
//       {
//         itemName: ItemsEnum.Crystal_Oscillator,
//         quantityPerCycle: 3,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Computer,
//         quantityPerCycle: 3,
//       },
//     ],
//     initCycleDuration: 64,
//   },
//   //! Modular_Engine
//   {
//     recipeName: "Modular_Engine",
//     craftBuildings: CraftBuildingsEnum.Manufacturer,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Motor,
//         quantityPerCycle: 2,
//       },
//       {
//         itemName: ItemsEnum.Rubber,
//         quantityPerCycle: 15,
//       },
//       {
//         itemName: ItemsEnum.Smart_Plating,
//         quantityPerCycle: 2,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Modular_Engine,
//         quantityPerCycle: 1,
//       },
//     ],
//     initCycleDuration: 60,
//   },
//   //! Adaptative_Control_Unit
//   {
//     recipeName: "Adaptative_Control_Unit",
//     craftBuildings: CraftBuildingsEnum.Manufacturer,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Automated_Wiring,
//         quantityPerCycle: 15,
//       },
//       {
//         itemName: ItemsEnum.Circuit_Board,
//         quantityPerCycle: 10,
//       },
//       {
//         itemName: ItemsEnum.Heavy_Modular_Frame,
//         quantityPerCycle: 2,
//       },
//       {
//         itemName: ItemsEnum.Computer,
//         quantityPerCycle: 2,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Adaptative_Control_Unit,
//         quantityPerCycle: 2,
//       },
//     ],
//     initCycleDuration: 120,
//   },
//   //! Packaged_Water
//   {
//     recipeName: "Packaged_Water",
//     craftBuildings: CraftBuildingsEnum.Packager,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Water,
//         quantityPerCycle: 2,
//       },
//       {
//         itemName: ItemsEnum.Empty_Canister,
//         quantityPerCycle: 2,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Packaged_Water,
//         quantityPerCycle: 2,
//       },
//     ],
//     initCycleDuration: 2,
//   },
//   //! Packaged_Oil
//   {
//     recipeName: "Packaged_Oil",
//     craftBuildings: CraftBuildingsEnum.Packager,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Crude_Oil,
//         quantityPerCycle: 2,
//       },
//       {
//         itemName: ItemsEnum.Empty_Canister,
//         quantityPerCycle: 2,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Packaged_Oil,
//         quantityPerCycle: 2,
//       },
//     ],
//     initCycleDuration: 4,
//   },
//   //! Packaged_Fuel
//   {
//     recipeName: "Packaged_Fuel",
//     craftBuildings: CraftBuildingsEnum.Packager,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Fuel,
//         quantityPerCycle: 2,
//       },
//       {
//         itemName: ItemsEnum.Empty_Canister,
//         quantityPerCycle: 2,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Packaged_Fuel,
//         quantityPerCycle: 2,
//       },
//     ],
//     initCycleDuration: 3,
//   },
//   // ? Packaged_Fuel
//   {
//     recipeName: "Packaged_Fuel",
//     craftBuildings: CraftBuildingsEnum.Refinery,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Heavy_Oil_Residue,
//         quantityPerCycle: 1,
//       },
//       {
//         itemName: ItemsEnum.Packaged_Water,
//         quantityPerCycle: 2,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Packaged_Fuel,
//         quantityPerCycle: 2,
//       },
//     ],
//     initCycleDuration: 2,
//   },
//   //! Packaged_Heavy_Oil_Residue
//   {
//     recipeName: "Packaged_Heavy_Oil_Residue",
//     craftBuildings: CraftBuildingsEnum.Packager,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Heavy_Oil_Residue,
//         quantityPerCycle: 2,
//       },
//       {
//         itemName: ItemsEnum.Empty_Canister,
//         quantityPerCycle: 2,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Packaged_Heavy_Oil_Residue,
//         quantityPerCycle: 2,
//       },
//     ],
//     initCycleDuration: 4,
//   },
//   //! Packaged_Liquid_Biofuel
//   {
//     recipeName: "Packaged_Liquid_Biofuel",
//     craftBuildings: CraftBuildingsEnum.Packager,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Liquid_Biofuel,
//         quantityPerCycle: 2,
//       },
//       {
//         itemName: ItemsEnum.Empty_Canister,
//         quantityPerCycle: 2,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Packaged_Liquid_Biofuel,
//         quantityPerCycle: 2,
//       },
//     ],
//     initCycleDuration: 3,
//   },
//   //! Liquid_Biofuel
//   {
//     recipeName: "Liquid_Biofuel",
//     craftBuildings: CraftBuildingsEnum.Refinery,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Solid_Biofuel,
//         quantityPerCycle: 6,
//       },
//       {
//         itemName: ItemsEnum.Water,
//         quantityPerCycle: 3,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Liquid_Biofuel,
//         quantityPerCycle: 4,
//       },
//     ],
//     initCycleDuration: 4,
//   },
//   // ? Liquid_Biofuel
//   {
//     recipeName: "Liquid_Biofuel",
//     craftBuildings: CraftBuildingsEnum.Packager,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Packaged_Liquid_Biofuel,
//         quantityPerCycle: 2,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Liquid_Biofuel,
//         quantityPerCycle: 2,
//       },
//       {
//         itemName: ItemsEnum.Empty_Canister,
//         quantityPerCycle: 2,
//       },
//     ],
//     initCycleDuration: 2,
//   },
//   //! Gas_Filter
//   {
//     recipeName: "Gas_Filter",
//     craftBuildings: CraftBuildingsEnum.Manufacturer,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Coal,
//         quantityPerCycle: 5,
//       },
//       {
//         itemName: ItemsEnum.Rubber,
//         quantityPerCycle: 2,
//       },
//       {
//         itemName: ItemsEnum.Fabric,
//         quantityPerCycle: 2,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Gas_Filter,
//         quantityPerCycle: 1,
//       },
//     ],
//     initCycleDuration: 8,
//   },
//   //! Alumina_Solution
//   {
//     recipeName: "Alumina_Solution",
//     craftBuildings: CraftBuildingsEnum.Refinery,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Bauxite,
//         quantityPerCycle: 12,
//       },
//       {
//         itemName: ItemsEnum.Water,
//         quantityPerCycle: 18,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Alumina_Solution,
//         quantityPerCycle: 12,
//       },
//       {
//         itemName: ItemsEnum.Silica,
//         quantityPerCycle: 5,
//       },
//     ],
//     initCycleDuration: 6,
//   },
//   // ? Alumina_Solution
//   {
//     recipeName: "Alumina_Solution",
//     craftBuildings: CraftBuildingsEnum.Packager,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Packaged_Alumina_Solution,
//         quantityPerCycle: 2,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Alumina_Solution,
//         quantityPerCycle: 2,
//       },
//       {
//         itemName: ItemsEnum.Empty_Canister,
//         quantityPerCycle: 2,
//       },
//     ],
//     initCycleDuration: 1,
//   },
//   // ? Alumina_Solution
//   {
//     recipeName: "Alumina_Solution",
//     craftBuildings: CraftBuildingsEnum.Refinery,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Bauxite,
//         quantityPerCycle: 10,
//       },
//       {
//         itemName: ItemsEnum.Water,
//         quantityPerCycle: 10,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Alumina_Solution,
//         quantityPerCycle: 12,
//       },
//     ],
//     initCycleDuration: 3,
//   },
//   //! Packaged_Alumina_Solution
//   {
//     recipeName: "Packaged_Alumina_Solution",
//     craftBuildings: CraftBuildingsEnum.Packager,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Alumina_Solution,
//         quantityPerCycle: 2,
//       },
//       {
//         itemName: ItemsEnum.Empty_Canister,
//         quantityPerCycle: 2,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Packaged_Alumina_Solution,
//         quantityPerCycle: 2,
//       },
//     ],
//     initCycleDuration: 1,
//   },
//   //! Aluminum_Scrap
//   {
//     recipeName: "Aluminum_Scrap",
//     craftBuildings: CraftBuildingsEnum.Refinery,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Alumina_Solution,
//         quantityPerCycle: 4,
//       },
//       {
//         itemName: ItemsEnum.Coal,
//         quantityPerCycle: 2,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Aluminum_Scrap,
//         quantityPerCycle: 6,
//       },
//       {
//         itemName: ItemsEnum.Water,
//         quantityPerCycle: 2,
//       },
//     ],
//     initCycleDuration: 1,
//   },
//   // ? Aluminum_Scrap
//   {
//     recipeName: "Aluminum_Scrap",
//     craftBuildings: CraftBuildingsEnum.Refinery,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Alumina_Solution,
//         quantityPerCycle: 12,
//       },
//       {
//         itemName: ItemsEnum.Petroleum_Coke,
//         quantityPerCycle: 4,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Aluminum_Scrap,
//         quantityPerCycle: 20,
//       },
//       {
//         itemName: ItemsEnum.Water,
//         quantityPerCycle: 7,
//       },
//     ],
//     initCycleDuration: 4,
//   },
//   // ? Aluminum_Scrap
//   {
//     recipeName: "Aluminum_Scrap",
//     craftBuildings: CraftBuildingsEnum.Blender,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Bauxite,
//         quantityPerCycle: 15,
//       },
//       {
//         itemName: ItemsEnum.Coal,
//         quantityPerCycle: 10,
//       },
//       {
//         itemName: ItemsEnum.Sulfuric_Acid,
//         quantityPerCycle: 5,
//       },
//       {
//         itemName: ItemsEnum.Water,
//         quantityPerCycle: 6,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Aluminum_Scrap,
//         quantityPerCycle: 30,
//       },
//       {
//         itemName: ItemsEnum.Water,
//         quantityPerCycle: 5,
//       },
//     ],
//     initCycleDuration: 6,
//   },
//   //! Aluminum_Ingot
//   {
//     recipeName: "Aluminum_Ingot",
//     craftBuildings: CraftBuildingsEnum.Foundry,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Aluminum_Scrap,
//         quantityPerCycle: 6,
//       },
//       {
//         itemName: ItemsEnum.Silica,
//         quantityPerCycle: 5,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Aluminum_Ingot,
//         quantityPerCycle: 4,
//       },
//     ],
//     initCycleDuration: 4,
//   },
//   // ? Aluminum_Ingot
//   {
//     recipeName: "Aluminum_Ingot",
//     craftBuildings: CraftBuildingsEnum.Smelter,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Aluminum_Scrap,
//         quantityPerCycle: 2,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Aluminum_Ingot,
//         quantityPerCycle: 1,
//       },
//     ],
//     initCycleDuration: 2,
//   },
//   //! Alclad_Aluminum_Sheet
//   {
//     recipeName: "Alclad_Aluminum_Sheet",
//     craftBuildings: CraftBuildingsEnum.Assembler,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Aluminum_Ingot,
//         quantityPerCycle: 3,
//       },
//       {
//         itemName: ItemsEnum.Copper_Ingot,
//         quantityPerCycle: 1,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Alclad_Aluminum_Sheet,
//         quantityPerCycle: 3,
//       },
//     ],
//     initCycleDuration: 6,
//   },
//   //! Aluminum_Casing
//   {
//     recipeName: "Aluminum_Casing",
//     craftBuildings: CraftBuildingsEnum.Constructor,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Aluminum_Ingot,
//         quantityPerCycle: 3,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Aluminum_Casing,
//         quantityPerCycle: 2,
//       },
//     ],
//     initCycleDuration: 2,
//   },
//   // ? Aluminum_Casing
//   {
//     recipeName: "Aluminum_Casing",
//     craftBuildings: CraftBuildingsEnum.Assembler,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Aluminum_Ingot,
//         quantityPerCycle: 20,
//       },
//       {
//         itemName: ItemsEnum.Copper_Ingot,
//         quantityPerCycle: 10,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Aluminum_Casing,
//         quantityPerCycle: 15,
//       },
//     ],
//     initCycleDuration: 8,
//   },
//   //! Iodine_Infused_Filter
//   {
//     recipeName: "Iodine_Infused_Filter",
//     craftBuildings: CraftBuildingsEnum.Manufacturer,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Gas_Filter,
//         quantityPerCycle: 1,
//       },
//       {
//         itemName: ItemsEnum.Quickwire,
//         quantityPerCycle: 8,
//       },
//       {
//         itemName: ItemsEnum.Aluminum_Casing,
//         quantityPerCycle: 1,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Iodine_Infused_Filter,
//         quantityPerCycle: 1,
//       },
//     ],
//     initCycleDuration: 16,
//   },
//   //! Sulfuric_Acid
//   {
//     recipeName: "Sulfuric_Acid",
//     craftBuildings: CraftBuildingsEnum.Refinery,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Sulfur,
//         quantityPerCycle: 5,
//       },
//       {
//         itemName: ItemsEnum.Water,
//         quantityPerCycle: 5,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Sulfuric_Acid,
//         quantityPerCycle: 5,
//       },
//     ],
//     initCycleDuration: 6,
//   },
//   // ? Sulfuric_Acid
//   {
//     recipeName: "Sulfuric_Acid",
//     craftBuildings: CraftBuildingsEnum.Packager,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Packaged_Sulfuric_Acid,
//         quantityPerCycle: 1,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Sulfuric_Acid,
//         quantityPerCycle: 1,
//       },
//       {
//         itemName: ItemsEnum.Empty_Canister,
//         quantityPerCycle: 1,
//       },
//     ],
//     initCycleDuration: 1,
//   },
//   // ? Sulfuric_Acid
//   {
//     recipeName: "Sulfuric_Acid",
//     craftBuildings: CraftBuildingsEnum.Blender,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Uranium,
//         quantityPerCycle: 10,
//       },
//       {
//         itemName: ItemsEnum.Concrete,
//         quantityPerCycle: 3,
//       },
//       {
//         itemName: ItemsEnum.Sulfuric_Acid,
//         quantityPerCycle: 8,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Encased_Uranium_Cell,
//         quantityPerCycle: 5,
//       },
//       {
//         itemName: ItemsEnum.Sulfuric_Acid,
//         quantityPerCycle: 2,
//       },
//     ],
//     initCycleDuration: 12,
//   },
//   //! Packaged_Sulfuric_Acid
//   {
//     recipeName: "Packaged_Sulfuric_Acid",
//     craftBuildings: CraftBuildingsEnum.Packager,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Sulfuric_Acid,
//         quantityPerCycle: 2,
//       },
//       {
//         itemName: ItemsEnum.Empty_Canister,
//         quantityPerCycle: 2,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Packaged_Sulfuric_Acid,
//         quantityPerCycle: 2,
//       },
//     ],
//     initCycleDuration: 3,
//   },
//   //! Battery
//   {
//     recipeName: "Battery",
//     craftBuildings: CraftBuildingsEnum.Blender,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Sulfuric_Acid,
//         quantityPerCycle: 2.5,
//       },
//       {
//         itemName: ItemsEnum.Alumina_Solution,
//         quantityPerCycle: 2,
//       },
//       {
//         itemName: ItemsEnum.Aluminum_Casing,
//         quantityPerCycle: 1,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Battery,
//         quantityPerCycle: 1,
//       },
//       {
//         itemName: ItemsEnum.Water,
//         quantityPerCycle: 1.5,
//       },
//     ],
//     initCycleDuration: 3,
//   },
//   // ? Battery
//   {
//     recipeName: "Battery",
//     craftBuildings: CraftBuildingsEnum.Manufacturer,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Sulfur,
//         quantityPerCycle: 6,
//       },
//       {
//         itemName: ItemsEnum.Alclad_Aluminum_Sheet,
//         quantityPerCycle: 7,
//       },
//       {
//         itemName: ItemsEnum.Plastic,
//         quantityPerCycle: 8,
//       },
//       {
//         itemName: ItemsEnum.Wire,
//         quantityPerCycle: 12,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Battery,
//         quantityPerCycle: 4,
//       },
//     ],
//     initCycleDuration: 8,
//   },
//   //! Assembly_Director_System
//   {
//     recipeName: "Assembly_Director_System",
//     craftBuildings: CraftBuildingsEnum.Assembler,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Adaptative_Control_Unit,
//         quantityPerCycle: 2,
//       },
//       {
//         itemName: ItemsEnum.Supercomputer,
//         quantityPerCycle: 1,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Assembly_Director_System,
//         quantityPerCycle: 1,
//       },
//     ],
//     initCycleDuration: 80,
//   },
//   //! Encased_Uranium_Cell
//   {
//     recipeName: "Encased_Uranium_Cell",
//     craftBuildings: CraftBuildingsEnum.Blender,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Uranium,
//         quantityPerCycle: 10,
//       },
//       {
//         itemName: ItemsEnum.Concrete,
//         quantityPerCycle: 3,
//       },
//       {
//         itemName: ItemsEnum.Sulfuric_Acid,
//         quantityPerCycle: 8,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Encased_Uranium_Cell,
//         quantityPerCycle: 5,
//       },
//       {
//         itemName: ItemsEnum.Sulfuric_Acid,
//         quantityPerCycle: 2,
//       },
//     ],
//     initCycleDuration: 12,
//   },
//   // ? Encased_Uranium_Cell
//   {
//     recipeName: "Encased_Uranium_Cell",
//     craftBuildings: CraftBuildingsEnum.Manufacturer,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Uranium,
//         quantityPerCycle: 5,
//       },
//       {
//         itemName: ItemsEnum.Silica,
//         quantityPerCycle: 3,
//       },
//       {
//         itemName: ItemsEnum.Sulfur,
//         quantityPerCycle: 5,
//       },
//       {
//         itemName: ItemsEnum.Quickwire,
//         quantityPerCycle: 15,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Encased_Uranium_Cell,
//         quantityPerCycle: 4,
//       },
//     ],
//     initCycleDuration: 12,
//   },
//   //! Electromagnetic_Control_Rod
//   {
//     recipeName: "Electromagnetic_Control_Rod",
//     craftBuildings: CraftBuildingsEnum.Assembler,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Stator,
//         quantityPerCycle: 3,
//       },
//       {
//         itemName: ItemsEnum.AI_Limiter,
//         quantityPerCycle: 2,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Electromagnetic_Control_Rod,
//         quantityPerCycle: 2,
//       },
//     ],
//     initCycleDuration: 30,
//   },
//   // ? Electromagnetic_Control_Rod
//   {
//     recipeName: "Electromagnetic_Control_Rod",
//     craftBuildings: CraftBuildingsEnum.Assembler,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Stator,
//         quantityPerCycle: 2,
//       },
//       {
//         itemName: ItemsEnum.High_Speed_Connector,
//         quantityPerCycle: 1,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Electromagnetic_Control_Rod,
//         quantityPerCycle: 2,
//       },
//     ],
//     initCycleDuration: 15,
//   },
//   //! Uranium_Fuel_Rod
//   {
//     recipeName: "Uranium_Fuel_Rod",
//     craftBuildings: CraftBuildingsEnum.Manufacturer,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Encased_Uranium_Cell,
//         quantityPerCycle: 50,
//       },
//       {
//         itemName: ItemsEnum.Encased_Industrial_Beam,
//         quantityPerCycle: 3,
//       },
//       {
//         itemName: ItemsEnum.Electromagnetic_Control_Rod,
//         quantityPerCycle: 5,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Uranium_Fuel_Rod,
//         quantityPerCycle: 1,
//       },
//     ],
//     initCycleDuration: 150,
//   },
//   // ? Uranium_Fuel_Rod
//   {
//     recipeName: "Uranium_Fuel_Rod",
//     craftBuildings: CraftBuildingsEnum.Manufacturer,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Encased_Uranium_Cell,
//         quantityPerCycle: 100,
//       },
//       {
//         itemName: ItemsEnum.Electromagnetic_Control_Rod,
//         quantityPerCycle: 10,
//       },
//       {
//         itemName: ItemsEnum.Crystal_Oscillator,
//         quantityPerCycle: 3,
//       },
//       {
//         itemName: ItemsEnum.Beacon,
//         quantityPerCycle: 6,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Uranium_Fuel_Rod,
//         quantityPerCycle: 3,
//       },
//     ],
//     initCycleDuration: 300,
//   },
//   //! Magnetic_Field_Generator
//   {
//     recipeName: "Magnetic_Field_Generator",
//     craftBuildings: CraftBuildingsEnum.Manufacturer,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Versatile_Framework,
//         quantityPerCycle: 5,
//       },
//       {
//         itemName: ItemsEnum.Electromagnetic_Control_Rod,
//         quantityPerCycle: 2,
//       },
//       {
//         itemName: ItemsEnum.Battery,
//         quantityPerCycle: 10,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Magnetic_Field_Generator,
//         quantityPerCycle: 2,
//       },
//     ],
//     initCycleDuration: 120,
//   },
//   //! Empty_Fluid_Tank
//   {
//     recipeName: "Empty_Fluid_Tank",
//     craftBuildings: CraftBuildingsEnum.Constructor,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Aluminum_Ingot,
//         quantityPerCycle: 1,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Empty_Fluid_Tank,
//         quantityPerCycle: 1,
//       },
//     ],
//     initCycleDuration: 1,
//   },
//   // ? Empty_Fluid_Tank
//   {
//     recipeName: "Empty_Fluid_Tank",
//     craftBuildings: CraftBuildingsEnum.Packager,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Packaged_Nitrogen_Gas,
//         quantityPerCycle: 1,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Nitrogen_Gas,
//         quantityPerCycle: 4,
//       },
//       {
//         itemName: ItemsEnum.Empty_Fluid_Tank,
//         quantityPerCycle: 1,
//       },
//     ],
//     initCycleDuration: 1,
//   },
//   // ? Empty_Fluid_Tank
//   {
//     recipeName: "Empty_Fluid_Tank",
//     craftBuildings: CraftBuildingsEnum.Packager,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Packaged_Nitric_Acid,
//         quantityPerCycle: 1,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Nitric_Acid,
//         quantityPerCycle: 1,
//       },
//       {
//         itemName: ItemsEnum.Empty_Fluid_Tank,
//         quantityPerCycle: 1,
//       },
//     ],
//     initCycleDuration: 3,
//   },
//   //! Packaged_Nitrogen_Gas
//   {
//     recipeName: "Packaged_Nitrogen_Gas",
//     craftBuildings: CraftBuildingsEnum.Packager,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Nitrogen_Gas,
//         quantityPerCycle: 4,
//       },
//       {
//         itemName: ItemsEnum.Empty_Fluid_Tank,
//         quantityPerCycle: 1,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Packaged_Nitrogen_Gas,
//         quantityPerCycle: 1,
//       },
//     ],
//     initCycleDuration: 1,
//   },
//   //! Heat_Sink
//   {
//     recipeName: "Heat_Sink",
//     craftBuildings: CraftBuildingsEnum.Assembler,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Alclad_Aluminum_Sheet,
//         quantityPerCycle: 5,
//       },
//       {
//         itemName: ItemsEnum.Copper_Sheet,
//         quantityPerCycle: 3,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Heat_Sink,
//         quantityPerCycle: 1,
//       },
//     ],
//     initCycleDuration: 8,
//   },
//   // ? Heat_Sink
//   {
//     recipeName: "Heat_Sink",
//     craftBuildings: CraftBuildingsEnum.Assembler,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Aluminum_Casing,
//         quantityPerCycle: 3,
//       },
//       {
//         itemName: ItemsEnum.Rubber,
//         quantityPerCycle: 3,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Heat_Sink,
//         quantityPerCycle: 1,
//       },
//     ],
//     initCycleDuration: 6,
//   },
//   //! Cooling_System
//   {
//     recipeName: "Cooling_System",
//     craftBuildings: CraftBuildingsEnum.Blender,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Heat_Sink,
//         quantityPerCycle: 2,
//       },
//       {
//         itemName: ItemsEnum.Rubber,
//         quantityPerCycle: 2,
//       },
//       {
//         itemName: ItemsEnum.Water,
//         quantityPerCycle: 5,
//       },
//       {
//         itemName: ItemsEnum.Nitrogen_Gas,
//         quantityPerCycle: 25,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Cooling_System,
//         quantityPerCycle: 1,
//       },
//     ],
//     initCycleDuration: 10,
//   },
//   // ? Cooling_System
//   {
//     recipeName: "Cooling_System",
//     craftBuildings: CraftBuildingsEnum.Blender,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Heat_Sink,
//         quantityPerCycle: 5,
//       },
//       {
//         itemName: ItemsEnum.Motor,
//         quantityPerCycle: 1,
//       },
//       {
//         itemName: ItemsEnum.Nitrogen_Gas,
//         quantityPerCycle: 24,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Cooling_System,
//         quantityPerCycle: 2,
//       },
//     ],
//     initCycleDuration: 32,
//   },
//   //! Fused_Modular_Frame
//   {
//     recipeName: "Fused_Modular_Frame",
//     craftBuildings: CraftBuildingsEnum.Blender,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Heavy_Modular_Frame,
//         quantityPerCycle: 1,
//       },
//       {
//         itemName: ItemsEnum.Aluminum_Casing,
//         quantityPerCycle: 50,
//       },
//       {
//         itemName: ItemsEnum.Nitrogen_Gas,
//         quantityPerCycle: 25,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Fused_Modular_Frame,
//         quantityPerCycle: 1,
//       },
//     ],
//     initCycleDuration: 40,
//   },
//   // ? Fused_Modular_Frame
//   {
//     recipeName: "Fused_Modular_Frame",
//     craftBuildings: CraftBuildingsEnum.Blender,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Heavy_Modular_Frame,
//         quantityPerCycle: 1,
//       },
//       {
//         itemName: ItemsEnum.Aluminum_Ingot,
//         quantityPerCycle: 50,
//       },
//       {
//         itemName: ItemsEnum.Nitric_Acid,
//         quantityPerCycle: 8,
//       },
//       {
//         itemName: ItemsEnum.Fuel,
//         quantityPerCycle: 10,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Fuel,
//         quantityPerCycle: 1,
//       },
//     ],
//     initCycleDuration: 20,
//   },
//   //! Turbo_Motor
//   {
//     recipeName: "Turbo_Motor",
//     craftBuildings: CraftBuildingsEnum.Manufacturer,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Cooling_System,
//         quantityPerCycle: 4,
//       },
//       {
//         itemName: ItemsEnum.Radio_Control_Unit,
//         quantityPerCycle: 2,
//       },
//       {
//         itemName: ItemsEnum.Motor,
//         quantityPerCycle: 4,
//       },
//       {
//         itemName: ItemsEnum.Rubber,
//         quantityPerCycle: 24,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Turbo_Motor,
//         quantityPerCycle: 1,
//       },
//     ],
//     initCycleDuration: 32,
//   },
//   // ? Turbo_Motor
//   {
//     recipeName: "Turbo_Motor",
//     craftBuildings: CraftBuildingsEnum.Manufacturer,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Motor,
//         quantityPerCycle: 4,
//       },
//       {
//         itemName: ItemsEnum.Pressure_Conversion_Cube,
//         quantityPerCycle: 1,
//       },
//       {
//         itemName: ItemsEnum.Packaged_Nitrogen_Gas,
//         quantityPerCycle: 24,
//       },
//       {
//         itemName: ItemsEnum.Stator,
//         quantityPerCycle: 8,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Turbo_Motor,
//         quantityPerCycle: 2,
//       },
//     ],
//     initCycleDuration: 32,
//   },
//   // ? Turbo_Motor
//   {
//     recipeName: "Turbo_Motor",
//     craftBuildings: CraftBuildingsEnum.Manufacturer,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Motor,
//         quantityPerCycle: 7,
//       },
//       {
//         itemName: ItemsEnum.Radio_Control_Unit,
//         quantityPerCycle: 9,
//       },
//       {
//         itemName: ItemsEnum.Electromagnetic_Control_Rod,
//         quantityPerCycle: 5,
//       },
//       {
//         itemName: ItemsEnum.Rotor,
//         quantityPerCycle: 7,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Turbo_Motor,
//         quantityPerCycle: 3,
//       },
//     ],
//     initCycleDuration: 64,
//   },
//   //! Thermal_Propulsion_Rocket
//   {
//     recipeName: "Thermal_Propulsion_Rocket",
//     craftBuildings: CraftBuildingsEnum.Manufacturer,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Modular_Engine,
//         quantityPerCycle: 5,
//       },
//       {
//         itemName: ItemsEnum.Turbo_Motor,
//         quantityPerCycle: 2,
//       },
//       {
//         itemName: ItemsEnum.Cooling_System,
//         quantityPerCycle: 6,
//       },
//       {
//         itemName: ItemsEnum.Fused_Modular_Frame,
//         quantityPerCycle: 2,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Thermal_Propulsion_Rocket,
//         quantityPerCycle: 2,
//       },
//     ],
//     initCycleDuration: 120,
//   },
//   //! Nitric_Acid
//   {
//     recipeName: "Nitric_Acid",
//     craftBuildings: CraftBuildingsEnum.Blender,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Nitrogen_Gas,
//         quantityPerCycle: 12,
//       },
//       {
//         itemName: ItemsEnum.Water,
//         quantityPerCycle: 3,
//       },
//       {
//         itemName: ItemsEnum.Iron_Plate,
//         quantityPerCycle: 1,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Nitric_Acid,
//         quantityPerCycle: 3,
//       },
//     ],
//     initCycleDuration: 6,
//   },
//   // ? Nitric_Acid
//   {
//     recipeName: "Nitric_Acid",
//     craftBuildings: CraftBuildingsEnum.Packager,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Packaged_Nitric_Acid,
//         quantityPerCycle: 1,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Nitric_Acid,
//         quantityPerCycle: 1,
//       },
//       {
//         itemName: ItemsEnum.Empty_Fluid_Tank,
//         quantityPerCycle: 1,
//       },
//     ],
//     initCycleDuration: 3,
//   },
//   //! Packaged_Nitric_Acid
//   {
//     recipeName: "Packaged_Nitric_Acid",
//     craftBuildings: CraftBuildingsEnum.Packager,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Nitric_Acid,
//         quantityPerCycle: 1,
//       },
//       {
//         itemName: ItemsEnum.Empty_Fluid_Tank,
//         quantityPerCycle: 1,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Packaged_Nitric_Acid,
//         quantityPerCycle: 1,
//       },
//     ],
//     initCycleDuration: 2,
//   },
//   //! Non_Fissile_Uranium
//   {
//     recipeName: "Non_Fissile_Uranium",
//     craftBuildings: CraftBuildingsEnum.Blender,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Uranium_Waste,
//         quantityPerCycle: 15,
//       },
//       {
//         itemName: ItemsEnum.Silica,
//         quantityPerCycle: 10,
//       },
//       {
//         itemName: ItemsEnum.Nitric_Acid,
//         quantityPerCycle: 6,
//       },
//       {
//         itemName: ItemsEnum.Sulfuric_Acid,
//         quantityPerCycle: 6,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Non_Fissile_Uranium,
//         quantityPerCycle: 20,
//       },
//       {
//         itemName: ItemsEnum.Water,
//         quantityPerCycle: 6,
//       },
//     ],
//     initCycleDuration: 24,
//   },
//   // ? Non_Fissile_Uranium
//   {
//     recipeName: "Non_Fissile_Uranium",
//     craftBuildings: CraftBuildingsEnum.Blender,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Uranium,
//         quantityPerCycle: 5,
//       },
//       {
//         itemName: ItemsEnum.Uranium_Waste,
//         quantityPerCycle: 5,
//       },
//       {
//         itemName: ItemsEnum.Nitric_Acid,
//         quantityPerCycle: 3,
//       },
//       {
//         itemName: ItemsEnum.Sulfuric_Acid,
//         quantityPerCycle: 5,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Non_Fissile_Uranium,
//         quantityPerCycle: 20,
//       },
//       {
//         itemName: ItemsEnum.Water,
//         quantityPerCycle: 8,
//       },
//     ],
//     initCycleDuration: 12,
//   },
//   //! Plutonium_Pellet
//   {
//     recipeName: "Plutonium_Pellet",
//     craftBuildings: CraftBuildingsEnum.Particle_Accelerator,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Non_Fissile_Uranium,
//         quantityPerCycle: 100,
//       },
//       {
//         itemName: ItemsEnum.Uranium_Waste,
//         quantityPerCycle: 25,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Plutonium_Pellet,
//         quantityPerCycle: 30,
//       },
//     ],
//     initCycleDuration: 60,
//   },
//   //! Encased_Plutonium_Cell
//   {
//     recipeName: "Encased_Plutonium_Cell",
//     craftBuildings: CraftBuildingsEnum.Assembler,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Plutonium_Pellet,
//         quantityPerCycle: 2,
//       },
//       {
//         itemName: ItemsEnum.Concrete,
//         quantityPerCycle: 4,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Encased_Plutonium_Cell,
//         quantityPerCycle: 1,
//       },
//     ],
//     initCycleDuration: 12,
//   },
//   // ? Encased_Plutonium_Cell
//   {
//     recipeName: "Encased_Plutonium_Cell",
//     craftBuildings: CraftBuildingsEnum.Particle_Accelerator,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Non_Fissile_Uranium,
//         quantityPerCycle: 150,
//       },
//       {
//         itemName: ItemsEnum.Aluminum_Casing,
//         quantityPerCycle: 20,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Encased_Plutonium_Cell,
//         quantityPerCycle: 20,
//       },
//     ],
//     initCycleDuration: 120,
//   },
//   //! Plutonium_Fuel_Rod
//   {
//     recipeName: "Plutonium_Fuel_Rod",
//     craftBuildings: CraftBuildingsEnum.Manufacturer,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Encased_Plutonium_Cell,
//         quantityPerCycle: 30,
//       },
//       {
//         itemName: ItemsEnum.Steel_Beam,
//         quantityPerCycle: 18,
//       },
//       {
//         itemName: ItemsEnum.Electromagnetic_Control_Rod,
//         quantityPerCycle: 6,
//       },
//       {
//         itemName: ItemsEnum.Heat_Sink,
//         quantityPerCycle: 10,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Plutonium_Fuel_Rod,
//         quantityPerCycle: 1,
//       },
//     ],
//     initCycleDuration: 240,
//   },
//   // ? Plutonium_Fuel_Rod
//   {
//     recipeName: "Plutonium_Fuel_Rod",
//     craftBuildings: CraftBuildingsEnum.Assembler,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Encased_Plutonium_Cell,
//         quantityPerCycle: 20,
//       },
//       {
//         itemName: ItemsEnum.Pressure_Conversion_Cube,
//         quantityPerCycle: 1,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Plutonium_Fuel_Rod,
//         quantityPerCycle: 1,
//       },
//     ],
//     initCycleDuration: 120,
//   },

//   //! Uranium_Waste
//   {
//     recipeName: "Uranium_Waste",
//     craftBuildings: PowerBuildingsEnum.Nuclear_Power_Plant,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Uranium_Fuel_Rod,
//         quantityPerCycle: 1,
//       },
//       {
//         itemName: ItemsEnum.Water,
//         quantityPerCycle: 12,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Uranium_Waste,
//         quantityPerCycle: 50,
//       },
//     ],
//     initCycleDuration: 300,
//   },
//   //! Plutonium_Waste
//   {
//     recipeName: "Plutonium_Waste",
//     craftBuildings: PowerBuildingsEnum.Nuclear_Power_Plant,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Plutonium_Fuel_Rod,
//         quantityPerCycle: 1,
//       },
//       {
//         itemName: ItemsEnum.Water,
//         quantityPerCycle: 24,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Plutonium_Waste,
//         quantityPerCycle: 10,
//       },
//     ],
//     initCycleDuration: 600,
//   },
//   //! Copper_Powder
//   {
//     recipeName: "Copper_Powder",
//     craftBuildings: CraftBuildingsEnum.Constructor,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Copper_Ingot,
//         quantityPerCycle: 30,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Copper_Powder,
//         quantityPerCycle: 5,
//       },
//     ],
//     initCycleDuration: 6,
//   },
//   //! Pressure_Conversion_Cube
//   {
//     recipeName: "Pressure_Conversion_Cube",
//     craftBuildings: CraftBuildingsEnum.Assembler,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Fused_Modular_Frame,
//         quantityPerCycle: 1,
//       },
//       {
//         itemName: ItemsEnum.Radio_Control_Unit,
//         quantityPerCycle: 2,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Pressure_Conversion_Cube,
//         quantityPerCycle: 1,
//       },
//     ],
//     initCycleDuration: 60,
//   },
//   //! Nuclear_Pasta
//   {
//     recipeName: "Nuclear_Pasta",
//     craftBuildings: CraftBuildingsEnum.Particle_Accelerator,
//     itemsIn: [
//       {
//         itemName: ItemsEnum.Copper_Powder,
//         quantityPerCycle: 200,
//       },
//       {
//         itemName: ItemsEnum.Pressure_Conversion_Cube,
//         quantityPerCycle: 1,
//       },
//     ],
//     itemsOut: [
//       {
//         itemName: ItemsEnum.Nuclear_Pasta,
//         quantityPerCycle: 1,
//       },
//     ],
//     initCycleDuration: 120,
//   },
// ];
