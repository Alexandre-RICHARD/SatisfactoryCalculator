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
  const [minuteCalculation, setMinuteCalculation] = useCombinedStore(
    useShallow((state) => [
      state.minuteCalculation,
      state.setMinuteCalculation,
    ]),
  );

  return (
    <>
      <label
        style={{ color: "white" }}
        htmlFor="checkbox_minutes"
      >
        Minutes or not
        <input
          id="checkbox_minutes"
          checked={minuteCalculation}
          onChange={() => setMinuteCalculation(!minuteCalculation)}
          style={{ appearance: "checkbox", marginInline: "12px" }}
          type="checkbox"
        />
      </label>
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
