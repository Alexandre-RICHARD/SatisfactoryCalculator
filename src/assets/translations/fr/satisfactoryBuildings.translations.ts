import { CraftBuildingsEnum } from "../../../enums/craftBuildings.enum";
import { ExtractionBuildingsEnum } from "../../../enums/extractionBuildings.enum";
import { PowerBuildingsEnum } from "../../../enums/powerBuildings.enum";

export default {
  [CraftBuildingsEnum.Smelter]: "Haut fourneau",
  [CraftBuildingsEnum.Foundry]: "Fonderie",
  [CraftBuildingsEnum.Constructor]: "Constructeur",
  [CraftBuildingsEnum.Assembler]: "Assembleuse",
  [ExtractionBuildingsEnum.Miner_MK1]: "Foreuse Mk.1",
  [ExtractionBuildingsEnum.Water_Extractor]: "Pompe à eau",
  [PowerBuildingsEnum.Biomass_Burner]: "Brûleur de biomasse",
  [PowerBuildingsEnum.Coal_Generator]: "Générateur à charbon",
};
