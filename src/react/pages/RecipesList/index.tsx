import React from "react";

import { recipes } from "../../../dictionnaries/recipes.dictionnary";
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

  return (
    <div className={styles.recipes}>
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.recipeName}
          recipe={recipe}
        />
      ))}
    </div>
  );
};
