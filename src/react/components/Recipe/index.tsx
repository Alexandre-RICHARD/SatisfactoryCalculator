import React from "react";

import {
  IconContainer,
  IconTokenEnum,
  ImageHelper,
} from "../../../../nexus/src/nexusExporter";
import type { RecipesType } from "../../../types/satisfactory/items";
import styles from "./styles.module.scss";

type PropsType = {
  recipe: RecipesType;
};

export const Recipe = ({ recipe }: PropsType): React.JSX.Element => {
  return (
    <div
      key={recipe.recipeName}
      className={styles.one_recipe_container}
    >
      <p className={styles.recipe_title}>
        {recipe.recipeName}
        {recipe.duplicate && (
          <span className={styles.duplicated_recipe}>Duplicate</span>
        )}
      </p>
      <div className={styles.one_recipe}>
        <div className={styles.resource_group}>
          {recipe.itemsIn.map((resourceIn) => {
            return (
              <div
                key={resourceIn.itemName}
                className={styles.resource_in_out}
              >
                <img
                  className={styles.resource_icon}
                  alt={`Icon of ${resourceIn.itemName} satisfactory resource`}
                  src={ImageHelper.dynamicImageImporter(
                    `satisfactoryIcons/${resourceIn.itemName}.png`,
                  )}
                />
                <p className={styles.resource_count}>
                  {resourceIn.quantityPerCycle}
                </p>
              </div>
            );
          })}
        </div>
        <IconContainer
          iconToken={IconTokenEnum.TriangleArrow}
          size="20"
        />
        <div className={styles.resource_group}>
          {recipe.itemsOut.map((resourceOut) => {
            return (
              <div
                key={resourceOut.itemName}
                className={styles.resource_in_out}
              >
                <img
                  className={styles.resource_icon}
                  alt={`Icon of ${resourceOut.itemName} satisfactory resource`}
                  src={ImageHelper.dynamicImageImporter(
                    `satisfactoryIcons/${resourceOut.itemName}.png`,
                  )}
                />
                <p className={styles.resource_count}>
                  {resourceOut.quantityPerCycle}
                </p>
              </div>
            );
          })}
        </div>
        <div className={styles.recipe_info}>
          <p>{recipe.craftBuildings}</p>
          <p>{recipe.initCycleDuration}</p>
        </div>
      </div>
    </div>
  );
};
