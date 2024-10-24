import type { Edge, Node } from "vis-network";

import { TranslationsFilesEnum } from "../../enums/translationsFiles.enum";
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
    return `${lineUp}\n${lineDown}`;
  };

  if (factoryLine) {
    const pusher = (nodeElement: FactoryLine) => {
      nodes.push({
        id: nodeElement.id,
        label: nodeLabelFormatter(
          `${t(TranslationsFilesEnum.SATISFACTORY_RECIPES, nodeElement.recipe.recipeName)}`,
          `${nodeElement.buildingNumber}x ${t(TranslationsFilesEnum.SATISFACTORY_BUILDING, nodeElement.recipe.craftBuildings)} ${t(TranslationsFilesEnum.COMMON, "at")} ${nodeElement.overclocking}%`,
        ),
        title: "t",
      });
      if (nodeElement.parents) {
        nodeElement.parents.forEach((parent) => {
          edges.push({
            from: parent.id,
            to: nodeElement.id,
          });
          pusher(parent);
        });
      }
    };

    pusher(factoryLine);
  }

  return { nodes, edges };
};
