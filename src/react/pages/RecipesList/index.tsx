import React from "react";

import { recipes } from "../../../dictionnaries/recipes.dictionnary";
import { Recipe } from "../../components/Recipe";
import styles from "./styles.module.scss";

export const RecipesList = (): React.JSX.Element => {
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
