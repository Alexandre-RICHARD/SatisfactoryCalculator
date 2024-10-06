import { CraftBuildingsEnum } from "../../../enums/craftBuildings.enum";
import { ExtractionBuildingsEnum } from "../../../enums/extractionBuildings.enum";
import { PowerBuildingsEnum } from "../../../enums/powerBuildings.enum";

export default {
  [CraftBuildingsEnum.Smelter]: "Smelter",
  [CraftBuildingsEnum.Foundry]: "Foundry",
  [CraftBuildingsEnum.Constructor]: "Constructor",
  [CraftBuildingsEnum.Assembler]: "Assembler",
  [ExtractionBuildingsEnum.Miner_MK1]: "Miner Mk.1",
  [ExtractionBuildingsEnum.Water_Extractor]: "Water extractor",
  [PowerBuildingsEnum.Biomass_Burner]: "Biomass burner",
  [PowerBuildingsEnum.Coal_Generator]: "Coal-powered generator",
};
