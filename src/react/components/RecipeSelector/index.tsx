import { Selector } from "@nexus/src/nexusExporter";
import React from "react";
import { useShallow } from "zustand/react/shallow";

import { recipes } from "../../../dictionnaries/recipes.dictionnary";
import { ItemsEnum } from "../../../enums/items.enum";
import { TranslationsFilesEnum } from "../../../enums/translationsFiles.enum";
import { useCombinedStore } from "../../../store/combined.store";
import { useCustomTranslations } from "../../hooks/useCustomTranslations";
import styles from "./styles.module.scss";

export const RecipeSelector = (): React.JSX.Element => {
  const t = useCustomTranslations();
  const [selectedFactoryLineData, setSelectedFactoryLineData] =
    useCombinedStore(
      useShallow((state) => [
        state.selectedFactoryLineData,
        state.setSelectedFactoryLineData,
      ]),
    );

  const ItemsThatCanBeCrafted = Object.values(ItemsEnum).filter((item) => {
    return recipes.some((recipe) =>
      recipe.itemsOut.some((itemOut) => itemOut.itemName === item),
    );
  });

  const recipeThatCanBeDoWithItemInOutput = recipes.filter((recipe) =>
    recipe.itemsOut.some(
      (itemOut) =>
        itemOut.itemName === selectedFactoryLineData?.selectedItemName,
    ),
  );

  return (
    <div className={styles.recipe_calculator_container}>
      <Selector
        id="satisfactory-calculator-resources-selector"
        position="bottom-right"
        label={
          selectedFactoryLineData?.selectedItemName
            ? t(
                TranslationsFilesEnum.SATISFACTORY_ITEMS,
                selectedFactoryLineData?.selectedItemName,
              )
            : "Selectionnes ta ressource"
        }
        selectedItem={selectedFactoryLineData?.selectedItemName}
        items={ItemsThatCanBeCrafted.map((item) => ({
          label: t(TranslationsFilesEnum.SATISFACTORY_ITEMS, item),
          search: t(TranslationsFilesEnum.SATISFACTORY_ITEMS, item),
          value: item,
        }))}
        onSelect={(newValue) => {
          setSelectedFactoryLineData({
            selectedItemName: newValue,
          });
        }}
        search={{
          isHandlingCustomSearch: false,
          strictMode: false,
        }}
      />
      {selectedFactoryLineData?.selectedItemName ? (
        <Selector
          id="satisfactory-calculator-recipe-selector"
          position="bottom-right"
          label={
            selectedFactoryLineData?.selectedRecipeName
              ? t(
                  TranslationsFilesEnum.SATISFACTORY_RECIPES,
                  selectedFactoryLineData?.selectedRecipeName,
                )
              : "Selectionnes la recette"
          }
          selectedItem={
            selectedFactoryLineData?.selectedRecipeName ?? undefined
          }
          items={recipeThatCanBeDoWithItemInOutput.map((recipe) => ({
            label: t(
              TranslationsFilesEnum.SATISFACTORY_RECIPES,
              recipe.recipeName,
            ),
            search: t(
              TranslationsFilesEnum.SATISFACTORY_RECIPES,
              recipe.recipeName,
            ),
            value: recipe.recipeName,
          }))}
          onSelect={(newValue) =>
            setSelectedFactoryLineData({
              selectedItemName: selectedFactoryLineData.selectedItemName,
              selectedRecipeName: newValue,
              itemPerMinute: 10,
            })
          }
        />
      ) : null}
      {selectedFactoryLineData?.selectedRecipeName ? (
        <input
          id="item_minute_input"
          className={styles.item_minute_input}
          type="number"
          min={0}
          value={selectedFactoryLineData?.itemPerMinute ?? 0}
          onChange={(event) =>
            setSelectedFactoryLineData({
              ...selectedFactoryLineData,
              itemPerMinute: parseFloat(event.currentTarget.value || "0"),
            })
          }
        />
      ) : null}
    </div>
  );
};
