import { roundNumber } from "@nexus/nexusExporter";

import { items } from "../dictionnaries/items.dictionnary";
import { recipes } from "../dictionnaries/recipes.dictionnary";
import type { FactoryLine } from "../types/satisfactory/factoryLine";
import type { SelectedFactoryLineData } from "../types/satisfactory/selectedFactoryLineData";
import { itemPerMinute } from "./itemPerMinute.helper";
import { powerCalculation } from "./powerCalculation.helper";

type Args = {
  currentRecipe: SelectedFactoryLineData;
};

export const factoryLineStepCalculator = ({
  currentRecipe,
}: Args): FactoryLine => {
  const recipe = recipes.find(
    (it) => it.recipeName === currentRecipe?.selectedRecipeName,
  )!;

  const item = recipe.itemsOut.find(
    (it) => it.itemName === currentRecipe?.selectedItemName,
  )!;

  const quantityPerMinute =
    currentRecipe?.itemPerMinute ?? item.quantityPerCycle;
  const initialQuantityPerMinute = itemPerMinute({
    cycleDuration: recipe.initCycleDuration,
    cycleItemCount: item.quantityPerCycle,
  });
  const buildingNumber = Math.ceil(
    quantityPerMinute / initialQuantityPerMinute,
  );
  const overclocking = roundNumber(
    (currentRecipe.itemPerMinute! /
      (buildingNumber * initialQuantityPerMinute)) *
      100,
    2,
    "ceil",
  );

  const { requiredEnergy, requiredPower } = powerCalculation({
    recipe,
    overclocking,
  });

  const isStartingStep = !!items[item.itemName].isRaw;

  const parents = isStartingStep
    ? []
    : recipe.itemsIn
        .filter((itemIn) => !items[itemIn.itemName].isRaw)
        .map((itemIn) => {
          const itemInRecipe = recipes.find((it) => {
            return (
              !it.isAlternate &&
              it.itemsOut.some(
                (itemOut) => itemOut.itemName === itemIn.itemName,
              )
            );
          });
          return factoryLineStepCalculator({
            currentRecipe: {
              itemPerMinute:
                itemIn.quantityPerCycle *
                (quantityPerMinute / initialQuantityPerMinute),
              selectedItemName: itemIn.itemName,
              selectedRecipeName: itemInRecipe?.recipeName,
            },
          });
        });

  return {
    recipe,
    quantityPerMinute,
    buildingNumber,
    overclocking,
    powerRequired: requiredPower,
    energyRequired: requiredEnergy,
    isStartingStep,
    parents,
  };
};
