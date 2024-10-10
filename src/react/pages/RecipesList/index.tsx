import React from "react";
import { useShallow } from "zustand/react/shallow";

import { recipes } from "../../../dictionnaries/recipes.dictionnary";
import { useCombinedStore } from "../../../store/combined.store";
import { Recipe } from "../../components/Recipe";
import styles from "./styles.module.scss";

export const RecipesList = (): React.JSX.Element => {
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
  ] = useCombinedStore(
    useShallow((state) => [
      state.minuteCalculation,
      state.setMinuteCalculation,
      state.overclocking,
      state.setOverclocking,
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
            <p>{overclocking} %</p>
          </div>
        </label>
      </div>
      <div className={styles.recipes}>
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipeName}
            recipe={recipe}
          />
        ))}
      </div>
    </>
  );
};
