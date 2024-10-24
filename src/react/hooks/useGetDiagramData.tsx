import { roundNumber } from "@nexus/nexusExporter";
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

  if (factoryLine) {
    nodes.push({
      id: 1,
      label: `${roundNumber(factoryLine.quantityPerMinute, 2)} X ${t(
        TranslationsFilesEnum.SATISFACTORY_RECIPES,
        factoryLine.recipe.recipeName,
      )}`,
    });
    nodes.push({
      id: 2,
      label: `${roundNumber(factoryLine.quantityPerMinute, 2)} X ${t(
        TranslationsFilesEnum.SATISFACTORY_RECIPES,
        factoryLine.recipe.recipeName,
      )}`,
    });

    edges.push({
      from: 1,
      to: 2,
      label: "Test",
    });
  }

  return { nodes, edges };
};
