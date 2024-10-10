import { Selector } from "@nexus/src/nexusExporter";
import React, { useState } from "react";

import { recipes } from "../../../dictionnaries/recipes.dictionnary";
import { ItemsEnum } from "../../../enums/items.enum";
import type { RecipesEnum } from "../../../enums/recipes.enum";
import { TranslationsFilesEnum } from "../../../enums/translationsFiles.enum";
import { Recipe } from "../../components/Recipe";
import { useCustomTranslations } from "../../hooks/useCustomTranslations";
import styles from "./styles.module.scss";

export const Graph = (): React.JSX.Element => {
  const t = useCustomTranslations();
  const [resourceSelected, setResourceSelected] = useState<string>();
  const [recipeSelected, setRecipeSelected] = useState<RecipesEnum>();

  const ItemsThatCanBeCrafted = Object.values(ItemsEnum).filter((item) => {
    return recipes.some((recipe) =>
      recipe.itemsOut.some((itemOut) => itemOut.itemName === item),
    );
  });

  const recipeThatCanBeDoWithItemInOutput = recipes.filter((recipe) =>
    recipe.itemsOut.some((itemOut) => itemOut.itemName === resourceSelected),
  );

  return (
    <>
      <div className={styles.recipe_calculator_container}>
        <Selector
          id="satisfactory-calculator-resources-selector"
          position="bottom-right"
          label="Selectionnes ta ressource"
          selectedItem={resourceSelected}
          items={ItemsThatCanBeCrafted.map((item) => ({
            label: t(TranslationsFilesEnum.SATISFACTORY_ITEMS, item),
            search: t(TranslationsFilesEnum.SATISFACTORY_ITEMS, item),
            value: item,
          }))}
          onSelect={setResourceSelected}
          search={{
            isHandlingCustomSearch: false,
            strictMode: false,
          }}
        />
        {resourceSelected ? (
          <Selector
            id="satisfactory-calculator-recipe-selector"
            position="bottom-right"
            label="Selectionnes la recette"
            selectedItem={recipeSelected}
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
            onSelect={setRecipeSelected}
          />
        ) : null}
        {recipeSelected ? (
          <Recipe
            recipe={
              recipes.find((recipe) => recipe.recipeName === recipeSelected)!
            }
          />
        ) : null}
      </div>
      {resourceSelected && (
        <p className={styles.recipe_title}>
          {t(TranslationsFilesEnum.SATISFACTORY_ITEMS, resourceSelected)}
        </p>
      )}
    </>
  );
};
