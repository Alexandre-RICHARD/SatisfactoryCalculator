import { stringSearcher } from "@nexus/nexusExporter";
import React from "react";
import { useShallow } from "zustand/react/shallow";

import { recipes } from "../../../dictionnaries/recipes.dictionnary";
import { TranslationsFilesEnum } from "../../../enums/translationsFiles.enum";
import { useCombinedStore } from "../../../store/combined.store";
import { Recipe } from "../../components/Recipe";
import { useCustomTranslations } from "../../hooks/useCustomTranslations";
import styles from "./styles.module.scss";

export const RecipesList = (): React.JSX.Element => {
  const t = useCustomTranslations();
  // const doubleOutputRecipes = recipes
  //   .filter((recipe) => {
  //     return recipe.itemsOut.length >= 2;
  //   })
  //   .sort((a, b) =>
  //     a.itemsOut[1].itemName.localeCompare(b.itemsOut[1].itemName),
  //   )
  //   .sort((a, b) =>
  //     a.itemsOut[0].itemName.localeCompare(b.itemsOut[0].itemName),
  //   );
  const [
    minuteCalculation,
    setMinuteCalculation,
    overclocking,
    setOverclocking,
    nameFilter,
    setNameFilter,
  ] = useCombinedStore(
    useShallow((state) => [
      state.minuteCalculation,
      state.setMinuteCalculation,
      state.overclocking,
      state.setOverclocking,
      state.nameFilter,
      state.setNameFilter,
    ]),
  );

  return (
    <>
      <div className={styles.input_container}>
        <label htmlFor="checkbox_minutes">
          Minutes or not
          <input
            className={styles.checkbox_minutes}
            id="checkbox_minutes"
            checked={minuteCalculation}
            onChange={() => setMinuteCalculation(!minuteCalculation)}
            type="checkbox"
          />
        </label>
        <label
          htmlFor="range_overclocking"
          className={styles.range_overclocking}
        >
          Overclocking
          <div className={styles.range_container}>
            <input
              className={styles.range_overclocking_input}
              id="range_overclocking"
              type="range"
              max={250}
              min={1}
              step={1}
              value={overclocking}
              onChange={(event) =>
                setOverclocking(parseInt(event.currentTarget.value, 10))
              }
            />
            <p className={styles.range_overclocking_value}>{overclocking} %</p>
          </div>
        </label>
        <label
          htmlFor="list_name_filter"
          className={styles.list_name_filter}
        >
          Filtre par nom
          <input
            className={styles.list_name_filter_input}
            id="list_name_filter"
            type="text"
            value={nameFilter}
            onChange={(event) => setNameFilter(event.currentTarget.value)}
          />
        </label>
      </div>
      <div className={styles.recipes}>
        {recipes
          .filter((recipe) =>
            stringSearcher({
              searchString: nameFilter,
              value: `${recipe.recipeName} ${t(TranslationsFilesEnum.SATISFACTORY_RECIPES, recipe.recipeName)}`,
            }),
          )
          .map((recipe) => (
            <Recipe
              key={recipe.recipeName}
              recipe={recipe}
            />
          ))}
      </div>
    </>
  );
};
