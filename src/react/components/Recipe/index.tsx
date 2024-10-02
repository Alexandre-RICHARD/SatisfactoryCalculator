import React from "react";

import { ImageHelper } from "../../../../nexus/src/nexusExporter";
import type { RecipesType } from "../../../types/satisfactory/items";
import styles from "./styles.module.scss";

type PropsType = {
  recipe: RecipesType;
};

export const Recipe = ({ recipe }: PropsType): React.JSX.Element => {
  return (
    <div
      key={recipe.recipeName}
      className={styles.one_recipe}
    >
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
              <p>{resourceIn.quantityPerCycle}</p>
            </div>
          );
        })}
      </div>
      <div>
        <p>{recipe.craftBuildings}</p>
        <p>{recipe.initCycleDuration}</p>
      </div>
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
              <p>{resourceOut.quantityPerCycle}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
