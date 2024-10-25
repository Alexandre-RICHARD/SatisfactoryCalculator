import { roundNumber } from "@nexus/nexusExporter";
import type { Edge, Node } from "vis-network";

import { TranslationsFilesEnum as TF } from "../../enums/translationsFiles.enum";
import type { FactoryLine } from "../../types/satisfactory/factoryLine";
import { useCustomTranslations } from "./useCustomTranslations";

type PropsType = {
  factoryLine: FactoryLine | null;
};

export const useGetDiagramData = ({ factoryLine }: PropsType) => {
  const t = useCustomTranslations();

  const nodes: Node[] = [];
  const edges: Edge[] = [];

  const nodeLabelFormatter = (lineUp: string, lineDown: string) => {
    return `${lineUp}\n${lineDown}\n`;
  };

  if (factoryLine) {
    const pusher = (nodeElement: FactoryLine) => {
      nodes.push({
        id: nodeElement.id,
        label: nodeLabelFormatter(
          `${t(TF.SATISFACTORY_RECIPES, nodeElement.recipe.recipeName)}`,
          `${nodeElement.buildingNumber}x ${t(TF.SATISFACTORY_BUILDING, nodeElement.recipe.craftBuildings)} ${t(TF.COMMON, "at")} ${nodeElement.overclocking}%`,
        ),
      });
      if (nodeElement.parents) {
        nodeElement.parents.forEach((parent) => {
          const currentInItems = nodeElement.recipe.itemsIn;
          const parentOutItems = parent.recipe.itemsOut;
          const commonItems = currentInItems.filter((item) =>
            parentOutItems.some(
              (itemOut) => itemOut.itemName === item.itemName,
            ),
          );

          edges.push({
            from: parent.id,
            to: nodeElement.id,
            label: `${roundNumber(parent?.quantityPerMinute ?? 0, 2)}x ${t(TF.SATISFACTORY_ITEMS, commonItems[0].itemName)}`,
          });
          pusher(parent);
        });
      }
    };

    pusher(factoryLine);
  }

  return { nodes, edges };
};
