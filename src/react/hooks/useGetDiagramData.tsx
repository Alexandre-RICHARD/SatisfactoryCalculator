import { roundNumber } from "@nexus/nexusExporter";
import type { Edge, Node } from "vis-network";

import { TranslationsFilesEnum as TF } from "../../enums/translationsFiles.enum";
import { stringRemoveEndPxHelper } from "../../helpers/stringRemoveEndPx.helper";
import { theme } from "../../styles/theme";
import type { FactoryLine } from "../../types/satisfactory/factoryLine";
import { useCustomTranslations } from "./useCustomTranslations";

type PropsType = {
  factoryLine: FactoryLine | null;
};

export const useGetDiagramData = ({ factoryLine }: PropsType) => {
  const t = useCustomTranslations();

  const nodes: Node[] = [];
  const edges: Edge[] = [];

  const getNodeLabel = (node: FactoryLine) => {
    return `<b>${t(TF.SATISFACTORY_RECIPES, node.recipe.recipeName)}</b>\n${node.buildingNumber}x ${t(TF.SATISFACTORY_BUILDING, node.recipe.craftBuildings)} ${t(TF.COMMON, "at")} ${node.overclocking}%\n${roundNumber(node.powerRequired * node.buildingNumber, 1)} Mw | ${roundNumber(node.energyRequired, 1)} Mj ${t(TF.COMMON, "energyPerItem")}`;
  };

  if (factoryLine) {
    const pusher = (nodeElement: FactoryLine) => {
      nodes.push({
        id: nodeElement.id,
        label: getNodeLabel(nodeElement),
      });
      if (nodeElement.parents.length) {
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
            label: `${t(TF.SATISFACTORY_ITEMS, commonItems[0].itemName)}\n${roundNumber(parent?.quantityPerMinute ?? 0, 2)} / min `,
          });
          pusher(parent);
        });
      } else {
        nodeElement.recipe.itemsIn.forEach((itemIn) => {
          const rawResourcePerMinute =
            (itemIn.quantityPerCycle * nodeElement.quantityPerMinute) /
            nodeElement.recipe.itemsOut[0].quantityPerCycle;
          const getRawResourceLabel = (bold: boolean) => {
            const firstPart = t(TF.SATISFACTORY_ITEMS, itemIn.itemName);
            const secondPart = `${roundNumber(rawResourcePerMinute, 2)} / min`;
            return bold
              ? `<b>${firstPart}</b>\n${secondPart}`
              : `${firstPart}\n${secondPart}`;
          };

          const itemInId = crypto.randomUUID();
          nodes.push({
            id: itemInId,
            label: getRawResourceLabel(true),
            color: theme.colorAccentLight,
            margin: {
              bottom: stringRemoveEndPxHelper(theme.spaceM),
              left: stringRemoveEndPxHelper(theme.spaceXL),
              right: stringRemoveEndPxHelper(theme.spaceXL),
              top: stringRemoveEndPxHelper(theme.spaceM),
            },
          });
          edges.push({
            from: itemInId,
            to: nodeElement.id,
            label: getRawResourceLabel(false),
          });
        });
      }
    };

    pusher(factoryLine);
  }

  return { nodes, edges };
};
